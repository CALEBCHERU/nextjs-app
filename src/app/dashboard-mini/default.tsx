import Link from 'next/link'
import React from 'react'

export default function Default() {
  return (
    <div className='text-2xl p-5 text-cyan-100 bg-fuchsia-700'>
      this is Default page for main page that is mini-darshboad.
      <br />
      <p className='text-green-500'>this page is shown because its a fallback page for the ./mini-darshboard . it doesn't have a settings page </p>
      <Link href={'./'} className='hover:bg-[#383838]'>go back to the mini-darshboard</Link>
    </div>
  )
}
