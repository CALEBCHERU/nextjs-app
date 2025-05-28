// This runs at build time to generate paths for each user
export async function generateStaticParams() {
  const users = await fetch('https://67ab6f1f5853dfff53d76f1b.mockapi.io/user')
    .then((res) => res.json());

  return users.map((user: { slug: string }) => ({
    slug: user.slug,
  }));
}


// src/app/user/[slug]/page.tsx
// C:\Users\khale\Documents\projects\nextjs-app\src\app\slug\generateStaticparams\user\[slug]\page.tsx
interface PageProps {
  params: { slug: string };
}

export default async function UserPage({ params }: PageProps) {
  const user = await fetch(`https://67ab6f1f5853dfff53d76f1b.mockapi.io/user?slug=${params.slug}`)
    .then((res) => res.json());

  const currentUser = user[0]; // Assume user is returned as an array

  return (
    <div>
      <h1 className="text-2xl font-bold">User: {currentUser.name}</h1>
      <p>Email: {currentUser.email}</p>
      <p>Slug: {params.slug}</p>
    </div>
  );
}
