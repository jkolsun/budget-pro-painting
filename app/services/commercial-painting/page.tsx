import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Commercial Painting in Altoona, IA",
  description:
    "Commercial interior and exterior painting in central Iowa. Retail, office, multi-tenant, industrial. Coordinated scheduling around your business hours.",
};

export default function CommercialPaintingPage() {
  return (
    <ServicePage
      eyebrow="Commercial Interior + Exterior · Retail, Office, Industrial"
      title="Commercial Painting."
      tagline="Professional commercial solutions designed to improve appearance while minimizing disruption — scheduled around your business, not ours."
      hero="/photos/ba3-after.jpg"
      intro={[
        "A fresh commercial paint job does more than clean up a tired building — it signals something to every customer and employee walking in. A sharp, maintained-looking business earns more trust than one that looks neglected.",
        "We paint retail storefronts, office interiors, multi-tenant buildings, warehouses, and light industrial spaces. Every commercial job is coordinated around your operating hours — after-hours, weekends, or rolling phases so you never lose a day of business.",
        "Commercial exteriors get the same pressure-wash + prep + two-coat premium product treatment as our residential work. Commercial interiors get low-odor, zero-VOC products so your team doesn't have to vacate while we work.",
      ]}
      features={[
        { title: "Retail Storefronts", desc: "Interior and exterior repaints, including full color-scheme rebrands. See our before/after gallery for examples." },
        { title: "Office Interiors", desc: "Low-odor, zero-VOC products so your team can stay working through the visit." },
        { title: "Multi-Tenant Buildings", desc: "Common areas, hallways, stairwells — coordinated across units and tenant schedules." },
        { title: "Industrial + Warehouse", desc: "Durable industrial coatings built for high-traffic, high-wear environments." },
        { title: "After-Hours Scheduling", desc: "Nights, weekends, phased — your business doesn't lose a day because we're painting." },
        { title: "Minimal Disruption", desc: "Clean masking, dust containment, daily cleanup. You come back in the morning to a clean worksite." },
      ]}
      process={[
        { title: "Site Walk", desc: "Peter walks the facility, identifies scope, talks color + product + schedule constraints." },
        { title: "Written Proposal", desc: "Line-item proposal with phased scheduling options if you need them." },
        { title: "Masked + Prepped", desc: "Signage, equipment, inventory protected. Low-dust prep technique." },
        { title: "Paint + Walk + COI", desc: "Two coats, punch-walk for defects, final insurance certificate on file before invoice." },
      ]}
      related={[
        { title: "Interior Painting", href: "/services/interior-painting" },
        { title: "Exterior Painting", href: "/services/exterior-painting" },
        { title: "Garage Floor Coatings", href: "/services/garage-floor" },
      ]}
    />
  );
}
