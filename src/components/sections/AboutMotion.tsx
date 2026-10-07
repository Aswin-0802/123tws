"use client";

import { gsap, useGSAP, MQ } from "@/lib/gsap";

/*
 * Desktop: the two card columns travel at different speeds while the section scrolls through
 * (left column +40px, right column -40px), so the grid gently shears apart and settles.
 */
export function AboutMotion() {
  useGSAP(() => {
    const section = document.querySelector<HTMLElement>("[data-about]");
    if (!section) return;
    const q = gsap.utils.selector(section);
    const mm = gsap.matchMedia();

    mm.add(MQ.desktop, () => {
      const scrub = { trigger: q("[data-about-col]")[0]?.parentElement, start: "top bottom", end: "bottom top", scrub: true };
      gsap.fromTo(q('[data-about-col="0"]'), { y: -40 }, { y: 40, ease: "none", scrollTrigger: scrub });
      gsap.fromTo(q('[data-about-col="1"]'), { y: 40 }, { y: -40, ease: "none", scrollTrigger: scrub });
    });

    return () => mm.revert();
  });

  return null;
}
