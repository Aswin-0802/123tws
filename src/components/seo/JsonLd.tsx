import { faq } from "@/lib/content";
import { site } from "@/lib/site";

// Only describes what is actually on the page: no ratings, reviews or prices.
export function JsonLd() {
  const orgId = `${site.url}/#organization`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: site.name,
        url: site.url,
        email: site.email,
        telephone: site.phones[0].label,
        sameAs: site.socials.map((s) => s.href),
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.locality,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
        contactPoint: site.phones.map((p) => ({
          "@type": "ContactPoint",
          telephone: p.label,
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["English", "Tamil"],
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "en-IN",
        publisher: { "@id": orgId },
      },
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: site.title,
        description: site.description,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": orgId },
        primaryImageOfPage: `${site.url}/images/og-image.jpg`,
        inLanguage: "en-IN",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: faq.items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
