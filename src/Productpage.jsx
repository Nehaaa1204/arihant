import React from "react";
import { Link, Navigate } from "react-router-dom";
import { PRODUCTS } from "./productsData";
import Contact from "./Contact";

export default function ProductPage({ slug }) {
  const p = PRODUCTS[slug];
  if (!p) return <Navigate to="/" replace />;
  const other = slug === "abs" ? PRODUCTS.frp : PRODUCTS.abs;

  return (
    <>
      {/* Banner */}
      <section className="pp-banner">
        <div className="wrap">
          <nav className="pp-crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/#products">Products</Link>
            <span>/</span>
            <span>{p.title}</span>
          </nav>
          <h1>{p.title}</h1>
          <p>{p.tagline}</p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Enquire about {p.title}</a>
            <a href="#designs" className="btn-ghost">See designs</a>
          </div>
        </div>
      </section>

      {/* Overview: photo + specifications */}
      <section className="pp-overview">
        <div className="wrap pp-grid">
          <div className="pp-photo">
            <img src={p.image} alt={p.title} />
          </div>
          <div className="pp-copy">
            <h2>About {p.title}</h2>
            <p>{p.intro}</p>
            <h3>Specifications</h3>
            <ul className="pp-specs">
              {p.specs.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Designs and colours */}
      <section className="pp-designs" id="designs">
        <div className="wrap">
          <div className="section-head">
            <h2>Available designs</h2>
            <p>Product codes and the colours each one comes in.</p>
          </div>
          <div className="variant-grid">
            {p.variants.map((v) => (
              <div className="variant-card" key={v.code}>
                <h3>{v.code}</h3>
                <div className="variant-colours">
                  {v.colours.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Move between the two ranges */}
      <section className="pp-more">
        <div className="wrap pp-more-row">
          <Link to="/" className="btn-secondary">← Back to home</Link>
          <Link to={other.path} className="btn-primary">See {other.title} →</Link>
        </div>
      </section>

      <Contact />
    </>
  );
}