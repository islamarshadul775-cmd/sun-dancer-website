import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SESSION_COOKIE = "sd_admin_session";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow login page without auth
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Protect admin routes
  if (pathname.startsWith("/admin")) {
    const token = req.cookies.get(SESSION_COOKIE)?.value;
    
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    try {
      const secret = process.env.ADMIN_SESSION_SECRET;
      if (!secret) {
        throw new Error("ADMIN_SESSION_SECRET not set");
      }
      
      await jwtVerify(token, new TextEncoder().encode(secret));
      return NextResponse.next();
    } catch (error) {
      console.error("Auth error:", error);
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
