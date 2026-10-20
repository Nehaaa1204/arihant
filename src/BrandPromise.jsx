import React from "react";

// Wording comes from "Arihant Doors – Vision, Mission & Values".
const PILLARS = [
  { label: "Waterproof", icon: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" },
  { label: "Premium finishes", icon: "M5 19c0-8 5-13 14-14 0 9-5 14-13 14 M5 19l7-7" },
  { label: "Trusted partner", icon: "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M2 20c0-3 3-5 6-5s6 2 6 5 M13 20c0-3 3-5 5-5s4 2 4 5" },
  { label: "For a better tomorrow", icon: "M4 11l8-7 8 7v9H4z M10 20v-6h4v6" },
];

export default function BrandPromise() {
  return (
    <section className="promise" id="promise">
      <div className="wrap promise-inner">
        <img
          className="promise-photo"
          src="/images/about/promise-door.jpg"
          alt="Arihant wooden-look door with a black handle"
          loading="lazy"
        />
        <div className="promise-copy">
          <span className="promise-eyebrow">Our brand promise</span>
          <h2>Arihant Doors</h2>
          <p className="promise-line">Built for Moisture. Designed for Life.</p>
          <p>
            We combine dependable performance, refined wooden-look finishes and reliable project
            execution to deliver bathroom door solutions that customers can trust.
          </p>
        </div>
        <ul className="promise-pillars">
          {PILLARS.map((p) => (
            <li key={p.label}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={p.icon} />
              </svg>
              <span>{p.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
