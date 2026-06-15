import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

// ── In-memory rate limiter (per IP, resets on redeploy) ──
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5; // max signatures per window
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

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // Rate limit check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot check — if this hidden field is filled, it's a bot
    if (body.website && body.website.trim() !== "") {
      // Silently accept to not tip off the bot, but don't save
      return NextResponse.json({ success: true });
    }

    // Server-side validation
    const firstName = String(body.first_name || "").trim().slice(0, 100);
    const lastName = String(body.last_name || "").trim().slice(0, 100);
    const email = String(body.email || "").trim().toLowerCase().slice(0, 254);
    const zipCode = String(body.zip_code || "").trim().slice(0, 10);
    const streetAddress = String(body.street_address || "").trim().slice(0, 200) || null;
    const phone = String(body.phone || "").trim().slice(0, 20) || null;
    const comment = String(body.comment || "").trim().slice(0, 2000) || null;
    const commentPublic = Boolean(body.comment_public);
    const commentAnonymous = Boolean(body.comment_anonymous);
    const optInContact = Boolean(body.opt_in_contact);
    const canHelp = Boolean(body.can_help);

    if (!firstName) {
      return NextResponse.json({ error: "First name is required" }, { status: 400 });
    }
    if (!lastName) {
      return NextResponse.json({ error: "Last name is required" }, { status: 400 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }
    if (!zipCode || !/^\d{5}(-\d{4})?$/.test(zipCode)) {
      return NextResponse.json({ error: "Valid zip code is required" }, { status: 400 });
    }

    const { error } = await supabaseAdmin.from("plny_signatures").insert({
      first_name: firstName,
      last_name: lastName,
      email,
      zip_code: zipCode,
      street_address: streetAddress,
      phone,
      comment,
      comment_public: commentPublic,
      comment_anonymous: commentAnonymous,
      opt_in_contact: optInContact,
      can_help: canHelp,
    });

    if (error) {
      console.error("Petition insert error:", error);
      return NextResponse.json({ error: "Failed to save signature" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Sign petition error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
