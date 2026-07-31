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
        className="mb-6 size-10 text-white inline-flex items-center justify-center hover:text-brand-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer">
        <Close aria-hidden="true" className="size-7" />
        <span className="sr-only">Dismiss modal</span>
        {/* <svg
          width="14"
          height="15"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fill-rule="evenodd"
          />
        </svg> */}
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
          size="large"
          onClick={onPrevious}
        />
        <GalleryArrowButton
          direction="next"
          size="large"
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
            image={image.thumbnail}
            isActive={index === activeIndex}
            onSelect={() => onSelect(index)}
          />
        ))}
      </div>
    </Modal>
  );
}

export default GalleryLightbox;
