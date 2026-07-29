import { useState } from "react";
import { galleryImages } from "../data/gallery-data";
import GalleryArrowButton from "./GalleryArrowButton";
import GalleryThumbnail from "./GalleryThumbnail";


function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = galleryImages[activeIndex];

  // show previous image in gallery, wrapping to the last image if currently at the firt
  function showPreviousImage() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0
        ? galleryImages.length - 1
        : currentIndex - 1,
    );
  }

  // show next image in gallery, wrapping to the first image if currently at the last
  function showNextImage() {
    setActiveIndex((currentIndex) =>
      currentIndex === galleryImages.length - 1
        ? 0
        : currentIndex + 1,
    );
  }

  return (
    <section aria-label="Product images" className="">
      <div className="relative">
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className="w-full lg:max-w-112.5 max-h-75 object-cover object-center sm:rounded-2xl"
        />
        {/* Gallery arrows - mobile/tablet only */}
        {/* ToDo: make these individual left/right button components? */}
        <div className="flex lg:hidden">
          <GalleryArrowButton direction="previous" onClick={showPreviousImage} />
          <GalleryArrowButton direction="next" onClick={showNextImage} />
        </div>
      </div>

      <div
        role="group"
        aria-label="Select product image"
        className="hidden mt-4 lg:flex gap-8">
        {galleryImages.map((image, index) => (
          <GalleryThumbnail
            key={image.id}
            image={image.thumbnail}
            alt={image.alt}
            label={`Product thumbnail image ${index + 1}`}
            isActive={index === activeIndex}
            onSelect={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductGallery;
