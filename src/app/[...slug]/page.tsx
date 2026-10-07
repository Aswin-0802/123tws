import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/page/PageHero";
import { Blocks } from "@/components/page/Blocks";
import { PartnersGrid } from "@/components/page/PartnersGrid";
import { allPages, getPage, pagePath, sectionLanding } from "@/lib/pages";
import { abs, site } from "@/lib/site";

type Params = { params: Promise<{ slug: string[] }> };

export function generateStaticParams() {
  return allPages.map((p) => ({ slug: p.slug.split("/") }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug.join("/"));
  if (!page) return {};
  const path = pagePath(page.slug);
  const image = page.hero.image?.src ?? "/images/og-image.jpg";
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: site.name,
      title: page.metaTitle,
      description: page.metaDescription,
      locale: site.locale,
      images: [{ url: image, alt: page.hero.image?.alt ?? site.name }],
    },
    twitter: { card: "summary_large_image", title: page.metaTitle, description: page.metaDescription, images: [image] },
  };
}

export default async function InnerPage({ params }: Params) {
  const { slug } = await params;
  const page = getPage(slug.join("/"));
  if (!page) notFound();

  const path = pagePath(page.slug);
  const parent = sectionLanding[page.section];
  const crumbs = [
    { label: "Home", href: "/" },
    ...(parent && parent !== path ? [{ label: page.section, href: parent }] : []),
    { label: page.hero.title },
  ];

  // Structured data that mirrors visible content only.
  const faqBlock = page.blocks.find((b) => b.type === "faq");
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${abs(path)}#webpage`,
      url: abs(path),
      name: page.metaTitle,
      description: page.metaDescription,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.label,
        item: abs(c.href ?? path),
      })),
    },
  ];
  if (faqBlock && faqBlock.type === "faq") {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqBlock.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });
  }

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c") }}
      />
      <PageHero page={page} crumbs={crumbs} />
      <Blocks blocks={page.blocks} />
      {/* The live site closes every inner page with its partner logos */}
      <PartnersGrid />
    </SiteShell>
  );
}
