'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const images: Record<string, string> = {
  '1': '/photos-caleb/caleb passport.jpeg',
  '2': '/photos-caleb/caleb.jpeg',
  '3': '/photos-caleb/WhatsApp Image 2025-01-07 at 10.47.31 PM.jpeg',
};

export default function PhotoModal({ params }: { params: { id: string } }) {
  const router = useRouter();
  const imageSrc = images[params.id];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-xl">
        <Image
          src={imageSrc}
          alt="Modal Image"
          width={500}
          height={500}
          className="object-contain"
        />
        <button
          onClick={() => router.back()}
          className="mt-4 bg-purple-600 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
