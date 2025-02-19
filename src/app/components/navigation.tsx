"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignInButton,UserButton, SignedOut, SignIn } from '@clerk/nextjs';

const Navigation = () => {
    const pathname = usePathname();

    return (
        <div >
            <Link href='/' className={pathname === "/" ? "mr-4 text-blue-500" : "mr-4 text-red-500"}>
                Home
            </Link>
            <Link href='/about' className={pathname === "/about" ? "mr-4 text-blue-500" : "mr-4 text-red-500"}>
                About
            </Link>
            <Link href='/products/1' className={pathname.startsWith("/products/") ? "mr-4 text-blue-500" : "mr-4 text-red-500"}>
                Product
            </Link>
            <Link href='/protected' className={pathname.startsWith("/protected") ? "mr-4 text-blue-500" : "mr-4 text-red-500"}>
                Protected
            </Link>

            {/* <SignedOut> */}
                {/* <SignInButton mode='modal' /> ✅ Added SignInButton component */}
            {/* </SignedOut> */}

            <Link href='/mock-users'  className={pathname.startsWith("/mock-users") ? "mr-4 text-blue-500" : "mr-4 text-red-500"}>
                Mock-users
            </Link>

            <Link href='/dashboard'  className={pathname.startsWith("/dashboard") ? "mr-4 text-blue-500" : "mr-4 text-red-500"}>
                Dashboard
            </Link>
            <Link href='/f1'  className={pathname.startsWith("/f1") ? "mr-4 text-blue-500" : "mr-4 text-red-500"}>
                F1
            </Link>
            <Link href='/form'  className={pathname.startsWith("/form") ? "mr-4 text-blue-500" : "mr-4 text-red-500"}>
                Form
            </Link>
            
            
        </div>
    );
}

export default Navigation;
