import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Fragment, type CSSProperties } from "react";
import type { PageDef } from "@/lib/pages/types";
import { ButtonLink } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";

/*
 * Inner-page hero. Load animation is pure CSS (same keyframes as the homepage hero):
 * breadcrumb + eyebrow fade up, title words rise through masks (45ms stagger),
 * intro and button follow, image wipes up from the bottom while settling from 1.28x.
 */
export function PageHero({ page, crumbs }: { page: PageDef; crumbs: { label: string; href?: string }[] }) {
  const { hero } = page;
  const words = hero.title.split(" ");
  return (
    <section aria-labelledby="page-title" className="relative overflow-clip bg-surface">
      <div
        className={`mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-10 px-4 pt-[calc(var(--header-h)+2rem)] pb-12 md:px-6 lg:pt-[calc(var(--header-h)+4.5rem)] lg:pb-16 ${
          hero.image ? "lg:grid-cols-12 lg:gap-12" : ""
        }`}
      >
        <div className={hero.image ? "lg:col-span-7" : "max-w-[900px]"}>
          <nav aria-label="Breadcrumb" className="hero-fade" style={{ "--d": "0.1s" } as CSSProperties}>
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-muted">
              {crumbs.map((c, i) => (
                <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
                  {c.href ? (
                    <a href={c.href} className="transition-colors hover:text-accent-strong">
                      {c.label}
                    </a>
                  ) : (
                    <span aria-current="page" className="font-semibold text-fg">
                      {c.label}
                    </span>
                  )}
                  {i < crumbs.length - 1 && <CaretRight aria-hidden weight="bold" className="size-3 text-accent" />}
                </li>
              ))}
            </ol>
          </nav>

          {hero.eyebrow && (
            <p className="hero-fade mt-6 flex items-center gap-3 text-[13px] font-semibold tracking-[0.08em] text-accent-strong uppercase" style={{ "--d": "0.15s" } as CSSProperties}>
              <span aria-hidden className="flex items-center gap-1.5">
                <span className="h-0.5 w-2.5 rounded-full bg-accent" />
                <span className="h-0.5 w-9 rounded-full bg-accent" />
              </span>
              {hero.eyebrow}
            </p>
          )}

          <h1 id="page-title" className="mt-4 font-display text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.18] font-bold text-fg">
            {words.map((w, i) => (
              <Fragment key={i}>
                <span className="hero-line inline-block overflow-clip pb-[0.06em] align-top" style={{ "--i": i * 0.5 } as CSSProperties}>
                  <span className="inline-block">{w}</span>
                </span>
                {i < words.length - 1 ? " " : null}
              </Fragment>
            ))}
          </h1>

          <p className="hero-fade mt-5 max-w-[60ch] text-[16px] leading-[1.75] text-text md:text-[17px]" style={{ "--d": "0.55s" } as CSSProperties}>
            {hero.intro}
          </p>

          {hero.cta && (
            <div className="hero-fade mt-8" style={{ "--d": "0.68s" } as CSSProperties}>
              <Magnetic>
                <ButtonLink href={hero.cta.href} chevron>
                  {hero.cta.label}
                </ButtonLink>
              </Magnetic>
            </div>
          )}
        </div>

        {hero.image && (
          <div className="lg:col-span-5">
            <div
              className={`hero-clip relative aspect-[4/3] overflow-hidden rounded-[20px] ${hero.image.fit === "contain" ? "" : "bg-white shadow-[0_30px_60px_-30px_rgb(43_42_41/0.45)]"}`}
              style={{ "--d": "0.2s" } as CSSProperties}
            >
              <div className="settle absolute inset-0" style={{ "--d": "0.2s" } as CSSProperties}>
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  fill
                  preload
                  fetchPriority="high"
                  quality={80}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className={hero.image.fit === "contain" ? "object-contain" : "object-cover"}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
