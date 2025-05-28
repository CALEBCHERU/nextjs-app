import prisma from "@/app/form/lib/prisma";

export default async function ProductsDBPage() {
  // Fetch products from the database
  const products = await prisma.product.findMany();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-4">Product List</h1>
      
      {products.length === 0 ? (
        <p className="text-white">No products available.</p>
      ) : (
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product.id} className="bg-gray-800 p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-white">{product.title}</h2>
              <p className="text-gray-300">Price: ${product.price.toFixed(2)}</p>
              <p className="text-gray-400">{product.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
