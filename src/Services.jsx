import React from "react";
import { SERVICES } from "./data";
import "./Services.css";

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-head">
          <h2>Our services</h2>
          <p>From first measurement to after-sales support, we manage the door end to end.</p>
        </div>
        <div className="services-stagger">
          {SERVICES.map((s, i) => (
            <div
              className={`service-card ${i % 2 === 1 ? "service-card-offset" : ""}`}
              key={s.title}
              style={{ "--card-index": i }}
            >
              <div className="service-card-accent" />
              <span className="service-card-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}