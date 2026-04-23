"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  CheckCircle2,
  Sparkles,
  Clock,
  DollarSign,
  Heart,
  Send,
  Phone,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const serviceList = [
  "Lawn Maintenance",
  "Sod Installation",
  "Rock & Mulch",
  "Sprinkler Systems",
  "Drip Irrigation",
  "Flower Beds & Gardens",
  "Seasonal Cleanups",
];

export default function QuoteClient() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const services = fd.getAll("services");
    const data: Record<string, unknown> = Object.fromEntries(fd.entries());
    data.services = services;
    data.formType = "Quote Request";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.55 },
        colors: ["#1A37A8", "#E30613", "#FF4B57", "#2449C7"],
      });
      setTimeout(() => {
        confetti({
          particleCount: 80,
          spread: 140,
          origin: { y: 0.6, x: 0.2 },
          colors: ["#E30613", "#FF4B57"],
        });
        confetti({
          particleCount: 80,
          spread: 140,
          origin: { y: 0.6, x: 0.8 },
          colors: ["#1A37A8", "#2449C7"],
        });
      }, 250);
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: 180,
          paddingBottom: 72,
          background: "linear-gradient(135deg, #1A37A8 0%, #0F2575 100%)",
          color: "#FFFFFF",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(163, 230, 53, 0.2) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="container" style={{ position: "relative" }}>
          <div className="eyebrow" style={{ color: "#FF4B57", marginBottom: 20 }}>
            Free Quote
          </div>
          <h1
            style={{
              fontSize: "clamp(40px, 6vw, 80px)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              marginBottom: 20,
              maxWidth: 900,
              color: "#FFFFFF",
            }}
          >
            Free quote
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #FF4B57 0%, #E30613 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              in 24 hours.
            </span>
          </h1>
          <p style={{ fontSize: 18, color: "#B8A88F", maxWidth: 620 }}>
            Tell us about your project. Peter will review and reach out personally,
            usually within a day. No obligation, no pressure, no spam.
          </p>
        </div>
      </section>

      {/* Form + Benefits */}
      <section style={{ background: "#F2EDE3", padding: "72px 0 112px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: 40,
              alignItems: "flex-start",
            }}
            className="quote-grid"
          >
            {/* Form */}
            <ScrollReveal direction="left">
              <div
                style={{
                  padding: 40,
                  background: "#FAF7F1",
                  borderRadius: 24,
                  border: "1.5px solid #D6D0C0",
                }}
              >
                {status === "success" ? (
                  <div style={{ textAlign: "center", padding: "48px 0" }}>
                    <div
                      style={{
                        width: 96,
                        height: 96,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #2449C7 0%, #E30613 100%)",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 28px",
                        animation: "pulseRing 2s infinite",
                      }}
                    >
                      <CheckCircle2 size={48} />
                    </div>
                    <h3
                      style={{
                        fontSize: 32,
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        marginBottom: 12,
                      }}
                    >
                      Quote request sent!
                    </h3>
                    <p style={{ fontSize: 17, color: "#3A4158", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
                      Peter will review the details and reach out personally, usually within 24 hours.
                      Talk soon!
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="btn btn-outline-dark"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2
                      style={{
                        fontSize: 28,
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        marginBottom: 8,
                      }}
                    >
                      Tell us about your project
                    </h2>
                    <p style={{ fontSize: 15, color: "#3A4158", marginBottom: 28 }}>
                      The more detail, the faster we can get back to you with a real quote.
                    </p>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 16,
                        marginBottom: 16,
                      }}
                      className="form-row"
                    >
                      <div>
                        <label className="label" htmlFor="name">Your Name</label>
                        <input className="input" id="name" name="name" type="text" required placeholder="Jane Doe" />
                      </div>
                      <div>
                        <label className="label" htmlFor="phone">Phone</label>
                        <input className="input" id="phone" name="phone" type="tel" required placeholder="(385) 555-0123" />
                      </div>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <label className="label" htmlFor="email">Email</label>
                      <input className="input" id="email" name="email" type="email" required placeholder="you@email.com" />
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <label className="label" htmlFor="address">Property Address</label>
                      <input
                        className="input"
                        id="address"
                        name="address"
                        type="text"
                        required
                        placeholder="123 Main St, Altoona, IA"
                      />
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 16,
                        marginBottom: 24,
                      }}
                      className="form-row"
                    >
                      <div>
                        <label className="label" htmlFor="propertyType">Property Type</label>
                        <select className="select" id="propertyType" name="propertyType" defaultValue="">
                          <option value="" disabled>Select...</option>
                          <option>Single Family Home</option>
                          <option>Townhome / Condo</option>
                          <option>Commercial / Business</option>
                          <option>HOA / Property Management</option>
                          <option>Rental Property</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="label" htmlFor="timing">When do you need it?</label>
                        <select className="select" id="timing" name="timing" defaultValue="">
                          <option value="" disabled>Select...</option>
                          <option>As soon as possible</option>
                          <option>Within 2 weeks</option>
                          <option>Within a month</option>
                          <option>Just exploring options</option>
                          <option>Seasonal / recurring service</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ marginBottom: 24 }}>
                      <label className="label">Services Needed (check all that apply)</label>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: 10,
                        }}
                        className="services-checks"
                      >
                        {serviceList.map((s) => (
                          <label
                            key={s}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 10,
                              padding: "12px 14px",
                              border: "1.5px solid #D6D0C0",
                              borderRadius: 10,
                              cursor: "pointer",
                              fontSize: 14.5,
                              fontWeight: 500,
                              transition: "all 0.2s",
                            }}
                            className="service-check"
                          >
                            <input
                              type="checkbox"
                              name="services"
                              value={s}
                              style={{
                                width: 18,
                                height: 18,
                                accentColor: "#1A37A8",
                                cursor: "pointer",
                              }}
                            />
                            {s}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginBottom: 28 }}>
                      <label className="label" htmlFor="details">Details</label>
                      <textarea
                        className="textarea"
                        id="details"
                        name="details"
                        placeholder="Tell us about your yard — size, condition, goals, and anything else that would help us give an accurate quote..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn btn-primary btn-lg"
                      style={{ width: "100%" }}
                    >
                      {status === "sending" ? (
                        <>Sending...</>
                      ) : (
                        <>
                          Send My Quote Request <Send size={18} />
                        </>
                      )}
                    </button>

                    {status === "error" && (
                      <p
                        style={{
                          marginTop: 16,
                          padding: 14,
                          background: "#FEF2F2",
                          color: "#B91C1C",
                          borderRadius: 10,
                          fontSize: 14,
                          textAlign: "center",
                        }}
                      >
                        Something went wrong. Please call us at (515) 505-6429.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Benefits sidebar */}
            <ScrollReveal direction="right" delay={100}>
              <div
                style={{
                  position: "sticky",
                  top: 100,
                  padding: 32,
                  background: "#FAF7F1",
                  borderRadius: 24,
                  border: "1.5px solid #D6D0C0",
                }}
              >
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    marginBottom: 28,
                  }}
                >
                  Why Budget Pro?
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {[
                    {
                      icon: <Clock size={20} />,
                      title: "24-hour response",
                      desc: "We're quick — most quotes come back same day or next.",
                    },
                    {
                      icon: <DollarSign size={20} />,
                      title: "Honest pricing",
                      desc: "Flat, transparent quotes. No surprises, no upsells.",
                    },
                    {
                      icon: <Heart size={20} />,
                      title: "Family-owned",
                      desc: "You talk to Peter directly — not a call center.",
                    },
                    {
                      icon: <Sparkles size={20} />,
                      title: "Full-service",
                      desc: "One trusted partner for every yard need.",
                    },
                  ].map((b) => (
                    <div key={b.title} style={{ display: "flex", gap: 14 }}>
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 12,
                          background: "linear-gradient(135deg, #F4EBC8 0%, #FF4B57 100%)",
                          color: "#0F2575",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {b.icon}
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: 15.5,
                            fontWeight: 700,
                            marginBottom: 4,
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {b.title}
                        </div>
                        <p style={{ fontSize: 13.5, color: "#3A4158", lineHeight: 1.55 }}>
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: 28,
                    padding: 20,
                    background: "#F2EDE3",
                    borderRadius: 14,
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      color: "#7A8299",
                      marginBottom: 6,
                    }}
                  >
                    PREFER TO CALL?
                  </div>
                  <a
                    href="tel:+15155056429"
                    style={{
                      fontSize: 20,
                      fontWeight: 800,
                      color: "#1A37A8",
                      letterSpacing: "-0.01em",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <Phone size={18} />
                    (515) 505-6429
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <style>{`
          .service-check:has(input:checked) {
            border-color: #1A37A8 !important;
            background: #F0FDF4 !important;
          }
          .service-check:hover {
            border-color: #1A37A8;
          }
          @media (max-width: 900px) {
            .quote-grid { grid-template-columns: 1fr !important; }
            .form-row { grid-template-columns: 1fr !important; }
            .services-checks { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}
