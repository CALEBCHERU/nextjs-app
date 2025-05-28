import { revalidatePath } from "next/cache";
import { Metadata } from 'next';
type User = {
  id: number;
  name: string;
};



export const metadata: Metadata ={
  title:"PRODUCT",
  description:"Infomation about a PRODUCT"
};

export default async function Mockuser() {
  // await new Promise(resolve => setTimeout(resolve,2000))  >> use to test the loading component
  const response = await fetch("https://67ab6f1f5853dfff53d76f1b.mockapi.io/users");
  const users = await response.json();

  async function Adduser(formdata: FormData) {
    "use server"; // ✅ Correctly placed

    const name = formdata.get("name") as string;
    if (!name) return;

    const res = await fetch("https://67ab6f1f5853dfff53d76f1b.mockapi.io/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer YOUR_PRIVATE_KEY" --> Secure to place here since it's server-side
      },
      body: JSON.stringify({ name }),
    });

    const newUser = await res.json(); // ✅ Added `await`
    revalidatePath("/mock-users"); // ✅ Ensure this path matches your actual page
    /*revalidatePath()
    In the App Router, Next.js uses data caching and static rendering (SSR/ISR) to make apps fast. By default, routes may be statically rendered and cached — so even if your data changes on the backend, the page might still show the old content unless revalidated.
    This tells Next.js:
    "Invalidate the cache for /mock-users and regenerate it the next time it's requested."
    It ensures that any changes in backend data (e.g., user created, deleted) are reflected on the next page load.
    * */
    console.log(newUser);
  }

  return (
    <div>
      <form action={Adduser}>
        <input type="text" name="name" className="border p-2 m-3 rounded" /> {/* ✅ Added `name="name"` */}
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">Add User</button>
      </form>
      <div className="grid grid-cols-4">
        {users.map((user: User) => (
          <div key={user.id}>
            <div className="p-4 m-3 bg-yellow-400 text-red-500 rounded-lg">{user.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
