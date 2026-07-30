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
        className="mb-4 focus-visible:outline-2 focus-visible:outline-offset-2">
        <Close aria-hidden="true" />
        <span className="sr-only">Dismiss modal</span>
      </button>
      {/* active image w/controls */}
      <div className="relative">
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className="w-full rounded-lg"
        />
        <GalleryArrowButton
          direction="previous"
          onClick={onPrevious}
        />
        <GalleryArrowButton direction="next" onClick={onNext} />
      </div>
      {/* thumbnail images */}
      <div
        role="group"
        aria-label="Choose product image"
        className="flex gap-4 mt-4">
        {images.map((image, index) => (
          <GalleryThumbnail
            key={image.id}
            image={image}
            isActive={index === activeIndex}
            onSelect={() => onSelect(index)}
          />
        ))}
      </div>
    </Modal>
  );
}

export default GalleryLightbox;
