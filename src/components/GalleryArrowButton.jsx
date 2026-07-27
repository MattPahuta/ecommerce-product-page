import iconPrevious from "../assets/images/icon-previous.svg";
import iconNext from "../assets/images/icon-next.svg";

function GalleryArrowButton({ direction, onClick }) {
  const isNext = direction === "next";

  return (
    <button
      onClick={onClick}
      aria-label={isNext ? "Next image" : "Previous image"}
      className={`absolute top-1/2 -translate-y-1/2 ${isNext ? "right-4" : "left-4"} size-10 rounded-full bg-white flex items-center justify-center focus-visible:outline foucs-visible:outline-2 focus-visible:outline-offset-2`}>
      <img
        src={isNext ? iconNext : iconPrevious}
        alt=""
        aria-hidden="true"
        focusable="false"
      />
    </button>
  );
}

export default GalleryArrowButton;
