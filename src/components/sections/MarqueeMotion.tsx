"use client";

import { gsap, ScrollTrigger, useGSAP, MQ } from "@/lib/gsap";

/*
 * Base drift: one full row every 45s, linear.
 * Scroll velocity multiplies the speed (up to 5x) and its sign sets direction,
 * then eases back to the resting speed over 0.8s. Hover slows it to 0.2x.
 */
export function MarqueeMotion() {
  useGSAP(() => {
    const section = document.querySelector<HTMLElement>("[data-marquee]");
    const track = section?.querySelector<HTMLElement>("[data-marquee-track]");
    if (!section || !track) return;
    const mm = gsap.matchMedia();

    mm.add(MQ.motion, () => {
      const loop = gsap.to(track, { xPercent: -50, duration: 45, ease: "none", repeat: -1 });
      // Start deep into the repeat so a negative timeScale (scrolling up) never hits time 0.
      loop.totalTime(loop.duration() * 200);
      let direction = 1;
      let hovering = false;

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => (self.isActive ? loop.play() : loop.pause()),
        onUpdate: (self) => {
          const v = self.getVelocity();
          if (Math.abs(v) < 20) return;
          direction = v > 0 ? 1 : -1;
          const boost = gsap.utils.clamp(1, 5, 1 + Math.abs(v) / 450);
          gsap.to(loop, { timeScale: direction * boost * (hovering ? 0.2 : 1), duration: 0.2, overwrite: true });
          gsap.to(loop, { timeScale: direction * (hovering ? 0.2 : 1), duration: 0.8, delay: 0.2, ease: "power2.out" });
        },
      });

      const slow = () => {
        hovering = true;
        gsap.to(loop, { timeScale: direction * 0.2, duration: 0.6, overwrite: true });
      };
      const resume = () => {
        hovering = false;
        gsap.to(loop, { timeScale: direction, duration: 0.6, overwrite: true });
      };
      track.addEventListener("pointerenter", slow);
      track.addEventListener("pointerleave", resume);

      return () => {
        track.removeEventListener("pointerenter", slow);
        track.removeEventListener("pointerleave", resume);
        st.kill();
        loop.kill();
      };
    });

    return () => mm.revert();
  });

  return null;
}
