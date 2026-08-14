// src/components/Modal.jsx
import { useEffect } from "react";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

function Modal({
  isOpen,
  onClose,
  labelledBy,
  ariaLabel,
  overlayClassName = "items-center justify-center",
  panelClassName = "max-w-137.5 w-full flex flex-col",
  children,
}) {
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
          // className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
          className={`fixed inset-0 z-50 flex bg-black/75 ${overlayClassName}`}
          onClick={onClose}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            aria-label={ariaLabel}
            onClick={(event) => event.stopPropagation()}
            className={panelClassName}>
            {children}
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

export default Modal;
