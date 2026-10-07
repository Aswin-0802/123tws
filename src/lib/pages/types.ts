// Schema for every inner page. Pages are data; templates in src/components/page render them.
//
// Content rules (for anyone adding pages):
//  - Write original copy. Facts (names, prices, specs, dates, titles) may come from the business.
//  - Never invent prices, awards, certifications, reviews, client names or statistics.
//  - Keep paragraphs short (2-4 sentences). No em dashes.

/** Keys of the shared icon registry (src/components/page/icons.ts). */
export type IconKey =
  | "code" | "layout" | "browser" | "cart" | "phone" | "device" | "gear" | "wrench" | "shield" | "lock"
  | "rocket" | "chart" | "search" | "megaphone" | "share" | "target" | "pen" | "palette" | "image" | "video"
  | "presentation" | "file" | "mail" | "chat" | "users" | "user" | "briefcase" | "building" | "graduation"
  | "server" | "database" | "cloud" | "globe" | "link" | "card" | "wallet" | "receipt" | "calendar" | "clock"
  | "check" | "star" | "trophy" | "certificate" | "heart" | "lightning" | "stack" | "puzzle" | "headset"
  | "truck" | "car" | "camera" | "house" | "tooth" | "stethoscope" | "airplane" | "shirt" | "window" | "map";

/**
 * `fit: "contain"` for illustrations / transparent PNGs (shown whole, no crop, no grey frame);
 * default "cover" for photos (fills the frame).
 */
export type Img = { src: string; alt: string; fit?: "cover" | "contain" };
export type LinkItem = { label: string; href: string };

export type Block =
  /** Icon cards in a grid. 3, 4 or 6 items read best. */
  | {
      type: "features";
      heading: string;
      intro?: string;
      /** `iconSrc` (a file in /public, PNG or SVG) shows the live site's own icon instead of `icon`. */
      items: { title: string; body: string; icon: IconKey; iconSrc?: string }[];
    }
  /** Text beside an image, a YouTube video, or a bullet list (in that order of preference). */
  | {
      type: "split";
      heading: string;
      paragraphs: string[];
      bullets?: string[];
      image?: Img;
      video?: { youtubeId: string; title: string };
      reverse?: boolean;
    }
  /** Numbered process; rendered as a sticky storytelling column on desktop. 3-6 steps. */
  | { type: "steps"; heading: string; intro?: string; steps: { title: string; body: string }[] }
  /** Pricing / plan cards. `price` only when the business has published it. */
  | { type: "plans"; heading: string; intro?: string; note?: string; plans: { name: string; price?: string; period?: string; features: string[]; highlight?: boolean }[] }
  /** Simple spec or checklist columns. */
  | { type: "checklist"; heading: string; intro?: string; columns: { title?: string; items: string[] }[] }
  /** Long-form text (legal pages, policies, articles). */
  | { type: "prose"; sections: { heading?: string; paragraphs: string[]; bullets?: string[] }[]; updated?: string }
  /**
   * Gallery or project list. Items without an image render as typographic tiles.
   * Long galleries show 24 items first with a "Load more" button (all items stay in the HTML).
   */
  | {
      type: "gallery";
      heading: string;
      intro?: string;
      /** `pages`: extra images for multi-page work (e.g. brochure pages); the tile flips through them. */
      items: { title: string; caption?: string; image?: Img; pages?: Img[]; href?: string }[];
    }
  /** YouTube videos (privacy-friendly click-to-load embeds). */
  | { type: "videos"; heading: string; intro?: string; items: { title: string; youtubeId: string }[] }
  /** Job openings / internships / courses. */
  | { type: "listings"; heading: string; intro?: string; items: { title: string; meta?: string; body: string; bullets?: string[] }[]; cta?: LinkItem }
  /** Article / resource links (e.g. blog posts still hosted elsewhere). */
  | { type: "links"; heading: string; intro?: string; items: { title: string; href: string; meta?: string }[] }
  /** Industries / audiences as icon chips. */
  | { type: "audience"; heading: string; intro?: string; items: { title: string; icon: IconKey; iconSrc?: string }[] }
  /** Company figures (uses the shared homepage stats). */
  | { type: "stats" }
  /** Client name wall (uses shared client list). */
  | { type: "clients"; heading?: string }
  /** Real testimonials (uses shared list; hidden when empty). */
  | { type: "testimonials" }
  | { type: "faq"; heading?: string; items: { q: string; a: string }[] }
  /** Cream call-to-action band. */
  | { type: "cta"; eyebrow?: string; lines: [string, string]; button: LinkItem }
  /** Contact card with quote form. */
  | { type: "contact"; heading?: string; body?: string }
  /** Cards linking to related pages. */
  | { type: "related"; heading: string; links: LinkItem[] }
  /** Full list of site pages grouped by section (HTML sitemap). */
  | { type: "sitemap" }
  /** Office location map (Google Maps embed, click to load). */
  | { type: "map"; heading?: string };

export type PageDef = {
  /** URL path without slashes at the ends, e.g. "about-us" or "madurai/digital-marketing-company". */
  slug: string;
  /** Section the page belongs to (breadcrumb parent label). */
  section: "Company Info" | "Services" | "Hosting" | "Products" | "Portfolio" | "Resources" | "Careers" | "Legal" | "Pricing" | "Locations" | "Contact";
  /** <title>, about 50-60 characters. */
  metaTitle: string;
  /** Meta description, about 140-160 characters. */
  metaDescription: string;
  hero: {
    eyebrow?: string;
    /** The page's single h1. */
    title: string;
    intro: string;
    image?: Img;
    cta?: LinkItem;
  };
  blocks: Block[];
};
