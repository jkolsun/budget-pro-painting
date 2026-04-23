import type { Metadata } from "next";
import QuoteClient from "./QuoteClient";

export const metadata: Metadata = {
  title: "Free Quote — Budget Pro Painting | Altoona, IA",
  description:
    "Request a free painting quote from Budget Pro Painting in Altoona, IA. Usually back to you within 24 hours. No obligation, no pressure.",
};

export default function QuotePage() {
  return <QuoteClient />;
}
