import React from 'react'

export default async function page({ params } : {params: {id: string }}) {
    const {id} = await params
    return (
    <div>
        <h1>PRODUCT</h1>
        <p>{id}</p>
    </div>
  )
}
