import React from "react";

// Simple line icons (24x24). Matched to a feature by keyword in its label.
const ICONS = {
  premium: (
    <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />
  ),
  style: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.3 8-8 9-4.7-1-8-4.5-8-9V6z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  korean: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
    </>
  ),
  iso: (
    <>
      <circle cx="12" cy="10" r="5" />
      <path d="M9.5 10l1.8 1.8 3.2-3.6M8.5 14.5L7 21l5-2.5 5 2.5-1.5-6.5" />
    </>
  ),
  water: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />,
  wood: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7c2 2 2 8 0 10M12 6c2 2.5 2 9 0 12M16 7c-2 2-2 8 0 10" />
    </>
  ),
  durable: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.3 8-8 9-4.7-1-8-4.5-8-9V6z" />
      <path d="M12 8v5" />
      <path d="M12 16h.01" />
    </>
  ),
  light: (
    <path d="M20.2 3.8C13 3.5 7 8 6 15l-2 5 5-2c7-1 11.5-7 11.2-14.2zM9 15l7-7" />
  ),
  termite: (
    <>
      <ellipse cx="12" cy="14" rx="4" ry="5.5" />
      <path d="M9 8c0-2 6-2 6 0M12 8.5v11M8 12H4M16 12h4M8.5 16L5 18M15.5 16l3.5 2" />
      <path d="M3 3l18 18" />
    </>
  ),
  eco: (
    <>
      <path d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15" />
      <path d="M5 19c3-5 6-8 10-10" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.7 2.7L16 9.5" />
    </>
  ),
};

function pickIcon(label) {
  const l = label.toLowerCase();
  if (l.includes("premium")) return ICONS.premium;
  if (l.includes("style")) return ICONS.style;
  if (l.includes("korean")) return ICONS.korean;
  if (l.includes("iso")) return ICONS.iso;
  if (l.includes("water")) return ICONS.water;
  if (l.includes("wood") || l.includes("grain")) return ICONS.wood;
  if (l.includes("light")) return ICONS.light;
  if (l.includes("termite")) return ICONS.termite;
  if (l.includes("eco")) return ICONS.eco;
  if (l.includes("durable")) return ICONS.durable;
  return ICONS.check;
}

function Icon({ label }) {
  return (
    <span className="dd-ico" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {pickIcon(label)}
      </svg>
    </span>
  );
}

// A door photo in the middle with property labels and arrows pointing outwards.
// Left column gets the first half of the features, right column the rest.
export default function DoorDiagram({ image, alt, features }) {
  const half = Math.ceil(features.length / 2);
  const left = features.slice(0, half);
  const right = features.slice(half);

  return (
    <div className="dd">
      <div className="dd-col dd-left">
        {left.map((f) => (
          <div className="dd-item" key={f}>
            <span className="dd-label">
              <Icon label={f} />
              <span>{f}</span>
            </span>
            <span className="dd-line" aria-hidden="true" />
          </div>
        ))}
      </div>

      <div className="dd-door">
        <img src={image} alt={alt} />
      </div>

      <div className="dd-col dd-right">
        {right.map((f) => (
          <div className="dd-item" key={f}>
            <span className="dd-line" aria-hidden="true" />
            <span className="dd-label">
              <Icon label={f} />
              <span>{f}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}