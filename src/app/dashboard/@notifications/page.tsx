"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
function Notification() {
    const pathname =usePathname()
  return (
    <div className='bg-blue-700  p-12 text-2xl m-3'>
        Notification
        <p className={'text-xl bg-amber-600'}>(@notification/page.tsx)</p>

        <br className='p-3 m-3'/>
        <Link href={"/dashboard/archive"} className={pathname.startsWith("/dashboard/archive/") ? "mr-4 text-blue-500 text-lg" : "mr-4 text-red-500 text-lg"}>move to archive page</Link>
    </div>
  )
}

export default Notification