import React from 'react'

// METADATA
export const metadata = {
    title: "ABOUT",
    description: "Information about the website",
  };

  //   : { children: React.ReactNode } → This is TypeScript syntax that specifies the type of children
  // React.ReactNode can be JSX elements, strings, numbers, fragments, or null. It represents everything that can be rendered inside a React component.
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
                  This is the about page
              </h2>
          </div>
      </div>
    )
  }
  

