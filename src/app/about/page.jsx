"use client"
import React from 'react';
import { useRouter} from "next/navigation";

function page() {
  const router = useRouter();
  return (
    <div>
        <br />
        <h1>About</h1>
        <button onClick={() => router.push("/")} className="bg-blue-500 text-white p-2 rounded-md">
          Go Home
        </button>
    </div>
  )
}

export default page