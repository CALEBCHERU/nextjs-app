import Link from 'next/link'
import React from 'react'

export default function Settings() {
  return (
    <div className='text-2xl text-emerald-800'>this Settings page inside the @team folder.
    <br />
    <p className='font-bold'>try to do a hard reload .some default pages shall appear</p>
    <Link href={'../dashboard-mini'} className='hover:bg-[#383838]'>go back to the mini-darshboard</Link>
    </div>

  )
}
