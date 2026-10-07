import { Fragment } from "react";
import { intro } from "@/lib/content";

/** Centered statement: words brighten one by one as the reader scrolls through (RevealEngine). */
export function Intro() {
  const words = intro.heading.split(" ");
  return (
    <section aria-labelledby="intro-title" className="bg-white pt-14 pb-2 md:pt-20">
      <div className="mx-auto max-w-[1080px] px-4 text-center md:px-6">
        <h2 id="intro-title" data-scrub-words className="font-display text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.3] font-medium text-fg">
          {words.map((w, i) => (
            <Fragment key={i}>
              <span className="sw">{w}</span>
              {i < words.length - 1 ? " " : null}
            </Fragment>
          ))}
        </h2>
        <p data-reveal="fade-up" className="mt-5 text-[16px] text-text">
          {intro.sub}
        </p>
      </div>
    </section>
  );
}
