import React from "react";
import "./styles.css";

import Header from "./Header";
import Hero from "./Hero";
import StatsBand from "./StatsBand";
import About from "./About";
import Products from "./Products";
import Services from "./Services";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";
import ProductCategories from "./ProductCategories";


export default function ArihantDoors() {
  return (
    <div className="ad-root">
      <Header />
      <Hero />
      <StatsBand />
      <About />
      <Products />
      <ProductCategories />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}
