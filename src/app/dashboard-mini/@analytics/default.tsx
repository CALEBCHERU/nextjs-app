import React from 'react'
import Analytics from './page'

export default function Default() {
  return (
    <div className='bg-red-700 text-2xl'> <br />this Default page for Analysitc 
    <p className='text-green-500'>this page is shown because its a fallback page for the ./@Analytics   it doesn't have a settings page </p>
    <Analytics/></div>
  )
}
