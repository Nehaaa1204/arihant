import React from "react";

// Wording and photos come from "Arihant Doors – Vision, Mission & Values".
const VALUES = [
  {
    title: "Quality Without Compromise",
    text: "We believe every doors should meet our standards for durability, finish and performance.",
    image: "/images/about/value-1-quality.jpg",
  },
  {
    title: "Customer Commitment",
    text: "We honour our commitments and work to make every customer relationship dependable and lasting.",
    image: "/images/about/value-2-customer.jpg",
  },
  {
    title: "Innovation That Matters",
    text: "We continuously improve our products, processes and designs to solve real customer problems.",
    image: "/images/about/value-3-innovation.jpg",
  },
  {
    title: "Integrity and Transparency",
    text: "We conduct business honestly, communicate clearly and take responsibility for our actions.",
    image: "/images/about/value-4-integrity.jpg",
  },
  {
    title: "Discipline and Consistency",
    text: "We believe sustainable growth comes from strong systems, continuous improvement and consistent execution.",
    image: "/images/about/value-5-discipline.jpg",
  },
  {
    title: "Long-Term Partnerships",
    text: "We build relationships based on mutual trust, fair business practices and shared success.",
    image: "/images/about/value-6-partnerships.jpg",
  },
];

export default function Values() {
  return (
    <section className="values" id="values">
      <div className="wrap">
        <div className="section-head">
          <h2>Our values</h2>
          <p>The principles that guide every decision.</p>
        </div>
        <div className="values-grid">
          {VALUES.map((v, i) => (
            <article className="value-card" key={v.title}>
              <img src={v.image} alt="" loading="lazy" />
              <div>
                <span className="value-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}