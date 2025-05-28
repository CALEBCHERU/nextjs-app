"use client";
// import Link from 'next/link';
import Image from "next/image";
import React, { useRef, useState } from "react";

const images = [
  { id: "1", src: "/photos-caleb/caleb passport.jpeg" },
  { id: "2", src: "/photos-caleb/caleb.jpeg" },
  {
    id: "3",
    src: "/photos-caleb/WhatsApp Image 2025-01-07 at 10.47.31 PM.jpeg",
  },
];

export default function PhotoGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imgSrc: string) => {
    setSelectedImage(imgSrc);
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
    setSelectedImage(null); // optional: clear image when closing
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Caleb Photos</h1>
      <div className="flex gap-4">
        {images.map(({ id, src }) => (
          // <Link key={id} href={`/intercepted/photos/${id}`} scroll={false}>
          <Image
            key={id}
            src={src}
            onClick={() => openModal(src)}
            alt={`Photo ${id}`}
            width={300}
            height={300}
            className="cursor-pointer object-cover w-[300px] h-[300px]"
          />
          // </Link>
        ))}
      </div>
      <dialog ref={dialogRef} className="p-4 rounded-lg w-[90%] max-w-[600px]">
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Selected Caleb photo"
            width={500}
            height={500}
            className="object-contain w-full h-auto mb-4"
          />
        )}
        <button
          onClick={closeModal}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Close
        </button>
      </dialog>
    </div>
  );
}
