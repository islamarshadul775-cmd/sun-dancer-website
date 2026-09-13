import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.sundancercafe.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/menu",
    "/gallery",
    "/experience",
    "/reservation",
    "/offers",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1 : 0.7,
  }));
}
