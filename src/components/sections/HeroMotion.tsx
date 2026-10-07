"use client";

import { gsap, useGSAP, MQ } from "@/lib/gsap";

/*
 * Hero exit, scrubbed from hero top at viewport top to hero bottom leaving it:
 *   copy   -90px, fades to 0.15
 *   banner animation -12%
 *   DesignRush badge -90% and a slight turn (fastest layer, closest to the viewer)
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
      gsap.to(q("[data-hero-main]"), { yPercent: -12, ease: "none", scrollTrigger: scrub });
      gsap.to(q("[data-hero-badge]"), { yPercent: -90, rotate: -8, ease: "none", scrollTrigger: scrub });
    });

    return () => mm.revert();
  });

  return null;
}
