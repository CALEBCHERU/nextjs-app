
// useEffect() (Client-Side)	When data needs to be fetched after page load (e.g., user data, search results).
// getServerSideProps()	When you need fresh data on every request (e.g., user-specific data).
// getStaticProps()	When data is rarely updated and you want better performance.


// this  is not recommended but chatgpt say it doesn't have an efficient error handling system because it just logs erros to the console 
import { useEffect, useState } from "react";


interface Post {
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  if (loading) return <p>Loading...</p>;

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

export default Posts;
