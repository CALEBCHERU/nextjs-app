import React from 'react'

export default function layout( {
    children,
}:{
    children: React.ReactNode;
}) {
  return (
    <div>
        {children}
        <div>
            <br/>
            <h2 style={{color:"blue"}}>
                featured products selections
            </h2>
        </div>
    </div>
  )
}
