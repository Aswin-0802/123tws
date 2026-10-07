import Image from "next/image";
import { industries } from "@/lib/content";
import { AnimatedText } from "@/components/ui/AnimatedText";

/** White icon cards with a soft shadow (as on 123tws.com). 8 items: 4 x 2 desktop, 2 x 4 mobile. */
export function Industries() {
  return (
    <section id="industries" aria-labelledby="industries-title" className="relative bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6">
        <AnimatedText
          id="industries-title"
          text={industries.heading}
          className="text-center font-display text-[clamp(1.9rem,2.6vw,2.25rem)] leading-[1.35] font-bold text-accent"
        />

        <ul className="mt-12 grid grid-cols-2 gap-4 md:mt-14 md:gap-6 lg:grid-cols-4">
          {industries.items.map((item, i) => {
            return (
              <li key={item.name} data-reveal="fade-up" data-delay={(i % 4) * 0.06}>
                <div className="card group relative isolate flex h-full flex-col items-center overflow-hidden px-4 py-8 text-center transition-[transform,box-shadow] duration-500 ease-expo hover:-translate-y-2 hover:shadow-[var(--card-shadow-hover)] md:px-7 md:py-9">
                  <span
                    aria-hidden
                    className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-accent transition-transform duration-[650ms] ease-expo group-hover:scale-y-100"
                  />
                  <Image
                    src={item.iconSrc}
                    alt=""
                    width={56}
                    height={56}
                    unoptimized
                    className="icon-invert size-12 group-hover:scale-110 group-hover:rotate-[-8deg] md:size-14"
                  />
                  <h3 className="mt-4 font-display text-[15px] font-semibold text-fg transition-colors duration-500 group-hover:text-white md:text-[16px]">
                    {item.name}
                  </h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
