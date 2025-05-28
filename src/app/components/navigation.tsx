"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignInButton,UserButton, SignedOut, SignIn } from '@clerk/nextjs';

const Navigation = () => {
    const pathname = usePathname();

    return (
        <div className={'flex flex-row flex-wrap mr-2 ml-2'} >
            <Link href='/' className={pathname === "/" ? "mr-4 text-blue-500" : "mr-4 text-red-500"}>
                Home
            </Link>
            <Link href='/about' className={pathname === "/about" ? "mr-4 text-blue-500" : "mr-4 text-red-500"}>
                About
            </Link>
            <Link href='/revenue' className={pathname === "/revenue" ? "mr-4 text-blue-500" : "mr-4 text-red-500"}>
                Revenue
            </Link>
            <Link href='/docs' className={pathname === "/docs" ? "mr-4 text-blue-500" : "mr-4 text-red-500"}>
                docs
            </Link>
            <Link href='/modal' className={pathname === "/modal" ? "mr-4 text-blue-500" : "mr-4 text-red-500"}>
                Modal
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
            <Link href='/dashboard-mini'  className={pathname.startsWith("/dashboard") ? "mr-4 text-blue-500" : "mr-4 text-red-500"}>
                Dashboard-mini
            </Link>
            <Link href='/templateTest'  className={pathname.startsWith("/templateTest") ? "mr-4 text-blue-500" : "mr-4 text-red-500"}>
                Template
            </Link>
            <Link href='/intercepted'  className={pathname.startsWith("/f1") ? "mr-4 text-blue-500" : "mr-4 text-red-500"}>
                Intercepted
            </Link>
            <Link href='/form'  className={pathname.startsWith("/form") ? "mr-4 text-blue-500" : "mr-4 text-red-500"}>
                Form
            </Link>
            <Link href='/form/formDb'  className={pathname.startsWith("/form/formDb") ? "mr-4 text-blue-500" : "mr-4 text-red-500"}>
                FormDb
            </Link>
            <Link href='/frames'  className={pathname.startsWith("/frames") ? "mr-4 text-blue-500" : "mr-4 text-red-500"}>
                Frames
            </Link>
            
            
        </div>
    );
}

export default Navigation;
