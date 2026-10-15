import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./styles.css";
import "./kassa-style.css";

import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./Whatsappbutton";
import useReveal from "./Usereveal";

// Shared layout: the header and footer wrap every page.
export default function ArihantDoors() {
  const { pathname, hash } = useLocation();

  // re-run the scroll animations whenever the page changes
  useReveal(pathname);

  // new page -> start at the top; link with #section -> scroll to that section
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        try {
          document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
        } catch (e) {
          /* ignore an invalid hash */
        }
      }, 60);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="ad-root">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}