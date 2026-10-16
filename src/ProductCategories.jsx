import React from "react";
import { Link } from "react-router-dom";
import { PRODUCT_LIST } from "./Productsdata";
import "./products-style.css";

export default function ProductCategories() {
  return (
    <section id="products" className="pc">
      <div className="wrap">
        <div className="section-head">
          <h2>Our products</h2>
          <p>
            Two door ranges, each engineered for different moisture, load and design needs.
            Open one to see sizes, colours and product codes.
          </p>
        </div>

        <div className="pc-grid">
          {PRODUCT_LIST.map((c, i) => (
            <Link className="pc-card" to={c.path} key={c.slug}>
              <div className="pc-photo">
                <img src={c.tileImage || c.image} alt={c.title} loading="lazy" />
                <span className="pc-badge">{c.features[0]}</span>
              </div>
              <div className="pc-body">
                <span className="pc-num">0{i + 1}</span>
                <h3>{c.title}</h3>
                <p className="pc-tagline">{c.tagline}</p>
                <ul className="pc-tags">
                  {c.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <span className="pc-btn">View designs <i>→</i></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}