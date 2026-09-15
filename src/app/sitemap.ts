import type { MetadataRoute } from "next";
import { marina } from "@/data/marina";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/slips", priority: 0.9 },
    { path: "/rv-sites", priority: 0.9 },
    { path: "/fuel", priority: 0.7 },
    { path: "/the-point", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${marina.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
