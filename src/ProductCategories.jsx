import React from "react";
import { Link } from "react-router-dom";
import { PRODUCT_LIST } from "./Productsdata";

export default function ProductCategories() {
  return (
    <section id="products">
      <div className="wrap">
        <div className="section-head">
          <h2>Our products</h2>
          <p>Two door ranges, each engineered for different moisture, load and design needs. Open one to see sizes, colours and product codes.</p>
        </div>

        <div className="category-grid">
          {PRODUCT_LIST.map((c) => (
            <Link className="category-tile" to={c.path} key={c.slug}>
              <div className="category-tile-photo">
                <img src={c.image} alt={c.title} loading="lazy" />
              </div>
              <div className="category-tile-label">
                <h3>{c.title}</h3>
                <span>{c.tagline}</span>
                <em className="category-tile-link">View designs →</em>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}