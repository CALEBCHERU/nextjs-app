"use client"
// import Posts from "./post";
import Post1 from "./post1";
// import Posts2 from "./post";

export default function Home() {
  return (
    <div>
      {/* <h1>Welcome to My Next.js App</h1> */}
      {/* <Posts /> */}
      <br />
      <h1>Welcome UserServer</h1>
      <Post1 />  {/* i recommend this for fetching data */}
      {/*    This component fetches data from an API endpoint. It uses the Fetch API. */}
      <br />
      <h1>Welcome Posts2</h1>
      {/* <Posts2 />  */} {/*    This component fetches data from an API endpoint. It uses the Fetch API. */}
    </div>
  );
}
// 