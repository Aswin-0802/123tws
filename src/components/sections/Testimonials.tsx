import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { testimonials } from "@/lib/content";
import { AnimatedText } from "@/components/ui/AnimatedText";

/**
 * "Our Happy Clients". Renders only when real reviews are added to `testimonials` in content.ts.
 * Cards rise in sequence; a horizontal scroll-snap row on small screens.
 */
export function Testimonials() {
  if (!testimonials.length) return null;
  return (
    <section aria-labelledby="clients-reviews-title" className="relative bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6">
        <AnimatedText
          id="clients-reviews-title"
          text="Our Happy Clients"
          className="text-center font-display text-[clamp(1.75rem,2.4vw,2.1rem)] leading-[1.35] font-semibold text-fg"
        />
        <ul className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {testimonials.map((t) => (
            <li key={t.name} data-reveal="fade-up" className="card w-[85%] shrink-0 snap-start p-8 md:w-auto">
              <Quotes aria-hidden weight="fill" className="size-8 text-accent" />
              <blockquote className="mt-4 text-[15px] leading-[1.8] text-text">{t.quote}</blockquote>
              <p className="mt-6 font-display text-[15px] font-semibold text-fg">
                {t.name}
                {t.company && <span className="block text-[13px] font-normal text-muted">{t.company}</span>}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
