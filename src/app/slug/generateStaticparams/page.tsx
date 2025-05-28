
import React from 'react'

export default async function page() {
    const users = await fetch('https://67ab6f1f5853dfff53d76f1b.mockapi.io/user').then((res) => res.json())

  return (
    <div>{users}</div>
  )
}

// this page and its folders are not functioning just read the slug.md to under the function of the generateStaticparams
