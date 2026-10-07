"use client";

import { CaretDown, EnvelopeSimple, List, Phone } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import { nav, topbar, type MenuGroup } from "@/lib/content";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

const ease = [0.76, 0, 0.24, 1] as const;
const easeOut = [0.16, 1, 0.3, 1] as const;

const navLink =
  "relative inline-flex h-[var(--header-h)] items-center gap-1.5 px-3.5 font-sans text-[15px] font-semibold text-fg transition-colors duration-300 hover:text-accent-strong after:absolute after:inset-x-3.5 after:bottom-[26px] after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform after:duration-500 after:ease-expo hover:after:scale-x-100 data-[open=true]:text-accent-strong data-[open=true]:after:scale-x-100";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  // `left` is the card's centre in px from the header bar's left edge ("50%" for wide menus).
  const [menu, setMenu] = useState<{ label: string; left: number | string } | null>(null);
  const open = menu?.label ?? null;
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);
  const triggers = useRef<Record<string, HTMLButtonElement | null>>({});
  const barRef = useRef<HTMLDivElement>(null);

  const placeFor = useCallback((label: string): number | string => {
    const item = nav.find((n) => n.label === label);
    if (!item || !("kind" in item) || item.kind === "mega") return "50%";
    const bar = barRef.current?.getBoundingClientRect();
    const trig = triggers.current[label]?.getBoundingClientRect();
    if (!bar || !trig) return "50%";
    const half = DROPDOWN_W / 2;
    const centre = trig.left + trig.width / 2 - bar.left;
    return Math.min(Math.max(centre, half), bar.width - half);
  }, []);

  const openMenu = useCallback(
    (label: string) => {
      window.clearTimeout(closeTimer.current);
      setMenu((m) => (m?.label === label ? m : { label, left: placeFor(label) }));
    },
    [placeFor],
  );
  const setOpen = useCallback(
    (next: string | null | ((o: string | null) => string | null)) => {
      setMenu((m) => {
        const label = typeof next === "function" ? next(m?.label ?? null) : next;
        return label ? { label, left: placeFor(label) } : null;
      });
    },
    [placeFor],
  );
  const scheduleClose = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMenu(null), 160);
  }, []);

  // Scroll state lives in data attributes so React never re-renders while scrolling.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate(self) {
        const y = self.scroll();
        const scrolled = String(y > 24);
        if (el.dataset.scrolled !== scrolled) el.dataset.scrolled = scrolled;
        if (el.dataset.menu === "open") return;
        if (self.direction === 1 && y > 560 && el.dataset.hidden !== "true") el.dataset.hidden = "true";
        else if (self.direction === -1 && el.dataset.hidden === "true") el.dataset.hidden = "false";
      },
    });
    return () => st.kill();
  }, []);

  useEffect(() => {
    if (!open) return;
    const el = headerRef.current;
    if (el) el.dataset.menu = "open";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        triggers.current[open]?.focus();
        setMenu(null);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      if (el) el.dataset.menu = "closed";
    };
  }, [open]);

  const active = nav.find((n) => "kind" in n && n.label === open);

  return (
    <>
      <header
        ref={headerRef}
        data-scrolled="false"
        data-hidden="false"
        className="group/header fixed inset-x-0 top-0 z-[var(--z-header)] transition-transform duration-700 ease-expo data-[hidden=true]:-translate-y-full"
        onPointerLeave={scheduleClose}
      >
        <div className="header-enter relative bg-white transition-shadow duration-500 group-data-[scrolled=true]/header:shadow-[0_8px_30px_-12px_rgb(43_42_41/0.18)]">
          {/* Contact strip: collapses once the page scrolls */}
          <div className="hidden grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-expo group-data-[scrolled=true]/header:grid-rows-[0fr] lg:grid">
            <div className="overflow-hidden">
              <div className="mx-auto flex h-11 max-w-[1320px] items-center justify-between border-b border-line px-6 text-[13px] text-text">
                <ul className="flex items-center gap-6">
                  <li>
                    <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-accent-strong">
                      <EnvelopeSimple aria-hidden className="size-4 text-accent" />
                      {site.email}
                    </a>
                  </li>
                  {site.phones.map((p) => (
                    <li key={p.href}>
                      <a href={p.href} className="inline-flex items-center gap-2 transition-colors hover:text-accent-strong">
                        <Phone aria-hidden className="size-4 text-accent" />
                        {p.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2">
                  <ButtonLink href={topbar.proposal.href} size="pill">
                    {topbar.proposal.label}
                  </ButtonLink>
                  <ButtonLink href={topbar.training.href} size="pill" variant="blue">
                    {topbar.training.label}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>

          <div ref={barRef} className="relative mx-auto flex h-[var(--header-h)] max-w-[1320px] items-center justify-between gap-6 px-4 md:px-6">
            <Link href="/" aria-label={`${site.name} home`} className="shrink-0 rounded-[8px]">
              <Logo priority />
            </Link>

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center">
                {nav.map((item) =>
                  "kind" in item ? (
                    <li key={item.label} onPointerEnter={() => openMenu(item.label)}>
                      <button
                        ref={(n) => {
                          triggers.current[item.label] = n;
                        }}
                        type="button"
                        aria-expanded={open === item.label}
                        aria-controls={`menu-${slug(item.label)}`}
                        onClick={() => setOpen((o) => (o === item.label ? null : item.label))}
                        data-open={open === item.label}
                        className={`group/trigger ${navLink}`}
                      >
                        {item.label}
                        <CaretDown aria-hidden weight="bold" className="size-3 transition-transform duration-500 ease-expo group-aria-expanded/trigger:rotate-180" />
                      </button>
                    </li>
                  ) : (
                    <li key={item.label} onPointerEnter={scheduleClose}>
                      <a href={item.href} className={navLink}>
                        {item.label}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </nav>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="grid size-11 place-items-center rounded-[10px] bg-accent-strong text-white transition-transform active:scale-95 lg:hidden"
            >
              <List aria-hidden className="size-5" weight="bold" />
              <span className="sr-only">Open menu</span>
            </button>

            {/*
              One card at a time for every menu. Switching between menus swaps the card instantly
              (no overlapping exit); leaving the menu altogether folds the card away.
            */}
            <AnimatePresence custom={menu !== null}>
              {active && "kind" in active && menu && (
                <Panel
                  key={active.label}
                  id={`menu-${slug(active.label)}`}
                  label={active.label}
                  groups={active.groups}
                  left={menu.left}
                  onEnter={() => openMenu(active.label)}
                  onNavigate={() => setOpen(null)}
                />
              )}
            </AnimatePresence>
          </div>

        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

const slug = (s: string) => s.toLowerCase().replace(/[^a-z]+/g, "-");

/** Approximate width of a single-column dropdown card, used to keep it inside the bar. */
const DROPDOWN_W = 272;

type PanelProps = {
  id: string;
  label: string;
  groups: MenuGroup[];
  left: number | string;
  onEnter: () => void;
  onNavigate: () => void;
};

/*
 * `custom` comes from AnimatePresence: true while another menu is taking over (switching),
 * false when the menu is closing. Switching removes the old card at once so two cards never overlap.
 */
const panelVariants = {
  closed: { clipPath: "inset(0% 0% 100% 0% round 10px)", y: -8 },
  open: { clipPath: "inset(0% 0% 0% 0% round 10px)", y: 0, transition: { duration: 0.45, ease } },
  exit: (switching: boolean) =>
    switching
      ? { opacity: 0, transition: { duration: 0 } }
      : { clipPath: "inset(0% 0% 100% 0% round 10px)", y: -8, transition: { duration: 0.4, ease } },
};

function MenuLink({ href, label, onNavigate }: { href: string; label: string; onNavigate: () => void }) {
  return (
    <a href={href} onClick={onNavigate} className="group/link inline-flex items-center gap-2 py-1 text-[15px] text-text transition-colors hover:text-accent-strong">
      <span className="h-0.5 w-0 rounded-full bg-accent transition-[width] duration-500 ease-expo group-hover/link:w-3" />
      {label}
    </a>
  );
}

/**
 * One menu card for every nav item, so all menus look and move the same:
 * white card, red top edge, soft shadow; unfolds from its top edge (0.45s), then
 * columns and links rise in a short stagger. Single-column menus sit centred under
 * their link; multi-column menus sit centred on the header bar.
 */
function Panel({ id, label, groups, left, onEnter, onNavigate }: PanelProps) {
  const cols = groups.length;
  return (
    <motion.div
      id={id}
      role="region"
      aria-label={`${label} menu`}
      onPointerEnter={onEnter}
      style={{ x: "-50%", left }}
      variants={panelVariants}
      initial="closed"
      animate="open"
      exit="exit"
      className="card absolute top-[calc(100%-14px)] w-max max-w-[calc(100vw-2rem)] border-t-2 border-accent px-7 pt-6 pb-7"
    >
      <div className="grid gap-x-10 gap-y-6" style={{ gridTemplateColumns: `repeat(${cols}, ${cols > 1 ? "minmax(0, 13.5rem)" : "12.5rem"})` }}>
        {groups.map((g, gi) => (
          <motion.div
            key={`${g.title}-${gi}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 + gi * 0.04, ease: easeOut }}
          >
            {g.title && <p className="mb-3 border-b border-line pb-2 font-display text-[14px] font-semibold text-fg">{g.title}</p>}
            <ul className="space-y-0.5">
              {g.links.map((l) => (
                <li key={l.label}>
                  <MenuLink href={l.href} label={l.label} onNavigate={onNavigate} />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
