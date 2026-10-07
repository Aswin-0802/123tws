"use client";

import { gsap, ScrollTrigger, useGSAP, MQ } from "@/lib/gsap";

/*
 * Desktop chapters: crossing the viewport midline activates a chapter.
 *   - incoming image wipes in (from below when scrolling down, from above when scrolling up), 1.1s power4.inOut
 *   - incoming image settles 1.2 -> 1, outgoing drifts to 1.08 and dims
 *   - the chapter's red rule draws in; inactive chapters dim to 0.3
 *   - progress ticks fill up to the active chapter
 */

export function ServicesMotion() {
  useGSAP(() => {
    const section = document.querySelector<HTMLElement>("[data-services]");
    if (!section) return;
    const q = gsap.utils.selector(section);
    const mm = gsap.matchMedia();

    mm.add(MQ.desktop, () => {
      const imgs = q<HTMLElement>("[data-service-img]");
      const inners = q<HTMLElement>("[data-service-img-inner]");
      const steps = q<HTMLElement>("[data-service-step]");
      const rules = q<HTMLElement>("[data-service-rule]");
      const ticks = q<HTMLElement>("[data-service-tick]");
      let current = 0;
      let z = imgs.length + 1;

      gsap.set(imgs, { clipPath: "inset(100% 0% 0% 0%)" });
      gsap.set(imgs[0], { clipPath: "inset(0% 0% 0% 0%)", zIndex: z });
      gsap.set(steps, { opacity: 0.3 });
      gsap.set(steps[0], { opacity: 1 });
      gsap.set(rules, { scaleX: 0 });
      gsap.set(rules[0], { scaleX: 1 });
      gsap.set(ticks[0], { scaleX: 1 });

      const activate = (next: number) => {
        if (next === current) return;
        const down = next > current;
        const prev = current;
        current = next;
        z += 1;

        gsap.killTweensOf([imgs[next], inners[next]]);
        gsap.set(imgs[next], { zIndex: z });
        // The Lottie inside each layer plays only while its layer is data-active="true".
        imgs[next].dataset.active = "true";
        imgs[prev].dataset.active = "false";
        gsap.fromTo(
          imgs[next],
          { clipPath: down ? "inset(100% 0% 0% 0%)" : "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "power4.inOut" },
        );
        gsap.fromTo(inners[next], { scale: 1.2, filter: "brightness(1)" }, { scale: 1, duration: 1.6, ease: "expo.out" });
        gsap.to(inners[prev], {
          scale: 1.08,
          filter: "brightness(0.7)",
          duration: 1.1,
          ease: "power4.inOut",
          onComplete: () => gsap.set(inners[prev], { scale: 1, filter: "brightness(1)" }),
        });

        steps.forEach((s, i) => gsap.to(s, { opacity: i === next ? 1 : 0.3, duration: 0.6, ease: "power2.out", overwrite: true }));
        rules.forEach((r, i) => gsap.to(r, { scaleX: i === next ? 1 : 0, duration: 0.9, ease: "expo.out", overwrite: true }));
        ticks.forEach((t, i) => gsap.to(t, { scaleX: i <= next ? 1 : 0, duration: 0.7, ease: "expo.out", overwrite: true }));
      };

      const triggers = steps.map((step, i) =>
        ScrollTrigger.create({
          trigger: step,
          start: "top 50%",
          end: "bottom 50%",
          onToggle: (self) => self.isActive && activate(i),
        }),
      );

      return () => triggers.forEach((t) => t.kill());
    });

    return () => mm.revert();
  });

  return null;
}
