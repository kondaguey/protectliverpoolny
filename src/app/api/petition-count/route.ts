import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET() {
  try {
    const { count, error } = await supabaseAdmin
      .from("plny_signatures")
      .select("id", { count: "exact", head: true });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ count: count || 0 });
  } catch {
    return NextResponse.json({ error: "Failed to fetch count" }, { status: 500 });
  }
}
