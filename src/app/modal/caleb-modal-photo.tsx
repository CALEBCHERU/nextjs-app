"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

export default function PhotoCaleb() {
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

  const images = [
    "/photos-caleb/caleb passport.jpeg",
    "/photos-caleb/caleb.jpeg",
    "/photos-caleb/WhatsApp Image 2025-01-07 at 10.47.31 PM.jpeg",
  ];

  return (
    <div>
      <h1 className="text-3xl text-purple-700 font-bold mb-4">Caleb Photos
        <br />
        Click on any of the photos
      </h1>


      <div className="flex gap-4 m-3">
        {images.map((src, index) => (
          <Image
            key={index}
            onClick={() => openModal(src)}
            src={src}
            alt={`Caleb photo ${index + 1}`}
            className="w-[300px] h-[300px] object-cover cursor-pointer"
            width={300}
            height={300}
          />
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
