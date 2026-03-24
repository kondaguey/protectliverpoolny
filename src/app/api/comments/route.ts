import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Math.min(Math.max(parseInt(searchParams.get("page") || "1", 10) || 1, 1), 1000);
  const limit = Math.min(Math.max(parseInt(searchParams.get("limit") || "20", 10) || 20, 1), 50);
  const offset = (page - 1) * limit;

  try {
    // Get comments with content, ordered by newest first
    const { data, error, count } = await supabase
      .from("plny_signatures")
      .select("first_name, last_name, comment, created_at, zip_code, comment_anonymous", {
        count: "exact",
      })
      .not("comment", "is", null)
      .neq("comment", "")
      .eq("comment_public", true)
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Sanitize: show first name + last initial only
    const comments = (data || []).map((row) => ({
      name: row.comment_anonymous
        ? "Anonymous"
        : `${row.first_name} ${row.last_name?.charAt(0) || ""}.`,
      comment: row.comment,
      zip: row.comment_anonymous ? null : row.zip_code,
      date: row.created_at,
    }));

    return NextResponse.json({
      comments,
      total: count || 0,
      page,
      totalPages: Math.ceil((count || 0) / limit),
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}
