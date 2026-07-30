import { useEffect, useRef } from "react";

function Modal({ isOpen, onClose, labelledBy, children }) {
  const dialogRef = useRef(null);
  const previouslyFocusedElement = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocusedElement.current = document.activeElement;

    const dialogNode = dialogRef.current;
    const focusableSelector =
      'button, [href], input, [tabindex]:not([tabindex="-1"])';
    const focusableElements =
      dialogNode.querySelectorAll(focusableSelector);
    const firstFocusable = focusableElements[0];
    const lastFocusable =
      focusableElements[focusableElements.length - 1];

    firstFocusable?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      if (
        event.shiftKey &&
        document.activeElement === firstFocusable
      ) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastFocusable
      ) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocusedElement.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
      onClick={onClose}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        onClick={(event) => event.stopPropagation()}
        className="bg-white rounded-lg p-6 max-w-lg w-full">
        {children}
      </div>
    </div>
  );
}

export default Modal;
