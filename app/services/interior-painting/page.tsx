import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Interior Painting in Altoona, IA",
  description:
    "Interior painting in Altoona, Des Moines, and central Iowa — whole-house repaints, single rooms, accent walls, ceilings, and trim. Sharp lines, premium product, fair pricing.",
};

export default function InteriorPaintingPage() {
  return (
    <ServicePage
      eyebrow="Residential Interior · Whole Home, Single Room, Accent Wall"
      title="Interior Painting."
      tagline="Transform your space with clean, smooth painting that adds beauty and lasting value — done by an owner-operated crew that respects your home."
      hero="/photos/web-interior-color.jpg"
      intro={[
        "Interior painting is the fastest, most cost-effective way to change how your home feels. New color on the walls, a fresh ceiling, sharp baseboards — and the entire room reads new.",
        "We mask everything that shouldn't get hit, fill nail holes, sand glossy surfaces so the new paint actually grabs, cut crisp lines at the ceiling and trim, and roll two full coats of premium product — Sherwin-Williams or Benjamin Moore. We don't paint over dust and we don't leave a single drip on your hardwood.",
        "Furniture moved and covered. Drop cloths down. Site cleaned and vacuumed before we leave. That's the standard.",
      ]}
      features={[
        { title: "Whole-House Interiors", desc: "Walls, ceilings, trim, doors. Coordinated color across rooms or distinct palettes per space." },
        { title: "Single Rooms & Accent Walls", desc: "Smaller scope, same standard. Crisp cut lines at every corner." },
        { title: "Ceiling Refresh", desc: "Flat ceiling refresh that brightens the whole room — often more impactful than new wall color." },
        { title: "Trim, Doors, & Baseboards", desc: "Hand-cut trim work or full spray-application for a factory-smooth finish." },
        { title: "Color Consultation", desc: "Stuck between three swatches? We'll help you pick — no charge, no pressure." },
        { title: "Two Coats, Always", desc: "Premium product, two full coats, every job. No 'we'll see if it covers' single-coat compromises." },
      ]}
      process={[
        { title: "Free Walk-Through", desc: "Peter visits, looks at every wall, talks scope and color." },
        { title: "Honest Estimate", desc: "Flat quote in writing. What we say is what you pay." },
        { title: "Prep + Protect", desc: "Furniture moved, floors covered, holes filled, surfaces sanded." },
        { title: "Two Coats + Walk", desc: "Two full coats applied, then a punch-walk to catch any miss before we leave." },
      ]}
      related={[
        { title: "Exterior Painting", href: "/services/exterior-painting" },
        { title: "Cabinet & Kitchen Refinishing", href: "/services/cabinet-refinishing" },
        { title: "Get an Estimate", href: "/quote" },
      ]}
    />
  );
}
