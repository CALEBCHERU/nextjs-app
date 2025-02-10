"use client";
import React from "react";
import { useState } from "react";

function Test() {
    const[count,setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
        console.log(count);  
        
    }

    return(
        <div onClick={handleClick}>
           <h1>CLICK</h1> {count}

        </div>
    )
    
}

export default Test;