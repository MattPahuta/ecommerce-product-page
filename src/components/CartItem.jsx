import { FiTrash2 as TrashIcon } from "react-icons/fi";

function CartItem({ item, onRemove }) {
  return (
    <li className="flex items-center">
      <img
        src={item.thumbnail}
        alt=""
        className="mr-4 size-12 rounded-sm object-cover"
      />
      <div className="w-full">
        <p className="text-brand-gray-500">{item.name}</p>
        <p className="text-brand-gray-500">
          ${item.discountPrice.toFixed(2)} x {item.quantity}
          <span className="ml-2 font-bold text-brand-gray-950">
            ${(item.discountPrice * item.quantity).toFixed(2)}
          </span>
        </p>
      </div>
      <button
        onClick={onRemove}
        className="size-8 inline-flex items-center justify-center rounded-sm text-brand-gray-500 hover:text-brand-gray-950 focus-visible:outline-2 focus-visible:outline-brand-gray-950 focus-visible:outline-offset-2 cursor-pointer transition-colors">
        <span className="sr-only">Remove item from cart</span>
        <TrashIcon aria-hidden="true" />
      </button>
    </li>
  );
}

export default CartItem;
