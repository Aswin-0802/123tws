import type { Block } from "@/lib/pages/types";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { BlockSection } from "../SectionHeading";
import { StepsMotion } from "./StepsMotion";

type Props = Extract<Block, { type: "steps" }>;

/*
 * Process steps. Desktop: heading column sticks while steps scroll past; a red line fills along
 * the step rail as you read, and each step's number fills red as it crosses the viewport middle.
 */
export function Steps({ heading, intro, steps }: Props) {
  return (
    <BlockSection tone="mist">
      <div data-steps className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <AnimatedText text={heading} className="font-display text-[clamp(1.6rem,2.4vw,2.15rem)] leading-[1.3] font-bold text-fg" />
            {intro && (
              <p data-reveal="fade-up" className="mt-4 text-[15px] leading-[1.8] text-text md:text-[16px]">
                {intro}
              </p>
            )}
          </div>
        </div>
        <ol className="relative lg:col-span-7">
          <span aria-hidden className="absolute top-3 bottom-3 left-[23px] w-0.5 rounded-full bg-white" />
          <span aria-hidden data-steps-rail className="absolute top-3 bottom-3 left-[23px] w-0.5 origin-top rounded-full bg-accent" />
          {steps.map((s, i) => (
            <li key={s.title} data-step className="relative flex gap-6 pb-10 last:pb-0">
              <span
                data-step-dot
                className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border-2 border-accent bg-white font-display text-[16px] font-bold text-accent transition-colors duration-500"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div data-reveal="fade-up" className="pt-2">
                <h3 className="font-display text-[18px] font-semibold text-fg">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.8] text-text">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <StepsMotion />
    </BlockSection>
  );
}
