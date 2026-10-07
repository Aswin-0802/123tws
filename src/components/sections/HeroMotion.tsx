"use client";

import { gsap, useGSAP, MQ } from "@/lib/gsap";

/*
 * Hero exit, scrubbed from hero top at viewport top to hero bottom leaving it:
 *   copy   -90px, fades to 0.15
 *   DesignRush seal -35% (moves faster than the copy, so the two separate in depth)
 */
export function HeroMotion() {
  useGSAP(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const q = gsap.utils.selector(hero);
    const mm = gsap.matchMedia();
    const scrub = { trigger: hero, start: "top top", end: "bottom top", scrub: true } as const;

    mm.add(MQ.desktop, () => {
      gsap.to(q("[data-hero-copy]"), { y: -90, opacity: 0.15, ease: "none", scrollTrigger: scrub });
      gsap.to(q("[data-hero-main]"), { yPercent: -35, ease: "none", scrollTrigger: scrub });
    });

    return () => mm.revert();
  });

  return null;
}
