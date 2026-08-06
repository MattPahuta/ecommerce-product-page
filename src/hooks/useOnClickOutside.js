import { useEffect } from "react";

export function useOnClickOutside(refs, handler, isActive) {
  useEffect(() => {
    if (!isActive) return;

    function handleClick(event) {
      const clickedInside = refs.some((ref) => ref.current?.contains(event.target));
      if (!clickedInside) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [refs, handler, isActive]);
}
