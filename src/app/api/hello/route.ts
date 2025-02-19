const users = [
  { id: 1, name: "CALEB" },
  { id: 2, name: "JOHN" },
  { id: 3, name: "KYLIE" },
];

export async function GET() {
    return new Response(JSON.stringify(users), {
      headers: { "Content-Type": "application/json" },
    });
  }

export async function POST(request: Request) {
  const user = await request.json();

  const newUser = {
    id: users.length + 1,
    name: user.name, // Ensuring 'name' is used instead of 'text'
  };

  users.push(newUser);

  return new Response(JSON.stringify(newUser), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
