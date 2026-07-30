import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function GalleryArrowButton({ direction, onClick }) {
  const isNext = direction === "next";

  return (
    <button
      onClick={onClick}
      aria-label={isNext ? "Next image" : "Previous image"}
      className={`group absolute top-1/2 -translate-y-1/2 ${isNext ? "right-4" : "left-4"} size-10 rounded-full text-brand-gray-950 text-2xl bg-white inline-flex items-center justify-center text-center hover:text-brand-gray-950/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gray-950 active:text-brand-orange-500 cursor-pointer transition`}>
      {isNext ? (
        <FiChevronRight aria-hidden="true" focusable="false" />
      ) : (
        <FiChevronLeft aria-hidden="true" focusable="false" />
      )}
    </button>
  );
}

export default GalleryArrowButton;
