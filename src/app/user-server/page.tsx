type Post = {
    id: number;
    title: string;
    body: string;
  }
  
  export default async function  Post1(){
    // await new Promise(resolve => setTimeout(resolve,2000))  >> use to test the loading component
      const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
      const users = await response.json();
  
      return (
          <div>
              <h1>Posts</h1>
              <ul>
                  {users.slice(0, 5).map((user:Post) => (
                      <li key={user.id}>
                          <strong>{user.title}</strong>
                          <p>{user.body}</p>
                      </li>
                  ))}
              </ul>
          </div>
      )
  }
  