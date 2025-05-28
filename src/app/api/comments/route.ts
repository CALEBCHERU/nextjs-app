import { NextRequest } from "next/server";

const comments = [
  { id: 1, text: "This is a great post!" },
  { id: 2, text: "Nice work!" },
  { id: 3, text: "Keep it up!" },
];

// export async function GET() {
//     return new Response(JSON.stringify(comments), {
//       headers: { "Content-Type": "application/json" },
//     });
//   }

// querry url
// /api/comments
// /api/comments?query=some-text
// /api/comments?query=Nice
// /api/comments?query=great

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;

  return Response.json(filteredComments);
}

export async function POST(request: Request) {
  const comment = await request.json();

  const newComments = {
    id: comments.length + 1,
    text: comment.text, // Ensuring 'name' is used instead of 'text'
  };

  comment.push(newComments);

  return new Response(JSON.stringify(newComments), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
