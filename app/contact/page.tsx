import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Budget Pro Painting — Altoona, IA",
  description:
    "Contact Budget Pro Painting for painting, staining, and garage floor coatings in Altoona, IA and Polk County. Call (515) 505-6429 or email Info@budgetpropainter.com.",
};

export default function ContactPage() {
  return <ContactClient />;
}
