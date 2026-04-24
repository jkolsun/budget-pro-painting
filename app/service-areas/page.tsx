import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Service Areas — Budget Pro Painting | Polk County, IA",
  description:
    "Budget Pro Painting serves Altoona, Ankeny, Des Moines, Pleasant Hill, West Des Moines, Mitchellville, Grimes and all Polk County, Iowa with painting, staining, and garage floor coatings.",
};

const areas = [
  { city: "Altoona", desc: "Our hometown. Residential repaints, exterior refreshes, and commercial rebrands for Altoona property owners." },
  { city: "Des Moines", desc: "Interior and exterior painting across Des Moines neighborhoods — Beaverdale, East Village, Sherman Hill, and beyond." },
  { city: "Ankeny", desc: "New-build touch-ups and whole-house repaints for Ankeny families — plus garage floor epoxy for those oversized Iowa garages." },
  { city: "Pleasant Hill", desc: "Full exterior repaints and deck restoration for Pleasant Hill homes." },
  { city: "West Des Moines", desc: "Interior repaints, accent walls, and commercial office painting across West Des Moines." },
  { city: "Urbandale", desc: "Siding repaints, fence staining, and whole-home color refreshes for Urbandale property owners." },
  { city: "Bondurant", desc: "Fast-growing community — we grow with it. Every painting service available for Bondurant properties." },
  { city: "Mitchellville", desc: "Neighboring Altoona. Full interior + exterior painting and garage floor coatings for Mitchellville homes." },
  { city: "Polk City", desc: "Lakeside homes need lakeside-tough finishes. Deck staining, exterior repaints, marine-grade clear coats where needed." },
  { city: "Johnston", desc: "Established neighborhoods deserve established quality. Whole-home exterior repaints and commercial work." },
  { city: "Clive", desc: "Same local-owner standard across Clive — no subs, same Peter every visit." },
  { city: "Windsor Heights", desc: "Trusted painting and remodeling partner for Windsor Heights properties, residential and commercial." },
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: 200,
          paddingBottom: 96,
          background: "#F2EDE3",
        }}
      >
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 20 }}>Service Areas</div>
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
            Serving Altoona &amp;
            <br />
            <span style={{ color: "#1A37A8" }}>all Polk County.</span>
          </h1>
          <p style={{ fontSize: 18, color: "#3A4158", maxWidth: 640 }}>
            Based in Altoona — we deliver clean, sharp-finished painting work to homes and
            businesses across 12 central Iowa cities throughout Polk County and the surrounding
            Des Moines metro.
          </p>
        </div>
      </section>

      {/* Grid of cities */}
      <section style={{ background: "#FAF7F1", paddingBottom: 112, paddingTop: 0 }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
            className="areas-grid"
          >
            {areas.map((a, i) => (
              <ScrollReveal key={a.city} delay={(i % 3) * 80}>
                <div
                  style={{
                    padding: 28,
                    border: "1.5px solid #D6D0C0",
                    borderRadius: 20,
                    background: "#FAF7F1",
                    height: "100%",
                    transition: "all 0.3s",
                  }}
                  className="area-card"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 14,
                    }}
                  >
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
                      }}
                    >
                      <MapPin size={20} />
                    </div>
                    <h3
                      style={{
                        fontSize: 22,
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {a.city}, IA
                    </h3>
                  </div>
                  <p style={{ fontSize: 14.5, color: "#3A4158", lineHeight: 1.6 }}>
                    {a.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Not sure banner */}
          <ScrollReveal>
            <div
              style={{
                marginTop: 56,
                padding: "32px 40px",
                background: "#F0FDF4",
                border: "1.5px solid #BBF7D0",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 20,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <CheckCircle2 size={32} style={{ color: "#1A37A8", flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 4, letterSpacing: "-0.02em" }}>
                    Don&apos;t see your city?
                  </h3>
                  <p style={{ fontSize: 15, color: "#3A4158" }}>
                    We serve most of Polk County and nearby areas. Give us a call and ask.
                  </p>
                </div>
              </div>
              <a href="tel:+15155056429" className="btn btn-primary">
                <Phone size={16} />
                Call (515) 505-6429
              </a>
            </div>
          </ScrollReveal>
        </div>

        <style>{`
          .area-card:hover {
            border-color: #1A37A8 !important;
            transform: translateY(-4px) !important;
            box-shadow: 0 24px 48px rgba(15, 23, 42, 0.08) !important;
          }
          @media (max-width: 900px) {
            .areas-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 560px) {
            .areas-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #1A37A8 0%, #0F2575 100%)",
          color: "#FFFFFF",
          padding: "96px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <ScrollReveal>
            <h2
              style={{
                fontSize: "clamp(32px, 4.5vw, 52px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                marginBottom: 20,
                color: "#FFFFFF",
              }}
            >
              Ready when you are.
            </h2>
            <p style={{ fontSize: 17, color: "#B8A88F", maxWidth: 600, margin: "0 auto 36px" }}>
              Local team, local service, quick response. Get a free quote today.
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
