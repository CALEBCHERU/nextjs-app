
// http://localhost:3000/api/hello
export async function GET(request: Request) {
    return new Response('Hello from Next.js', {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}
