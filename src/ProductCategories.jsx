import React, { useState } from "react";

// Real catalogue data extracted from FRP_2023.pdf, CCAP_2023.pdf, ABS_DOOR_TECHNICAL_SPECIFICATION.pdf
const CATEGORIES = [
  {
    id: "abs",
    title: "ABS Door",
    tagline: "Waterproof, factory-made moulded doors",
    image: "/images/products/ABS DOOR TECHNICAL SPECIFICATION_page-0001.jpg",
    specs: [
      "Pre-laminated ABS sheet (1mm / 1.5mm)",
      "High-density honeycomb or particle board core (30mm)",
      "Waterproof solid fiber WPC frame, pine wood reinforcement",
      "0.8mm PVC edge banding",
      "Thickness: 30mm / 35mm",
    ],
    variants: [
      { code: "Plain Wood Grain", colours: ["R. Ivory", "White", "L. Grey", "G. Brown", "C. Brown"] },
      { code: "AD 002", colours: ["R. Ivory", "White", "L. Grey", "G. Brown", "C. Brown"] },
      { code: "AD 003", colours: ["G. Brown", "White", "L. Grey", "R. Ivory", "C. Brown"] },
    ],
  },
  {
    id: "frp",
    title: "FRP Door",
    tagline: "Sound proof, water and stain resistant",
    image: "/images/products/FRP 2023_page-0002.jpg",
    specs: [
      "Max size available: 36\" x 84\"",
      "Thickness: 30mm / 35mm",
      "Sound proof, stain resistant, water resistant, cost effective",
    ],
    variants: [
      { code: "AD 002", colours: ["R. Ivory", "White", "L. Grey", "G. Brown", "C. Brown"] },
      { code: "AD 004", colours: ["G. Brown", "White", "L. Grey", "R. Ivory", "C. Brown"] },
      { code: "AD 006", colours: ["C. Brown", "White", "L. Grey", "G. Brown", "R. Ivory"] },
      { code: "AD 008", colours: ["L. Grey", "White", "R. Ivory", "G. Brown", "C. Brown"] },
      { code: "AD 012", colours: ["G. Brown", "White", "C. Brown", "L. Grey", "R. Ivory"] },
      { code: "AD 014", colours: ["C. Brown", "White", "L. Grey", "G. Brown", "R. Ivory"] },
    ],
  },
  {
    id: "hybrid",
    title: "Hybrid Door",
    tagline: "FRP skin with a reinforced internal construction",
    image: "/images/products/custom-door.jpg",
    specs: [
      "FRP outer skins for water and stain resistance",
      "Reinforced internal core for added strength",
      "Designed for demanding, high-traffic conditions",
    ],
    variants: [
      { code: "By project spec", colours: ["R. Ivory", "White", "L. Grey", "G. Brown", "C. Brown"] },
    ],
  },
  {
    id: "ccap",
    title: "Customised Door",
    tagline: "C-Cap series and made-to-spec designs",
    image: "/images/products/CCAP 2023_page-0002.jpg",
    specs: [
      "Max size available: 28\" x 82\" (C-Cap) — larger sizes on request",
      "Thickness: 30mm",
      "Light weight, stain resistant, water resistant",
    ],
    variants: [
      { code: "C-Cap 001", colours: ["R. Ivory", "White", "L. Grey", "G. Brown", "C. Brown"] },
      { code: "C-Cap 002", colours: ["L. Grey", "White", "G. Brown", "C. Brown", "R. Ivory"] },
      { code: "C-Cap 004", colours: ["G. Brown", "White", "L. Grey", "C. Brown", "R. Ivory"] },
      { code: "C-Cap 005", colours: ["L. Grey", "White", "G. Brown", "C. Brown", "R. Ivory"] },
      { code: "C-Cap 006", colours: ["G. Brown", "White", "L. Grey", "C. Brown", "R. Ivory"] },
      { code: "C-Cap 007", colours: ["G. Brown", "White", "L. Grey", "C. Brown", "R. Ivory"] },
      { code: "C-Cap 008", colours: ["C. Brown", "White", "L. Grey", "G. Brown", "R. Ivory"] },
    ],
  },
];

export default function ProductCategories() {
  const [active, setActive] = useState(null);
  const activeCategory = CATEGORIES.find((c) => c.id === active);

  return (
    <section id="products">
      <div className="wrap">
        <div className="section-head">
          <h2>Our products</h2>
          <p>Four door categories, each engineered for a different combination of moisture, load and design requirement. Tap a category to see sizes, colours and product codes.</p>
        </div>

        <div className="category-grid">
          {CATEGORIES.map((c) => (
            <button
              className="category-tile"
              key={c.id}
              onClick={() => setActive(c.id)}
            >
              <div className="category-tile-photo">
                <img src={c.image} alt={c.title} loading="lazy" />
              </div>
              <div className="category-tile-label">
                <h3>{c.title}</h3>
                <span>{c.tagline}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeCategory && (
        <div className="category-modal-backdrop" onClick={() => setActive(null)}>
          <div className="category-modal" onClick={(e) => e.stopPropagation()}>
            <button className="category-modal-close" onClick={() => setActive(null)} aria-label="Close">×</button>
            <div className="category-modal-header">
              <img src={activeCategory.image} alt={activeCategory.title} />
              <div>
                <h3>{activeCategory.title}</h3>
                <p>{activeCategory.tagline}</p>
              </div>
            </div>

            <div className="category-modal-specs">
              {activeCategory.specs.map((s) => <span key={s}>{s}</span>)}
            </div>

            <div className="category-modal-variants">
              <h4>Available designs</h4>
              {activeCategory.variants.map((v) => (
                <div className="variant-row" key={v.code}>
                  <span className="variant-code">{v.code}</span>
                  <div className="variant-colours">
                    {v.colours.map((c) => <span key={c}>{c}</span>)}
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary" onClick={() => setActive(null)}>
              Enquire about {activeCategory.title}
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
