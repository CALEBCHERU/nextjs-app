import { useEffect, useState } from "react";
// interface is the recommended way of storing data
interface Post {
  id: number;
  title: string;
  body: string;
}
// Extending the interface (it can be extended as shown below)
// interface Post {
//   author: string;
// }


// how it is acesses
// const post: Post = {
//   id: 1,
//   title: "Hello",
//   body: "This is a post",
//   author: "Caleb"
// };

// this method is recommended by chatgpt beacause it can be used in all react /nextjs components but its a bit complex
// i recommend this
const Posts2 = () => {
  // <Post[]>: This is a TypeScript generic type annotation, specifying that posts will be an array of Post objects.
  // []: The initial value, an empty array (meaning no posts initially).
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(true);

  useEffect(() => {
    async function serverPost2() {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            setPosts(data);
            setLoading(false);
        } catch (error) {
            seterror(true);
            console.error("Error fetching posts:", error);

        }finally{
            setLoading(false);
        }

        
    }
    serverPost2();
    }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching posts.</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts2;
