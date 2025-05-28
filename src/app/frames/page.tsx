"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// npm i framer-motion

const images = [
  { src: "/images/frames/petra.jpg", title: "Petra", location: "Jordan", author: "Reiseuhu" },
  { src: "/images/frames/greatwall.jpg", title: "Great Wall", location: "China", author: "Unknown" },
  { src: "/images/frames/machupicchu.jpg", title: "Machu Picchu", location: "Peru", author: "Unknown" },
  { src: "/images/frames/london.jpg", title: "Petra", location: "Jordan", author: "Reiseuhu" },
  { src: "/images/frames/paris.jpg", title: "Great Wall", location: "China", author: "Unknown" },
  { src: "/images/frames/dubai.jpg", title: "Machu Picchu", location: "Peru", author: "Unknown" },
];


export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="relative min-h-screen bg-gray-900 p-6">
      <h1 className="text-white text-2xl mb-4">Header</h1>
      <div className="grid grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div key={idx} onClick={() => setSelectedImage(img)}>
            <Image src={img.src} alt={img.title} width={300} height={200} className="cursor-pointer rounded-lg" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
            {/*
            initial, animate, exit: these are Framer Motion props (used for animations).
            initial={{ opacity: 0 }}: starts invisible.
            animate={{ opacity: 1 }}: fades in.
           exit={{ opacity: 0 }}: fades out on unmount.
            */}
          <div
            className="bg-white p-4 rounded-lg shadow-lg relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            {/*  initial={{ scale: 0.8 }}, etc.: also from Framer Motion — it zooms in smoothly*/}
            <Image src={selectedImage.src} alt={selectedImage.title} width={500} height={300} className="rounded-lg" />
            <div className="mt-2">
              <h2 className="text-xl font-bold">{selectedImage.title}</h2>
              <p className="text-gray-600">Photo by {selectedImage.author} on Unsplash</p>
              <p className="text-gray-500">{selectedImage.location}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
