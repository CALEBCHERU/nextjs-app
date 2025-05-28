import Link from 'next/link'
import React from 'react'

export default function Team() {
  return (
    <div className='text-blue-800 font-bold bg-pink-500 text-2xl '>this is Team page <br />
    <Link href={'/dashboard-mini/settings'} className='hover:bg-green-600'> Got to the  settings page</Link>
    </div>
  )
}
