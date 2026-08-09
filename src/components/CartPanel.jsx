import { useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import FocusLock from "react-focus-lock";
import { FiX as Close } from "react-icons/fi";

function CartPanel({ onClose, panelRef }) {
  const { cartItems, removeFromCart } = useCart();
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <FocusLock autoFocus={false}>
      <div
        ref={panelRef}
        id="cart-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className="fixed w-[calc(100%-28px)] sm:max-w-100 left-1/2 -translate-x-1/2 top-24 sm:absolute sm:left-auto sm:translate-x-0 sm:-right-16 sm:top-full sm:mt-4 z-40 bg-white rounded-lg shadow-xl">
        <header className="py-6 border-b border-brand-gray-100">
          <div className="px-4 flex items-center justify-between">
            <h2
              ref={headingRef}
              tabIndex={-1}
              className="font-bold outline-none">
              Cart
            </h2>
            <button
              onClick={onClose}
              className="size-8 rounded-md inline-flex items-center justify-center hover:text-brand-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer transition-colors">
              <Close aria-hidden="true" className="size-7" />
              <span className="sr-only">Close shopping cart</span>
            </button>
          </div>
        </header>

        {cartItems.length === 0 && (
          <p className="py-20 text-brand-gray-500 font-bold text-center">
            Your cart is empty.
          </p>
        )}

        {cartItems.length >= 1 && (
          <div className="py-6 px-4 space-y-6">
            <ul className="divide-y">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={() => removeFromCart(item.id)}
                />
              ))}
            </ul>

            <button
              onClick={onClose}
              className="w-full py-4 inline-flex items-center justify-center rounded-xl bg-brand-orange-500 text-brand-gray-950 font-bold cursor-pointer hover:bg-brand-orange-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gray-950 transition">
              Checkout
            </button>
          </div>
        )}
      </div>
    </FocusLock>
  );
}

export default CartPanel;
