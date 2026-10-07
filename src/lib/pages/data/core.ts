import type { PageDef } from "../types";

// Pages owned by the core build (not generated from the live site).
export const corePages: PageDef[] = [
  {
    slug: "contact-us",
    section: "Contact",
    metaTitle: "Contact 123 Total Web Solutions | Coimbatore",
    metaDescription:
      "Call, email or visit 123 Total Web Solutions in Coimbatore. Send your project details for a free 30-minute strategy call and a clear, written quote.",
    hero: {
      eyebrow: "Contact Us",
      title: "Let's talk about your project",
      intro: "Tell us what you are planning. We reply within one working day with next steps and a time for your free strategy call.",
    },
    blocks: [
      { type: "contact", heading: "Ready to Grow Your Business Faster?" },
      { type: "map" },
    ],
  },
  {
    slug: "sitemap",
    section: "Resources",
    metaTitle: "Sitemap | 123 Total Web Solutions",
    metaDescription:
      "Every page on the 123 Total Web Solutions website in one place: company information, services, hosting, CRM products, portfolio, resources and policies.",
    hero: {
      eyebrow: "Sitemap",
      title: "All pages on our website",
      intro: "Browse every section of the site, grouped the same way as our main menu.",
    },
    blocks: [{ type: "sitemap" }],
  },
];
