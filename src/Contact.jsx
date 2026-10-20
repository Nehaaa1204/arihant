import React, { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/mkjoayzz";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", location: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: `New enquiry from ${form.name}`,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setForm({ name: "", phone: "", location: "", message: "" });
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <h2>Get a quote for your project</h2>
          <p>Tell us about your project — size, quantity and timeline — and our team will get back to you with a specification and quote.</p>

          <div className="office-card">
            <h4>Sales Office</h4>
            <p className="office-address">
              Arihant Doors<br />
              112, Damji Shamji Udyog Bhavan,<br />
              Veera Desai Rd, Industrial Area,<br />
              Andheri West, Mumbai, Maharashtra 400053
            </p>
            <p className="office-phones">
              <a href="tel:+919769460494">+91 97694 60494</a>
              <a href="tel:+919920169538">+91 99201 69538</a>
            </p>
          </div>

          <div className="map-embed">
            <iframe
              title="Arihant Doors — Andheri Sales Office"
              src="https://www.google.com/maps?q=112,+Damji+Shamji+Udyog+Bhavan,+Veera+Desai+Rd,+Industrial+Area,+Andheri+West,+Mumbai,+Maharashtra+400053&output=embed"
              width="100%"
              height="260"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Phone number"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Project location / builder name"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />
          <textarea
            rows="3"
            placeholder="Tell us about your requirement"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send enquiry"}
          </button>
          {status === "sent" && (
            <p style={{ fontSize: "0.85rem", marginTop: "4px" }}>Thanks — we will get back to you shortly.</p>
          )}
          {status === "error" && (
            <p style={{ fontSize: "0.85rem", marginTop: "4px" }}>Something went wrong. Please call us or try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}