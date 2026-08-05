import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");
  const supabase = await createClient();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sb = supabase as any;

  if (username) {
    const { data, error } = await sb.from("profiles").select("*, startups(id, name, slug, logo_emoji, category, access_type, upvote_count, created_at)").eq("username", username).single();
    if (error) return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    return NextResponse.json({ profile: data });
  }

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data, error } = await sb.from("profiles").select("*").eq("id", user.id).single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ profile: data });
}

export async function PATCH(request: Request) {
  const supabase = await createClient();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sb = supabase as any;

  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const allowed = ["full_name","bio","website","twitter_handle","location","avatar_url"];
  const updates: Record<string, string> = {};
  for (const key of allowed) { if (key in body) updates[key] = body[key]; }

  const { data, error } = await sb.from("profiles").update(updates).eq("id", user.id).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ profile: data });
}
