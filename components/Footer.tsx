import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const serviceAreas = [
  "Altoona", "Des Moines", "Ankeny", "Pleasant Hill",
  "West Des Moines", "Urbandale", "Bondurant", "Mitchellville",
  "Polk City", "Johnston", "Clive", "Windsor Heights",
];

const services = [
  { href: "/services/painting", label: "Interior & Exterior Painting" },
  { href: "/services/staining", label: "Deck & Fence Staining" },
  { href: "/services/garage-floor", label: "Garage Floor Coatings" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
  { href: "/quote", label: "Free Quote" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0A0F1E",
        color: "#fff",
        paddingTop: 80,
        paddingBottom: 28,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #1A37A8 0%, #E30613 100%)" }} />
      <div
        style={{
          position: "absolute",
          top: -160,
          right: -160,
          width: 460,
          height: 460,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(227,6,19,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <style>{`
        .bp-foot-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1.2fr; gap: 56px; margin-bottom: 56px; }
        .bp-foot-link { color: #B8BFD0; font-size: 14.5px; transition: color 0.2s; }
        .bp-foot-link:hover { color: #FF4B57; }
        .bp-foot-h { font-size: 11px; font-weight: 800; letter-spacing: 0.22em; text-transform: uppercase; color: #FF4B57; margin-bottom: 18px; }
        .bp-foot-areas { display: flex; flex-wrap: wrap; gap: 8px; }
        .bp-foot-area { padding: 5px 12px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 999px; font-size: 12.5px; color: #B8BFD0; }
        @media (max-width: 900px) {
          .bp-foot-grid { grid-template-columns: 1fr 1fr; gap: 32px; margin-bottom: 36px; }
        }
        @media (max-width: 540px) {
          .bp-foot-grid { grid-template-columns: 1fr; gap: 28px; }
        }
      `}</style>

      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        <div className="bp-foot-grid">
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: 22 }}>
              <span style={{ display: "inline-block", padding: "10px 16px", background: "#FAF7F1", borderRadius: 3 }}>
                <img src="/logo.png" alt="Budget Pro Painting & Remodeling LLC" style={{ height: 56, width: "auto", display: "block" }} />
              </span>
            </Link>
            <p style={{ color: "#9AA1B5", fontSize: 14.5, lineHeight: 1.7, marginBottom: 18 }}>
              Owner-operated painting &amp; remodeling serving Altoona, Des Moines, and central Iowa. Peter Thawngzauk runs every job personally — clean prep, sharp finishes, fair pricing.
            </p>
          </div>

          <div>
            <div className="bp-foot-h">Services</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {services.map((s) => (
                <li key={s.href}><Link href={s.href} className="bp-foot-link">{s.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="bp-foot-h">Company</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {quickLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className="bp-foot-link">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="bp-foot-h">Get In Touch</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href="tel:+15155056429" style={{ display: "flex", alignItems: "flex-start", gap: 12, color: "#D6D0C0" }}>
                <Phone size={17} style={{ color: "#FF4B57", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#7A8299" }}>Call</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>(515) 505-6429</div>
                </div>
              </a>
              <a href="mailto:bpprllc@gmail.com" style={{ display: "flex", alignItems: "flex-start", gap: 12, color: "#D6D0C0" }}>
                <Mail size={17} style={{ color: "#FF4B57", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#7A8299" }}>Email</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", wordBreak: "break-all" }}>bpprllc@gmail.com</div>
                </div>
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, color: "#D6D0C0" }}>
                <MapPin size={17} style={{ color: "#FF4B57", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#7A8299" }}>Service Area</div>
                  <div style={{ fontSize: 14, color: "#fff" }}>Altoona &amp; Central Iowa</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, color: "#D6D0C0" }}>
                <Clock size={17} style={{ color: "#FF4B57", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#7A8299" }}>Hours</div>
                  <div style={{ fontSize: 14, color: "#fff" }}>Mon – Sat · 7am – 7pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "26px 0", marginBottom: 26 }}>
          <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.22em", color: "#FF4B57", marginBottom: 14, textTransform: "uppercase" }}>
            Serving Central Iowa · 12 Cities
          </div>
          <div className="bp-foot-areas">
            {serviceAreas.map((c) => <span key={c} className="bp-foot-area">{c}</span>)}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, fontSize: 12.5, color: "#7A8299" }}>
          <span>© {new Date().getFullYear()} Budget Pro Painting &amp; Remodeling LLC. All rights reserved.</span>
          <span>Licensed &amp; Insured · Owner-Operated</span>
        </div>
      </div>
    </footer>
  );
}
