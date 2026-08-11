// Import product gallery images
import mainImage1 from "../assets/images/image-product-1.jpg";
import mainImage2 from "../assets/images/image-product-2.jpg";
import mainImage3 from "../assets/images/image-product-3.jpg";
import mainImage4 from "../assets/images/image-product-4.jpg";
import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

export const product = {
  id: 1,
  brand: "Sneaker Company",
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  fullPrice: 250,
  promoRate: 0.5,
  images: [
    { id: 1, src: mainImage1, thumbnailSrc: thumbnail1, alt: "White and tan low-profile sneakers, side view of one shoe with the other tipped forward to highlight the sole tread" },
    { id: 2, src: mainImage2, thumbnailSrc: thumbnail2, alt: "White and tan low-profile sneakers, one shoe resting on a small tower of white stones with the other tipped forward highlting the shoe top" },
    { id: 3, src: mainImage3, thumbnailSrc: thumbnail3, alt: "A single white and tan low-profile sneaker placed on a pair of white stones" },
    { id: 4, src: mainImage4, thumbnailSrc: thumbnail4, alt: "A single white and tan low-profile sneaker, the heel balancing on a pair of white stones" }
  ],
};

export function getCurrentPrice({ fullPrice, promoRate }) {
  return fullPrice * (1 - promoRate);
}

export function getDiscountPercent({ promoRate }) {
  return Math.round(promoRate * 100);
}