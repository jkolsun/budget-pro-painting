import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTABar from "@/components/StickyCTABar";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://budgetpropainting.com"),
  title: {
    default: "Budget Pro Painting & Remodeling LLC | Altoona, IA Painters",
    template: "%s | Budget Pro Painting & Remodeling LLC",
  },
  description:
    "Clean, modern interior & exterior painting, staining, and garage floor coatings in Altoona, Des Moines, and across central Iowa. Owner-operated. Fair quotes. Sharp finishes. Call (515) 505-6429.",
  keywords: [
    "painter Altoona IA",
    "exterior painting Des Moines",
    "interior painter Ankeny",
    "house painter Altoona",
    "commercial painter Des Moines",
    "garage floor coating Iowa",
    "deck staining Altoona",
    "Budget Pro Painting",
    "Peter Thawngzauk painter",
  ],
  authors: [{ name: "Budget Pro Painting & Remodeling LLC" }],
  creator: "Budget Pro Painting & Remodeling LLC",
  publisher: "Budget Pro Painting & Remodeling LLC",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://budgetpropainting.com",
    siteName: "Budget Pro Painting & Remodeling LLC",
    title: "Budget Pro Painting & Remodeling LLC | Altoona, IA",
    description:
      "Owner-operated painting & remodeling in Altoona and central Iowa. Interior, exterior, staining, garage floors. Call (515) 505-6429.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Budget Pro Painting & Remodeling LLC | Altoona, IA",
    description: "Owner-operated painting & remodeling in Altoona and central Iowa.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Painter",
  name: "Budget Pro Painting & Remodeling LLC",
  "@id": "https://budgetpropainting.com",
  url: "https://budgetpropainting.com",
  telephone: "+1-515-505-6429",
  email: "Info@budgetpropainter.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Altoona",
    addressRegion: "IA",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 41.6406, longitude: -93.4646 },
  areaServed: [
    "Altoona, IA",
    "Des Moines, IA",
    "Ankeny, IA",
    "Pleasant Hill, IA",
    "West Des Moines, IA",
    "Urbandale, IA",
    "Bondurant, IA",
    "Mitchellville, IA",
    "Polk County, IA",
  ],
  founder: { "@type": "Person", name: "Peter Thawngzauk" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "32" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#1A37A8" />
        <meta name="apple-mobile-web-app-title" content="Budget Pro Painting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://brightengine-production.up.railway.app/api/track/a1923abdb8138efe"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <StickyCTABar />
        </LenisProvider>
      </body>
    </html>
  );
}
