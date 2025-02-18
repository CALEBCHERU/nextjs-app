// http://localhost:3000/api/users
export async function GET(request){

    const users =[
        {id:1,name:"CALEB"},
        {id:2,name:"JOHN"},
        {id:3,name:"KYLIE"},

    ]
    return {
        status:200,
        body: JSON.stringify(users)
    }

}