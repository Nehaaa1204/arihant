import React, { useState } from "react";
import logo from "./logo.jpeg";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const navLinkClick = () => setNavOpen(false);

  return (
    <header>
      <nav className="wrap">
        <div className="brand">
          <img src={logo} alt="Arihant Doors logo" />
          <div className="brand-text">
            <span className="brand-name">ARIHANT DOORS</span>
            <small>SINCE 1993</small>
          </div>
        </div>
        <button
          className="navtoggle"
          aria-label="Toggle menu"
          onClick={() => setNavOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>
        <div className={`navlinks${navOpen ? " open" : ""}`}>
          <a href="#about" onClick={navLinkClick}>About</a>
          <a href="#products" onClick={navLinkClick}>Products</a>
          <a href="#services" onClick={navLinkClick}>Services</a>
          <a href="#clients" onClick={navLinkClick}>Clients</a>
          <a href="#contact" className="nav-cta" onClick={navLinkClick}>Get a quote</a>
        </div>
      </nav>
    </header>
  );
}
