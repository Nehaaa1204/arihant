import React, { useEffect, useState } from "react";
import StatsBand from "./StatsBand";

const SLIDES = [
  {
    image: "/images/hero/hero-door3.jpeg",
    alt: "Arihant door in a modern bathroom",
    line1: "Luxury Wooden",
    line2: "Bathroom Doors",
    tagline: "Modern finishes that stand the test of time",
    text:
      "We combine dependable performance, refined wooden-look finishes and reliable project execution to deliver bathroom door solutions that customers can trust.",
    primary: { label: "Our Products", href: "#products" },
    secondary: { label: "Get a Quote", href: "#contact" },
  },
  {
    image:"/images/hero/hero-door.jpg",
    alt: "Modern interior bathroom design",
    line1: "Built for",
    line2: "Everyday Living",
    tagline: "Strong, elegant surfaces made to handle busy homes",
    text:
      "Our bathroom doors are crafted to resist moisture, maintain their look and add a premium feel to residential and commercial interiors.",
    primary: { label: "Explore Range", href: "#products" },
    secondary: { label: "Book a Visit", href: "#contact" },
  },
  {
    image:"/images/hero/herodoor2.jpeg",
    alt: "Contemporary home interior with custom doors",
    line1: "Tailored",
    line2: "Door Solutions",
    tagline: "Designed around your style, space and project needs",
    text:
      "From compact bathrooms to luxury interiors, Arihant Doors delivers durable, customized styling backed by practical service and smart project support.",
    primary: { label: "View Collection", href: "#products" },
    secondary: { label: "Talk to Us", href: "#contact" },
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (SLIDES.length < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 4000);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[index];
  const isLeftAligned = index === 0 || index === SLIDES.length - 1;

  return (
    <>
      <section
        className={`hero-banner${isLeftAligned ? " hero-banner-left" : ""}`}
        aria-roledescription="carousel"
      >
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

        <div className={`wrap hb-inner${isLeftAligned ? " hb-inner-left" : ""}`}>
          <div className={`hb-copy${isLeftAligned ? " hb-copy-left" : ""}`} key={index}>
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

      </section>
      <StatsBand />
    </>
  );
}