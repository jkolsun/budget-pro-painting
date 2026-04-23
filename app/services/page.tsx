import type { Metadata } from "next";
import Link from "next/link";
import { Paintbrush, Droplets, Home as HomeIcon, ArrowRight, Phone } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Services",
  description: "Interior & exterior painting, deck & fence staining, and garage floor coatings in Altoona, Des Moines, and central Iowa.",
};

const services = [
  {
    Icon: Paintbrush,
    title: "Interior & Exterior Painting",
    desc: "Whole-house repaints, accent walls, commercial exteriors. Proper prep, sharp cut lines, premium product — finishes that actually last.",
    href: "/services/painting",
    img: "/photos/residential-estate.jpg",
    swatch: "#1A37A8",
  },
  {
    Icon: Droplets,
    title: "Deck & Fence Staining",
    desc: "Strip, sand, seal. Decks and fences restored and protected so Iowa weather can't tear them apart another season.",
    href: "/services/staining",
    img: "/photos/ba5-after.jpg",
    swatch: "#8B3A16",
  },
  {
    Icon: HomeIcon,
    title: "Garage Floor Coatings",
    desc: "Diamond-ground prep, epoxy or polyaspartic system, decorative chip, hot-tire resistant topcoat. Showroom look, Iowa-tough finish.",
    href: "/services/garage-floor",
    img: "/photos/commercial-white-black.jpg",
    swatch: "#4A4E52",
  },
];

