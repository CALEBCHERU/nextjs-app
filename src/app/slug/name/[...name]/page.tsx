// File: src/app/slug/[...name]/page.tsx

import React from 'react';

export default function Page({
  params,
}: {
  params: { name: string[] }; // It's an array due to catch-all
}) {
  return (
    <div>
      <h1 className="text-3xl text-green-600">This is the name page</h1>
      <p>this route is catching all segments.Dynamic Segments can be extended to catch-all subsequent segments by adding an ellipsis inside the brackets [...folderName].</p>
      <h1>This is my name: {params.name}</h1>
    </div>
  );
}
