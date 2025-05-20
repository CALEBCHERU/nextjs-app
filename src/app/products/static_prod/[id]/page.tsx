// This disables dynamic rendering at runtime (only static routes allowed)
export const dynamicParams = false;

// Tell Next.js which product IDs to statically generate
export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

// http://localhost:3000/products/static_prod/4   ==> this shall return page not found .This is because the id 4 is not found  in the return func in generateStaticParams().this is useful if u need to limit the user to certain params

// Page component
export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Product ID: {params.id}</h1>
      <p>This page was statically generated for product ID {params.id}.</p>
    </div>
  );
}
