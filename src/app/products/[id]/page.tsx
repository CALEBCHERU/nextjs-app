import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata ={
  title:"PRODUCT",
  description:"Infomation about a PRODUCT"
};
//***** this getParams() is used to get paramas and send it to the server
async function getParams(): Promise<{ id: string }> {
  // Simulate an API call that fetches the product ID asynchronously
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: "12345" }); // Example product ID
    }, 1000); // Simulating network delay
  });
}

// If params is asynchronous (e.g., fetched from an API), use the second approach (with await).
export default async function page({params}:{params: Promise<{id: string }>}) {
  const {id} = await params
  return ( 
  <div>
      <h1>PRODUCT</h1>
      <p>{id}</p>
  </div>
)
}




// ****If params is already available as an object, use the first approach (without await).
// export default async function page({ params } : {params: {id: string }}) {
//     const {id} =  params
//     return (
//     <div>
//         <h1>PRODUCT</h1>
//         <p>{id}</p>
//     </div>
//   )
// }


