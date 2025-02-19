"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
function Notification() {
    const pathname =usePathname()
  return (
    <div className='bg-blue-700  p-20 text-3xl m-3'>
        Notification
        <br className='p-3 m-3'/>
        <Link href={"/dashboard/archive"} className={pathname.startsWith("/dashboard/archive/") ? "mr-4 text-blue-500 text-3" : "mr-4 text-red-500 text-3"}>move to archive page</Link>
    </div>
  )
}

export default Notification