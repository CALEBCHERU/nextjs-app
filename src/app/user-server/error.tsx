"use client"

import { useEffect } from "react"

export default function Error({error} :{error: Error}){
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="test-2xl text-red-500 ">
                <strong>Oops! An error occurred.</strong>
                <br />
                <p>{error.message}</p>
            </div>
        </div>
    )
 
} 