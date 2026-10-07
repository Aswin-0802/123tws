import Image from "next/image";
import { services } from "@/lib/content";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ButtonLink } from "@/components/ui/Button";
import { Lottie } from "@/components/ui/Lottie";
import { ServicesMotion } from "./ServicesMotion";

/*
 * Sticky storytelling. Desktop: the visual column sticks (CSS sticky, works without JS) while
 * the five services scroll past. Crossing the viewport midline activates a chapter: its Lottie
 * illustration wipes in and starts playing, the progress ticks fill, other chapters dim.
 * Mobile: each chapter stacks with its own image.
 */
export function Services() {
  const { items } = services;
  return (
    <section id="services" aria-labelledby="services-title" data-services className="relative bg-white pt-2 pb-14 md:pb-20">
      <div className="mx-auto max-w-[1320px] px-4 text-center md:px-6">
        <AnimatedText
          id="services-title"
          text={services.heading}
          className="font-display text-[clamp(1.9rem,2.6vw,2.25rem)] leading-[1.35] font-bold text-accent"
        />
        <p data-reveal="fade-up" className="mx-auto mt-3 max-w-[60ch] text-[15px] leading-[1.75] text-text md:text-[16px]">
          {services.sub}
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-[1320px] px-4 md:px-6 lg:mt-12 lg:grid lg:grid-cols-12 lg:gap-16">
        <div className="hidden lg:col-span-6 lg:block">
          <div className="sticky top-[calc((100dvh-min(60vh,480px))/2)] flex flex-col gap-5">
            <div className="relative">
              <div data-services-stage className="relative aspect-[5/4] max-h-[60vh] w-full overflow-hidden rounded-[20px] bg-white">
                {items.map((s, i) => (
                  <div
                    key={s.id}
                    data-service-img={i}
                    data-active={i === 0}
                    className="absolute inset-0 overflow-hidden bg-white"
                    style={{ zIndex: items.length - i }}
                  >
                    {/* The live site's own Lottie illustration; only the active chapter's animation plays */}
                    <div data-service-img-inner className="absolute inset-4 grid place-items-center">
                      <Lottie
                        src={s.animation.src}
                        width={s.animation.width}
                        height={s.animation.height}
                        label={s.animation.label}
                        className="h-full max-h-full w-auto max-w-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ol aria-hidden className="flex gap-2">
              {items.map((s, i) => (
                <li key={s.id} className="h-1 flex-1 overflow-hidden rounded-full bg-line">
                  <span data-service-tick={i} className="block h-full origin-left scale-x-0 rounded-full bg-accent" />
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="lg:col-span-6">
          {items.map((s) => (
            <article
              key={s.id}
              data-service-step
              aria-labelledby={`service-${s.id}`}
              className="flex flex-col justify-center border-t border-line py-10 first:border-t-0 lg:min-h-[60vh] lg:border-t-0 lg:py-0 lg:first:min-h-[min(60vh,480px)] lg:first:justify-start lg:first:pt-[6vh]"
            >
              <div className="relative mb-8 grid aspect-[4/3] place-items-center overflow-hidden rounded-[16px] bg-white lg:hidden">
                <Lottie
                  src={s.animation.src}
                  width={s.animation.width}
                  height={s.animation.height}
                  label={s.animation.label}
                  className="h-full max-h-full w-auto max-w-full"
                />
              </div>
              <AnimatedText
                as="h3"
                id={`service-${s.id}`}
                text={s.title}
                className="font-display text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.25] font-semibold text-fg"
              />
              <span aria-hidden data-service-rule className="mt-4 block h-1 w-16 origin-left rounded-full bg-accent" />
              <p className="mt-5 max-w-[52ch] text-[15px] leading-[1.8] text-text md:text-[16px]">{s.body}</p>
              <div className="mt-8">
                <ButtonLink href={s.cta.href}>{s.cta.label}</ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-[1320px] px-4 md:px-6 lg:mt-10">
        <p data-reveal="fade-up" className="mx-auto max-w-[70ch] text-center text-[15px] leading-[1.8] text-text md:text-[16px]">
          {services.closing.text}{" "}
          <a href={services.closing.link.href} className="font-semibold text-accent-strong underline-offset-4 hover:underline">
            {services.closing.link.label}
          </a>
          .
        </p>
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.extras.map((x) => {
            return (
              <li key={x.title} data-reveal="fade-up">
                <a
                  href={x.href}
                  className="card group flex h-full flex-col items-center p-8 text-center transition-[transform,box-shadow] duration-500 ease-expo hover:-translate-y-2 hover:shadow-[var(--card-shadow-hover)]"
                >
                  <span className="relative grid size-16 place-items-center">
                    <span aria-hidden className="absolute inset-0 scale-0 rounded-full bg-accent transition-transform duration-500 ease-expo group-hover:scale-100" />
                    <Image src={x.iconSrc} alt="" width={44} height={44} unoptimized className="icon-invert relative size-11" />
                  </span>
                  <h3 className="mt-5 font-display text-[18px] font-semibold text-fg">{x.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.75] text-text">{x.body}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <ServicesMotion />
    </section>
  );
}
