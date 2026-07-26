
function GalleryThumbnail({ image, isActive, onSelect }) {
  return (
    <button
      onClick={onSelect}
      aria-current={isActive}
      className={`rounded-lg overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 ${isActive ? "border-orange-500" : "border-transparent"}`}>
      <img src={image.thumbnail} alt="" className="size-22 object-cover" />
    </button>
  );
}

export default GalleryThumbnail;