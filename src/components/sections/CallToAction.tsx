import Image from "next/image";
import { useId } from "react";
import { callToAction } from "@/lib/content";
import { SplitWords } from "@/components/ui/AnimatedText";
import { ButtonLink } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { CallToActionMotion } from "./CallToActionMotion";

type Props = {
  eyebrow?: string;
  lines?: readonly [string, string] | string[];
  button?: { label: string; href: string };
};

/** Cream call-to-action band (as on 123tws.com). Motion: CallToActionMotion + RevealEngine "lines". */
export function CallToAction({ eyebrow = callToAction.eyebrow, lines = callToAction.lines, button = callToAction.cta }: Props) {
  const titleId = useId();
  return (
    <section aria-labelledby={titleId} data-cta className="relative bg-white">
      <div data-cta-panel className="bg-cream">
        <div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-8 px-4 py-14 md:flex-row md:items-center md:px-6 md:py-16">
          <div>
            {eyebrow && (
              <p data-reveal="fade" className="text-[12px] font-semibold tracking-[0.1em] text-blue uppercase">
                {eyebrow}
              </p>
            )}
            <h2 id={titleId} data-reveal="lines" className="mt-2 font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.25] font-semibold text-fg">
              <span data-cta-line="0" className="block font-medium">
                <SplitWords text={lines[0]} />
              </span>{" "}
              <span data-cta-line="1" className="flex items-center gap-3 font-bold">
                <span>
                  <SplitWords text={lines[1]} />
                </span>
                <Image src="/images/live/home/icons/smile-icon.svg" alt="" width={44} height={44} unoptimized data-cta-icon className="size-[1.1em] shrink-0" />
              </span>
            </h2>
          </div>
          <div data-reveal="fade-up">
            <Magnetic strength={0.4}>
              <ButtonLink href={button.href} chevron>
                {button.label}
              </ButtonLink>
            </Magnetic>
          </div>
        </div>
      </div>
      <CallToActionMotion />
    </section>
  );
}
