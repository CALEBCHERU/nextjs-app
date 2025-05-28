import React from 'react'
import { Metadata } from 'next';


//***** this static metadata
export const metadata: Metadata ={
  title:"PRODUCT",
  description:"Information about a PRODUCT"
}; 


export default async function page({params,}:{params: Promise<{productId: string }>}) {
  const {productId} = await params
  return (
  <div>
      <h1>PRODUCT</h1>
      <p>{productId}</p>
  </div>
)
}





