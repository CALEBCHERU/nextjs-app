import Link from 'next/link'
import React from 'react'

export default function Dashboard() {
  return (
    <div className='text-2l m-1 text-orange-600'>Complex Dashboard

    <div className='text-lg text-orange-600'>NB: when i navigate to the notifications archieve it only change the notification div and the url path</div>
    <div>The main importance of this is that one can display more than two pages in one page in this case its @users/page.tsx , @notification/pages.tsx, @archive/page.tsx </div>
    <Link href={'../dashboard-mini'} className='hover:bg-[#383838] text-cyan-500 text-2xl'>Go to the mini-darshboard page</Link> to understand the working of a <span className='text-cyan-500 text-2xl'> default.tsx page</span> 
    
    </div>
  )
}
