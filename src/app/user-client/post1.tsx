type Post = {
  id: number;
  title: string;
  body: string;
}

// // Using intersection
// type ExtendedPost = Post & { author: string };

// const post: ExtendedPost = {
//   id: 1,
//   title: "Hello",
//   body: "This is a post",
//   author: "Caleb"
// };

// // Using union
// type ID = number | string;

// this approach is only recommended when u are using nextjs 

export default async function  Post1(){
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
