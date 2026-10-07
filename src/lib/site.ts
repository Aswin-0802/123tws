// Factual business details and brand assets.
const BASE = "https://www.123tws.com";

export const site = {
  name: "123 Total Web Solutions",
  shortName: "123TWS",
  url: BASE,
  locale: "en_IN",
  title: "Professional Web Development Company specialized in custom solutions",
  description:
    "123 Total Web Solutions is a web development company in Coimbatore offering custom websites, e-commerce, SEO and CRM solutions for growing businesses.",

  /**
   * Official logo. Place the file in /public (e.g. /public/brand/logo.png) and set its
   * intrinsic size here. While null, a typographic stand-in is rendered.
   */
  logo: { src: "/brand/logo.png", width: 601, height: 225 } as null | { src: string; width: number; height: number },
  /** Light version for dark surfaces (mobile menu). Falls back to `logo`. */
  logoLight: null as null | { src: string; width: number; height: number },

  email: "info@123tws.com",
  phones: [
    { label: "+91 95009 63636", href: "tel:+919500963636" },
    { label: "+91 82200 00100", href: "tel:+918220000100" },
  ],
  landline: { label: "0422 - 435 0451", href: "tel:04224350451" },
  whatsapp: "https://api.whatsapp.com/send?phone=+919500963636&text=Hi",
  mapLink: "https://share.google/pevGnY7vPxjd3KWlT",
  address: {
    lines: ["No.79, Aiswarya Complex,", "Nethaji Road, P.N.Palayam,", "Near Mani School Signal,", "Coimbatore - 641037,", "Tamilnadu, India."],
    street: "No.79, Aiswarya Complex, Nethaji Road, P.N.Palayam, Near Mani School Signal",
    locality: "Coimbatore",
    region: "Tamil Nadu",
    postalCode: "641037",
    country: "IN",
  },
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/123totalwebsolutions/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/totalwebsolutions/" },
    { label: "Twitter", href: "https://twitter.com/123_tws" },
    { label: "YouTube", href: "https://www.youtube.com/@123totalwebsolutions" },
    { label: "Instagram", href: "https://www.instagram.com/123totalwebsolutions/" },
  ],
  links: {
    contact: "/contact-us/",
    training: "/training/",
    sitemap: "/sitemap/",
    terms: "/terms-conditions/",
    privacy: "/privacy-policy/",
  },
  // Static so prerendering stays deterministic (no Date() during build).
  copyrightYear: 2026,
  lastModified: "2026-10-07",
} as const;

/** Internal page path. Pages live in this project at the same paths as the live site. */
export const u = (path: string) => path;

/** Absolute URL for canonical tags, sitemaps and structured data. */
export const abs = (path: string) => `${BASE}${path}`;
