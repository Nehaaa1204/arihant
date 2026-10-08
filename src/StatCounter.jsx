import React, { useEffect, useRef, useState } from "react";

export default function StatCounter({ count, suffix, label }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            const duration = 1100;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(eased * count));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [count]);

  return (
    <div className="stat-block" ref={ref}>
      <div className="stat-num">{value}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
