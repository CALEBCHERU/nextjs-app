// http://localhost:3000/api/users

const users =[
    {id:1,name:"CALEB"},
    {id:2,name:"JOHN"},
    {id:3,name:"KYLIE"},

]
 // Export the function to be used as a GET route in the API server

export async function GET(){
    // Convert the array to JSON and return it as a Response
    return new Response(JSON.stringify(users));

}

export async function POST(request) {
    const comment = await request.json();
    const newComment = {
      id: comments.length + 1,
      text: comment.text,
    };
  
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  }
  