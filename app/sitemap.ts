import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo-config";
import { ALL_STARTUPS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.baseUrl;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${base}/startups`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/submit`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/advertise`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const startupRoutes: MetadataRoute.Sitemap = ALL_STARTUPS.map((startup) => ({
    url: `${base}/startup/${startup.id}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...startupRoutes];
}
