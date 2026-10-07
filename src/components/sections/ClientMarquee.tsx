import Image from "next/image";
import { clients } from "@/lib/content";
import { MarqueeMotion } from "./MarqueeMotion";

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center motion-reduce:flex-wrap motion-reduce:justify-center">
      {clients.map((c) => (
        <li key={c.name} className="flex h-16 items-center px-8 md:px-12">
          {c.logo ? (
            <Image
              src={c.logo}
              alt={hidden ? "" : `${c.name} logo`}
              width={160}
              height={64}
              className="h-12 w-auto object-contain opacity-60 grayscale transition-[filter,opacity] duration-500 hover:opacity-100 hover:grayscale-0"
            />
          ) : (
            <span className="font-display text-[clamp(1.1rem,1.8vw,1.5rem)] font-semibold whitespace-nowrap text-fg/45 transition-colors duration-500 hover:text-accent">
              {c.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

/** Client strip under the hero: drifts continuously and reacts to scroll velocity. */
export function ClientMarquee() {
  return (
    <section aria-labelledby="clients-title" data-marquee className="relative border-y border-line bg-white py-6">
      <h2 id="clients-title" className="sr-only">
        Our clients
      </h2>
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]">
        <div data-marquee-track className="flex w-max will-change-transform motion-reduce:w-full">
          <Row />
          <span className="contents motion-reduce:hidden">
            <Row hidden />
          </span>
        </div>
      </div>
      <MarqueeMotion />
    </section>
  );
}
