"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Star, ArrowRight, Shield, Users, Cog, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const valueProps = [
  {
    n: "01",
    title: "Radical Integrity",
    desc: "We operate with complete honesty, transparency, and accountability in everything we do.",
    Icon: Shield,
  },
  {
    n: "02",
    title: "People First",
    desc: "Our customers and team come first, ensuring respectful communication and care on every project.",
    Icon: Users,
  },
  {
    n: "03",
    title: "Process Perfection",
    desc: "We follow proven systems and precise workmanship to deliver consistent, high-quality results.",
    Icon: Cog,
  },
];

const features = [
  { title: "Quality Materials", desc: "Sherwin-Williams, Benjamin Moore, and other top-tier paint products on every job." },
  { title: "Proper Prep", desc: "Pressure wash, scrape, scuff-sand, caulk. The work nobody sees but everybody needs." },
  { title: "Two Coats Always", desc: "Premium product, two full coats — never one with a 'we'll see' second." },
  { title: "Owner-Operated", desc: "Peter is on every job, walking the work, checking the lines, signing it off." },
];

const whyBullets = [
  "Certified, experienced painters with years on the wall",
  "Premium-grade materials — never contractor-grade pretending to be premium",
  "Cost-effective solutions that fit your budget without cutting corners",
  "Customer satisfaction is the only measure of success",
];

const testimonials = [
  {
    quote:
      "Budget Pro Painting and Remodeling did an amazing job on our interior painting project. The team was professional, clean, and finished on time.",
    name: "Sarah M.",
  },
  {
    quote:
      "We hired them for exterior painting and couldn't be happier with the results. Great communication, fair pricing, and excellent workmanship from start to finish.",
    name: "James R.",
  },
  {
    quote:
      "The drywall repairs and painting were flawless. They paid attention to every detail and made sure everything was perfect before leaving. Highly recommend!",
    name: "Linda T.",
  },
  {
    quote:
      "Our kitchen cabinets were refinished and look incredible. Budget Pro saved us money compared to replacing them, and the quality exceeded expectations.",
    name: "Michael D.",
  },
];

const services = [
  { n: "01", title: "Exterior Painting", desc: "Enhance curb appeal and protect your property with durable, weather-resistant exterior painting finished with expert precision.", href: "/services/exterior-painting" },
  { n: "02", title: "Interior Painting", desc: "Transform your living or working spaces with clean, smooth interior painting that adds beauty and long-lasting value.", href: "/services/interior-painting" },
  { n: "03", title: "Staining", desc: "Bring out the natural beauty of wood surfaces with high-quality staining that offers lasting protection and rich color.", href: "/services/staining" },
  { n: "04", title: "Commercial Interior", desc: "Professional interior painting solutions designed to improve appearance while minimizing disruption to your business operations.", href: "/services/commercial-painting" },
  { n: "05", title: "Commercial Exterior", desc: "Maintain a strong, professional image with long-lasting commercial exterior painting built to withstand the elements.", href: "/services/commercial-painting" },
  { n: "06", title: "Garage Epoxy Floor", desc: "Durable, slip-resistant, and beautiful flooring that turns your garage into a showroom.", href: "/services/garage-floor" },
];

const galleryImages = [
  "/photos/residential-estate.jpg",
  "/photos/web-shutters.jpg",
  "/photos/web-cabinets.jpg",
  "/photos/web-deck-stain.jpg",
  "/photos/web-painter-white.jpg",
  "/photos/ba3-after.jpg",
  "/photos/ba5-after.jpg",
  "/photos/commercial-white-black.jpg",
];

