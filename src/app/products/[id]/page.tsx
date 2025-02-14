import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata ={
  title:"PRODUCT",
  description:"Infomation about a PRODUCT"
};

export default async function page({ params } : {params: {id: string }}) {
    const {id} = await params
    return (
    <div>
        <h1>PRODUCT</h1>
        <p>{id}</p>
    </div>
  )
}
