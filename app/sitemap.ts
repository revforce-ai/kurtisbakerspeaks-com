import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-05-29T00:00:00Z");
  return [
    { url: "https://kurtisbakerspeaks.com", lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: "https://kurtisbakerspeaks.com/privacy", lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: "https://kurtisbakerspeaks.com/terms", lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
