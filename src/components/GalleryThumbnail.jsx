function GalleryThumbnail({ image, alt, label, isActive, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={isActive}
      aria-label={label}
      className="relative group size-22 aspect-square rounded-[10px] overflow-hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange-500">
      <span className="sr-only">Toggle image</span>
      <img
        src={image}
        alt={alt}
        className={`object-cover backdrop:backdrop-blur-2xl ${isActive ? "opacity-40" : "opacity-100"} group-hover:opacity-50 transition-opacity`}
      />
      <span
        className="absolute w-full h-full inset-0 border-2 border-brand-orange-500 rounded-[10px] transition-opacity"
        style={{ opacity: isActive ? 1 : 0 }}></span>
    </button>
  );
}

export default GalleryThumbnail;
