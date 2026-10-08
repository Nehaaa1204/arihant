import React from "react";
import "./styles.css";

// Save each logo into public/images/clients/ with these exact filenames
const CLIENT_LOGOS = [
  { name: "Adani Realty", file: "adani-realty.jpeg" },
  { name: "Arihant Superstructures", file: "arihant-superstructures.jpeg" },
  { name: "B. G. Shirke Construction", file: "shirke.jpeg" },
  { name: "Asshna Developers", file: "asshna.jpeg" },
  { name: "Gera", file: "gera.jpeg" },
  { name: "Godrej Properties", file: "godrej-properties.jpeg" },
  { name: "Jindal Group", file: "jindal-group.jpeg" },
  { name: "CAPACIT'E Infraprojects", file: "capacite.jpeg" },
  { name: "L&T Construction", file: "lt-construction.jpeg" },
  { name: "Marathon", file: "marathon.jpeg" },
  { name: "Lokhandwala Infrastructure", file: "lokhandwala.jpeg" },
  { name: "Raunak Group", file: "raunak-group.jpeg" },
  { name: "Runwal Group", file: "runwal-group.jpeg" },
  { name: "Shapoorji Pallonji", file: "shapoorji-pallonji.jpeg" },
  { name: "Precious Group", file: "precious-group.jpeg" },
];

// Duplicate the list so the scroll loop looks seamless
const MARQUEE_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

export default function Clients() {
  return (
    <section className="clients" id="clients">
      <div className="wrap">
        <div className="section-head">
          <h2>Trusted by</h2>
          <p>Delivered to organisations across residential, redevelopment, government and infrastructure projects.</p>
        </div>
      </div>
      <div className="client-marquee">
        <div className="client-marquee-track">
          {MARQUEE_LOGOS.map((c, i) => (
            <div className="client-badge" key={`${c.name}-${i}`}>
              <img src={`/images/clients/${c.file}`} alt={c.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}