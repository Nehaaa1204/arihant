import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpeg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap footer-main">
        {/* Brand */}
        <div className="footer-brand">
          <div className="brand-lockup">
            <div className="logo-chip">
              <img src={logo} alt="Arihant Doors logo" />
            </div>
            <div>
              <div className="fbrand">Arihant Doors</div>
              <div className="fmeta">Strength, Durability &amp; Innovation Since 2014</div>
            </div>
          </div>
          <p className="footer-about">
            Manufacturers of ABS moulded and FRP doors for residential, commercial, government and
            infrastructure projects.
          </p>

          <div className="social-icons">
            {/* Replace these href values with your real profile links */}
            <a href="https://www.linkedin.com/company/arihant-doors" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.8h-4V9z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/arihantdoors" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.59 1.8c.46-.16 1.26-.35 2.43-.4C9.29 1.34 9.67 1.33 12 1.33V2.2zm0 1.7c-3.16 0-3.5.01-4.73.07-1.05.05-1.62.22-2 .37-.5.19-.86.42-1.24.8-.38.38-.61.74-.8 1.24-.15.38-.32.95-.37 2C2.79 9.5 2.78 9.84 2.78 13c0 3.16.01 3.5.07 4.73.05 1.05.22 1.62.37 2 .19.5.42.86.8 1.24.38.38.74.61 1.24.8.38.15.95.32 2 .37 1.23.06 1.57.07 4.73.07s3.5-.01 4.73-.07c1.05-.05 1.62-.22 2-.37.5-.19.86-.42 1.24-.8.38-.38.61-.74.8-1.24.15-.38.32-.95.37-2 .06-1.23.07-1.57.07-4.73s-.01-3.5-.07-4.73c-.05-1.05-.22-1.62-.37-2a3.2 3.2 0 0 0-.8-1.24 3.2 3.2 0 0 0-1.24-.8c-.38-.15-.95-.32-2-.37C15.5 3.91 15.16 3.9 12 3.9zm0 4.3a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6zm0 7.9a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2zm5-8.1a1.12 1.12 0 1 1-2.25 0 1.12 1.12 0 0 1 2.25 0z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61595071059227" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.66 15.4 3.57 14.24 3.57c-2.4 0-4.04 1.46-4.04 4.15v2.17H7.5v3.1h2.7v8h3.3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="footer-col">
          <h4>Quick links</h4>
          <Link to="/">Home</Link>
          <Link to="/#about">About us</Link>
          <Link to="/#values">Our Values</Link>
          <Link to="/#testimonials">Testimonials</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#clients">Clients</Link>
        </div>

        {/* Products */}
        <div className="footer-col">
          <h4>Products</h4>
          <Link to="/abs-doors">ABS Doors</Link>
          <Link to="/frp-doors">FRP Doors</Link>
          <Link to="/#contact">Get a quote</Link>
        </div>

        {/* Sales office */}
        <div className="footer-col">
          <h4>Sales office</h4>
          <p className="footer-address">
            112, Damji Shamji Udyog Bhavan,<br />
            Veera Desai Rd, Industrial Area,<br />
            Andheri West, Mumbai,<br />
            Maharashtra 400053
          </p>
          <a href="tel:+919769460494">+91 97694 60494</a>
          <a href="tel:+919920169538">+91 99201 69538</a>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>&copy; {year} Arihant Doors. All rights reserved.</span>
        <span>Strength, Durability &amp; Innovation Since 1993</span>
      </div>
    </footer>
  );
}