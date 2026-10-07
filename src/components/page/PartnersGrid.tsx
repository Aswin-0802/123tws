import Image from "next/image";
import { BlockSection, SectionHeading } from "./SectionHeading";

// Partner and platform logos shown on every inner page of the live site ("We Partnered With").
const partners = [
  { name: "Microsoft", file: "microsoft" },
  { name: "Google Workspace", file: "work-space" },
  { name: "GoDaddy", file: "godady" },
  { name: "Ubersuggest", file: "ubersuggest" },
  { name: "WATI", file: "wati" },
  { name: "Meta", file: "meta" },
  { name: "Google Ads", file: "google-ads" },
  { name: "Semrush", file: "semrush" },
  { name: "Ahrefs", file: "ahrefs" },
  { name: "Screaming Frog", file: "screaming-frog" },
  { name: "Reddit", file: "reddit" },
  { name: "LinkedIn", file: "linkedin" },
];

/** Logo cards rise in a short stagger; hover lifts the card and brings the logo to full colour. */
export function PartnersGrid() {
  return (
    <BlockSection tone="surface">
      <SectionHeading title="We Partnered With" />
      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6">
        {partners.map((p, i) => (
          <li key={p.file} data-reveal="fade-up" data-delay={(i % 6) * 0.04}>
            <div className="group grid h-28 place-items-center rounded-[16px] border border-line bg-white px-5 transition-[transform,box-shadow,border-color] duration-500 ease-expo hover:-translate-y-1.5 hover:border-transparent hover:shadow-[var(--card-shadow-hover)]">
              <Image
                src={`/images/live/partners/${p.file}.png`}
                alt={`${p.name} logo`}
                width={200}
                height={100}
                sizes="160px"
                className="h-auto w-full max-w-[150px] opacity-90 transition-[opacity,transform] duration-500 ease-expo group-hover:scale-105 group-hover:opacity-100"
              />
            </div>
          </li>
        ))}
      </ul>
    </BlockSection>
  );
}
