import {
  CaretDoubleRight,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Phone,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Fragment } from "react";
import { footer } from "@/lib/content";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { FooterMotion } from "./FooterMotion";

const socialIcons: Record<string, typeof FacebookLogo> = {
  Facebook: FacebookLogo,
  LinkedIn: LinkedinLogo,
  Twitter: TwitterLogo,
  YouTube: YoutubeLogo,
  Instagram: InstagramLogo,
};

const linkCls = "group inline-flex items-start gap-1.5 text-[14px] leading-[1.6] text-text transition-colors hover:text-accent-strong";

export function Footer() {
  return (
    <footer id="site-footer" data-footer className="relative overflow-hidden bg-footer">
      <div data-footer-inner className="mx-auto max-w-[1320px] px-4 pt-20 md:px-6 md:pt-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div data-reveal="fade-up" className="lg:col-span-3">
            <Logo />
            <ul className="mt-7 space-y-3 text-[14px] leading-[1.6] text-text">
              <li>
                <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="flex gap-2 transition-colors hover:text-accent-strong">
                  <MapPin aria-hidden weight="fill" className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>
                    {site.address.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </span>
                </a>
              </li>
              {[...site.phones, site.landline].map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="flex items-center gap-2 transition-colors hover:text-accent-strong">
                    <Phone aria-hidden weight="fill" className="size-4 text-accent" />
                    {p.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-accent-strong">
                  <EnvelopeSimple aria-hidden weight="fill" className="size-4 text-accent" />
                  {site.email}
                </a>
              </li>
            </ul>
            <ul className="mt-6 flex gap-2.5">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.label];
                return (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid size-9 place-items-center rounded-full bg-white text-fg shadow-[0_2px_10px_-4px_rgb(43_42_41/0.3)] transition-[transform,background-color,color] duration-500 ease-expo hover:-translate-y-1 hover:bg-accent hover:text-white"
                    >
                      <Icon aria-hidden className="size-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:col-span-9">
            {footer.columns.map((col) => (
              <div key={col.title} data-reveal="fade-up">
                <h2 className="font-display text-[17px] font-semibold text-fg">{col.title}</h2>
                <ul className="mt-4 space-y-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className={linkCls}>
                        <CaretDoubleRight aria-hidden weight="bold" className="mt-[5px] size-3 shrink-0 text-accent transition-transform duration-500 ease-expo group-hover:translate-x-0.5" />
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 space-y-8 border-t border-line pt-10">
          <div data-reveal="fade-up">
            <h2 className="font-display text-[17px] font-semibold text-fg">Location Service</h2>
            <p className="mt-3 text-[14px]">
              {footer.locations.map((l) => (
                <a key={l.href} href={l.href} className="text-text transition-colors hover:text-accent-strong">
                  {l.label}
                </a>
              ))}
            </p>
          </div>
          <div data-reveal="fade-up">
            <h2 className="font-display text-[17px] font-semibold text-fg">Other Services</h2>
            <p className="mt-3 text-[13.5px] leading-[1.9] text-text">
              {footer.otherServices.map((l, i) => (
                <Fragment key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-accent-strong">
                    {l.label}
                  </a>
                  {i < footer.otherServices.length - 1 ? <span aria-hidden className="px-1.5 text-muted/60">/</span> : null}
                </Fragment>
              ))}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-line py-7 text-[14px] text-text md:flex-row md:items-center">
          <p>
            Copyright {site.copyrightYear} <span className="font-semibold text-accent-strong">{site.name}.</span> All rights reserved
          </p>
          <ul className="flex items-center gap-1.5">
            {[
              { label: "Sitemap", href: site.links.sitemap },
              { label: "Terms & Conditions", href: site.links.terms },
              { label: "Privacy Policy", href: site.links.privacy },
            ].map((l, i, arr) => (
              <li key={l.label} className="flex items-center gap-1.5">
                <a href={l.href} className="transition-colors hover:text-accent-strong">
                  {l.label}
                </a>
                {i < arr.length - 1 ? <span aria-hidden className="text-muted/60">/</span> : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <FooterMotion />
    </footer>
  );
}
