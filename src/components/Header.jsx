import { useState, useRef } from "react";
import { useCart } from "../context/CartContext";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { navLinks } from "../data/nav-links";
import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg";
import avatar from "../assets/images/image-avatar.png";
import { FiShoppingCart as CartIcon } from "react-icons/fi";
import CartPanel from "./CartPanel";
import MobileMenu from "./MobileMenu";

function Header() {
  const { cartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isDesktopNav = useMediaQuery("(min-width: 64rem)");

  const cartButtonRef = useRef(null);
  const cartPanelRef = useRef(null);
  const navButtonRef = useRef(null);

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
      <nav aria-label="Primary" className="flex items-center">
        <div className="flex gap-3 items-center justify-center">
          {/* tablet and mobile - show the hamburger menu */}
          {!isDesktopNav && (
            <button
              ref={navButtonRef}
              onClick={() => setIsNavOpen(true)}
              aria-expanded={isNavOpen}
              aria-haspopup="true"
              aria-label="Open menu"
              className="size-10 inline-flex items-center justify-center rounded-md hover:bg-brand-gray-050 focus-visible:outline-2 focus-visible:outline-brand-orange-500 transition-colors cursor-pointer">
              <img
                src={menuIcon}
                alt="Sneakers Company logo"
                className="size-4"
              />
            </button>
          )}
          <img src={logo} alt="Sneakers logo" className="" />
        </div>

        {isNavOpen && (
          <MobileMenu onClose={() => setIsNavOpen(false)} />
        )}

        {isDesktopNav && (
          <ul className="ml-14 flex gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-brand-gray-500 rounded-sm hover:text-brand-gray-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gray-950">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="ml-auto flex items-center gap-6">
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
      </nav>

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
