import { FiMinus, FiPlus } from "react-icons/fi";

function QuantitySelector({ quantity, onDecrement, onIncrement }) {
  return (
    <div role="group" aria-label="Select quantity" className="p-1 flex items-center justify-between bg-brand-gray-050 rounded-xl">
      <button
        onClick={onDecrement}
        disabled={quantity === 0}
        id="decrement"
        className="p-4 rounded-lg text-orange-900 cursor-pointer hover:text-brand-orange-500 focus-visible:outline-2 focus-visible:outline-brand-orange-500 transition-colors">
        <span className="sr-only">Decrease quanity</span>
        <FiMinus aria-hidden="true" />
      </button>
      <output htmlFor="decrement increment" className="font-bold">
        {quantity}
      </output>
      <button
        onClick={onIncrement}
        disabled={quantity === 99}
        id="increment"
        className="p-4 rounded-xl text-orange-900 cursor-pointer hover:text-brand-orange-500 focus-visible:outline-2 focus-visible:outline-brand-orange-500 transition-colors">
        <span className="sr-only">Increase quantity</span>
        <FiPlus aria-hidden="true" />
      </button>
    </div>
  );
}

export default QuantitySelector;