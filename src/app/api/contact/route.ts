import { NextResponse } from "next/server";

/**
 * Minimal contact endpoint. Validates the payload and returns success.
 * Wire this up to an email provider or database as needed for production.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: forward to email service / CRM / database.
    console.log("New contact inquiry:", { name, email });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
