import { faq } from "@/lib/content";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { FaqList } from "./FaqList";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="relative bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1000px] px-4 md:px-6">
        <AnimatedText
          id="faq-title"
          text={faq.heading}
          className="text-center font-display text-[clamp(1.9rem,2.6vw,2.25rem)] leading-[1.35] font-bold text-accent"
        />
        <div className="mt-12">
          <FaqList items={faq.items} />
        </div>
      </div>
    </section>
  );
}
