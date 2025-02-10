"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
        </div>
    );
}

export default Navigation;
