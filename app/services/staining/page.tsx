import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Deck & Fence Staining in Altoona, IA",
  description:
    "Professional deck and fence staining in central Iowa. Stripping, sanding, and premium stain application that protects wood through Iowa winters.",
};

export default function StainingPage() {
  return (
    <ServicePage
      eyebrow="Decks · Fences · Wood Restoration"
      title="Staining."
      tagline="Wood protected, grain brought back to life. The right stain, applied the right way, holds up for years — not one season."
      hero="/photos/ba5-after.jpg"
      intro={[
        "Iowa wood takes a beating. Hot dry summers, deep wet winters, and constant freeze-thaw cycles will turn even pressure-treated lumber gray and split-prone in three years if it isn't sealed properly.",
        "We strip what's failing, sand what's rough, and apply the stain or sealer that actually fits your wood and your exposure. Semi-transparent shows the grain. Solid hides imperfections. A clear sealer locks out water without changing color. We help you pick the right product for your situation.",
        "Done correctly, you get 3–5 years between visits instead of one — and the wood stays structurally sound underneath.",
      ]}
      features={[
        { title: "Deck Restoration", desc: "Pressure-wash, brightener, sanding, and premium stain application — restoring deck boards close to new." },
        { title: "Fence Staining", desc: "Privacy fences, picket fences, ranch rail. Sprayed and back-brushed for even penetration." },
        { title: "Pergolas & Outdoor Structures", desc: "Custom outdoor woodwork — pergolas, gazebos, trellises — protected and finished sharp." },
        { title: "Stripping + Refinishing", desc: "Old failing stain stripped down before re-application. No painting over peeling work." },
        { title: "Solid + Semi-Transparent", desc: "Whichever fits your wood and your goals — we'll show you samples on your actual deck." },
        { title: "Sealer Maintenance", desc: "Light annual touch-ups for already-finished decks to keep them protected without a full restain." },
      ]}
      process={[
        { title: "Wood Assessment", desc: "Walk the deck or fence, identify failing boards, talk product options." },
        { title: "Strip + Wash", desc: "Loose stain stripped, surface pressure-washed, brightener applied where needed." },
        { title: "Sand Where Needed", desc: "Rough or splintered boards sanded smooth before any product goes on." },
        { title: "Stain + Walk", desc: "Premium stain applied per spec, then walked to confirm coverage and color." },
      ]}
      related={[
        { title: "Interior & Exterior Painting", href: "/services/painting" },
        { title: "Garage Floor Coatings", href: "/services/garage-floor" },
        { title: "Get a Free Quote", href: "/quote" },
      ]}
    />
  );
}
