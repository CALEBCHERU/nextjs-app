import React from 'react'

// Nested loops
// http://localhost:3000/products/1/reviews/1
export default async function page({paramas}:{paramas:Promise<{id: string,reviewsID: string}>}) {
    const {id} = await paramas
    const {reviewsID} = await paramas
  return (
    <div>
        <h1>ProductID:{id}</h1>
        <h1>Reviews:{reviewsID} </h1>
    </div>
  )
}
