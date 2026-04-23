import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Exterior Painting in Altoona, IA",
  description:
    "Exterior house painting in Altoona, Des Moines, and central Iowa. Siding, trim, fascia, shutters, doors. Weather-resistant finishes that hold up to Iowa winters.",
};

export default function ExteriorPaintingPage() {
  return (
    <ServicePage
      eyebrow="Residential Exterior · Siding, Trim, Fascia, Shutters"
      title="Exterior Painting."
      tagline="Enhance curb appeal and protect your property with durable, weather-resistant finishes — painted by an owner who's on every job."
      hero="/photos/web-shutters.jpg"
      intro={[
        "Exterior paint has one job — protect your house. Everything about how we approach a repaint is designed around that: proper prep, the right product for your substrate (wood, fiber cement, stucco, vinyl), and finish quality that still looks sharp 7 years from now.",
        "Every exterior job starts with a pressure-wash to strip dirt, mildew, and chalking residue. Then scraping, scuff-sanding the glossy spots, and caulking every gap before the primer and top coats go on. Windows, doors, and landscaping get masked. We don't spray and pray.",
        "Two coats of premium product every time. We use Sherwin-Williams Emerald or Benjamin Moore Aura on almost every exterior — paints rated for 25-year color retention. That's the difference between a 'painted yesterday' look 5 years out and a chalky-faded one.",
      ]}
      features={[
        { title: "Whole-Home Repaints", desc: "Full siding + trim + fascia + gutters if you want them. Coordinated color palette across the entire exterior." },
        { title: "Siding Only", desc: "Sometimes you just need the body repainted and the trim's fine. We scope to what you actually need." },
        { title: "Trim, Fascia, Shutters", desc: "Trim refreshes punch way above their cost. Shutters, doors, fascia, brackets — sharp hand-cut finish." },
        { title: "Decks, Porches, Railings", desc: "Painted or stained as the job calls for. Proper prep keeps finishes holding through Iowa freeze-thaw." },
        { title: "Pressure Wash + Prep", desc: "Every job. No shortcut washes or 'just a rinse' — real prep so paint actually bonds." },
        { title: "Weather-Grade Products", desc: "Sherwin-Williams Emerald + Benjamin Moore Aura. No contractor-grade paint pretending to be premium." },
      ]}
      process={[
        { title: "Walk + Quote", desc: "Peter visits, inspects every elevation, and quotes in writing." },
        { title: "Pressure Wash", desc: "Dirt, mildew, chalk stripped off so new paint has clean substrate to bond to." },
        { title: "Scrape, Sand, Caulk", desc: "Loose paint scraped, glossy surfaces scuffed, gaps caulked. The prep nobody sees but everybody needs." },
        { title: "Two Coats + Walk", desc: "Two full coats of premium product, then a punch-walk to find any miss." },
      ]}
      related={[
        { title: "Interior Painting", href: "/services/interior-painting" },
        { title: "Deck & Fence Staining", href: "/services/staining" },
        { title: "Get an Estimate", href: "/quote" },
      ]}
    />
  );
}
