import { useEffect } from "react";

// Elements that fade up when they scroll into view
const FADE = ".section-head, .about-grid > div, .why-card, .vm-card, .value-card, .promise-inner > *, .sector-tile, .category-tile, .service-card, .contact-grid > *, .gallery-cta, .client-marquee, .pp-photo, .pp-copy, .variant-card, .pp-more-row, .footer-main > *";
// Photos that wipe open like a curtain
const CURTAIN = ".gallery-item, .category-tile-photo";

// Pass something that changes with the page (e.g. the pathname) so the
// animations are set up again for each new page.
export default function useReveal(pageKey) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("kx-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(`${FADE}, ${CURTAIN}`).forEach((el) => {
      const curtain = el.matches(CURTAIN);
      el.classList.add(curtain ? "kx-curtain" : "kx-reveal");
      // stagger neighbours so cards appear one after another
      const index = Array.prototype.indexOf.call(el.parentElement.children, el);
      el.style.setProperty("--kx-delay", `${Math.min(index, 6) * 90}ms`);
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pageKey]);
}