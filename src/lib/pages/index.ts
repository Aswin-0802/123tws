import type { PageDef } from "./types";
import { corePages } from "./data/core";
import { companyPages } from "./data/company";
import { devServicePages } from "./data/dev-services";
import { marketingDesignPages } from "./data/marketing-design";
import { hostingPricingPages } from "./data/hosting-pricing";
import { productPages } from "./data/products";
import { portfolioResourcePages } from "./data/portfolio-resources";

/** Every inner page, keyed by slug. Order sets the HTML sitemap order within a section. */
export const allPages: PageDef[] = [
  ...companyPages,
  ...devServicePages,
  ...marketingDesignPages,
  ...hostingPricingPages,
  ...productPages,
  ...portfolioResourcePages,
  ...corePages,
];

const bySlug = new Map(allPages.map((p) => [p.slug, p]));

export function getPage(slug: string): PageDef | undefined {
  return bySlug.get(slug);
}

export const sectionOrder: PageDef["section"][] = [
  "Company Info",
  "Services",
  "Products",
  "Hosting",
  "Pricing",
  "Portfolio",
  "Resources",
  "Careers",
  "Locations",
  "Contact",
  "Legal",
];

/** Breadcrumb parent for each section: a real page where one exists. */
export const sectionLanding: Partial<Record<PageDef["section"], string>> = {
  "Company Info": "/about-us/",
  Services: "/website-design/",
  Products: "/crm-software-development/",
  Hosting: "/web-hosting/",
  Portfolio: "/portfolio/",
  Careers: "/careers/",
};

export const pagePath = (slug: string) => `/${slug}/`;
