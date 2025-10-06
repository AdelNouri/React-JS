import { NextResponse } from "next/server";

export function middleware(request) {
    // return NextResponse.redirect(new URL("/quiz", request.url));
    // return NextResponse.rewrite(new URL("/under-construction", request.url));
    if (request.nextUrl.pathname.startsWith("/about")) {
        return NextResponse.redirect(new URL("/quiz", request.url));
    }
}

// export const config = {
//     matcher: "/about/:path*",
// };

// export const config = {
//     matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
// };