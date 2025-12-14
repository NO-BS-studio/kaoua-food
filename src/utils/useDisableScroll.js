import { useEffect } from "react";

export default function useDisableScroll(isOpen) {
  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
    };

    if (isOpen) {
      // Disable mouse wheel and touch scrolling
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      // Re-enable scrolling
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    }

    return () => {
      // Cleanup on unmount
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [isOpen]);
}
