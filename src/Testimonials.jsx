import React, { useRef } from "react";

// ADD YOUR REAL CLIENT TESTIMONIALS HERE.
// Copy one block per client. Delete `sample: true` once the quote is real
// (cards marked sample show a "Sample – replace" tag so you don't forget them).
const TESTIMONIALS = [
  {
    quote: "Write the client's own words here.",
    name: "Client name",
    role: "Designation, Company",
    sample: true,
  },
  {
    quote: "Write the client's own words here.",
    name: "Client name",
    role: "Designation, Company",
    sample: true,
  },
  {
    quote: "Write the client's own words here.",
    name: "Client name",
    role: "Designation, Company",
    sample: true,
  },
  {
    quote: "Write the client's own words here.",
    name: "Client name",
    role: "Designation, Company",
    sample: true,
  },
];

export default function Testimonials() {
  const track = useRef(null);

  const scroll = (dir) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector(".testi-card");
    const step = card ? card.offsetWidth + 22 : 340;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <h2>What our clients say</h2>
          <p>Words from the builders, architects and partners we work with.</p>
        </div>

        <div className="testi-wrap">
          <button className="testi-arrow left" onClick={() => scroll(-1)} aria-label="Previous testimonials">
            ‹
          </button>
          <div className="testi-track" ref={track}>
            {TESTIMONIALS.map((t, i) => (
              <figure className="testi-card" key={i}>
                <span className="testi-mark" aria-hidden="true">&ldquo;</span>
                {t.sample && <span className="testi-sample">Sample – replace</span>}
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <span className="testi-avatar" aria-hidden="true">{t.name.charAt(0)}</span>
                  <span>
                    <strong>{t.name}</strong>
                    <small>{t.role}</small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <button className="testi-arrow right" onClick={() => scroll(1)} aria-label="Next testimonials">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}