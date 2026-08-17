import { useState } from "react";
import { product } from "../data/product-data";
import GalleryArrowButton from "./GalleryArrowButton";
import GalleryThumbnail from "./GalleryThumbnail";
import GalleryLightbox from "./GalleryLightbox";
import { useMediaQuery } from "../hooks/useMediaQuery";

function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 64rem)");
  const productImages = product.images;
  const activeImage = product.images[activeIndex];

  function showPreviousImage() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0
        ? productImages.length - 1
        : currentIndex - 1,
    );
  }

  function showNextImage() {
    setActiveIndex((currentIndex) =>
      currentIndex === productImages.length - 1
        ? 0
        : currentIndex + 1,
    );
  }

  return (
    <section
      aria-label="Product images"
      className="lg:flex lg:flex-col lg:items-center">
      <div className="relative lg:aspect-square lg:max-w-112.5">
        {isDesktop ? (
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="block w-full h-full cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-brand-gray-950 outline-offset-2">
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="w-full h-full object-cover object-center sm:rounded-2xl"
            />
          </button>
        ) : (
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="w-full lg:max-w-112.5 max-h-75 object-cover object-center sm:rounded-2xl"
          />
        )}
        {/* Gallery arrows - mobile/tablet only */}
        <div className="flex lg:hidden">
          <GalleryArrowButton
            direction="previous"
            onClick={showPreviousImage}
          />
          <GalleryArrowButton
            direction="next"
            onClick={showNextImage}
          />
        </div>
      </div>

      <div
        role="group"
        aria-label="Select product image"
        className="hidden mt-4 lg:flex gap-8">
        {productImages.map((image, index) => (
          <GalleryThumbnail
            key={image.id}
            image={image.thumbnailSrc}
            alt={`Product thumbnail ${index + 1}`}
            label={`Product thumbnail image ${index + 1}`}
            isActive={index === activeIndex}
            onSelect={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {isDesktop && (
        <GalleryLightbox
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          images={productImages}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          onPrevious={showPreviousImage}
          onNext={showNextImage}
        />
      )}
    </section>
  );
}

export default ProductGallery;
