"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  Sparkles,
} from "lucide-react";
import { Facebook, Instagram } from "@/components/ui/SocialIcons";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactClient() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.65 },
        colors: ["#1A37A8", "#E30613", "#FF4B57", "#2449C7"],
      });
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 180, paddingBottom: 72, background: "#F2EDE3" }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 20 }}>Contact</div>
          <h1
            style={{
              fontSize: "clamp(40px, 6vw, 80px)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              marginBottom: 20,
              maxWidth: 900,
            }}
          >
            Let&apos;s talk about
            <br />
            <span style={{ color: "#1A37A8" }}>your yard.</span>
          </h1>
          <p style={{ fontSize: 18, color: "#3A4158", maxWidth: 620 }}>
            Call, text, email, or drop us a note below. Peter reads every message personally and
            usually replies within a few hours.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ background: "#F2EDE3", paddingBottom: 112 }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr",
              gap: 40,
              alignItems: "flex-start",
            }}
            className="contact-grid"
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
                  <div
                    style={{
                      textAlign: "center",
                      padding: "40px 0",
                    }}
                  >
                    <div
                      style={{
                        width: 88,
                        height: 88,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #2449C7 0%, #E30613 100%)",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 24px",
                      }}
                    >
                      <CheckCircle2 size={44} />
                    </div>
                    <h3
                      style={{
                        fontSize: 28,
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        marginBottom: 12,
                      }}
                    >
                      Message sent!
                    </h3>
                    <p style={{ fontSize: 16, color: "#3A4158", marginBottom: 24 }}>
                      Peter will be in touch shortly. Usually within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="btn btn-outline-dark"
                    >
                      Send another message
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
                      Send us a message
                    </h2>
                    <p style={{ fontSize: 15, color: "#3A4158", marginBottom: 28 }}>
                      We&apos;ll get back to you soon.
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
                        <input
                          className="input"
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label className="label" htmlFor="phone">Phone</label>
                        <input
                          className="input"
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="(385) 555-0123"
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <label className="label" htmlFor="email">Email</label>
                      <input
                        className="input"
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@email.com"
                      />
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <label className="label" htmlFor="city">City</label>
                      <select className="select" id="city" name="city" defaultValue="">
                        <option value="" disabled>Select your city</option>
                        {[
                          "Altoona", "Ankeny", "Des Moines", "Pleasant Hill", "West Des Moines",
                          "Urbandale", "Bondurant", "Mitchellville", "Grimes",
                          "Waukee", "Johnston", "Clive", "Windsor Heights", "Other",
                        ].map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>

                    <div style={{ marginBottom: 24 }}>
                      <label className="label" htmlFor="message">How can we help?</label>
                      <textarea
                        className="textarea"
                        id="message"
                        name="message"
                        required
                        placeholder="Tell us about your yard, what you need, and any timing info..."
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
                          Send Message <Send size={18} />
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

            {/* Info cards */}
            <ScrollReveal direction="right" delay={100}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <InfoCard
                  icon={<Phone size={22} />}
                  label="Call or Text"
                  value="(515) 505-6429"
                  href="tel:+15155056429"
                />
                <InfoCard
                  icon={<Mail size={22} />}
                  label="Email"
                  value="Info@budgetpropainter.com"
                  href="mailto:Info@budgetpropainter.com"
                />
                <InfoCard
                  icon={<MapPin size={22} />}
                  label="Service Area"
                  value="Altoona, IA & all Polk County"
                />
                <InfoCard
                  icon={<Clock size={22} />}
                  label="Hours"
                  value="Mon – Sat · 7am – 7pm"
                />

                {/* Social */}
                <div
                  style={{
                    padding: 28,
                    background: "linear-gradient(135deg, #1A37A8 0%, #0F2575 100%)",
                    borderRadius: 20,
                    color: "#FFFFFF",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <Sparkles size={20} style={{ color: "#FF4B57" }} />
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF" }}>
                      Follow our work
                    </h3>
                  </div>
                  <p style={{ fontSize: 13.5, color: "#B8A88F", marginBottom: 20 }}>
                    See behind-the-scenes photos and recent projects on Facebook and Instagram.
                  </p>
                  <div style={{ display: "flex", gap: 10 }}>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      style={socialButton}
                    >
                      <Facebook size={18} />
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      style={socialButton}
                    >
                      <Instagram size={18} />
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .contact-grid { grid-template-columns: 1fr !important; }
            .form-row { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}

function InfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div
      style={{
        padding: 24,
        background: "#FAF7F1",
        borderRadius: 16,
        border: "1.5px solid #D6D0C0",
        display: "flex",
        gap: 16,
        alignItems: "center",
        transition: "all 0.25s",
      }}
      className="info-card"
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 14,
          background: "linear-gradient(135deg, #F4EBC8 0%, #FF4B57 100%)",
          color: "#0F2575",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div style={{ minWidth: 0 }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: "#7A8299",
            marginBottom: 2,
            textTransform: "uppercase",
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: 15.5,
            fontWeight: 700,
            color: "#0A0F1E",
            wordBreak: "break-all",
          }}
        >
          {value}
        </div>
      </div>
      <style>{`.info-card:hover { border-color: #1A37A8; transform: translateY(-2px); }`}</style>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }
  return content;
}

const socialButton: React.CSSProperties = {
  flex: 1,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  padding: "12px 14px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 10,
  color: "#FFFFFF",
  fontSize: 13,
  fontWeight: 600,
};
