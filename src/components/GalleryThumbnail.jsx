function GalleryThumbnail({
  image,
  alt,
  label,
  isActive,
  onSelect,
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={isActive}
      aria-label={label}
      className={`size-22 aspect-square rounded-lg overflow-hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gray-950 ${isActive ? "border-2 border-brand-orange-500 inset" : ""}`}>
      <img
        src={image}
        alt={alt}
        className={`object-cover backdrop:backdrop-blur-2xl ${isActive ? "opacity-40" : "opacity-100"} hover:opacity-50 transition  `}
      />
    </button>
  );
}

export default GalleryThumbnail;
