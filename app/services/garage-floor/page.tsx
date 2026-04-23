import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Garage Floor Coatings in Altoona, IA",
  description:
    "Epoxy and polyaspartic garage floor coatings in Altoona, Des Moines, and central Iowa. Showroom finish. Chemical-resistant. Built for Iowa winters.",
};

export default function GarageFloorPage() {
  return (
    <ServicePage
      eyebrow="Epoxy · Polyaspartic · Iowa-Tough Floors"
      title="Garage Floor Coatings."
      tagline="A concrete floor that looks like showroom vinyl — and stands up to road salt, oil spills, and whatever you drop on it."
      hero="/photos/commercial-white-black.jpg"
      intro={[
        "A garage floor is the most abused surface on your property. Hot tires, road salt, oil drips, dropped tools, deicer, motorcycle kickstands — plain concrete gives up fast, cracks pick up dirt, and everything tracks into your house.",
        "A proper epoxy or polyaspartic coating fixes all of that in a single weekend. Decorative chip blend for grip and style, UV-stable topcoat that won't yellow, hot-tire resistant so you can pull a vehicle in the same day. The floor is easier to clean than your kitchen.",
        "Every install starts with a diamond-grind on the concrete so the coating actually bonds — not a halfhearted wash. That's the difference between a 10-year floor and a 2-year floor.",
      ]}
      features={[
        { title: "Epoxy Systems", desc: "Classic two-part epoxy with decorative chip and clear topcoat. Durable, beautiful, affordable." },
        { title: "Polyaspartic Systems", desc: "Premium option — fully cured in 24 hours, UV-stable, higher abrasion resistance." },
        { title: "Diamond-Grind Prep", desc: "Concrete diamond-ground to open pores so the coating mechanically bonds. Not a shortcut acid wash." },
        { title: "Crack + Pit Repair", desc: "Hairline cracks and pop-out spots filled flush before coating so the finish reads flat." },
        { title: "Chip Blend + Color", desc: "Dozens of chip colors, solid neutrals, metallic options. We'll sample on your actual slab." },
        { title: "Hot-Tire Resistant", desc: "Engineered to handle hot summer tires without marking or lifting — something cheap epoxy fails at." },
      ]}
      process={[
        { title: "Measure + Quote", desc: "Peter measures the slab, evaluates the concrete, and quotes in writing." },
        { title: "Diamond Grind", desc: "Slab ground to CSP-3 profile — the prep that makes the coating last." },
        { title: "Repair + Prime", desc: "Cracks filled, joints managed, primer + color base coat laid down." },
        { title: "Chip + Topcoat", desc: "Color chips broadcast, sealed with the final topcoat. Walk-on in 24 hrs, drive-on in 48." },
      ]}
      related={[
        { title: "Interior & Exterior Painting", href: "/services/painting" },
        { title: "Deck & Fence Staining", href: "/services/staining" },
        { title: "Get a Free Quote", href: "/quote" },
      ]}
    />
  );
}
