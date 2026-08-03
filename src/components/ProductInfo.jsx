import { useState } from "react";
import { useCart } from "../context/CartContext";
import QuantitySelector from "./QuantitySelector";
import { FiShoppingCart } from "react-icons/fi";

// ** ToDo: consolidate product data, including images, in data file
const product = {
  id: 1,
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  discountPrice: 125,
  discountPercentage: 50,
  fullPrice: 250,
};

function ProductInfo() {
  const [quantity, setQuantity] = useState(0);
  const [showError, setShowError] = useState(false);
  const { addToCart } = useCart();
  // Reset error message when quantity is increased above 0
  quantity > 0 && showError && setShowError(false);

  function handleAddToCart() {
    if (quantity === 0) {
      setShowError(true);
      return;
    }
    addToCart(product, quantity);
    setQuantity(0);
  }

  return (
    <section className="p-6 sm:p-0">
      <p className="mb-4 text-xs sm:text-[0.813rem] font-bold uppercase text-brand-gray-500 tracking-widest">
        Sneaker Company
      </p>
      <h1 className="mb-4 text-3xl sm:text-[2.75rem] font-bold">{product.name}</h1>
      <p className="text-brand-gray-500 leading-relaxed">
        {product.description}
      </p>

      <div className="my-8 flex sm:flex-col items-center sm:items-start justify-between">
        <div className="flex gap-4">
          <span className="text-3xl font-bold">
            ${product.discountPrice.toFixed(2)}
          </span>
          <span className="py-0.5 px-2.5 self-start bg-brand-gray-950 text-white font-bold rounded-md">
            {product.discountPercentage}%
          </span>
        </div>
        <p className="font-bold text-brand-gray-500 line-through">
          ${product.fullPrice.toFixed(2)}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <QuantitySelector
          quantity={quantity}
          onDecrement={() => setQuantity((prev) => prev - 1)}
          onIncrement={() => setQuantity((prev) => prev + 1)}
        />
        <button
          onClick={handleAddToCart}
          className="p-4 font-bold bg-brand-orange-500 inline-flex gap-4 items-center justify-center rounded-xl shadow-md cursor-pointer hover:bg-brand-orange-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gray-950 active:bg-brand-orange-500/90 transition">
          <FiShoppingCart aria-hidden="true" />
          Add to cart
        </button>
      </div>

      {showError && (
        <p role="alert" className="mt-4 text-sm text-red-600 font-semibold">
          Please select a quantity before adding to cart.
        </p>
      )}
    </section>
  );
}

export default ProductInfo;
