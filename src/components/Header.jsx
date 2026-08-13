import { useState, useRef } from "react";
import { useCart } from "../context/CartContext";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/image-avatar.png";
import { FiShoppingCart as CartIcon } from "react-icons/fi";

import CartPanel from "./CartPanel";

function Header() {
  const { cartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartButtonRef = useRef(null);
  const cartPanelRef = useRef(null);

  useOnClickOutside(
    [cartButtonRef, cartPanelRef],
    () => setIsCartOpen(false),
    isCartOpen,
  );

  function handleKeyDown(event) {
    if (event.key === "Escape" && isCartOpen) {
      setIsCartOpen(false);
      cartButtonRef.current?.focus();
    }
  }

  return (
    <header
      className="relative py-6 px-6 sm:mb-12 lg:mb-24 sm:px-0 sm:border-b border-brand-gray-300"
      onKeyDown={handleKeyDown}>
      <div className="flex items-center justify-between">
        <img src={logo} alt="Sneakers logo" className="mr-4" />

        <div className="flex items-center gap-6">
          <button
            ref={cartButtonRef}
            onClick={() => setIsCartOpen((open) => !open)}
            aria-expanded={isCartOpen}
            aria-haspopup="dialog"
            aria-controls="cart-panel"
            aria-label={`Shopping cart, ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
            className="relative size-10 inline-flex items-center justify-center rounded-md text-brand-gray-500 hover:text-brand-gray-950 focus-visible:outline-2 focus-visible:outline-brand-orange-500 transition-colors cursor-pointer">
            <CartIcon aria-hidden="true" className="size-5" />
            {cartCount > 0 && (
              <span
                aria-hidden="true"
                className="absolute top-1 -right-1 bg-brand-orange-500 text-white text-[10px] font-bold rounded-full px-2">
                {cartCount}
              </span>
            )}
          </button>
          <img
            src={avatar}
            alt="User avatar"
            className="size-6 sm:size-12.5 object-cover rounded-full"
          />
        </div>
      </div>

      {isCartOpen && (
        <CartPanel
          panelRef={cartPanelRef}
          onClose={() => {
            setIsCartOpen(false);
            cartButtonRef.current?.focus();
          }}
        />
      )}
    </header>
  );
}

export default Header;
