import type { Block } from "@/lib/pages/types";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CallToAction } from "@/components/sections/CallToAction";
import { Contact } from "@/components/sections/Contact";
import { FaqList } from "@/components/sections/FaqList";
import { Features } from "./blocks/Features";
import { Split } from "./blocks/Split";
import { Steps } from "./blocks/Steps";
import { Plans } from "./blocks/Plans";
import { Checklist } from "./blocks/Checklist";
import { Prose } from "./blocks/Prose";
import { Gallery } from "./blocks/Gallery";
import { Videos } from "./blocks/Videos";
import { Listings } from "./blocks/Listings";
import { Links } from "./blocks/Links";
import { Audience } from "./blocks/Audience";
import { ClientsWall } from "./blocks/ClientsWall";
import { Related } from "./blocks/Related";
import { SitemapList } from "./blocks/SitemapList";
import { MapEmbed } from "./blocks/MapEmbed";
import { BlockSection, SectionHeading } from "./SectionHeading";

/** Renders a page's blocks in order. Each block type maps to one presentational component. */
export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        const key = `${b.type}-${i}`;
        switch (b.type) {
          case "features":
            return <Features key={key} {...b} />;
          case "split":
            return <Split key={key} {...b} />;
          case "steps":
            return <Steps key={key} {...b} />;
          case "plans":
            return <Plans key={key} {...b} />;
          case "checklist":
            return <Checklist key={key} {...b} />;
          case "prose":
            return <Prose key={key} {...b} />;
          case "gallery":
            return <Gallery key={key} {...b} />;
          case "videos":
            return <Videos key={key} {...b} />;
          case "listings":
            return <Listings key={key} {...b} />;
          case "links":
            return <Links key={key} {...b} />;
          case "audience":
            return <Audience key={key} {...b} />;
          case "stats":
            return (
              <div key={key} className="pt-14 md:pt-20">
                <Stats />
              </div>
            );
          case "clients":
            return <ClientsWall key={key} heading={b.heading} />;
          case "testimonials":
            return <Testimonials key={key} />;
          case "faq":
            return (
              <BlockSection key={key}>
                <SectionHeading title={b.heading ?? "Frequently Asked Questions"} />
                <div className="mx-auto mt-12 max-w-[1000px]">
                  <FaqList items={b.items} />
                </div>
              </BlockSection>
            );
          case "cta":
            return <CallToAction key={key} eyebrow={b.eyebrow} lines={b.lines} button={b.button} />;
          case "contact":
            return <Contact key={key} heading={b.heading} body={b.body} />;
          case "related":
            return <Related key={key} {...b} />;
          case "sitemap":
            return <SitemapList key={key} />;
          case "map":
            return <MapEmbed key={key} heading={b.heading} />;
          default:
            return null;
        }
      })}
    </>
  );
}
