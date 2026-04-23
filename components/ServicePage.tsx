import Link from "next/link";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Sparkles,
  Mail,
  MapPin,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ServicePageProps {
  title: string;
  tagline: string;
  hero: string; // image
  projectImage?: string;
  projectCaption?: string;
  eyebrow: string;
  intro: string[];
  features: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
  related: { title: string; href: string }[];
}

export default function ServicePage({
  title,
  tagline,
  hero,
  projectImage,
  projectCaption,
  eyebrow,
  intro,
  features,
  process,
  related,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          paddingTop: 200,
          paddingBottom: 120,
          color: "#FFFFFF",
          overflow: "hidden",
        }}
      >
        <img
          src={hero}
          alt={title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(15, 76, 42, 0.75) 0%, rgba(15, 23, 42, 0.85) 100%)",
          }}
        />
        <div className="container" style={{ position: "relative" }}>
          <div style={{ maxWidth: 800 }}>
            <div className="eyebrow" style={{ color: "#FF4B57", marginBottom: 24 }}>
              {eyebrow}
            </div>
            <h1
              style={{
                fontSize: "clamp(40px, 6.5vw, 80px)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                color: "#FFFFFF",
                marginBottom: 24,
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: "clamp(16px, 1.8vw, 20px)",
                color: "#D6D0C0",
                maxWidth: 620,
                lineHeight: 1.6,
                marginBottom: 36,
              }}
            >
              {tagline}
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/quote" className="btn btn-accent btn-lg">
                Get Free Quote <ArrowRight size={18} />
              </Link>
              <a href="tel:+15155056429" className="btn btn-outline btn-lg">
                <Phone size={18} /> (515) 505-6429
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + Sidebar */}
      <section className="section" style={{ background: "#FAF7F1" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: 64,
              alignItems: "flex-start",
            }}
            className="service-layout"
          >
            <div>
              <ScrollReveal>
                <div className="eyebrow" style={{ marginBottom: 20 }}>Overview</div>
                <h2
                  style={{
                    fontSize: "clamp(30px, 4vw, 48px)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                    marginBottom: 28,
                  }}
                >
                  What you can expect.
                </h2>
                {intro.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 17,
                      color: "#3A4158",
                      lineHeight: 1.8,
                      marginBottom: 20,
                    }}
                  >
                    {p}
                  </p>
                ))}
              </ScrollReveal>

              {projectImage && (
                <ScrollReveal>
                  <div
                    style={{
                      marginTop: 40,
                      maxWidth: 640,
                      borderRadius: 18,
                      overflow: "hidden",
                      border: "1px solid #D6D0C0",
                      background: "#FAF7F1",
                      boxShadow: "0 12px 32px rgba(15, 37, 117, 0.12)",
                    }}
                  >
                    <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "#0F2575" }}>
                      <img
                        src={projectImage}
                        alt={`Recent ${title.toLowerCase()} project by Budget Pro Painting`}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          filter: "saturate(1.06) contrast(1.03)",
                        }}
                      />
                      <span
                        style={{
                          position: "absolute",
                          top: 14,
                          left: 14,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "6px 12px",
                          background: "rgba(15, 37, 117, 0.88)",
                          color: "#FF4B57",
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          borderRadius: 999,
                          border: "1px solid rgba(255, 75, 87,0.32)",
                        }}
                      >
                        <span style={{ width: 6, height: 6, background: "#FF4B57", borderRadius: "50%" }} />
                        Recent Project
                      </span>
                    </div>
                    {projectCaption && (
                      <div
                        style={{
                          padding: "14px 18px",
                          fontSize: 14,
                          color: "#3A4158",
                          lineHeight: 1.55,
                          borderTop: "1px solid #D6D0C0",
                        }}
                      >
                        {projectCaption}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              )}

              {/* Features */}
              <div style={{ marginTop: 56 }}>
                <ScrollReveal>
                  <h3
                    style={{
                      fontSize: 28,
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      marginBottom: 24,
                    }}
                  >
                    What&apos;s included
                  </h3>
                </ScrollReveal>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 18,
                  }}
                  className="features-grid"
                >
                  {features.map((f, i) => (
                    <ScrollReveal key={f.title} delay={i * 50}>
                      <div
                        style={{
                          padding: 24,
                          border: "1.5px solid #D6D0C0",
                          borderRadius: 16,
                          background: "#FAF7F1",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            marginBottom: 10,
                          }}
                        >
                          <CheckCircle2 size={22} style={{ color: "#E30613" }} />
                          <h4
                            style={{
                              fontSize: 17,
                              fontWeight: 700,
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {f.title}
                          </h4>
                        </div>
                        <p style={{ fontSize: 14.5, color: "#3A4158", lineHeight: 1.6 }}>
                          {f.desc}
                        </p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div style={{ marginTop: 72 }}>
                <ScrollReveal>
                  <h3
                    style={{
                      fontSize: 28,
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      marginBottom: 24,
                    }}
                  >
                    Our process
                  </h3>
                </ScrollReveal>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {process.map((p, i) => (
                    <ScrollReveal key={p.title} delay={i * 60}>
                      <div
                        style={{
                          display: "flex",
                          gap: 24,
                          padding: 24,
                          background: "#F2EDE3",
                          borderRadius: 16,
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: 52,
                            height: 52,
                            borderRadius: 14,
                            background: "linear-gradient(135deg, #1A37A8 0%, #E30613 100%)",
                            color: "#FFFFFF",
                            fontSize: 20,
                            fontWeight: 800,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div>
                          <h4
                            style={{
                              fontSize: 18,
                              fontWeight: 700,
                              marginBottom: 6,
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {p.title}
                          </h4>
                          <p style={{ fontSize: 14.5, color: "#3A4158", lineHeight: 1.65 }}>
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Sidebar */}
            <ScrollReveal direction="right">
              <aside
                style={{
                  position: "sticky",
                  top: 100,
                  padding: 32,
                  background: "linear-gradient(135deg, #0F2575 0%, #1A37A8 100%)",
                  borderRadius: 20,
                  color: "#FFFFFF",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "6px 14px",
                    background: "rgba(163, 230, 53, 0.2)",
                    borderRadius: 999,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#FF4B57",
                    marginBottom: 20,
                  }}
                >
                  <Sparkles size={14} />
                  FREE ESTIMATE
                </div>
                <h3
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.15,
                    marginBottom: 14,
                    color: "#FFFFFF",
                  }}
                >
                  Ready to get started?
                </h3>
                <p style={{ fontSize: 14.5, color: "#B8A88F", lineHeight: 1.6, marginBottom: 24 }}>
                  Call, text, or request a quote online. Usually back to you within 24 hours.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                  <Link href="/quote" className="btn btn-accent" style={{ width: "100%" }}>
                    Get Free Quote <ArrowRight size={16} />
                  </Link>
                  <a
                    href="tel:+15155056429"
                    className="btn"
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.1)",
                      color: "#FFFFFF",
                      border: "1.5px solid rgba(255,255,255,0.3)",
                    }}
                  >
                    <Phone size={16} /> (515) 505-6429
                  </a>
                </div>
                <div
                  style={{
                    paddingTop: 24,
                    borderTop: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    fontSize: 13,
                  }}
                >
                  <a
                    href="mailto:bpprllc@gmail.com"
                    style={{ display: "flex", gap: 10, alignItems: "center", color: "#D6D0C0" }}
                  >
                    <Mail size={14} style={{ color: "#FF4B57" }} />
                    <span style={{ wordBreak: "break-all" }}>bpprllc@gmail.com</span>
                  </a>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", color: "#D6D0C0" }}>
                    <MapPin size={14} style={{ color: "#FF4B57" }} />
                    Altoona, IA &amp; all Polk County
                  </div>
                </div>
              </aside>
            </ScrollReveal>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .service-layout { grid-template-columns: 1fr !important; }
            .features-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Related services */}
      <section style={{ background: "#F2EDE3", padding: "96px 0" }}>
        <div className="container">
          <ScrollReveal>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: 20,
                marginBottom: 40,
              }}
            >
              <div>
                <div className="eyebrow" style={{ marginBottom: 14 }}>More Services</div>
                <h2
                  style={{
                    fontSize: "clamp(28px, 3.5vw, 40px)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Related services
                </h2>
              </div>
              <Link href="/services" className="btn btn-outline-dark">
                View all services <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
            className="related-grid"
          >
            {related.map((r, i) => (
              <ScrollReveal key={r.href} delay={i * 80}>
                <Link
                  href={r.href}
                  className="related-card"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "28px 32px",
                    background: "#FAF7F1",
                    border: "1.5px solid #D6D0C0",
                    borderRadius: 16,
                    transition: "all 0.3s",
                    fontSize: 17,
                    fontWeight: 600,
                    color: "#0A0F1E",
                  }}
                >
                  {r.title}
                  <ArrowRight size={18} style={{ color: "#1A37A8" }} />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <style>{`
          .related-card:hover { border-color: #1A37A8 !important; transform: translateX(4px) !important; }
          @media (max-width: 800px) {
            .related-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}
