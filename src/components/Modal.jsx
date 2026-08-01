// src/components/Modal.jsx
import { useEffect } from "react";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

function Modal({ isOpen, onClose, labelledBy, children }) {
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <FocusLock>
      <RemoveScroll>
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
          onClick={onClose}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            onClick={(event) => event.stopPropagation()}
            className="max-w-137.5 w-full flex flex-col">
            {children}
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

export default Modal;
