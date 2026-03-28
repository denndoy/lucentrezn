import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Community",
  description: "Simple community lookbook in a clean 3-column gallery layout.",
};

const previewImages = [
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
];

export default function CommunityPage() {

  return (
    <section className="w-full px-4 py-5 md:px-10 md:py-8 lg:px-14">
      <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
        {previewImages.map((imageUrl, index) => (
          <figure key={`${imageUrl}-${index}`} className="relative overflow-hidden bg-card">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={imageUrl}
                alt={`Community preview ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
