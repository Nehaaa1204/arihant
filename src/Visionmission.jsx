import React from "react";

// Wording and photos come from "Arihant Doors – Vision, Mission & Values".
export default function VisionMission() {
  return (
    <section className="vm" id="about">
      <div className="wrap">
        <div className="section-head">
          <h2>Building more than doors</h2>
          <p>Our vision, our mission and the values behind every door we make.</p>
        </div>

        <div className="vm-grid">
          {/* Vision */}
          <article className="vm-card">
            <div className="vm-title">
              <div className="vm-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div>
                <h3>Our Vision</h3>
                <span className="vm-eyebrow">Where we want to go</span>
              </div>
            </div>
            <p>
              To become India&rsquo;s most trusted and preferred brand for waterproof bathroom and
              toilet doors, setting new benchmarks in quality, innovation and reliability.
            </p>
            <div className="vm-photo vm-photo--vision">
              <span className="vm-badge">Trusted by builders</span>
              <img
                src="/images/about/vision-skyline.jpg"
                alt="Trusted by Builders. Preferred by Architects."
                loading="lazy"
              />
            </div>
          </article>

          {/* Mission */}
          <article className="vm-card">
            <div className="vm-title">
              <div className="vm-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="1.2" />
                </svg>
              </div>
              <div>
                <h3>Our Mission</h3>
                <span className="vm-eyebrow">What we do every day</span>
              </div>
            </div>
            <p>
              To deliver durable, aesthetically appealing and reliable bathroom door solutions
              through continuous innovation, consistent quality, dependable execution and strong
              partnerships with builders, architects and channel partners.
            </p>
            <p>
              We strive to simplify project execution, deliver lasting value to our customers and
              build long-term relationships through transparency, service and performance.
            </p>
            <div className="vm-photo vm-photo--mission">
              <span className="vm-badge vm-badge--mission">Crafted with care</span>
              <img
                src="/images/about/mission-factory.jpg"
                alt="An Arihant team member working on a door in the factory"
                loading="lazy"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}