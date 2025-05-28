import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function F1() {
  return (
    <div>
      <div className='text-3xl text-red-600'>F1</div>
      <br />
      <Link href="/intercepted/f2" className='text-purple-700 text-2xl hover:text-green-600'>Navigate to F2 Page</Link>
      <br />
      <Link href="/intercepted/photos" className='text-purple-700 text-2xl hover:text-green-600'> <span className='text-pink-600 font-bold hover:text-green-600'>Navigate to photo Page</span> to learn more about intercepted routes and modals</Link>

      <br />
      <br />
      <p className='text-lg text-orange-600'>
        NOTES
        <br />
        Intercepting Routes Convention
        <br />
        (.) → Match segments on the same level
        <br />
        (..) → Match segments one level above
        <br />
        ../../ → Match segments two levels above
        <br />
        /.. → Match segments from the root app directory
      </p>
      <br />
      <p>The use of Interception</p>
      <div className='flex'>
        <Image 
            src="/images/Screenshot 2025-02-19 111823.png" 
            alt="Intercepting Routes" 
            width={500} 
            height={500}
            className='m-3'
        />
        <Image 
            src="/images/Screenshot 2025-02-19 111916.png" 
            alt="Intercepting Routes" 
            width={500} 
            height={500}
            className='m-3'
        />

      </div>
      
    </div>
  )
}
