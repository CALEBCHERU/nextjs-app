// // C:\nextjs-app\src\app\form\page.tsx
// import { addProduct } from "@/app/form/lib/prisma"; 
//  // Adjust import path if needed
// import { redirect } from "next/navigation";
// import { Submit } from "./submit";
// import Link from "next/link";

// //  this section teaches   use the formData and prisma without using api routes/url
// export default function AddProductPage() {
//   async function createProduct(formData: FormData) {
//     "use server";
//     // this is just get the data/values directly from the form/inputs .Here no data is being send
//     const title = formData.get("title") as string;
//     const price = formData.get("price") as string;
//     const description = formData.get("description") as string;

//     // Ensure price is a valid number
//     const parsedPrice = Number(price) || 0;

//     // the send the data to prisma
//     await addProduct(title, parsedPrice, description);

//     // Redirect after product is added
//     redirect("/form/products-db");
//   }


//   return (
//     <form action={createProduct} className="p-4 space-y-4 max-w-96">
//       <label className="text-red-500">
//         Title
//         <input type="text" name="title" required className="w-full p-2 border rounded" />
//       </label>

//       <label className="text-red-500">
//         Price
//         <input type="number" name="price" required className="w-full p-2 border rounded" step="0.01" />
//       </label>

//       <label className="text-red-500">
//         Description
//         <textarea name="description" required className="w-full p-2 border rounded"></textarea>
//       </label>
//         <Link href={'/form/products-db'} className={'bg-amber-600 hover:bg-green-500'} >FormList</Link>

//       <Submit />
//     </form>
//   );
// }
