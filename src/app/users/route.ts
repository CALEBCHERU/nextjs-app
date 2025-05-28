
export const users =[
    {id:1,name: "John Doe"},
    {id:2, name: "Caleb Cheru"},
    {id:3, name: "Emy Ngeno"}
]
export async function GET() {
    return Response.json(users);
}

// export async function POST(request :Request) {
//     const newUser = await request.json();
//     const newUser1 = {
//         id: users.length + 1,
//         name: newUser.name,
//     };
//     users.push(newUser1);
//     return Response.json(newUser1);
    
// }


export async function POST(request :Request) {
    const newUser = await request.json();
    const newUser1 = {
        id: users.length + 1,
        name: newUser.name,
    };
    users.push(newUser1);
    return new Response(JSON.stringify(newUser1),{
        status: 201,
        headers: {
            'Content-Type': 'application/json',
        },
    })
    
}