export default function ServicesPage() {
  return (
    <>
      <style>{`
        .bp-svc-hero { position: relative; padding: 200px 24px 96px; background: linear-gradient(135deg, #081748 0%, #0F2575 55%, #1A37A8 100%); color: #fff; overflow: hidden; }
        .bp-svc-hero::before { content: ""; position: absolute; top: -30%; right: -10%; width: 50%; height: 160%; background: radial-gradient(circle, rgba(227,6,19,0.22) 0%, transparent 60%); filter: blur(80px); }
        .bp-svc-hero::after { content: ""; position: absolute; top: 0; right: 0; width: 120px; height: 100%; background: linear-gradient(180deg, #E30613 0%, #B80510 100%); transform: skewX(-6deg) translateX(60px); opacity: 0.85; }
        .bp-svc-hero-inner { position: relative; max-width: 1320px; margin: 0 auto; }
        .bp-svc-hero h1 { font-size: clamp(40px, 6.5vw, 86px); font-weight: 900; line-height: 1; letter-spacing: -0.035em; color: #fff; margin-bottom: 20px; max-width: 900px; }
        .bp-svc-hero h1 em { font-style: normal; color: #FF4B57; }
        .bp-svc-hero p { font-size: 18px; color: rgba(255,255,255,0.82); max-width: 620px; line-height: 1.6; }
        .bp-svc-hero-pill { display: inline-flex; align-items: center; gap: 10px; padding: 6px 14px; background: rgba(255,75,87,0.18); border: 1px solid rgba(255,75,87,0.42); border-radius: 999px; font-size: 11.5px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #FF4B57; margin-bottom: 24px; }

        .bp-svc-grid-wrap { background: #FAF7F1; padding: 100px 24px; }
        .bp-svc-grid { max-width: 1320px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
        .bp-svc-card { position: relative; background: #fff; border: 1px solid #E4DDD0; border-radius: 4px; overflow: hidden; transition: transform 0.35s, box-shadow 0.35s; height: 100%; display: flex; flex-direction: column; }
        .bp-svc-card:hover { transform: translateY(-8px); box-shadow: 0 28px 56px rgba(10,15,30,0.16); }
        .bp-svc-img { position: relative; aspect-ratio: 4/3; overflow: hidden; }
        .bp-svc-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1); }
        .bp-svc-card:hover .bp-svc-img img { transform: scale(1.06); }
        .bp-svc-img::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 50%, rgba(10,15,30,0.5) 100%); }
        .bp-svc-icon { position: absolute; bottom: 18px; left: 18px; width: 52px; height: 52px; background: var(--swatch, #1A37A8); color: #fff; display: flex; align-items: center; justify-content: center; border-radius: 3px; z-index: 2; box-shadow: 0 10px 26px rgba(10,15,30,0.3); }
        .bp-svc-body { padding: 32px 30px 30px; flex: 1; display: flex; flex-direction: column; }
        .bp-svc-body h3 { font-size: 24px; font-weight: 800; letter-spacing: -0.02em; color: #0A0F1E; margin-bottom: 12px; }
        .bp-svc-body p { font-size: 15px; line-height: 1.65; color: #3A4158; margin-bottom: 22px; flex: 1; }
        .bp-svc-link { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--swatch, #1A37A8); transition: gap 0.2s; }
        .bp-svc-card:hover .bp-svc-link { gap: 14px; }

        .bp-svc-cta { background: linear-gradient(135deg, #1A37A8 0%, #081748 100%); padding: 90px 24px; color: #fff; text-align: center; }
        .bp-svc-cta h2 { font-size: clamp(30px, 4.5vw, 52px); font-weight: 900; letter-spacing: -0.035em; color: #fff; margin-bottom: 20px; }
        .bp-svc-cta h2 em { font-style: normal; color: #FF4B57; }
        .bp-svc-cta p { font-size: 17px; color: rgba(255,255,255,0.82); max-width: 560px; margin: 0 auto 32px; }
        .bp-btn { display: inline-flex; align-items: center; gap: 10px; padding: 16px 30px; font-size: 14px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none; border-radius: 3px; transition: all 0.25s; }
        .bp-btn-red { background: #E30613; color: #fff; box-shadow: 0 10px 24px rgba(227,6,19,0.3); }
        .bp-btn-red:hover { background: #B80510; transform: translateY(-3px); }
        .bp-btn-outline { background: rgba(255,255,255,0.08); color: #fff; border: 1.5px solid rgba(255,255,255,0.5); backdrop-filter: blur(6px); }
        .bp-btn-outline:hover { background: #fff; color: #0A0F1E; transform: translateY(-3px); }

        @media (max-width: 900px) {
          .bp-svc-hero { padding: 140px 20px 64px; }
          .bp-svc-hero::after { width: 70px; }
          .bp-svc-hero p { font-size: 15.5px; }
          .bp-svc-grid-wrap { padding: 56px 20px; }
          .bp-svc-grid { grid-template-columns: 1fr; gap: 14px; }
          .bp-svc-body { padding: 24px 22px 24px; }
          .bp-svc-body h3 { font-size: 21px; }
          .bp-svc-body p { font-size: 14.5px; }
          .bp-svc-cta { padding: 56px 20px; }
          .bp-svc-cta p { font-size: 15px; }
        }
      `}</style>

      <section className="bp-svc-hero">
        <div className="bp-svc-hero-inner">
          <ScrollReveal>
            <span className="bp-svc-hero-pill">
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF4B57" }} /> Services
            </span>
            <h1>Three services. <em>Done right.</em></h1>
            <p>Every service is handled by Peter personally — the same owner who walked your property and gave you the quote. No subcontractors you've never met.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bp-svc-grid-wrap">
        <div className="bp-svc-grid">
          {services.map((s, i) => {
            const Icon = s.Icon;
            return (
              <ScrollReveal key={s.href} delay={i * 100}>
                <Link href={s.href}>
                  <div className="bp-svc-card" style={{ ["--swatch" as string]: s.swatch } as React.CSSProperties}>
                    <div className="bp-svc-img">
                      <img src={s.img} alt={s.title} />
                      <span className="bp-svc-icon"><Icon size={22} strokeWidth={1.8} /></span>
                    </div>
                    <div className="bp-svc-body">
                      <h3>{s.title}</h3>
                      <p>{s.desc}</p>
                      <span className="bp-svc-link">Learn more <ArrowRight size={13} /></span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <section className="bp-svc-cta">
        <ScrollReveal>
          <h2>Not sure which one? <em>Just ask.</em></h2>
          <p>Peter will walk your project and tell you straight what it actually needs — no bundle pitch, no upsell.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/quote" className="bp-btn bp-btn-red">Get a Free Quote <ArrowRight size={16} /></Link>
            <a href="tel:+15155056429" className="bp-btn bp-btn-outline"><Phone size={16} /> (515) 505-6429</a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
