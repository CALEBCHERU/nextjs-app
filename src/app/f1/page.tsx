import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function F1() {
  return (
    <div>
      <div className='text-3xl text-red-600'>F1</div>
      <br />
      <Link href="/f1/f2">Navigate to F2 Page</Link>
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
