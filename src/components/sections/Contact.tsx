import { EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { contact } from "@/lib/content";
import { site } from "@/lib/site";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { QuoteForm } from "./QuoteForm";

const pills = [
  { icon: EnvelopeSimple, label: site.email, href: `mailto:${site.email}` },
  ...site.phones.map((p) => ({ icon: Phone, label: p.label, href: p.href })),
];

/** White contact card (as on 123tws.com): details left, quote form right. The card opens via the "box" reveal. */
export function Contact({ heading = contact.heading, body = contact.body }: { heading?: string; body?: string }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6">
        <div
          data-reveal="box"
          className="grid grid-cols-1 gap-12 rounded-[20px] bg-white p-6 shadow-[0_10px_40px_-12px_rgb(43_42_41/0.2)] md:p-12 lg:grid-cols-12 lg:gap-14"
        >
          <div className="lg:col-span-6">
            <Eyebrow>{contact.eyebrow}</Eyebrow>
            <AnimatedText
              id="contact-title"
              text={heading}
              className="mt-4 max-w-[18ch] font-display text-[clamp(1.75rem,2.6vw,2.25rem)] leading-[1.28] font-medium text-fg"
            />
            <p data-reveal="fade-up" className="mt-5 text-[15px] leading-[1.8] text-text md:text-[16px]">
              {body}
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {pills.map((p) => (
                <li key={p.href} data-reveal="fade-up">
                  <a
                    href={p.href}
                    className="group inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-[14px] font-semibold text-fg transition-colors duration-300 hover:bg-accent-strong hover:text-white"
                  >
                    <p.icon aria-hidden className="size-4 text-accent transition-colors group-hover:text-white" />
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
            <address data-reveal="fade-up" className="mt-8 text-[14px] leading-[1.7] text-text not-italic">
              <a href={site.mapLink} className="transition-colors hover:text-accent-strong" target="_blank" rel="noopener noreferrer">
                {site.address.lines.join(" ")}
              </a>
            </address>

            <div data-reveal="fade-up" className="mt-10">
              <p className="text-[14px] font-semibold text-fg">{contact.trustTitle}</p>
              <ul className="mt-4 flex flex-wrap items-center gap-3">
                {contact.trustBadges.map((b) => (
                  <li key={b.src} className="rounded-[10px] bg-white p-2 shadow-[0_2px_14px_-6px_rgb(43_42_41/0.25)] transition-transform duration-500 ease-expo hover:-translate-y-1">
                    <Image src={b.src} alt={b.alt} width={b.width} height={b.height} className={b.width > b.height ? "h-10 w-auto" : "h-16 w-auto"} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
