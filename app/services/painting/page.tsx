import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Interior & Exterior Painting in Altoona, IA",
  description:
    "Owner-operated interior and exterior painting in Altoona, Des Moines, and central Iowa. Whole-house repaints, accent walls, commercial exteriors. Sharp finishes, fair pricing.",
};

export default function PaintingPage() {
  return (
    <ServicePage
      eyebrow="Interior + Exterior · Residential + Commercial"
      title="Painting."
      tagline="Clean prep. Sharp cut lines. Finishes that survive Iowa winters and Iowa summers — built by an owner who's on every job."
      hero="/photos/residential-estate.jpg"
      intro={[
        "Painting is part craft, part discipline. Anyone can roll a wall — almost no one prep it the way it needs to be prepped, cut a line that stays sharp at the ceiling, or pick the right product for cedar siding versus stucco.",
        "Peter has spent the last several years dialing this in across central Iowa. Every job starts with a real prep pass: pressure-washing exteriors, scraping loose paint, scuff-sanding glossy surfaces, caulking gaps, masking off everything that shouldn't get hit. Two coats of premium paint go on after — never one with a 'we'll see' second.",
        "Same Peter on the walk-through, the quote, and the actual painting. No subs, no surprises.",
      ]}
      features={[
        { title: "Whole-House Repaints", desc: "Interior or exterior, full house repaint with proper prep, two coats, and a punch-walk before we leave." },
        { title: "Accent Walls + Single Rooms", desc: "Smaller scope, same standard. Sharp cut lines, masking that actually works, no paint in the carpet." },
        { title: "Commercial Exteriors", desc: "Retail, office, multi-tenant. Coordinated scheduling around your business hours." },
        { title: "Cabinet + Trim Refinishing", desc: "Sand, prime, spray finish — kitchens reborn without a $30k remodel bill." },
        { title: "Color Consultation", desc: "If you're stuck between three swatches, Peter will help you pick. No charge, no pressure." },
        { title: "Premium Products Only", desc: "Sherwin-Williams Emerald, Benjamin Moore Aura — no contractor-grade paint pretending to be premium." },
      ]}
      process={[
        { title: "Free Walk-Through", desc: "Peter visits, looks at every surface, talks scope, color, and timing." },
        { title: "Honest Quote", desc: "Flat quote in writing. What we say is what you pay." },
        { title: "Proper Prep", desc: "Pressure wash, scrape, scuff-sand, caulk, mask. The work nobody sees." },
        { title: "Two Coats + Walk", desc: "Two full coats of premium product, then a punch walk to find any miss before we leave." },
      ]}
      related={[
        { title: "Deck & Fence Staining", href: "/services/staining" },
        { title: "Garage Floor Coatings", href: "/services/garage-floor" },
        { title: "Get a Free Quote", href: "/quote" },
      ]}
    />
  );
}
