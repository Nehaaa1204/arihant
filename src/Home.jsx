import React from "react";
import Hero from "./Hero";
import About from "./About";
import ProductCategories from "./ProductCategories";
import Values from "./Values";
import BrandPromise from "./BrandPromise";
import Testimonials from "./Testimonials";
import Services from "./Services";
import Clients from "./Clients";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProductCategories />
      <Values />
      <BrandPromise />
      <Testimonials />
      <Services />
      <Clients />
      <Contact />
    </>
  );
}