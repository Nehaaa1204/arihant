import React, { useCallback, useEffect, useRef, useState } from "react";

// Horizontal row of cards with previous / next scroll buttons.
export default function ScrollRow({ children }) {
  const ref = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setEdge({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const go = (dir) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="sr">
      <button
        type="button"
        className="sr-btn sr-prev"
        onClick={() => go(-1)}
        disabled={edge.start}
        aria-label="Scroll left"
      >
        ‹
      </button>
      <div className="sr-track" ref={ref} onScroll={update}>
        {children}
      </div>
      <button
        type="button"
        className="sr-btn sr-next"
        onClick={() => go(1)}
        disabled={edge.end}
        aria-label="Scroll right"
      >
        ›
      </button>
    </div>
  );
}