
// useEffect() (Client-Side)	When data needs to be fetched after page load (e.g., user data, search results).
// getStaticProps()	When data is rarely updated and you want better performance.



// getServerSideProps()	When you need fresh data on every request (e.g., user-specific data).
import { GetServerSideProps } from "next";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Props {
  posts: Post[];
}

const UserPosts = ({ posts }: Props) => {
  return (
    <div>
      <h1>User-Specific Posts</h1>
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

// Fetch fresh data on every request
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  return {
    props: { posts },
  };
};

export default UserPosts;
