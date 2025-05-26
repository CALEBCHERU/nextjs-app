export default async function Id({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return (
    <div>
      <div>
        <h1 className="text-3xl text-green-600">This is the name1 page</h1>
        <p>
          this route is catching all segments.Dynamic Segments can be extended
          to catch-all subsequent segments by adding an ellipsis inside the
          brackets [...folderName].
        </p>
        <h1>This is my name: {slug}</h1>
      </div>
    </div>
  );
}
