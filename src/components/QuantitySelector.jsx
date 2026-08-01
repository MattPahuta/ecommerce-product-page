import { FiMinus, FiPlus } from "react-icons/fi";

function QuantitySelector({ quantity, onDecrement, onIncrement }) {
  return (
    <div role="group" aria-label="Select quantity" className="p-4 flex items-center justify-between bg-brand-gray-050 rounded-xl">
      <button
        onClick={onDecrement}
        disabled={quantity === 0}
        id="decrement"
        className="p-4 text-brand-orange-500 cursor-pointer">
        <span className="sr-only">Decrease quanity</span>
        <FiMinus />
      </button>
      <output htmlFor="decrement increment" className="font-bold">
        {quantity}
      </output>
      <button
        onClick={onIncrement}
        disabled={quantity === 99}
        id="increment"
        className="p-4 text-brand-orange-500 cursor-pointer">
        <span className="sr-only">Increase quantity</span>
        <FiPlus />
      </button>
    </div>
  );
}

export default QuantitySelector;