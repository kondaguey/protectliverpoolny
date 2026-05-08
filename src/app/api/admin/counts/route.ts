import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  // Admin auth check
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { count: allCount } = await supabaseAdmin
      .from("plny_signatures")
      .select("id", { count: "exact", head: true });

    const { count: optedInCount } = await supabaseAdmin
      .from("plny_signatures")
      .select("id", { count: "exact", head: true })
      .eq("opt_in_contact", true);

    return NextResponse.json({
      all: allCount || 0,
      optedIn: optedInCount || 0,
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch counts" }, { status: 500 });
  }
}
