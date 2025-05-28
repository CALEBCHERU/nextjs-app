
"use client"
import { users } from "../route";


// _request: Request → Represents the incoming HTTP request object.
// { params }:{params:{id: string}} → Extracts an id parameter from the request URL.
export async function GET(
    _request : Request,
    { params }:{params:{id: string}}) {
    

        // Here, id is extracted from params.
        const {id} = params
        const user = users.find((user) => user.id === parseInt(id))
        if (!user) {
            return new Response(JSON.stringify({ error: "User not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" }
            });
        }
        
        return new Response(JSON.stringify(user), {
            headers: { "Content-Type": "application/json" }
        });
}