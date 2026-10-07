"use client";

import { CaretDown, X } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { nav, topbar } from "@/lib/content";
import { site } from "@/lib/site";
import { useLenis } from "@/components/motion/SmoothScroll";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "./Logo";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const lenisRef = useLenis();
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const lenis = lenisRef?.current;
    const main = document.getElementById("main");
    const footer = document.getElementById("site-footer");
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      document.removeEventListener("keydown", onKey);
      opener?.focus();
    };
  }, [open, onClose, lenisRef]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={reduce ? { opacity: 0 } : { clipPath: "circle(0% at calc(100% - 38px) 42px)" }}
          animate={reduce ? { opacity: 1 } : { clipPath: "circle(150% at calc(100% - 38px) 42px)" }}
          exit={reduce ? { opacity: 0 } : { clipPath: "circle(0% at calc(100% - 38px) 42px)" }}
          transition={{ duration: reduce ? 0.2 : 0.75, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[var(--z-menu)] flex flex-col overflow-y-auto bg-white lg:hidden"
          data-lenis-prevent
        >
          <div className="flex h-[var(--header-h)] shrink-0 items-center justify-between border-b border-line px-4 md:px-6">
            <Logo />
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="grid size-11 place-items-center rounded-[10px] bg-fg text-white transition-transform active:scale-95"
            >
              <X aria-hidden className="size-5" weight="bold" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 px-4 pt-2 md:px-6">
            <ul>
              {nav.map((item, i) => {
                const isOpen = expanded === item.label;
                return (
                  <motion.li
                    key={item.label}
                    initial={reduce ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 + i * 0.05, ease: easeOut }}
                    className="border-b border-line"
                  >
                    {"kind" in item ? (
                      <>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() => setExpanded(isOpen ? null : item.label)}
                          className="flex w-full items-center justify-between py-4 font-display text-[22px] font-semibold text-fg"
                        >
                          {item.label}
                          <CaretDown
                            aria-hidden
                            weight="bold"
                            className={`size-4 transition-transform duration-500 ease-expo ${isOpen ? "rotate-180 text-accent" : ""}`}
                          />
                        </button>
                        <div className={`grid transition-[grid-template-rows] duration-500 ease-expo ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`} inert={!isOpen}>
                          <div className="overflow-hidden">
                            {item.groups.map((g, gi) => (
                              <div key={`${g.title}-${gi}`} className="pb-4">
                                {g.title && <p className="mb-1 text-[13px] font-semibold tracking-[0.06em] text-accent-strong uppercase">{g.title}</p>}
                                <ul>
                                  {g.links.map((l) => (
                                    <li key={l.label}>
                                      <a href={l.href} onClick={onClose} className="block py-1.5 text-[16px] text-text">
                                        {l.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <a href={item.href} onClick={onClose} className="block py-4 font-display text-[22px] font-semibold text-fg">
                        {item.label}
                      </a>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: easeOut }}
            className="space-y-5 px-4 pt-8 pb-10 md:px-6"
          >
            <div className="space-y-1 text-[15px] text-text">
              <a href={`mailto:${site.email}`} className="block">
                {site.email}
              </a>
              {site.phones.map((p) => (
                <a key={p.href} href={p.href} className="block">
                  {p.label}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <ButtonLink href={topbar.proposal.href} size="sm" onClick={onClose}>
                {topbar.proposal.label}
              </ButtonLink>
              <ButtonLink href={topbar.training.href} size="sm" variant="blue" onClick={onClose}>
                {topbar.training.label}
              </ButtonLink>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
