import Image from "next/image";
import type { CSSProperties } from "react";
import { hero } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { Lottie } from "@/components/ui/Lottie";
import { HeroMotion } from "./HeroMotion";

/*
 * Layout follows the live homepage: headline, intro, partner badges, button; the banner animation
 * on the right with the DesignRush badge.
 * Load (pure CSS so the h1 and badges never wait on JS):
 *   headline lines rise through masks 0.2s + 0.09s/line, intro 0.7s, partner strip wipes in 0.8s,
 *   button 0.92s; the animation frame wipes up 0.25s (the Lottie itself loads when idle),
 *   the badge wipes in 0.7s then floats gently.
 * Scroll: HeroMotion moves copy, animation and badge at different speeds.
 */
export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-clip bg-white">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-10 px-4 pt-[calc(var(--header-h)+2.5rem)] pb-14 md:px-6 lg:grid-cols-12 lg:gap-10 lg:pt-[calc(var(--header-h)+5rem)] lg:pb-16">
        <div data-hero-copy className="lg:col-span-7">
          <h1 id="hero-title" className="font-display text-[clamp(2rem,3.15vw,2.85rem)] leading-[1.2] font-bold text-fg lg:whitespace-nowrap">
            {hero.lines.map((line, i) => (
              <span key={i}>
                {i > 0 ? " " : null}
                <span className="hero-line block overflow-clip pb-[0.05em]" style={{ "--i": i } as CSSProperties}>
                  <span className="block">
                    {line.map((seg) => (
                      <span key={seg.text} className={seg.accent ? "text-accent" : undefined}>
                        {seg.text}
                      </span>
                    ))}
                  </span>
                </span>
              </span>
            ))}
          </h1>

          <p className="hero-fade mt-6 max-w-[60ch] text-[16px] leading-[1.7] text-text" style={{ "--d": "0.7s" } as CSSProperties}>
            {hero.text}
          </p>

          <div className="hero-clip-left mt-7 max-w-[520px]" style={{ "--d": "0.8s" } as CSSProperties}>
            <Image
              src={hero.partners.src}
              alt={hero.partners.alt}
              width={hero.partners.width}
              height={hero.partners.height}
              preload
              sizes="(min-width: 640px) 520px, 92vw"
              className="h-auto w-full"
            />
          </div>

          <div className="hero-fade mt-8" style={{ "--d": "0.92s" } as CSSProperties}>
            <Magnetic>
              <ButtonLink href={hero.cta.href}>{hero.cta.label}</ButtonLink>
            </Magnetic>
          </div>
        </div>

        {/* The live banner animation, with the DesignRush badge as a floating seal */}
        <div className="relative lg:col-span-5">
          <div data-hero-main className="hero-clip" style={{ "--d": "0.25s" } as CSSProperties}>
            <Lottie
              src={hero.animation.src}
              width={hero.animation.width}
              height={hero.animation.height}
              label={hero.animation.label}
              className="w-full"
            />
          </div>
          <div data-hero-badge className="hero-clip absolute -bottom-4 left-0 w-[96px] md:w-[120px] lg:-left-6 lg:w-[132px]" style={{ "--d": "0.7s" } as CSSProperties}>
            <div className="hero-float">
              <Image
                src={hero.badge.src}
                alt={hero.badge.alt}
                width={hero.badge.width}
                height={hero.badge.height}
                sizes="132px"
                className="h-auto w-full drop-shadow-[0_18px_24px_rgb(43_42_41/0.2)]"
              />
            </div>
          </div>
        </div>
      </div>

      <HeroMotion />
    </section>
  );
}
