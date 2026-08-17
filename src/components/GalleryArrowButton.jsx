import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useMediaQuery } from "../hooks/useMediaQuery";

function ArrowButton({ direction, onClick }) {
  const isNext = direction === "next";
  const isDesktop = useMediaQuery("(min-width: 64rem)");
  const offsetClassStandard = isNext ? "right-4" : "left-4";
  const offsetClassLarge = isNext ? "-right-7" : "-left-7";
  const clasName = isDesktop ? `size-14 ${offsetClassLarge}` : `size-10 ${offsetClassStandard}`;

  return (
    <button
      onClick={onClick}
      aria-label={isNext ? "Next image" : "Previous image"}
      className={`group absolute top-1/2 -translate-y-1/2 rounded-full text-brand-gray-950 text-2xl bg-white inline-flex items-center justify-center text-center ${clasName} hover:text-brand-orange-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:text-brand-orange-500 cursor-pointer transition`}>
      {isNext ? (
        <FiChevronRight aria-hidden="true" focusable="false" />
      ) : (
        <FiChevronLeft aria-hidden="true" focusable="false" />
      )}
    </button>
  );
}

export default ArrowButton;
