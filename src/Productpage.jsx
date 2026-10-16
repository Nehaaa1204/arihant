
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { PRODUCTS, COLOUR_HEX } from "./Productsdata";
import DoorDiagram from "./Doordiagram";
import Contact from "./Contact";
import "./products-style.css";

export default function ProductPage({ slug }) {
  const p = PRODUCTS[slug];
  const [showTop, setShowTop] = useState(false);
  const [open, setOpen] = useState(null); // the design card that is expanded

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the expanded design with the Escape key, and lock page scroll while it is open
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!p) return <Navigate to="/" replace />;
  const other = slug === "abs" ? PRODUCTS.frp : PRODUCTS.abs;
  const detailImages = p.detailImages ?? [p.image];

  // group the design cards (ABS has "Solid colour" and "Wooden colour" groups)
  const groups = [];
  p.variants.forEach((v) => {
    const name = v.group || "";
    let g = groups.find((x) => x.name === name);
    if (!g) {
      g = { name, items: [] };
      groups.push(g);
    }
    g.items.push(v);
  });

  return (
    <>
      {/* Cover banner */}
      <section className="pp-banner pp-cover">
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
          <ul className="pp-pills">
            {p.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quick jump bar */}
      <nav className="pp-jump" aria-label="On this page">
        <div className="wrap pp-jump-row">
          <a href="#properties">Key properties</a>
          <a href="#overview">Specifications</a>
          <a href="#designs">Designs</a>
          <a href="#contact">Enquire</a>
        </div>
      </nav>

      {/* Door with arrows pointing at its properties */}
      <section className="pp-props" id="properties">
        <div className="wrap">
          <div className="section-head">
            <h2>Why {p.title}</h2>
            <p>The qualities that make this range a dependable choice.</p>
          </div>
          <DoorDiagram image={p.doorImage} alt={`${p.title} door`} features={p.features} />
        </div>
      </section>

      {/* Overview: photo + specifications */}
      <section className="pp-overview" id="overview">
        <div className="wrap pp-grid">
          <div className="pp-gallery">
            {detailImages.map((img, index) => (
              <div className="pp-photo" key={`${p.slug}-${index}`}>
                <img src={img} alt={`${p.title}${index === 0 ? "" : " cross section"}`} />
              </div>
            ))}
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
            <p>Click a design to see it larger.</p>
          </div>
          {groups.map((g) => (
            <div className="pp-dgroup" key={g.name || "all"}>
              {g.name && <h3 className="pp-dgroup-title">{g.name}</h3>}
              <div className="pp-dgrid">
                {g.items.map((v) => (
                  <button
                    type="button"
                    className="pp-dcard"
                    key={`${g.name}-${v.code}`}
                    onClick={() => setOpen(v)}
                  >
                    {v.image && (
                      <span className="pp-dthumb">
                        <img src={v.image} alt={v.code} loading="lazy" />
                      </span>
                    )}
                    <span className="pp-dname">{v.code}</span>
                    <span className="pp-dmore">{v.image ? "Enlarge" : "View colours"} +</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expanded design */}
      {open && (
        <div className="pp-modal" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <div className="pp-modal-box" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="pp-modal-x" onClick={() => setOpen(null)} aria-label="Close">
              ×
            </button>
            {open.image && (
              <div className="pp-modal-img">
                <img src={open.image} alt={open.code} />
              </div>
            )}
            <div className="pp-modal-info">
              <h3>{open.code}</h3>
              {open.colours && open.colours.length > 0 && (
                <>
                  <p>Available colours</p>
                  <div className="pp-chips">
                    {open.colours.map((c) => (
                      <span className="pp-chip" key={c}>
                        <i style={{ background: COLOUR_HEX[c] || "#ccc" }} />
                        {c}
                      </span>
                    ))}
                  </div>
                </>
              )}
              <a href="#contact" className="btn-primary" onClick={() => setOpen(null)}>
                Enquire about this design
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Move between the two ranges */}
      <section className="pp-more">
        <div className="wrap pp-more-row">
          <Link to="/" className="btn-secondary">← Back to home</Link>
          <Link to={other.path} className="btn-primary">See {other.title} →</Link>
        </div>
      </section>

      <Contact />

      <button
        type="button"
        className={`pp-top${showTop ? " show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}