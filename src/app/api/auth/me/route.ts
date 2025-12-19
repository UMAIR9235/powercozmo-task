import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("auth");

  if (!authCookie) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  return NextResponse.json({
    user: {
      id: "1",
      name: "Umair",
      email: "umair@example.com",
    },
  });
}
