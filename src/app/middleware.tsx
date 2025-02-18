import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ** This is just an exmaple the url/path haven't benn implemented yet**

// import (normal import): Imports the actual module for runtime use.
// import type (type-only import): Only imports TypeScript types, which are removed during compilation for performance optimization.

// Middleware to block all requests to /api/*
export function middleware(req: NextRequest) {
    const isAuthenticated = false 
    // Only allow requests from authenticated users
    if (!isAuthenticated) {
        return NextResponse.redirect("/login");
    }
    // Block all requests to /api/*
    if (req.nextUrl.pathname.startsWith("/api")) {
        return new NextResponse("Forbidden", { status: 403 });
    }
    return NextResponse.next();
}

export const config = {
    matcher: "/api/:path*",
};
