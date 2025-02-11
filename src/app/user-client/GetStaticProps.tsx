
// useEffect() (Client-Side)	When data needs to be fetched after page load (e.g., user data, search results).
// getServerSideProps()	When you need fresh data on every request (e.g., user-specific data).




// getStaticProps()	When data is rarely updated and you want better performance.
import { GetStaticProps } from "next";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Props {
  posts: Post[];
}

const StaticPosts = ({ posts }: Props) => {
  return (
    <div>
      <h1>Static Blog Posts</h1>
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

// Fetch data at build time
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  return {
    props: { posts },
    revalidate: 60, // Regenerate the page every 60 seconds if there's a request
  };
};

export default StaticPosts;
