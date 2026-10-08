import React from "react";

// Replace these with real installed-door photos, e.g. /images/gallery/site-01.jpg
const GALLERY_IMAGES = [
  "/images/gallery/site-01.jpg",
  "/images/gallery/site-02.jpg",
  "/images/gallery/site-03.jpg",
  "/images/gallery/site-04.jpg",
  "/images/gallery/site-05.jpg",
  "/images/gallery/site-06.jpg",
];

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="wrap">
        <div className="section-head">
          <h2>Doors, on site</h2>
          <p>A look at Arihant Doors installed across residential, commercial and government projects.</p>
        </div>
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((src, i) => (
            <div className="gallery-item" key={i}>
              <img src={src} alt={`Installed Arihant door ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
