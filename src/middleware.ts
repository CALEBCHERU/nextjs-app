
// this middleware protects majorly api routes form unauthorize access but it can still protect other routes
// the are two middleware in this file one is uncommented and commented

// First middleware
/*import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// C:\Users\khale\Documents\projects\nextjs-app\src\app\middleware.tsx
// ** This is just an exmaple the url/path haven't benn implemented yet**

// import (normal import): Imports the actual module for runtime use.
// import type (type-only import): Only imports TypeScript types, which are removed during compilation for performance optimization.


export function middleware(req: NextRequest) {
    const token = req.cookies.get("access_token")?.value;

    if (!token) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/api/:path*",
};*/

// SECOND MIDDLEwARE
import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";

const  isProtected = createRouteMatcher(["/protected"])

// Middleware for Clerk authentication
export default clerkMiddleware(async(auth,req) => {
    if (isProtected(req)) await auth.protect();
});



export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
