import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://budgetpropainting.com";
  const lastModified = new Date();

  const routes = [
    "",
    "/about",
    "/services",
    "/services/interior-painting",
    "/services/exterior-painting",
    "/services/staining",
    "/services/commercial-painting",
    "/services/garage-floor",
    "/services/cabinet-refinishing",
    "/service-areas",
    "/gallery",
    "/contact",
    "/quote",
  ];

  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1.0 : r.startsWith("/services/") ? 0.9 : 0.7,
  }));
}
