import Image from "next/image";
import { clients } from "@/lib/content";
import { BlockSection, SectionHeading } from "../SectionHeading";

/** Client names (or logos when provided in content.ts) on a soft grid. */
export function ClientsWall({ heading = "Brands we've worked with" }: { heading?: string }) {
  return (
    <BlockSection tone="surface">
      <SectionHeading title={heading} />
      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {clients.map((c, i) => (
          <li key={c.name} data-reveal="fade-up" data-delay={(i % 5) * 0.04}>
            <div className="grid h-24 place-items-center rounded-[12px] bg-white px-4 text-center shadow-[0_2px_14px_-6px_rgb(43_42_41/0.2)] transition-[transform,box-shadow] duration-500 ease-expo hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)]">
              {c.logo ? (
                <Image src={c.logo} alt={`${c.name} logo`} width={160} height={64} className="h-12 w-auto object-contain" />
              ) : (
                <span className="font-display text-[15px] leading-snug font-semibold text-fg/70">{c.name}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </BlockSection>
  );
}
