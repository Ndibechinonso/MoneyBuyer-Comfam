import { useEffect, useRef } from "react";

function useScrollToView() {
  const mountOnce = useRef(false);
  const elementRef = useRef(null);
  useEffect(() => {
    if (mountOnce.current) {
      return;
    }
    elementRef.current.scrollIntoView({ behavior: "smooth", block: "end" });

    mountOnce.current = true;
  }, []);

  return elementRef;
}

export default useScrollToView;
