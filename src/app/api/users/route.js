// http://localhost:3000/api/users
export async function GET(request){

    const users =[
        {id:1,name:"CALEB"},
        {id:2,name:"JOHN"},
        {id:3,name:"KYLIE"},

    ]
    // Convert the array to JSON and return it as a Response
    return new Response(JSON.stringify(users));

}