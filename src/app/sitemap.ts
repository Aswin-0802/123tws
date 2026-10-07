import type { MetadataRoute } from "next";
import { allPages, pagePath } from "@/lib/pages";
import { abs, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: abs("/"),
      lastModified: site.lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [abs("/images/og-image.jpg")],
    },
    ...allPages.map((p) => ({
      url: abs(pagePath(p.slug)),
      lastModified: site.lastModified,
      changeFrequency: (p.section === "Legal" ? "yearly" : "monthly") as "yearly" | "monthly",
      priority: p.section === "Services" || p.section === "Products" ? 0.8 : p.section === "Legal" ? 0.3 : 0.6,
    })),
  ];
}
