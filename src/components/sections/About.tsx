import Image from "next/image";
import { about, approach } from "@/lib/content";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AboutMotion } from "./AboutMotion";


export function About() {
  const cols = [about.cards.filter((_, i) => i % 2 === 0), about.cards.filter((_, i) => i % 2 === 1)];
  return (
    <section id="about" aria-labelledby="about-title" data-about className="relative bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <AnimatedText
              id="about-title"
              text={about.heading}
              className="mt-4 font-display text-[clamp(1.75rem,2.6vw,2.25rem)] leading-[1.28] font-medium text-fg"
            />
            {about.body.map((p) => (
              <p key={p.slice(0, 24)} data-reveal="fade-up" className="mt-5 text-[15px] leading-[1.8] text-text md:text-[16px]">
                {p}
              </p>
            ))}
            <div data-reveal="fade-up" className="mt-8">
              <ButtonLink href={about.cta.href} chevron>
                {about.cta.label}
              </ButtonLink>
            </div>
          </div>

          {/* Two columns drift apart while scrolling (AboutMotion) */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-6">
            {cols.map((col, ci) => (
              <div key={ci} data-about-col={ci} className={ci === 0 ? "space-y-6 sm:pt-10" : "space-y-6"}>
                {col.map((card) => {
                  const idx = about.cards.indexOf(card);
                  return (
                    <article
                      key={card.title}
                      data-reveal="fade-up"
                      className="card group relative overflow-hidden p-7 transition-[transform,box-shadow] duration-500 ease-expo hover:-translate-y-1.5 hover:shadow-[var(--card-shadow-hover)]"
                    >
                      <span
                        aria-hidden
                        className="absolute top-3 right-4 font-display text-[56px] leading-none font-bold text-fg/[0.06] transition-colors duration-500 group-hover:text-accent/15"
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <Image
                        src={card.iconSrc}
                        alt=""
                        width={56}
                        height={56}
                        unoptimized
                        className="size-14 transition-transform duration-700 ease-expo group-hover:-rotate-6 group-hover:scale-110"
                      />
                      <h3 className="mt-6 font-display text-[17px] font-semibold text-fg">{card.title}</h3>
                      <p className="mt-3 text-[14px] leading-[1.75] text-text">{card.body}</p>
                      <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-700 ease-expo group-hover:scale-x-100" />
                    </article>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 space-y-8 md:mt-16">
          {approach.map((a) => (
            <div key={a.heading}>
              <AnimatedText as="h3" text={a.heading} className="font-display text-[clamp(1.1rem,1.6vw,1.35rem)] leading-snug font-semibold text-fg" />
              <p data-reveal="fade-up" className="mt-3 max-w-[110ch] text-[15px] leading-[1.8] text-text md:text-[16px]">
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </div>
      <AboutMotion />
    </section>
  );
}
