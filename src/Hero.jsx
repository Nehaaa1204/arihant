import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="hero-eyebrow-line"><span className="tick"></span><span>Door manufacturing, since 1993</span></div>
          <h1>Strength, durability &amp; innovation, built into every door.</h1>
          <p className="lead">Arihant Doors manufactures and installs ABS moulded, FRP and Hybrid FRP door solutions for residential, commercial, government and infrastructure projects engineered for water resistance, dimensional stability and a long service life.</p>
          <div className="hero-actions">
            <a href="#products" className="btn-primary">View our products</a>
            <a href="#contact" className="btn-secondary">Get a quote</a>
          </div>
        </div>
        <div className="hero-art">
          {/* Real photo backdrop -- replace with an installed/finished door shot, e.g. /images/hero/hero-door.jpg */}
          <div className="hero-photo-backdrop">
            <img src="/images/hero/hero-door.jpg" alt="Arihant Doors installed door" loading="eager" />
          </div>
          <svg viewBox="0 0 220 300" xmlns="http://www.w3.org/2000/svg">
            <rect className="door-fill" x="30" y="20" width="140" height="240" rx="2" />
            <rect className="door-outline" x="30" y="20" width="140" height="240" rx="2" />
            <rect className="door-panel" x="48" y="42" width="104" height="88" rx="2" />
            <rect className="door-panel" x="48" y="150" width="104" height="88" rx="2" />
            <circle className="door-panel" cx="150" cy="140" r="3.5" fill="none" />
            <line className="measure-line" x1="182" y1="20" x2="182" y2="260" />
            <line className="measure-line" x1="176" y1="20" x2="188" y2="20" />
            <line className="measure-line" x1="176" y1="260" x2="188" y2="260" />
            <text className="measure-text" x="192" y="143" transform="rotate(90 192 143)" textAnchor="middle">2100 mm</text>
            <line className="measure-line" x1="30" y1="272" x2="170" y2="272" />
            <line className="measure-line" x1="30" y1="266" x2="30" y2="278" />
            <line className="measure-line" x1="170" y1="266" x2="170" y2="278" />
            <text className="measure-text" x="100" y="290" textAnchor="middle">900 mm</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
