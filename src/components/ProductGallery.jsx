import { useState } from 'react';

const images = [
  {
    id: 1,
    src: "../assets/images/image-product-1.jpg",
    alt: "White and tan low-profile sneakers, side view of one shoe with the other tipped forward to highlight the sole tread",
  },
  {
    id: 2,
    src: "../assets/images/image-product-2.jpg",
    alt: "White and tan low-profile sneakers, one shoe resting on a small tower of white stones with the other tipped forward highlting the shoe top",
  },
  {
    id: 3,
    src: "../assets/images/image-product-3.jpg",
    alt: "A single white and tan low-profile sneaker placed on a pair of white stones",
  },
  {
    id: 4,
    src: "../assets/images/image-product-4.jpg",
    alt: "A single white and tan low-profile sneaker, the heel balancing on a pair of white stones",
  },
];

function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  return (
    <section aria-label="Product images" className="p-4">
      <img src={activeImage.src} alt={activeImage.alt} className="w-full rounded-2xl" />

      <div role="group" aria-label="Choose product image" className="mt-4 flex gap-8">
        {images.map((image, index) => {
          const isActive = index === activeIndex;
          return (
            <button key={image.id} onClick={() => setActiveIndex(index)} aria-current={isActive} className={`rounded-lg overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 ${isActive ? 'border-orange-500' : 'border-transparent'}`}>
              <img src={image.src} alt="" className="size-22 object-cover" />
            </button>
          );
        })}
      </div>
    </section>
  )
}

export default ProductGallery;