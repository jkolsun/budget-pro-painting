import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Award,
  Users,
  Leaf,
  ArrowRight,
  Phone,
  Sparkles,
  MapPin,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About Budget Pro Painting — Family-Owned in Altoona, IA",
  description:
    "Meet Peter and the Budget Pro Painting team. A family-owned painting & remodeling company serving Altoona and central Iowa since 2021 with sharp finishes and honest pricing.",
};

const values = [
  {
    icon: Heart,
    title: "Personal Service",
    desc: "Every job is done personally — no call centers, no franchise handoffs. You talk to the people doing the work.",
  },
  {
    icon: Sparkles,
    title: "Quality First",
    desc: "We don't cut corners. The details that other companies skip are where we start.",
  },
  {
    icon: Users,
    title: "Community-Rooted",
    desc: "We live where we work. Your home is one of our neighbors, and that matters.",
  },
  {
    icon: Award,
    title: "Honest Pricing",
    desc: "Transparent quotes, no upsells, no surprises. What we say is what you pay.",
  },
];

const timeline = [
  {
    year: "2021",
    title: "Budget Pro Painting Founded",
    desc: "Peter launched Budget Pro Painting & Remodeling LLC in Altoona with a simple promise: do good work for good people.",
  },
  {
    year: "2022",
    title: "Growing Roots",
    desc: "First full season of residential exterior painting across Altoona and Ankeny, with word spreading fast.",
  },
  {
    year: "2023",
    title: "Expanded Services",
    desc: "Added garage floor epoxy and polyaspartic coatings to meet demand from Iowa homeowners.",
  },
  {
    year: "2024",
    title: "Full-Service Team",
    desc: "Grew to a complete painting operation: interior, exterior, staining, garage floor coatings.",
  },
  {
    year: "2025",
    title: "Serving All Polk County",
    desc: "Trusted by homes and businesses across central Iowa, from Des Moines to Bondurant.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          paddingTop: 200,
          paddingBottom: 120,
          overflow: "hidden",
          color: "#FFFFFF",
        }}
      >
        <img
          src="/photos/web-painter-white.jpg"
          alt="Painter applying fresh paint to a residential exterior — Budget Pro Painting"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(8, 23, 72, 0.78) 0%, rgba(10, 15, 30, 0.82) 100%)",
            zIndex: 1,
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 860 }}>
            <div
              className="eyebrow"
              style={{
                color: "#FF4B57",
                marginBottom: 24,
              }}
            >
              About Budget Pro Painting
            </div>
            <h1
              style={{
                fontSize: "clamp(40px, 6.5vw, 84px)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                color: "#FFFFFF",
                marginBottom: 24,
              }}
            >
              A trusted local<br />
              <span
                style={{
                  background: "linear-gradient(135deg, #FF4B57 0%, #E30613 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                painting partner
              </span>
              <br />
              for central Iowa.
            </h1>
            <p
              style={{
                fontSize: "clamp(16px, 1.8vw, 20px)",
                color: "#D6D0C0",
                maxWidth: 640,
                lineHeight: 1.65,
              }}
            >
              Budget Pro Painting &amp; Remodeling LLC is the owner-operated painting partner
              central Iowa homeowners have been looking for. No franchise fees. No corporate
              runaround. Just Peter and his crew, painting homes and businesses the way they&apos;d
              want their own painted.
            </p>
          </div>
        </div>
      </section>

      {/* Peter's Story */}
      <section className="section" style={{ background: "#FAF7F1" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
            className="story-grid"
          >
            <ScrollReveal direction="left">
              <img
                src="/photos/web-shutters.jpg"
                alt="Painter carefully applying exterior paint to home shutters — Budget Pro Painting"
                style={{
                  width: "100%",
                  height: 600,
                  objectFit: "cover",
                  borderRadius: 24,
                }}
              />
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="eyebrow" style={{ marginBottom: 24 }}>Peter&apos;s Story</div>
              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 56px)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  marginBottom: 24,
                }}
              >
                Trusted local.
                <br />
                <span style={{ color: "#1A37A8" }}>Des Moines proud.</span>
              </h2>
              <p style={{ fontSize: 17, color: "#3A4158", lineHeight: 1.8, marginBottom: 18 }}>
                Budget Pro Painting and Remodeling, LLC is a trusted local company dedicated to delivering high-quality painting and remodeling services throughout Des Moines and surrounding Iowa communities.
              </p>
              <p style={{ fontSize: 17, color: "#3A4158", lineHeight: 1.8, marginBottom: 18 }}>
                We specialize in residential and commercial projects, offering interior and exterior painting, drywall and plastering, staining, remodeling, and kitchen and cabinet refinishing.
              </p>
              <p style={{ fontSize: 17, color: "#3A4158", lineHeight: 1.8, marginBottom: 32 }}>
                Our team brings skill, experience, and attention to detail to every job, ensuring clean finishes and long-lasting results. We believe in honest communication, fair pricing, and dependable service from start to finish.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 24,
                  flexWrap: "wrap",
                  padding: "24px 0",
                  borderTop: "1px solid #D6D0C0",
                  borderBottom: "1px solid #D6D0C0",
                }}
              >
                <div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: "#1A37A8", letterSpacing: "-0.02em" }}>
                    5+
                  </div>
                  <div style={{ fontSize: 13, color: "#3A4158" }}>Years in business</div>
                </div>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: "#1A37A8", letterSpacing: "-0.02em" }}>
                    13
                  </div>
                  <div style={{ fontSize: 13, color: "#3A4158" }}>Cities served</div>
                </div>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: "#1A37A8", letterSpacing: "-0.02em" }}>
                    295+
                  </div>
                  <div style={{ fontSize: 13, color: "#3A4158" }}>Projects completed</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .story-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          }
        `}</style>
      </section>

      {/* Values */}
      <section style={{ background: "#F2EDE3", padding: "112px 0" }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 72px" }}>
              <div className="eyebrow" style={{ justifyContent: "center", marginBottom: 20 }}>
                Our Values
              </div>
              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 56px)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  marginBottom: 20,
                }}
              >
                What we stand for.
              </h2>
              <p style={{ fontSize: 17, color: "#3A4158", lineHeight: 1.7 }}>
                The principles that shape every visit, every job, every relationship.
              </p>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 24,
            }}
            className="values-grid"
          >
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <ScrollReveal key={v.title} delay={i * 80}>
                  <div
                    style={{
                      padding: 40,
                      background: "#FAF7F1",
                      borderRadius: 20,
                      border: "1.5px solid #D6D0C0",
                      display: "flex",
                      gap: 24,
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: 16,
                        background: "linear-gradient(135deg, #1A37A8 0%, #E30613 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FFFFFF",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={28} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: 22,
                          fontWeight: 700,
                          marginBottom: 10,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {v.title}
                      </h3>
                      <p style={{ fontSize: 15, color: "#3A4158", lineHeight: 1.65 }}>{v.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <style>{`
          @media (max-width: 700px) {
            .values-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: "#FAF7F1" }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 72px" }}>
              <div className="eyebrow" style={{ justifyContent: "center", marginBottom: 20 }}>
                Our Journey
              </div>
              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 56px)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                How we grew.
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: 40,
                top: 0,
                bottom: 0,
                width: 2,
                background: "linear-gradient(to bottom, #FF4B57, #1A37A8)",
              }}
              className="timeline-line"
            />

            {timeline.map((t, i) => (
              <ScrollReveal key={t.year} delay={i * 80}>
                <div
                  style={{
                    position: "relative",
                    paddingLeft: 96,
                    paddingBottom: i === timeline.length - 1 ? 0 : 40,
                  }}
                  className="timeline-item"
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 22,
                      top: 0,
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      background: "#FAF7F1",
                      border: "3px solid #1A37A8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#1A37A8",
                    }}
                    className="timeline-dot"
                  >
                    <Calendar size={16} />
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      color: "#E30613",
                      letterSpacing: "0.15em",
                      marginBottom: 4,
                    }}
                  >
                    {t.year}
                  </div>
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      marginBottom: 8,
                    }}
                  >
                    {t.title}
                  </h3>
                  <p style={{ fontSize: 16, color: "#3A4158", lineHeight: 1.65 }}>{t.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #1A37A8 0%, #0F2575 100%)",
          padding: "96px 0",
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        <div className="container">
          <ScrollReveal>
            <h2
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                marginBottom: 20,
                color: "#FFFFFF",
              }}
            >
              Let&apos;s get started.
            </h2>
            <p
              style={{
                fontSize: 18,
                color: "#B8A88F",
                maxWidth: 600,
                margin: "0 auto 36px",
              }}
            >
              Free quote, honest pricing, zero pressure. Reach out today.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/quote" className="btn btn-accent btn-lg">
                Get Free Quote <ArrowRight size={18} />
              </Link>
              <a href="tel:+15155056429" className="btn btn-outline btn-lg">
                <Phone size={18} /> (515) 505-6429
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
