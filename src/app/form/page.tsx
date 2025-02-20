// C:\nextjs-app\src\app\form\page.tsx
import { addProduct } from "@/app/form/lib/prisma"; 
 // Adjust import path if needed
import { redirect } from "next/navigation";
import { Submit } from "./submit";
export default function AddProductPage() {
  async function createProduct(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;

    // Ensure price is a valid number
    const parsedPrice = Number(price) || 0;

    await addProduct(title, parsedPrice, description);

    // Redirect after product is added
    redirect("/form/products-db");
  }

  return (
    <form action={createProduct} className="p-4 space-y-4 max-w-96">
      <label className="text-red-500">
        Title
        <input type="text" name="title" required className="w-full p-2 border rounded" />
      </label>

      <label className="text-red-500">
        Price
        <input type="number" name="price" required className="w-full p-2 border rounded" step="0.01" />
      </label>

      <label className="text-red-500">
        Description
        <textarea name="description" required className="w-full p-2 border rounded"></textarea>
      </label>

      <Submit />
    </form>
  );
}
