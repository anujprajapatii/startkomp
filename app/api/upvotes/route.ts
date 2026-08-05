import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const supabase = await createClient();

  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Login required to upvote" }, { status: 401 });
  }

  const { startup_id } = await request.json();
  if (!startup_id) {
    return NextResponse.json({ error: "startup_id required" }, { status: 400 });
  }

  const { data, error } = await (supabase as any).rpc("toggle_upvote", {
    p_startup_id: startup_id,
    p_user_id:    user.id,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
