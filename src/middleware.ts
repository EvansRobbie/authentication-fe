import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublic = path === "/login" || path === "/register";
  const token = req.cookies.get("next-auth.session-token")?.value || "";
  if (isPublic && token) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
  if (!isPublic && !token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/me", "/login", "/register"],
};
