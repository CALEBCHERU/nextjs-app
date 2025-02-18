import React from "react";
import Mockuser from "./mock-users";
import { Suspense } from "react";
import Loading from "./loading";
export default async function Post1() {
  

  return (
    <div>
      <h1>Posts</h1>
    {/* Is used when u don’t want the entire page to say loading only the content in the suspend will say loading */}
      <Suspense fallback={<Loading/>} >
        <Mockuser />
      </Suspense>
      
    </div>
  );
}
