import type { MetadataRoute } from "next";
import { marina } from "@/data/marina";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${marina.siteUrl}/sitemap.xml`,
  };
}
