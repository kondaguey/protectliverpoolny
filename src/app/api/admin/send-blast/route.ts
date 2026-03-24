import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

/** Escape HTML special characters */
function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Build the PLNY-themed email HTML */
function buildEmail(firstName: string, subject: string, bodyHtml: string): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#0a0a0f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">

    <!-- Header -->
    <div style="text-align:center;margin-bottom:32px;">
      <p style="font-size:22px;font-weight:800;margin:0;letter-spacing:-0.5px;">
        <span style="color:#ffffff;">PROTECT</span><span style="color:#ef4444;">LIVERPOOL</span>
      </p>
    </div>

    <!-- Main -->
    <div style="background-color:#141420;border:1px solid #1e1e2e;border-radius:16px;padding:32px 24px;margin-bottom:24px;">
      <h1 style="color:#ffffff;font-size:20px;font-weight:800;margin:0 0 16px;">
        ${esc(subject)}
      </h1>

      <div style="color:#d1d5db;font-size:14px;line-height:1.7;">
        ${bodyHtml.replace(/\{firstName\}/g, esc(firstName))}
      </div>

      <!-- CTA Button -->
      <div style="text-align:center;margin-top:24px;">
        <a href="https://protectliverpoolny.org/take-action" style="display:inline-block;background-color:#dc2626;color:#ffffff;font-weight:700;font-size:14px;padding:14px 32px;border-radius:10px;text-decoration:none;">
          View the Petition →
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align:center;">
      <p style="color:#4b5563;font-size:11px;margin:0 0 8px;">
        ProtectLiverpoolNY.org — A grassroots community initiative.
      </p>
      <p style="color:#374151;font-size:10px;margin:0;">
        You received this because you signed the petition. To have your signature and data permanently removed, reply to this email.
      </p>
    </div>
  </div>
</body>
</html>`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Auth check
    const secret = body.secret;
    if (!secret || secret !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { subject, bodyHtml, audience } = body;

    if (!subject?.trim() || !bodyHtml?.trim()) {
      return NextResponse.json(
        { error: "Subject and body are required" },
        { status: 400 }
      );
    }

    // Fetch signers
    let query = supabase
      .from("plny_signatures")
      .select("first_name, email")
      .order("id", { ascending: true });

    if (audience === "opted-in") {
      query = query.eq("opt_in_contact", true);
    }

    const { data: signers, error: dbError } = await query;

    if (dbError) {
      return NextResponse.json({ error: dbError.message }, { status: 500 });
    }

    if (!signers || signers.length === 0) {
      return NextResponse.json({ error: "No recipients found" }, { status: 404 });
    }

    // Deduplicate by email (lowercase)
    const seen = new Set<string>();
    const uniqueSigners = signers.filter((s) => {
      const email = s.email.toLowerCase();
      if (seen.has(email)) return false;
      seen.add(email);
      return true;
    });

    // Build batch — Resend accepts up to 100 per request
    const batches: Array<typeof uniqueSigners> = [];
    for (let i = 0; i < uniqueSigners.length; i += 100) {
      batches.push(uniqueSigners.slice(i, i + 100));
    }

    let sent = 0;
    let failed = 0;
    const errors: string[] = [];

    for (const batch of batches) {
      const emails = batch.map((signer) => ({
        from: "Protect Liverpool NY <takeaction@protectliverpoolny.org>",
        to: signer.email,
        subject: subject.trim(),
        html: buildEmail(signer.first_name, subject.trim(), bodyHtml),
      }));

      try {
        const { data, error } = await resend.batch.send(emails);
        if (error) {
          errors.push(error.message);
          failed += batch.length;
        } else {
          sent += data?.data?.length || batch.length;
        }
      } catch (err: any) {
        errors.push(err.message || "Batch send failed");
        failed += batch.length;
      }
    }

    return NextResponse.json({
      sent,
      failed,
      total: uniqueSigners.length,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (err: any) {
    console.error("Send blast error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
