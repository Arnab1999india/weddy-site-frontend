import { useState } from "react";
import { Dialog } from "@headlessui/react";

type PortfolioItem = {
  id: number;
  category: string;
  src: string;
  alt: string;
};

const portfolioImages: PortfolioItem[] = [
  {
    id: 1,
    category: "Wedding",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Wedding Shoot 1",
  },
  {
    id: 2,
    category: "Wedding",
    src: "/assets/portfolio/wed2.jpg",
    alt: "Wedding Shoot 2",
  },
  {
    id: 3,
    category: "Pre-Wedding",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Pre Wedding Shoot 1",
  },
  {
    id: 4,
    category: "Candid",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Candid Photography",
  },
  {
    id: 5,
    category: "Traditional",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Traditional Ceremony",
  },
  {
    id: 6,
    category: "Candid",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Candid Smile",
  },
];

const categories = ["All", "Wedding", "Pre-Wedding", "Candid", "Traditional"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(
    null
  );

  const filteredImages =
    selectedCategory === "All"
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Our Portfolio
      </h1>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
              selectedCategory === cat
                ? "bg-gray-800 text-white border-gray-800"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {filteredImages.map((img) => (
          <img
            key={img.id}
            src={img.src}
            alt={img.alt}
            className="w-full rounded-xl shadow-md cursor-pointer hover:opacity-80 transition"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Lightbox (Preview) */}
      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6">
          <Dialog.Panel className="relative max-w-4xl w-full">
            {selectedImage && (
              <>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="rounded-xl shadow-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:bg-gray-200"
                >
                  ✕
                </button>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
