"use client";

import { Plus } from "@phosphor-icons/react";
import { useId, useState } from "react";

/*
 * Answers are always rendered (search engines and find-in-page see them).
 * Collapse uses a grid-rows 0fr -> 1fr transition; closed panels are inert so focus skips them.
 */
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const uid = useId();

  return (
    <ul className="space-y-4">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btn = `${uid}-q${i}`;
        const panel = `${uid}-a${i}`;
        return (
          <li
            key={item.q}
            data-reveal="fade-up"
            className={`rounded-[12px] bg-white transition-shadow duration-500 ${isOpen ? "shadow-[0_14px_40px_-16px_rgb(43_42_41/0.3)]" : "shadow-[0_2px_14px_-6px_rgb(43_42_41/0.2)]"}`}
          >
            <h3>
              <button
                id={btn}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panel}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 px-5 py-4 text-left md:px-7 md:py-5"
              >
                <span className={`text-[15px] leading-snug font-semibold transition-colors duration-300 md:text-[16px] ${isOpen ? "text-accent-strong" : "text-fg group-hover:text-accent-strong"}`}>
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={`grid size-7 shrink-0 place-items-center rounded-full bg-accent text-white transition-transform duration-500 ease-expo ${isOpen ? "rotate-[135deg]" : "group-hover:rotate-90"}`}
                >
                  <Plus className="size-3.5" weight="bold" />
                </span>
              </button>
            </h3>
            <div
              id={panel}
              role="region"
              aria-labelledby={btn}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-expo ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 text-[15px] leading-[1.8] text-text md:px-7">{item.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
