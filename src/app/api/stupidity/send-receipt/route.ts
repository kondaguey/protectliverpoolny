import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// ── In-memory rate limiter (per IP, resets on redeploy) ──
// This is a public endpoint that sends email; without a limiter it's a
// free spam cannon pointed at anyone's inbox on our domain reputation.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5; // max receipts per window
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

/** Escape HTML special characters to prevent XSS */
function esc(str: string | null | undefined): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Sanitize + enforce length limits
    const firstName = esc(String(body.firstName || "").slice(0, 100));
    const lastName = esc(String(body.lastName || "").slice(0, 100));
    const email = String(body.email || "").slice(0, 254).trim().toLowerCase();
    const zipCode = esc(String(body.zipCode || "").slice(0, 10));
    const comment = esc(String(body.comment || "").slice(0, 2000));
    const optInContact = Boolean(body.optInContact);
    const canHelp = Boolean(body.canHelp);

    if (!email || !firstName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Server-side email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    // Segment e-bike signers into their OWN Resend audience — never the
    // tower list. Contact add is best-effort; the receipt still sends.
    const audienceId = process.env.RESEND_STUPIDITY_AUDIENCE_ID;
    if (audienceId) {
      try {
        await resend.contacts.create({
          email,
          firstName: String(body.firstName || "").slice(0, 100),
          lastName: String(body.lastName || "").slice(0, 100),
          unsubscribed: !optInContact,
          audienceId,
        });
      } catch (contactErr) {
        console.error("Stupidity audience contact add failed:", contactErr);
      }
    }

    const { data, error } = await resend.emails.send({
      from: "Protect Liverpool NY <takeaction@protectliverpoolny.org>",
      to: email,
      subject: "You're on the record. Our streets aren't a racetrack.",
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">

    <!-- Header -->
    <div style="text-align:center;margin-bottom:32px;">
      <p style="font-size:22px;font-weight:800;margin:0;letter-spacing:-0.5px;">
        <span style="color:#ffffff;">PROTECT</span><span style="color:#ef4444;">LIVERPOOL</span>
      </p>
      <p style="font-size:11px;font-weight:800;letter-spacing:2px;color:#ef4444;margin:8px 0 0;text-transform:uppercase;">The Stupidity — E-Bike Petition</p>
    </div>

    <!-- Main -->
    <div style="background-color:#131313;border:1px solid #2c2c2c;border-radius:16px;padding:32px 24px;margin-bottom:24px;">
      <h1 style="color:#f7f5ef;font-size:22px;margin:0 0 12px;">Signed. You're on the record, ${firstName}.</h1>
      <p style="color:#c7c3b8;font-size:15px;line-height:1.6;margin:0 0 16px;">
        Your signature joins the neighborhood's formal demand on the illegal e-bike and
        e-motorcycle riding tearing through Liverpool's streets, parks, and sidewalks:
        enforce the laws that already exist, impound the illegal machines, hold the
        parents accountable, and put an enforcement protocol in writing so
        &ldquo;we can't&rdquo; is never the final answer again.
      </p>
      <p style="color:#c7c3b8;font-size:15px;line-height:1.6;margin:0 0 16px;">
        This petition goes to the Village of Liverpool, the Town of Salina, the Onondaga
        County Sheriff's Office, the County Legislature, and our state representatives.
        Your name and zip code become part of that formal record.
      </p>

      <div style="background-color:#1c1c1c;border:1px solid #2c2c2c;border-radius:10px;padding:16px;margin:0 0 16px;">
        <p style="color:#8a867c;font-size:12px;margin:0 0 8px;text-transform:uppercase;letter-spacing:1px;font-weight:700;">Your signature</p>
        <p style="color:#f2f0ea;font-size:14px;line-height:1.7;margin:0;">
          ${firstName} ${lastName}<br/>
          Zip: ${zipCode}<br/>
          ${comment ? `Comment: &ldquo;${comment}&rdquo;<br/>` : ""}
          ${canHelp ? "Offered expertise to help the cause<br/>" : ""}
          Signed: ${submittedAt} (ET)
        </p>
      </div>

      <p style="color:#c7c3b8;font-size:15px;line-height:1.6;margin:0 0 8px;">
        <strong style="color:#f7f5ef;">The single most useful thing you can do next:</strong>
        send this page to one neighbor who hasn't seen it yet.
      </p>
      <p style="text-align:center;margin:20px 0 4px;">
        <a href="https://protectliverpoolny.org/stupidity" style="display:inline-block;background-color:#dc2626;color:#ffffff;font-weight:800;font-size:14px;text-decoration:none;padding:12px 28px;border-radius:10px;text-transform:uppercase;letter-spacing:1px;">protectliverpoolny.org/stupidity</a>
      </p>
    </div>

    <!-- Footer -->
    <p style="color:#6b675e;font-size:12px;line-height:1.6;text-align:center;margin:0;">
      ${optInContact
        ? "You opted in to campaign updates, so we'll keep you posted on this fight."
        : "You did not opt in to regular updates, so we will only email you for critical alerts: serious incidents, board votes, or material changes to the formal demands."}
      <br/><br/>
      To revoke your signature before formal submission, email
      <a href="mailto:takeaction@protectliverpoolny.org" style="color:#ef4444;">takeaction@protectliverpoolny.org</a>.
      <br/>
      Protect Liverpool NY &middot; Liverpool, New York
    </p>
  </div>
</body>
</html>`,
    });

    if (error) {
      console.error("Stupidity receipt send error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: any) {
    console.error("Stupidity send-receipt error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
