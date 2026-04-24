"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, Paintbrush, PaintRoller, Building2, Droplets, Home as HomeIcon, ChefHat } from "lucide-react";

const services = [
  { href: "/services/interior-painting", label: "Interior Painting", icon: Paintbrush },
  { href: "/services/exterior-painting", label: "Exterior Painting", icon: PaintRoller },
  { href: "/services/staining", label: "Deck & Fence Staining", icon: Droplets },
  { href: "/services/commercial-painting", label: "Commercial Painting", icon: Building2 },
  { href: "/services/garage-floor", label: "Garage Floor Coatings", icon: HomeIcon },
  { href: "/services/cabinet-refinishing", label: "Cabinet Refinishing", icon: ChefHat },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const linkStyle: React.CSSProperties = {
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: "0.02em",
    color: "#fff",
    padding: "8px 4px",
    transition: "color 0.2s",
    textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.3)",
  };

  return (
    <>
      <style>{`
        .bp-nav-hide { display: flex; }
        .bp-nav-burger { display: none; }
        @media (max-width: 1000px) {
          .bp-nav-hide { display: none !important; }
          .bp-nav-burger { display: inline-flex !important; }
        }
        .bp-logo-wrap { display: inline-flex; align-items: center; gap: 14px; }
        .bp-logo-plate { background: rgba(250,247,241,0.96); padding: 8px 14px; border-radius: 4px; box-shadow: 0 6px 18px rgba(0,0,0,0.18); }
        .bp-logo-plate img { height: 40px; width: auto; display: block; }
        @media (max-width: 600px) { .bp-logo-plate img { height: 34px; } }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(8, 23, 72, 0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,75,87,0.28)" : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "0 24px",
            height: 88,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          {/* Logo */}
          <Link href="/" className="bp-logo-wrap" aria-label="Budget Pro Painting & Remodeling — home">
            <span className="bp-logo-plate">
              <img src="/logo.png" alt="Budget Pro Painting & Remodeling LLC" />
            </span>
          </Link>

          {/* Center nav (desktop) */}
          <div className="bp-nav-hide" style={{ alignItems: "center", gap: 32 }}>
            <Link href="/" style={linkStyle}>Home</Link>
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button style={{ ...linkStyle, display: "inline-flex", alignItems: "center", gap: 4, cursor: "pointer", background: "transparent", border: "none" }}>
                Services <ChevronDown size={14} />
              </button>
              {servicesOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    marginTop: 8,
                    background: "#FAF7F1",
                    borderRadius: 4,
                    boxShadow: "0 24px 56px rgba(8,23,72,0.32)",
                    padding: 10,
                    minWidth: 280,
                    border: "1px solid #D6D0C0",
                  }}
                >
                  {services.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link
                        key={s.href}
                        href={s.href}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          padding: "12px 14px",
                          borderRadius: 3,
                          color: "#0A0F1E",
                          fontSize: 14,
                          fontWeight: 600,
                          transition: "background 0.2s, color 0.2s",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "#F2EDE3"; e.currentTarget.style.color = "#1A37A8"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0A0F1E"; }}
                      >
                        <Icon size={16} color="#E30613" />
                        {s.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
            <Link href="/about" style={linkStyle}>About</Link>
            <Link href="/service-areas" style={linkStyle}>Areas</Link>
            <Link href="/gallery" style={linkStyle}>Gallery</Link>
            <Link href="/contact" style={linkStyle}>Contact</Link>
          </div>

          {/* Right CTAs (desktop) */}
          <div className="bp-nav-hide" style={{ alignItems: "center", gap: 14 }}>
            <a
              href="tel:+15155056429"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 14,
                fontWeight: 700,
                color: "#FF4B57",
                textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.35)",
              }}
            >
              <Phone size={15} /> (515) 505-6429
            </a>
            <Link
              href="/quote"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 22px",
                background: "#E30613",
                color: "#fff",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                borderRadius: 3,
                boxShadow: "0 8px 20px rgba(227,6,19,0.3)",
              }}
            >
              Free Quote
            </Link>
          </div>

          {/* Burger (mobile) */}
          <button
            className="bp-nav-burger"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
              borderRadius: 3,
              background: scrolled ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.18)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.3)",
              backdropFilter: "blur(8px)",
            }}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
      >
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(8, 23, 72, 0.6)",
            opacity: mobileOpen ? 1 : 0,
            transition: "opacity 0.3s",
            backdropFilter: mobileOpen ? "blur(4px)" : "none",
          }}
        />
        <aside
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "min(360px, 90vw)",
            background: "#FAF7F1",
            transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
          }}
        >
          <div style={{ padding: 20, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #D6D0C0" }}>
            <Link href="/" onClick={() => setMobileOpen(false)} aria-label="Budget Pro Painting — home">
              <img src="/logo.png" alt="Budget Pro Painting & Remodeling" style={{ height: 36, width: "auto" }} />
            </Link>
            <button aria-label="Close menu" onClick={() => setMobileOpen(false)} style={{ padding: 8, background: "#F2EDE3", border: "none", cursor: "pointer", borderRadius: 3 }}>
              <X size={20} color="#0A0F1E" />
            </button>
          </div>
          <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 4 }}>
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Areas", href: "/service-areas" },
              { name: "Gallery", href: "/gallery" },
              { name: "Contact", href: "/contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "14px 16px",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#0A0F1E",
                  letterSpacing: "0.02em",
                  borderRadius: 3,
                  transition: "background 0.2s",
                }}
              >
                {l.name}
              </Link>
            ))}

            <div style={{ marginTop: 18, padding: "10px 16px 6px", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#7A8299" }}>
              Services
            </div>
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", fontSize: 15, fontWeight: 600, color: "#0A0F1E", borderRadius: 3 }}
                >
                  <Icon size={16} color="#E30613" />
                  {s.label}
                </Link>
              );
            })}

            <div style={{ marginTop: 24, padding: "0 16px", display: "flex", flexDirection: "column", gap: 10 }}>
              <Link
                href="/quote"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  padding: "14px 22px",
                  background: "#E30613",
                  color: "#fff",
                  fontSize: 13.5,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  borderRadius: 3,
                }}
              >
                Free Quote
              </Link>
              <a
                href="tel:+15155056429"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "14px 22px",
                  background: "#0A0F1E",
                  color: "#fff",
                  fontSize: 13.5,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  borderRadius: 3,
                }}
              >
                <Phone size={15} /> (515) 505-6429
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
