import React, { useEffect, useState } from "react";
import StatsBand from "./StatsBand";

// Hero slides. To add another slide, copy one block and change the image/text.
// With one slide there is no auto-advance and no dots; with two or more it
// fades between them every 6 seconds.
const SLIDES = [
  {
    image: "/images/hero/hero-door.jpg",
    alt: "Arihant door in a modern bathroom",
    eyebrow: "Waterproof  |  Durable  |  Beautiful",
   
    tagline: "Feels like staring for long",
    text:
      "We combine dependable performance, refined wooden-look finishes and reliable project execution to deliver bathroom door solutions that customers can trust.",
    primary: { label: "Our Products", href: "#products" },
    secondary: { label: "Get a Quote", href: "#contact" },
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (SLIDES.length < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[index];

  return (
    <>
      <section className="hero-banner" aria-roledescription="carousel">
        {/* background photos: full width, fade between slides, no zoom */}
        {SLIDES.map((s, i) => (
          <div
            key={s.image}
            className={`hb-slide${i === index ? " active" : ""}`}
            style={{ backgroundImage: `url(${s.image})` }}
            role="img"
            aria-label={s.alt}
          />
        ))}
        <div className="hb-overlay" />

        {/* text sits on the right so the door on the left stays visible */}
        <div className="wrap hb-inner">
          <div className="hb-copy" key={index}>
            <div className="hb-eyebrow">{slide.eyebrow}</div>
            <h1>
              {slide.line1}
              <br />
              <span className="accent">{slide.line2}</span>
            </h1>
            {slide.tagline && <p className="hb-tagline">{slide.tagline}</p>}
            <p className="hb-text">{slide.text}</p>
            <div className="hero-actions">
              <a href={slide.primary.href} className="btn-primary">{slide.primary.label}</a>
              <a href={slide.secondary.href} className="btn-ghost">{slide.secondary.label}</a>
            </div>
          </div>
        </div>

        {SLIDES.length > 1 && (
          <div className="hb-dots">
            {SLIDES.map((s, i) => (
              <button
                key={s.image}
                className={i === index ? "on" : ""}
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        )}
      </section>
      <StatsBand />
    </>
  );
}