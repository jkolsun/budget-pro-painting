import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Kitchen & Cabinet Refinishing in Altoona, IA",
  description:
    "Kitchen cabinet and trim refinishing in Altoona, Des Moines, and central Iowa. Sand, prime, and spray-finish cabinets for a factory-smooth look — at a fraction of replacement cost.",
};

export default function CabinetRefinishingPage() {
  return (
    <ServicePage
      eyebrow="Kitchen Cabinets · Vanities · Built-Ins"
      title="Cabinet Refinishing."
      tagline="A kitchen that looks brand-new for a fraction of what a full remodel costs. Sand. Prime. Spray. Factory-smooth finish, every time."
      hero="/photos/web-cabinets.jpg"
      intro={[
        "A full kitchen remodel runs $30–80k. Refinishing your existing cabinets runs a fraction of that — and if the boxes are structurally sound, the finished result is nearly indistinguishable from new.",
        "We remove the doors and drawer fronts, label every piece, and move them to a controlled spray environment. The existing finish gets scuff-sanded, then a bonding primer locks in, then two coats of a premium cabinet-grade enamel get sprayed on for a factory-smooth surface. No brushstrokes. No orange-peel texture. No runs.",
        "The boxes get masked and refinished in place. When everything goes back together 5–7 days later, your kitchen reads new. Most of our cabinet clients do a coordinated wall repaint at the same time to tie the whole space together.",
      ]}
      features={[
        { title: "Full Spray Finish", desc: "Doors and fronts sprayed in a controlled environment for a factory-smooth surface — no brush marks." },
        { title: "Solid Wood & Thermofoil", desc: "We refinish real-wood cabinets and, with proper prep, thermofoil (laminate) doors too." },
        { title: "Color Consultation", desc: "Classic white? Deep navy? Two-tone island? We'll sample on your actual doors before committing." },
        { title: "New Hardware", desc: "Good time for updated pulls or knobs — we can coordinate that and hand-drill while doors are off." },
        { title: "Vanities + Built-Ins", desc: "Bathroom vanities, laundry cabinets, library built-ins — same process, same finish." },
        { title: "Coordinated Kitchen Repaint", desc: "Most clients pair cabinet work with a kitchen wall + ceiling repaint for a whole-space reset." },
      ]}
      process={[
        { title: "Consultation + Sample", desc: "Peter assesses the cabinets, pulls a sample on your actual door to confirm color + finish." },
        { title: "Remove + Label", desc: "Doors and fronts removed and labeled. Hardware cataloged for re-install." },
        { title: "Sand, Prime, Spray", desc: "Scuff-sand, bonding primer, two coats of cabinet-grade enamel sprayed in a controlled booth." },
        { title: "Re-Install + Walk", desc: "Doors reinstalled, hardware mounted, soft-close adjustments, punch-walk before final." },
      ]}
      related={[
        { title: "Interior Painting", href: "/services/interior-painting" },
        { title: "Exterior Painting", href: "/services/exterior-painting" },
        { title: "Get an Estimate", href: "/quote" },
      ]}
    />
  );
}
