import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const access   = searchParams.get("access");
  const sort     = searchParams.get("sort") ?? "newest";
  const search   = searchParams.get("q");
  const page     = parseInt(searchParams.get("page") ?? "1");
  const limit    = parseInt(searchParams.get("limit") ?? "20");
  const offset   = (page - 1) * limit;

  const supabase = await createClient();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sb = supabase as any;

  let query = sb
    .from("startups")
    .select("*, profiles!founder_id(username, full_name, avatar_url, verified)", { count:"exact" })
    .eq("status", "approved")
    .range(offset, offset + limit - 1);

  if (category && category !== "All") query = query.eq("category", category);
  if (access)   query = query.eq("access_type", access);
  if (search)   query = query.or(`name.ilike.%${search}%,description.ilike.%${search}%`);

  switch (sort) {
    case "trending":
    case "upvotes":  query = query.order("upvote_count", { ascending:false }); break;
    case "az":       query = query.order("name",         { ascending:true  }); break;
    default:         query = query.order("created_at",   { ascending:false });
  }

  const { data, error, count } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ startups: data, total: count ?? 0, page, limit, hasMore: (count ?? 0) > offset + limit });
}

export async function POST(request: Request) {
  const supabase = await createClient();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sb = supabase as any;

  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const { name, tagline, description, logo_emoji, category, website_url, twitter_url, access_type } = body;
  if (!name || !description || !category) return NextResponse.json({ error: "Required fields missing" }, { status: 400 });

  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const { data, error } = await sb.from("startups").insert({
    slug, name, tagline, description,
    logo_emoji: logo_emoji ?? "🚀",
    category, website_url, twitter_url,
    access_type: access_type ?? "Early access",
    founder_id: user.id, status: "pending",
  }).select().single();

  if (error) {
    if (error.code === "23505") return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ startup: data }, { status: 201 });
}
