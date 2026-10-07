import { Check } from "@phosphor-icons/react/dist/ssr";
import type { Block } from "@/lib/pages/types";
import { ButtonLink } from "@/components/ui/Button";
import { BlockSection, SectionHeading } from "../SectionHeading";
import { cn } from "@/lib/cn";

type Props = Extract<Block, { type: "plans" }>;

/** Plan cards. Prices appear only when published; otherwise "Request pricing". Hover lifts the card. */
export function Plans({ heading, intro, note, plans }: Props) {
  const cols = plans.length >= 4 ? "lg:grid-cols-4" : plans.length === 2 ? "lg:grid-cols-2 lg:max-w-[860px] lg:mx-auto" : "lg:grid-cols-3";
  return (
    <BlockSection tone="surface">
      <SectionHeading title={heading} intro={intro} />
      <ul className={cn("mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2", cols)}>
        {plans.map((p, i) => (
          <li key={`${p.name}-${i}`} data-reveal="fade-up" data-delay={(i % 4) * 0.06}>
            <article
              className={cn(
                "group relative flex h-full flex-col rounded-[16px] bg-white p-7 transition-[transform,box-shadow] duration-500 ease-expo hover:-translate-y-2 hover:shadow-[var(--card-shadow-hover)]",
                p.highlight ? "ring-2 ring-accent shadow-[0_24px_50px_-24px_rgb(232_71_72/0.55)]" : "shadow-[var(--card-shadow)]",
              )}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-7 rounded-full bg-accent-strong px-3 py-1 text-[12px] font-semibold text-white">Recommended</span>
              )}
              <h3 className="font-display text-[19px] font-semibold text-fg">{p.name}</h3>
              <p className="mt-4 flex items-baseline gap-1.5">
                {p.price ? (
                  <>
                    <span className="font-display text-[32px] leading-none font-bold text-accent">{p.price}</span>
                    {p.period && <span className="text-[14px] text-muted">/ {p.period}</span>}
                  </>
                ) : (
                  <span className="font-display text-[20px] font-semibold text-accent">Request pricing</span>
                )}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14.5px] leading-[1.6] text-text">
                    <Check aria-hidden weight="bold" className="mt-1 size-3.5 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <ButtonLink href="/contact-us/" size="sm" variant={p.highlight ? "primary" : "outline"} className="w-full">
                  {p.price ? "Get this plan" : "Request a quote"}
                </ButtonLink>
              </div>
            </article>
          </li>
        ))}
      </ul>
      {note && (
        <p data-reveal="fade" className="mx-auto mt-8 max-w-[70ch] text-center text-[13px] leading-[1.7] text-muted">
          {note}
        </p>
      )}
    </BlockSection>
  );
}
