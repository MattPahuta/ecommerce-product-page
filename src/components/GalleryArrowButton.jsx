import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function GalleryArrowButton({ direction, size = "standard", onClick }) {
  const isNext = direction === "next";
  const isLargeButton = size === "large";
  // utilize useMediaQuery hook for classes?
  // const offsetExpression = isNext ? "right-4" : "left-4" 

  // mobile and tablet - isNext = "right-4", !isNext "left-4"
  
  // larger buttons for the lightbox modal 

  const offsetClassStandard = isNext ? "right-4" : "left-4";
  const offsetClassLarge = isNext ? "-right-7" : "-left-7";

  return (
    <button
      onClick={onClick}
      aria-label={isNext ? "Next image" : "Previous image"}
      className={`group absolute top-1/2 -translate-y-1/2 ${isLargeButton ? "size-14" : "size-10"} ${isLargeButton ? offsetClassLarge : offsetClassStandard} rounded-full text-brand-gray-950 text-2xl bg-white inline-flex items-center justify-center text-center hover:text-brand-gray-950/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:text-brand-orange-500 cursor-pointer transition`}>
      {isNext ? (
        <FiChevronRight aria-hidden="true" focusable="false" />
      ) : (
        <FiChevronLeft aria-hidden="true" focusable="false" />
      )}
    </button>
  );
}

export default GalleryArrowButton;
