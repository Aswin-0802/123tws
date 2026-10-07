import { Clock, Code, Headset, PenNib, Stack, Wallet } from "@phosphor-icons/react/dist/ssr";
import { whyUs } from "@/lib/content";
import { cn } from "@/lib/cn";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { WhyUsMotion } from "./WhyUsMotion";

const icons = [Stack, PenNib, Code, Clock, Wallet, Headset];

/*
 * Pale blue-grey band with cards alternating white / red (as on 123tws.com).
 * Desktop: pinned horizontal pan. Below lg: the reference's grid (2 cols, 1 on phones).
 */
export function WhyUs() {
  return (
    <section id="why-us" aria-labelledby="why-title" data-pan className="relative bg-mist">
      <div data-pan-wrap className="flex flex-col justify-center py-14 md:py-20 lg:h-[100dvh] lg:overflow-hidden lg:py-0">
        <div className="mx-auto mb-12 max-w-[900px] px-4 text-center md:px-6 lg:mb-14 lg:pt-[var(--header-h)]">
          <AnimatedText
            id="why-title"
            text={whyUs.heading}
            className="font-display text-[clamp(1.6rem,2.4vw,2.1rem)] leading-[1.35] font-medium text-fg"
          />
        </div>

        <div
          data-pan-track
          className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:px-6 lg:flex lg:w-max lg:items-stretch lg:gap-7 lg:pr-[10vw] lg:pl-[max(1.5rem,calc((100vw-1320px)/2+1.5rem))]"
        >
          {whyUs.reasons.map((r, i) => {
            const Icon = icons[i % icons.length];
            const red = i % 2 === 1;
            return (
              <article
                key={r.title}
                data-pan-card
                className={cn(
                  "group relative isolate flex flex-col items-center overflow-hidden px-8 py-10 text-center lg:h-[min(52vh,440px)] lg:w-[min(27vw,380px)] lg:shrink-0 lg:justify-center",
                  red ? "bg-accent text-white" : "bg-white text-fg shadow-[0_10px_30px_-18px_rgb(43_42_41/0.35)]",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-0 -z-10 origin-bottom scale-y-0 transition-transform duration-700 ease-expo group-hover:scale-y-100",
                    red ? "bg-fg" : "bg-accent",
                  )}
                />
                <span
                  data-pan-icon
                  className={cn(
                    "grid size-16 place-items-center rounded-full transition-colors duration-500",
                    red ? "bg-white/15 text-white" : "bg-accent/10 text-accent group-hover:bg-white/15 group-hover:text-white",
                  )}
                >
                  <Icon aria-hidden weight="light" className="size-8" />
                </span>
                <h3 className="mt-6 font-display text-[19px] leading-snug font-semibold transition-colors duration-500 group-hover:text-white">{r.title}</h3>
                <p
                  className={cn(
                    "mt-4 text-[15px] leading-[1.75] transition-colors duration-500 group-hover:text-white/90",
                    red ? "text-white/90" : "text-text",
                  )}
                >
                  {r.body}
                </p>
              </article>
            );
          })}
        </div>

        <div aria-hidden className="mx-auto mt-12 hidden h-1 w-[min(1272px,calc(100vw-3rem))] overflow-hidden rounded-full bg-white lg:block">
          <div data-pan-progress className="h-full origin-left scale-x-0 rounded-full bg-accent" />
        </div>
      </div>
      <WhyUsMotion />
    </section>
  );
}
