import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpeg";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinkClick = () => setNavOpen(false);

  // Keep the header visible at all times while still responding to scroll depth.
  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const classes = scrolled ? "header-scrolled" : "";

  return (
    <header className={classes}>
      <nav className="wrap">
        <Link to="/" className="brand" onClick={navLinkClick}>
          <img src={logo} alt="Arihant Doors logo" />
          <div className="brand-text">
            <span className="brand-name">ARIHANT DOORS</span>
            <small>SINCE 1993</small>
          </div>
        </Link>
        <button
          className="navtoggle"
          aria-label="Toggle menu"
          onClick={() => setNavOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>
        <div className={`navlinks${navOpen ? " open" : ""}`}>
          <Link to="/#about" onClick={navLinkClick}>About</Link>

        <div className="nav-dropdown">
        <Link to="/#products" onClick={navLinkClick}>Products</Link>
        <div className="nav-dropdown-menu">
          <Link to="/abs-doors" onClick={navLinkClick}>ABS Doors</Link>
          <Link to="/frp-doors" onClick={navLinkClick}>FRP Doors</Link>
        </div>
        </div>

          <Link to="/#values" onClick={navLinkClick}>Our Values</Link>
          <Link to="/#services" onClick={navLinkClick}>Services</Link>
          <Link to="/#clients" onClick={navLinkClick}>Clients</Link>
          <Link to="/#contact" className="nav-cta" onClick={navLinkClick}>Get a quote</Link>
        </div>
      </nav>
    </header>
  );
}