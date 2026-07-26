import { useState } from "react";
import galleryImages from "../data/gallery-data";
import GalleryThumbnail from "./GalleryThumbnail";

function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = galleryImages[activeIndex];

  return (
    <section aria-label="Product images" className="p-4">
      <img
        src={activeImage.src}
        alt={activeImage.alt}
        className="w-full rounded-2xl"
      />

      <div
        role="group"
        aria-label="Choose product image"
        className="mt-4 flex gap-8">
        {galleryImages.map((image, index) => (
          <GalleryThumbnail
            key={image.id}
            image={image}
            isActive={index === activeIndex}
            onSelect={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductGallery;
