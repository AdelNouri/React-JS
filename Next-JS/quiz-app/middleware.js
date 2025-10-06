import { NextResponse } from "next/server";

export function middleware(request) {
    // return NextResponse.redirect(new URL("/quiz", request.url));
    return NextResponse.rewrite(new URL("/under-construction", request.url));
}

// export const config = {
//     matcher: "/about",
// };

export const config = {
    matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
