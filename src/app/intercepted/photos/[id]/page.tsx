import Image from 'next/image';

const images: Record<string, string> = {
  '1': '/photos-caleb/caleb passport.jpeg',
  '2': '/photos-caleb/caleb.jpeg',
  '3': '/photos-caleb/WhatsApp Image 2025-01-07 at 10.47.31 PM.jpeg',
};

export default function FullPhotoPage({ params }: { params: { id: string } }) {
  const imageSrc = images[params.id];

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Full Page Photo View</h2>
      <Image src={imageSrc} alt="Full Image" width={800} height={800} />
    </div>
  );
}
