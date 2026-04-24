import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery — Budget Pro Painting Project Photos",
  description:
    "Recent painting, staining, cabinet refinishing, and garage epoxy projects by Budget Pro Painting & Remodeling LLC across Altoona, Des Moines, and central Iowa.",
};

const galleryItems = [
  { src: "/photos/residential-estate.jpg", caption: "Residential Exterior · Altoona, IA" },
  { src: "/photos/web-shutters.jpg", caption: "Exterior Shutter Painting" },
  { src: "/photos/web-cabinets.jpg", caption: "Cabinet Refinishing · Stain Finish" },
  { src: "/photos/web-deck-stain.jpg", caption: "Deck Staining · Cedar Restoration" },
  { src: "/photos/web-painter-white.jpg", caption: "Exterior Repaint · Siding & Trim" },
  { src: "/photos/web-interior-color.jpg", caption: "Interior Repaint · Stairwell Accent" },
  { src: "/photos/web-interior-wall.jpg", caption: "Interior Color · Modern Living Room" },
  { src: "/photos/web-transform.jpg", caption: "Property Transformation" },
  { src: "/photos/ba3-after.jpg", caption: "Commercial Rebrand · Retail Exterior" },
  { src: "/photos/ba3-before.jpg", caption: "Commercial · Before Repaint" },
  { src: "/photos/ba4-after.jpg", caption: "Commercial · Backroom Clothing After" },
  { src: "/photos/ba4-before.jpg", caption: "Commercial · Before Repaint" },
  { src: "/photos/ba5-after.jpg", caption: "Residential Back Exterior · After" },
  { src: "/photos/ba5-before.jpg", caption: "Residential Back Exterior · Before" },
  { src: "/photos/commercial-white-black.jpg", caption: "Commercial · White Exterior + Black Trim" },
  { src: "/photos/web-porch.jpg", caption: "Porch & Deck Refresh" },
];

export default function GalleryPage() {
  return (
    <>
      <style>{`
        .bp-gal-hero { padding: 180px 32px 72px; background: linear-gradient(135deg, #081748 0%, #1A37A8 70%, #2449C7 100%); color: #fff; position: relative; overflow: hidden; }
        .bp-gal-hero::after { content: ""; position: absolute; top: 0; right: 0; width: 140px; height: 100%; background: linear-gradient(180deg, #E30613 0%, #B80510 100%); transform: skewX(-6deg) translateX(70px); opacity: 0.85; }
        .bp-gal-hero-inner { max-width: 1280px; margin: 0 auto; position: relative; z-index: 1; }
        .bp-gal-hero .pill { display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; background: rgba(255,75,87,0.18); border: 1px solid rgba(255,75,87,0.42); border-radius: 999px; font-size: 11.5px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #FF4B57; margin-bottom: 22px; }
        .bp-gal-hero h1 { font-size: clamp(40px, 6.5vw, 80px); font-weight: 900; letter-spacing: -0.035em; line-height: 1.02; color: #fff; margin-bottom: 16px; max-width: 820px; }
        .bp-gal-hero h1 em { font-style: normal; color: #FF4B57; }
        .bp-gal-hero p { font-size: 17px; color: rgba(255,255,255,0.82); max-width: 580px; }

        .bp-gal-section { padding: 80px 32px; background: #FAF7F1; }
        .bp-gal-grid { max-width: 1320px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        .bp-gal-tile { position: relative; aspect-ratio: 4/3; overflow: hidden; border-radius: 4px; background: #E4DDD0; }
        .bp-gal-tile img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
        .bp-gal-tile:hover img { transform: scale(1.05); }
        .bp-gal-tile-cap { position: absolute; left: 0; right: 0; bottom: 0; padding: 14px 16px; background: linear-gradient(180deg, transparent 0%, rgba(10,15,30,0.85) 70%); color: #fff; font-size: 13px; font-weight: 600; letter-spacing: 0.02em; opacity: 0; transition: opacity 0.25s; }
        .bp-gal-tile:hover .bp-gal-tile-cap { opacity: 1; }

        .bp-gal-cta { padding: 80px 32px; background: linear-gradient(135deg, #1A37A8 0%, #081748 100%); color: #fff; text-align: center; }
        .bp-gal-cta h2 { font-size: clamp(30px, 4.5vw, 48px); font-weight: 900; letter-spacing: -0.03em; color: #fff; margin-bottom: 16px; }
        .bp-gal-cta h2 em { font-style: normal; color: #FF4B57; }
        .bp-gal-cta p { font-size: 16.5px; color: rgba(255,255,255,0.82); max-width: 540px; margin: 0 auto 28px; }
        .bp-gal-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .bp-cta-red { display: inline-flex; align-items: center; gap: 10px; padding: 16px 30px; background: #E30613; color: #fff; font-weight: 700; font-size: 14px; letter-spacing: 0.06em; text-transform: uppercase; border-radius: 4px; box-shadow: 0 8px 22px rgba(227,6,19,0.32); transition: all 0.25s; }
        .bp-cta-red:hover { background: #B80510; transform: translateY(-3px); }
        .bp-cta-out { display: inline-flex; align-items: center; gap: 10px; padding: 16px 30px; background: rgba(255,255,255,0.1); color: #fff; border: 1.5px solid rgba(255,255,255,0.5); font-weight: 700; font-size: 14px; letter-spacing: 0.06em; text-transform: uppercase; border-radius: 4px; transition: all 0.25s; backdrop-filter: blur(6px); }
        .bp-cta-out:hover { background: #fff; color: #0A0F1E; transform: translateY(-3px); }

        @media (max-width: 900px) {
          .bp-gal-hero { padding: 132px 22px 56px; }
          .bp-gal-hero::after { width: 60px; }
          .bp-gal-hero p { font-size: 15px; }
          .bp-gal-section { padding: 48px 18px; }
          .bp-gal-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
          .bp-gal-tile-cap { opacity: 1; padding: 10px 12px; font-size: 11px; }
          .bp-gal-cta { padding: 56px 22px; }
          .bp-gal-cta-btns { flex-direction: column; gap: 10px; }
          .bp-gal-cta-btns > * { width: 100%; justify-content: center; }
        }
      `}</style>

      <section className="bp-gal-hero">
        <div className="bp-gal-hero-inner">
          <span className="pill">
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF4B57" }} /> Project Gallery
          </span>
          <h1>Real projects. <em>Real finishes.</em></h1>
          <p>A look at recent painting, staining, cabinet refinishing, and garage epoxy work across Altoona, Des Moines, and central Iowa.</p>
        </div>
      </section>

      <section className="bp-gal-section">
        <div className="bp-gal-grid">
          {galleryItems.map((g, i) => (
            <div key={i} className="bp-gal-tile">
              <img src={g.src} alt={g.caption} loading={i < 4 ? undefined : "lazy"} />
              <div className="bp-gal-tile-cap">{g.caption}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bp-gal-cta">
        <h2>Like what you see? <em>Let&apos;s talk.</em></h2>
        <p>Free, no-pressure estimate. Peter walks the project with you and gives a fair, written quote on the spot.</p>
        <div className="bp-gal-cta-btns">
          <Link href="/quote" className="bp-cta-red">Get an Estimate <ArrowRight size={16} /></Link>
          <a href="tel:+15155056429" className="bp-cta-out"><Phone size={16} /> (515) 505-6429</a>
        </div>
      </section>
    </>
  );
}
