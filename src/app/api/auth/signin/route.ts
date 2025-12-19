import { NextResponse } from "next/server";

export async function POST() {
  const user = {
    id: "1",
    name: "Umair",
    email: "umair@example.com",
  };
  const response = NextResponse.json(user, { status: 200 });

  response.cookies.set("auth", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return response;
}
