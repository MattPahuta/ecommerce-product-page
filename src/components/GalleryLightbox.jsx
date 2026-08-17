import Modal from "./Modal";
import GalleryThumbnail from "./GalleryThumbnail";
import GalleryArrowButton from "./GalleryArrowButton";
import { FiX as Close } from "react-icons/fi";

function GalleryLightbox({
  isOpen,
  onClose,
  images,
  activeIndex,
  onSelect,
  onPrevious,
  onNext,
}) {
  const activeImage = images[activeIndex];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      labelledBy="lightbox-heading">
      <h2 id="lightbox-heading" className="sr-only">
        Product image gallery
      </h2>
      <button
        onClick={onClose}
        className="mb-6 size-8 rounded-md ml-auto text-white inline-flex items-center justify-center hover:text-brand-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer transition-colors">
        <Close aria-hidden="true" className="size-7" />
        <span className="sr-only">Dismiss modal</span>
      </button>
      {/* active image w/controls */}
      <div className="relative">
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className="w-full rounded-2xl"
        />
        <GalleryArrowButton
          direction="previous"
          onClick={onPrevious}
        />
        <GalleryArrowButton
          direction="next"
          onClick={onNext}
        />
      </div>
      {/* thumbnail images */}
      <div
        role="group"
        aria-label="Choose product image"
        className="flex justify-center gap-8 mt-10">
        {images.map((image, index) => (
          <GalleryThumbnail
            key={image.id}
            image={image.thumbnailSrc}
            alt={`Product thumbnail ${index + 1}`}
            label={`Product thumbnail image ${index + 1}`}
            isActive={index === activeIndex}
            onSelect={() => onSelect(index)}
          />
        ))}
      </div>
    </Modal>
  );
}

export default GalleryLightbox;
