import React from "react";
import "./founder-card.css";
import VisionMission from "./VisionMission";

export default function About() {
  return (
    <>
    {/* Vision & Mission now sits at the top of About */}
    <VisionMission />
    <section className="about" id="our-story">
      <div className="wrap about-grid">
        <div>
          <h2>Built on experience. Designed for tomorrow.</h2>
          <div className="founder-card">
            <img src="/founder.jpeg" alt="Mr. Manilal Wagji Shah, Founder of Arihant Doors" />
            <div>
              <p className="founder-name">Mr. Manilal Wagji Shah</p>
              <p className="founder-title">Founder, Arihant Doors</p>
              <p className="founder-quote">
                "A door is more than an entryway — it's a reflection of our values, carried forward for over three decades."
              </p>
            </div>
          </div>
        </div>
        <div className="about-copy">
          <p>Since 1993, Arihant Doors has been creating durable, reliable and innovative door solutions for modern spaces. With over three decades of manufacturing expertise, we specialise in ABS moulded doors, FRP doors and waterproof door solutions designed for strength, water resistance, dimensional stability, low maintenance and long-lasting performance.</p>
          <p>Our modern manufacturing facility and systematic quality-control processes ensure consistency at every stage, from raw material selection to final inspection. From residential and commercial spaces to government, infrastructure and large-scale projects, our doors are trusted by organisations including CIDCO, MHADA, MCGM, PWD, CPWD and MES.</p>
          <p>For us, a door is more than an entryway. It is a combination of strength, safety, functionality and design.</p>
        </div>
      </div>
    </section>
    </>
  );
}