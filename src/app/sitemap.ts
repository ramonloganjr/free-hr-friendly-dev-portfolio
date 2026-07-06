import type { MetadataRoute } from "next";

const base = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects", "/about", "/writing", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.8,
    }),
  );
}
