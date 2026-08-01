import { useState, useEffect } from "react";
import { galleryImages } from "../data/gallery-data";
import GalleryArrowButton from "./GalleryArrowButton";
import GalleryThumbnail from "./GalleryThumbnail";
import GalleryLightbox from "./GalleryLightbox";
import { useMediaQuery } from "../hooks/useMediaQuery";

function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  // check if this works as REM (64rem)
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const activeImage = galleryImages[activeIndex];

  // useEffect(() => {
  //   if (!isDesktop) setIsLightboxOpen(false);
  // }, [isDesktop]);

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
        {isDesktop ? (
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-brand-gray-950 outline-offset-2">
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="w-full lg:max-w-112.5 max-h-75 object-cover object-center sm:rounded-2xl"
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
        {/* ToDo: make these individual left/right button components? */}
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

      {isDesktop && (
        <GalleryLightbox
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          images={galleryImages}
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
