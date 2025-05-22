// app/api/hello/route.js

/* 
SIMPLE GET METHOD
export function GET() {
  return new Response("hey from caleb");
}
 */
export function GET(req) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type');

//   if u need to add another get function for a different url without creating a new route.js page
// http://localhost:3000/api/simpleApi?type=greeting
  if (type === 'greeting') {
    return new Response("Hello from greeting logic!");
  }

  return new Response("hey from caleb");
}

/*
SIMPLE POST METHOD 
export async function POST(req) {
  const body = await req.json();      // Parse JSON body
  const value = body.name;            // Extract 'name' from it

  return new Response(`hey from ${value}`);
}

*/

export async function POST(req) {
  let body;

  try {
    body = await req.json();  // Safely attempt to parse JSON
  } catch (error) {
    // this validates if the user send an empty body with no name or value
    return new Response('Invalid or missing JSON body', { status: 400 });
  }

  const value = body?.name;

  if (!value || value.trim() === '') {
    return new Response('Please insert a name', { status: 400 });
  }
  /* 
  OR
  if (value === '' || body === '' ) {
    return new Response('Please insert a name', { status: 400 });
  }
  */

  return new Response(`Hey from ${value}`, { status: 200 });
}

