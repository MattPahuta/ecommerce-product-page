import { useEffect } from "react";
import { navLinks } from "../data/nav-links";
import { FiX as Close } from "react-icons/fi";
import FocusLock from "react-focus-lock";

function MobileMenu({ onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <FocusLock>
      <div className="fixed inset-0 z-50 flex bg-black/75">
        <div className="min-w-62.5 sm:min-w-75 p-6 sm:py-12 sm:px-20 bg-white">
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="mb-10 rounded-sm cursor-pointer hover:text-brand-gray-500 focus-visible:outline-2 focus-visible:outline-brand-gray-950">
            <Close aria-hidden="true" className="size-6" />
          </button>
          <div className="">
            <ul className="flex flex-col gap-6 font-bold">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-brand-gray-500 hover:underline hover:underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </FocusLock>
  );
}

export default MobileMenu;
