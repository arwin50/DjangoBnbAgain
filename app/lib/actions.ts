"use server";

import { cookies } from "next/headers";

export async function handleLogin(
  userId: string,
  accessToken: string,
  refreshToken: string
) {
  (await cookies()).set("session_userid", userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
  (await cookies()).set("session_access_token", userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60,
    path: "/",
  });
  (await cookies()).set("session_refresh_token", userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}