export default function HomeClient() {
  const [tIndex, setTIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTIndex((i) => (i + 1) % testimonials.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        :root { --brand-primary: #1A37A8; --brand-accent: #E30613; --bp-text: #2C3340; --bp-muted: #5C6577; --bp-bg-soft: #F4F6FA; --bp-border: #E1E5EE; }

        /* HERO */
        .bp-hero { position: relative; min-height: 88vh; display: flex; align-items: center; overflow: hidden; color: #fff; margin-top: -88px; padding-top: 88px; }
        .bp-hero-bg { position: absolute; inset: 0; z-index: 0; }
        .bp-hero-bg img { width: 100%; height: 100%; object-fit: cover; object-position: center 40%; }
        .bp-hero-overlay { position: absolute; inset: 0; z-index: 1; background: linear-gradient(110deg, rgba(8,23,72,0.85) 0%, rgba(8,23,72,0.55) 50%, rgba(8,23,72,0.4) 100%); }
        .bp-hero-inner { position: relative; z-index: 2; width: 100%; max-width: 1280px; margin: 0 auto; padding: 100px 32px; }
        .bp-hero-block { margin-bottom: 40px; max-width: 760px; }
        .bp-hero-block:last-child { margin-bottom: 0; }
        .bp-hero h1 { font-size: clamp(36px, 5.5vw, 60px); font-weight: 800; line-height: 1.1; letter-spacing: -0.02em; color: #fff; margin-bottom: 14px; }
        .bp-hero p.sub { font-size: 17px; color: rgba(255,255,255,0.82); max-width: 600px; line-height: 1.6; margin-bottom: 22px; }
        .bp-hero h2 { font-size: clamp(22px, 2.4vw, 30px); font-weight: 700; color: #fff; margin-bottom: 10px; letter-spacing: -0.01em; }
        .bp-cta-pill { display: inline-flex; align-items: center; gap: 10px; padding: 15px 28px; background: var(--brand-accent); color: #fff; font-weight: 700; font-size: 14px; letter-spacing: 0.04em; text-transform: uppercase; border-radius: 4px; transition: all 0.25s; box-shadow: 0 8px 22px rgba(227,6,19,0.3); }
        .bp-cta-pill:hover { background: #B80510; transform: translateY(-2px); box-shadow: 0 12px 28px rgba(227,6,19,0.4); }

        /* SECTION SHELL */
        .bp-section { padding: 96px 32px; }
        .bp-section.alt { background: var(--bp-bg-soft); }
        .bp-container { max-width: 1280px; margin: 0 auto; }
        .bp-eyebrow { font-size: 13px; font-weight: 800; letter-spacing: 0.22em; text-transform: uppercase; color: var(--brand-accent); margin-bottom: 14px; display: block; }
        .bp-h2 { font-size: clamp(30px, 4vw, 46px); font-weight: 800; letter-spacing: -0.025em; line-height: 1.15; color: var(--bp-text); }
        .bp-lead { font-size: 17px; line-height: 1.75; color: var(--bp-muted); }

        /* VALUE PROPS */
        .bp-vps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .bp-vp { padding: 40px 32px; background: #fff; border: 1px solid var(--bp-border); border-radius: 4px; transition: all 0.25s; }
        .bp-vp:hover { border-color: var(--brand-primary); transform: translateY(-4px); box-shadow: 0 18px 40px rgba(8,23,72,0.08); }
        .bp-vp-num { display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 50%; border: 2px solid var(--brand-accent); color: var(--brand-accent); font-size: 18px; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 22px; }
        .bp-vp h3 { font-size: 22px; font-weight: 700; color: var(--bp-text); margin-bottom: 12px; letter-spacing: -0.015em; }
        .bp-vp p { font-size: 15px; color: var(--bp-muted); line-height: 1.65; }

        /* WHO WE ARE */
        .bp-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .bp-2col img { width: 100%; height: 480px; object-fit: cover; border-radius: 4px; box-shadow: 0 20px 50px rgba(8,23,72,0.12); }

        /* FEATURES */
        .bp-features { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 48px; }
        .bp-feature { padding: 26px 24px; background: #fff; border-left: 3px solid var(--brand-accent); }
        .bp-feature h4 { font-size: 16px; font-weight: 700; color: var(--bp-text); margin-bottom: 8px; }
        .bp-feature p { font-size: 14px; color: var(--bp-muted); line-height: 1.55; }

        /* WHY CHOOSE US */
        .bp-why-list { list-style: none; padding: 0; margin: 28px 0 0; display: grid; gap: 14px; }
        .bp-why-list li { display: flex; align-items: flex-start; gap: 14px; font-size: 16px; color: var(--bp-text); line-height: 1.55; }
        .bp-why-list li::before { content: "✓"; flex-shrink: 0; width: 28px; height: 28px; background: var(--brand-primary); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800; margin-top: 1px; }

        /* TESTIMONIALS */
        .bp-tests { text-align: center; max-width: 900px; margin: 0 auto; }
        .bp-test-card { padding: 50px 40px; background: #fff; border: 1px solid var(--bp-border); border-radius: 6px; box-shadow: 0 12px 36px rgba(8,23,72,0.06); }
        .bp-stars { display: flex; justify-content: center; gap: 4px; color: #FFB300; margin-bottom: 20px; }
        .bp-test-card blockquote { font-size: 19px; line-height: 1.65; color: var(--bp-text); font-style: italic; margin-bottom: 26px; }
        .bp-test-name { font-weight: 700; font-size: 15px; color: var(--brand-primary); letter-spacing: 0.04em; }
        .bp-test-google { font-size: 11px; color: var(--bp-muted); letter-spacing: 0.18em; text-transform: uppercase; margin-top: 4px; }
        .bp-test-nav { display: flex; justify-content: center; gap: 14px; margin-top: 28px; }
        .bp-test-nav button { width: 40px; height: 40px; border-radius: 50%; background: #fff; border: 1.5px solid var(--bp-border); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; color: var(--bp-text); }
        .bp-test-nav button:hover { background: var(--brand-primary); color: #fff; border-color: var(--brand-primary); }
        .bp-test-dots { display: flex; justify-content: center; gap: 8px; margin-top: 18px; }
        .bp-test-dots span { width: 8px; height: 8px; border-radius: 50%; background: var(--bp-border); transition: all 0.2s; cursor: pointer; }
        .bp-test-dots span.active { background: var(--brand-accent); width: 26px; border-radius: 4px; }

        /* PARTNERS */
        .bp-partners { display: flex; justify-content: center; align-items: center; gap: 64px; flex-wrap: wrap; padding: 32px 0; }
        .bp-partner-tile { padding: 22px 36px; background: #fff; border: 1px solid var(--bp-border); border-radius: 4px; font-weight: 800; color: var(--bp-text); letter-spacing: -0.01em; font-size: 18px; text-align: center; min-width: 200px; transition: all 0.2s; }
        .bp-partner-tile:hover { border-color: var(--brand-primary); }
        .bp-partner-tile .b { display: block; font-size: 11px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: var(--brand-accent); margin-top: 4px; }

        /* SERVICES */
        .bp-services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .bp-svc-card { padding: 36px 32px; background: #fff; border: 1px solid var(--bp-border); border-radius: 4px; transition: all 0.25s; height: 100%; display: flex; flex-direction: column; }
        .bp-svc-card:hover { border-color: var(--brand-primary); transform: translateY(-4px); box-shadow: 0 22px 50px rgba(8,23,72,0.10); }
        .bp-svc-num { font-size: 36px; font-weight: 900; color: var(--brand-accent); letter-spacing: -0.04em; line-height: 1; margin-bottom: 16px; opacity: 0.85; }
        .bp-svc-card h3 { font-size: 22px; font-weight: 700; color: var(--bp-text); margin-bottom: 12px; letter-spacing: -0.015em; }
        .bp-svc-card p { font-size: 15px; color: var(--bp-muted); line-height: 1.65; margin-bottom: 20px; flex: 1; }
        .bp-svc-link { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: var(--brand-primary); transition: gap 0.2s; }
        .bp-svc-card:hover .bp-svc-link { gap: 12px; }

        /* GALLERY */
        .bp-gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        .bp-gallery-tile { aspect-ratio: 1/1; overflow: hidden; border-radius: 3px; }
        .bp-gallery-tile img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
        .bp-gallery-tile:hover img { transform: scale(1.06); }

        /* CONTACT CTA */
        .bp-contact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin-top: 40px; }
        .bp-contact-card { padding: 36px 32px; background: #fff; border: 1px solid var(--bp-border); border-radius: 4px; text-align: center; transition: all 0.25s; }
        .bp-contact-card:hover { border-color: var(--brand-primary); transform: translateY(-4px); }
        .bp-contact-icon { display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 50%; background: var(--brand-primary); color: #fff; margin-bottom: 18px; }
        .bp-contact-card h4 { font-size: 14px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; color: var(--brand-accent); margin-bottom: 10px; }
        .bp-contact-card a, .bp-contact-card span { font-size: 18px; font-weight: 700; color: var(--bp-text); letter-spacing: -0.01em; word-break: break-word; }

        /* MOBILE */
        @media (max-width: 900px) {
          .bp-hero { min-height: 70vh; }
          .bp-hero-inner { padding: 88px 22px; }
          .bp-hero-block { margin-bottom: 32px; }
          .bp-hero h1 { font-size: clamp(30px, 8vw, 44px); }
          .bp-hero p.sub { font-size: 15px; }
          .bp-hero h2 { font-size: clamp(20px, 5.5vw, 26px); }
          .bp-cta-pill { padding: 13px 22px; font-size: 13px; }

          .bp-section { padding: 56px 22px; }
          .bp-h2 { font-size: clamp(26px, 7vw, 34px) !important; }
          .bp-lead { font-size: 15px; }

          .bp-vps { grid-template-columns: 1fr; gap: 14px; }
          .bp-vp { padding: 28px 24px; }

          .bp-2col { grid-template-columns: 1fr; gap: 32px; }
          .bp-2col img { height: 280px; }
          .bp-features { grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 32px; }
          .bp-feature { padding: 20px 18px; }

          .bp-why-list li { font-size: 15px; }

          .bp-test-card { padding: 32px 24px; }
          .bp-test-card blockquote { font-size: 16px; }

          .bp-partners { gap: 20px; }
          .bp-partner-tile { padding: 16px 24px; min-width: 0; flex: 1 1 40%; font-size: 15px; }

          .bp-services-grid { grid-template-columns: 1fr; gap: 12px; }
          .bp-svc-card { padding: 26px 22px; }

          .bp-gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }

          .bp-contact-grid { grid-template-columns: 1fr; gap: 12px; margin-top: 28px; }
          .bp-contact-card { padding: 26px 22px; }
        }
      `}</style>

      {/* HERO — three stacked headline blocks each with their own CTA */}
      <section className="bp-hero">
        <div className="bp-hero-bg">
          <img src="/photos/residential-estate.jpg" alt="Beautiful painted home — Budget Pro Painting" />
        </div>
        <div className="bp-hero-overlay" />

        <div className="bp-hero-inner">
          <div className="bp-hero-block">
            <h1>Expert Painting and Remodeling Services You Can Trust</h1>
            <p className="sub">
              At Budget Pro Painting and Remodeling, LLC, we provide dependable painting and remodeling solutions designed to enhance the beauty, value, and durability of your property.
            </p>
            <Link href="/quote" className="bp-cta-pill">Get Estimate Now <ArrowRight size={16} /></Link>
          </div>

          <div className="bp-hero-block">
            <h2>Transforming Homes and Businesses Across Des Moines Area</h2>
            <Link href="/quote" className="bp-cta-pill">Get Estimate Now <ArrowRight size={16} /></Link>
          </div>

          <div className="bp-hero-block">
            <h2>Quality Workmanship, Honest Pricing, and Reliable Service</h2>
            <Link href="/quote" className="bp-cta-pill">Get Estimate Now <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* THREE-COLUMN VALUE PROPS */}
      <section className="bp-section">
        <div className="bp-container">
          <div className="bp-vps">
            {valueProps.map((v) => (
              <ScrollReveal key={v.n}>
                <div className="bp-vp">
                  <div className="bp-vp-num">{v.n}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE — 2 col text + image */}
      <section className="bp-section alt">
        <div className="bp-container">
          <div className="bp-2col">
            <ScrollReveal direction="left">
              <div>
                <span className="bp-eyebrow">Who We Are</span>
                <h2 className="bp-h2" style={{ marginBottom: 22 }}>Experience You Can Trust.</h2>
                <p className="bp-lead" style={{ marginBottom: 16 }}>
                  Budget Pro Painting and Remodeling, LLC is a trusted local company dedicated to delivering high-quality painting and remodeling services throughout Des Moines and surrounding Iowa communities.
                </p>
                <p className="bp-lead">
                  We specialize in residential and commercial projects, offering interior and exterior painting, drywall and plastering, staining, remodeling, and kitchen and cabinet refinishing. Our team brings skill, experience, and attention to detail to every job, ensuring clean finishes and long-lasting results.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <img src="/photos/web-cabinets.jpg" alt="Cabinet staining work — Budget Pro Painting" />
            </ScrollReveal>
          </div>

          {/* 4-column features */}
          <div className="bp-features">
            {features.map((f) => (
              <div key={f.title} className="bp-feature">
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — text + bullets + image */}
      <section className="bp-section">
        <div className="bp-container">
          <div className="bp-2col">
            <ScrollReveal direction="left">
              <img src="/photos/web-painter-white.jpg" alt="Painter applying exterior paint — Budget Pro Painting" />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <span className="bp-eyebrow">Why Choose Us</span>
                <h2 className="bp-h2" style={{ marginBottom: 18 }}>The Budget Pro Difference.</h2>
                <p className="bp-lead">
                  Choosing Budget Pro means working with a team that values quality, reliability, and customer satisfaction above all else. From the first walk-through to the final punch list, every step is handled with care.
                </p>
                <ul className="bp-why-list">
                  {whyBullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — carousel */}
      <section className="bp-section alt">
        <div className="bp-container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="bp-eyebrow">Testimonials</span>
            <h2 className="bp-h2">What Our Clients Say.</h2>
          </div>
          <div className="bp-tests">
            <ScrollReveal>
              <div className="bp-test-card">
                <div className="bp-stars">
                  {[1, 2, 3, 4, 5].map((n) => <Star key={n} size={20} fill="#FFB300" strokeWidth={0} />)}
                </div>
                <blockquote>&ldquo;{testimonials[tIndex].quote}&rdquo;</blockquote>
                <div className="bp-test-name">— {testimonials[tIndex].name}</div>
                <div className="bp-test-google">Verified Google Review</div>
              </div>
            </ScrollReveal>
            <div className="bp-test-nav">
              <button onClick={() => setTIndex((tIndex - 1 + testimonials.length) % testimonials.length)} aria-label="Previous"><ChevronLeft size={18} /></button>
              <button onClick={() => setTIndex((tIndex + 1) % testimonials.length)} aria-label="Next"><ChevronRight size={18} /></button>
            </div>
            <div className="bp-test-dots">
              {testimonials.map((_, i) => <span key={i} className={i === tIndex ? "active" : ""} onClick={() => setTIndex(i)} />)}
            </div>
          </div>
        </div>
      </section>

      {/* PAINT BRAND PARTNERS */}
      <section className="bp-section" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="bp-container">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="bp-eyebrow">Trusted Products</span>
            <h2 className="bp-h2" style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}>We partner with industry-leading paint brands.</h2>
          </div>
          <div className="bp-partners">
            <div className="bp-partner-tile">Sherwin-Williams<span className="b">Premium Partner</span></div>
            <div className="bp-partner-tile">Benjamin Moore<span className="b">Authorized Use</span></div>
            <div className="bp-partner-tile">PPG Paints<span className="b">Trusted Partner</span></div>
          </div>
        </div>
      </section>

      {/* SERVICES — 6 numbered cards */}
      <section className="bp-section alt">
        <div className="bp-container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="bp-eyebrow">Our Services</span>
            <h2 className="bp-h2">Painting &amp; Remodeling Services.</h2>
          </div>
          <div className="bp-services-grid">
            {services.map((s) => (
              <ScrollReveal key={s.n}>
                <Link href={s.href} style={{ display: "block", height: "100%" }}>
                  <div className="bp-svc-card">
                    <div className="bp-svc-num">{s.n}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <span className="bp-svc-link">Learn more <ArrowRight size={13} /></span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY — 8 image grid */}
      <section className="bp-section">
        <div className="bp-container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="bp-eyebrow">Gallery</span>
            <h2 className="bp-h2">A look at our work.</h2>
          </div>
          <div className="bp-gallery-grid">
            {galleryImages.map((src, i) => (
              <Link key={i} href="/gallery" className="bp-gallery-tile">
                <img src={src} alt={`Budget Pro Painting project ${i + 1}`} />
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/gallery" className="bp-cta-pill" style={{ background: "var(--brand-primary)", boxShadow: "0 8px 22px rgba(26,55,168,0.3)" }}>
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* GET AN ESTIMATE — 3 col contact */}
      <section className="bp-section alt">
        <div className="bp-container">
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
            <span className="bp-eyebrow">Get An Estimate</span>
            <h2 className="bp-h2" style={{ marginBottom: 18 }}>Ready to start your project?</h2>
            <p className="bp-lead">
              Get in touch with Budget Pro Painting and Remodeling, LLC today to discuss your painting or remodeling project. Whether you need interior or exterior painting, drywall repairs, or a complete renovation, our team is ready to help.
            </p>
          </div>
          <div className="bp-contact-grid">
            <div className="bp-contact-card">
              <div className="bp-contact-icon"><Phone size={22} /></div>
              <h4>Call Us</h4>
              <a href="tel:+15155056429">(515) 505-6429</a>
            </div>
            <div className="bp-contact-card">
              <div className="bp-contact-icon"><Mail size={22} /></div>
              <h4>Email Us</h4>
              <a href="mailto:Info@budgetpropainter.com">Info@budgetpropainter.com</a>
            </div>
            <div className="bp-contact-card">
              <div className="bp-contact-icon"><MapPin size={22} /></div>
              <h4>Address</h4>
              <span>Altoona / Des Moines, IA</span>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/quote" className="bp-cta-pill">Request a Free Quote <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
