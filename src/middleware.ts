import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

type Role = keyof typeof roleBasedPrivateRoutes;

const commonPrivateRoutes = ["/dashboard", "/dashboard/change-password"];
const roleBasedPrivateRoutes = {
  ADMIN: [/^\/dashboard\/admin/],
  USER: [/^\/dashboard\/user/],
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("request url", request.nextUrl);
  const { pathname } = request.nextUrl;
  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (accessToken && commonPrivateRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  let decodedData = null;

  if (accessToken) {
    decodedData = jwtDecode(accessToken) as any;
  }

  const role = decodedData?.role;

  /* if (role === "ADMIN" && pathname.startsWith("/dashboard/admin")) {
    return NextResponse.next();
  }

  if (role === "USER" && pathname.startsWith("/dashboard/user")) {
    return NextResponse.next();
  } */

  if (role && roleBasedPrivateRoutes[role as Role]) {
    const routes = roleBasedPrivateRoutes[role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  console.log(accessToken, "=====================================");
  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:page*",
};
