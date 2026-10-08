import React from "react";

const PRODUCTS = [
  {
    title: "ABS Moulded Doors",
    desc: "Waterproof solid fiber WPC frame with high-density honeycomb or particle board core, reinforced with pine wood and finished with pre-laminated ABS sheets.",
    image: "/images/products/ABS DOOR TECHNICAL SPECIFICATION_page-0001.jpg",
    link: "#contact",
  },
  {
    title: "FRP Series",
    desc: "Sound proof, stain and water resistant doors available in a wide range of moulded designs. Max size 36\" x 84\".",
    image: "/images/products/FRP 2023_page-0002.jpg",
    link: "#contact",
  },
  {
    title: "C-Cap Series",
    desc: "Lightweight, textured moulded doors in bold colours and finishes. 30mm thick, max size 28\" x 82\".",
    image: "/images/products/CCAP 2023_page-0002.jpg",
    link: "#contact",
  },
  {
    title: "Customized Door Solutions",
    desc: "Manufactured in custom sizes, colours and designs across the FRP, C-Cap and ABS ranges to match your project's exact specification.",
    image: "/images/products/custom-door.jpg",
    link: "#contact",
  },
];

export default function Products() {
  return (
    <section id="products">
      <div className="wrap">
        <div className="section-head">
          <h2>Our products</h2>
          <p>Door lines engineered for a different combination of moisture, load and design requirement.</p>
        </div>
        <div className="products-tiles">
          {PRODUCTS.map((p) => (
            <div className="product-tile" key={p.title}>
              <div className="product-tile-photo">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
              <div className="product-tile-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href={p.link} className="product-tile-link">EXPLORE →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}