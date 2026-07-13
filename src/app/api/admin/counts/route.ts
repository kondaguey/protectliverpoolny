import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

// The two petition lists. Physically separate tables — never mixed.
const TABLES = {
  tower: "plny_signatures",
  ebike: "plny_stupidity_signatures",
} as const;

async function tableCounts(table: string) {
  const { count: all } = await supabaseAdmin
    .from(table)
    .select("id", { count: "exact", head: true });

  const { count: optedIn } = await supabaseAdmin
    .from(table)
    .select("id", { count: "exact", head: true })
    .eq("opt_in_contact", true);

  return { all: all || 0, optedIn: optedIn || 0 };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  // Admin auth check
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const [tower, ebike] = await Promise.all([
      tableCounts(TABLES.tower),
      tableCounts(TABLES.ebike),
    ]);

    return NextResponse.json({ tower, ebike });
  } catch {
    return NextResponse.json({ error: "Failed to fetch counts" }, { status: 500 });
  }
}
