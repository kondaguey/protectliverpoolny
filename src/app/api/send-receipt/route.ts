import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, zipCode, streetAddress, phone, comment, optInContact, canHelp } = await req.json();

    if (!email || !firstName) {
      return NextResponse.json(
        { error: "Missing required fields" },
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

    const { data, error } = await resend.emails.send({
      from: "Protect Liverpool NY <takeaction@protectliverpoolny.org>",
      to: email,
      subject: "Thank you for standing with Liverpool.",
      html: `
<!DOCTYPE html>
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
        ${firstName}, your signature is recorded.
      </h1>
      <p style="color:#9ca3af;font-size:14px;line-height:1.7;margin:0 0 20px;">
        Thank you for standing with your neighbors against the unauthorized 184-foot cell tower being built in Liverpool, NY. Every signature strengthens our voice.
      </p>

      <!-- Submission Receipt -->
      <div style="background-color:#1a1a2e;border:1px solid #2a2a3e;border-radius:12px;padding:20px;margin-bottom:20px;">
        <p style="color:#ef4444;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin:0 0 12px;">
          Your Submission Receipt
        </p>
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="color:#6b7280;font-size:12px;padding:4px 0;vertical-align:top;width:100px;">Name</td>
            <td style="color:#ffffff;font-size:13px;padding:4px 0;font-weight:600;">${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="color:#6b7280;font-size:12px;padding:4px 0;vertical-align:top;">Email</td>
            <td style="color:#ffffff;font-size:13px;padding:4px 0;font-weight:600;">${email}</td>
          </tr>
          <tr>
            <td style="color:#6b7280;font-size:12px;padding:4px 0;vertical-align:top;">Zip Code</td>
            <td style="color:#ffffff;font-size:13px;padding:4px 0;font-weight:600;">${zipCode}</td>
          </tr>
          ${streetAddress ? `
          <tr>
            <td style="color:#6b7280;font-size:12px;padding:4px 0;vertical-align:top;">Address</td>
            <td style="color:#ffffff;font-size:13px;padding:4px 0;font-weight:600;">${streetAddress}</td>
          </tr>
          ` : ""}
          ${phone ? `
          <tr>
            <td style="color:#6b7280;font-size:12px;padding:4px 0;vertical-align:top;">Phone</td>
            <td style="color:#ffffff;font-size:13px;padding:4px 0;font-weight:600;">${phone}</td>
          </tr>
          ` : ""}
          ${comment ? `
          <tr>
            <td style="color:#6b7280;font-size:12px;padding:4px 0;vertical-align:top;">Comment</td>
            <td style="color:#d1d5db;font-size:13px;padding:4px 0;font-style:italic;">"${comment}"</td>
          </tr>
          ` : ""}
          <tr>
            <td style="color:#6b7280;font-size:12px;padding:4px 0;vertical-align:top;">Contact OK</td>
            <td style="color:#ffffff;font-size:13px;padding:4px 0;font-weight:600;">${optInContact ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td style="color:#6b7280;font-size:12px;padding:4px 0;vertical-align:top;">Can Help</td>
            <td style="color:#ffffff;font-size:13px;padding:4px 0;font-weight:600;">${canHelp ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td style="color:#6b7280;font-size:12px;padding:4px 0;vertical-align:top;">Submitted</td>
            <td style="color:#ffffff;font-size:13px;padding:4px 0;font-weight:600;">${submittedAt} ET</td>
          </tr>
        </table>
      </div>

      <p style="color:#6b7280;font-size:11px;line-height:1.6;margin:0 0 20px;border-left:3px solid #374151;padding-left:12px;">
        This is your personal copy of exactly what was submitted. We cannot alter this receipt after it's sent. If you ever need to verify your signature, this email is your proof.
      </p>

      <div style="background-color:#1a1a2e;border:1px solid #2a2a3e;border-radius:12px;padding:20px;margin-bottom:20px;">
        <p style="color:#ef4444;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin:0 0 8px;">
          What Happens Next
        </p>
        <ul style="color:#d1d5db;font-size:13px;line-height:2;margin:0;padding-left:18px;">
          <li>Your name will be included in petitions presented to the <strong style="color:#fff;">Town of Salina Board</strong></li>
          <li>We'll deliver signatures to <strong style="color:#fff;">Onondaga County</strong> and <strong style="color:#fff;">state representatives</strong></li>
          <li>Your email will <strong style="color:#fff;">never</strong> be shared publicly or sold</li>
        </ul>
      </div>

      <!-- CTA Button -->
      <div style="text-align:center;margin-bottom:24px;">
        <a href="https://protectliverpoolny.org/take-action" style="display:inline-block;background-color:#dc2626;color:#ffffff;font-weight:700;font-size:14px;padding:14px 32px;border-radius:10px;text-decoration:none;">
          Call Your Reps &amp; Share the Site →
        </a>
      </div>

      <div style="border-top:1px solid #2a2a3e;padding-top:16px;">
        <p style="color:#6b7280;font-size:12px;line-height:1.8;margin:0;">
          <strong style="color:#9ca3af;">3 things you can do right now:</strong><br/>
          1. Share <a href="https://protectliverpoolny.org" style="color:#ef4444;text-decoration:underline;">protectliverpoolny.org</a> with your neighbors<br/>
          2. Call the Salina Town Supervisor at (315) 457-6661<br/>
          3. Show up to the next Town Board meeting
        </p>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align:center;">
      <p style="color:#4b5563;font-size:11px;margin:0 0 8px;">
        ProtectLiverpoolNY.org — A grassroots community initiative.
      </p>
      <p style="color:#374151;font-size:10px;margin:0;">
        You received this because you signed the petition. We will never spam you.
      </p>
    </div>
  </div>
</body>
</html>
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: any) {
    console.error("Send receipt error:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
