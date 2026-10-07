"use client";

import { MapPin } from "@phosphor-icons/react";
import { useState } from "react";
import { site } from "@/lib/site";

/** Office map. Loads Google Maps only after a click, so no third-party requests on page load. */
export function MapEmbed({ heading = "Visit our office" }: { heading?: string }) {
  const [show, setShow] = useState(false);
  const q = encodeURIComponent(`${site.name}, ${site.address.street}, ${site.address.locality} ${site.address.postalCode}`);
  return (
    <section className="bg-white pb-14 md:pb-20">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6">
        <h2 className="sr-only">{heading}</h2>
        <div className="relative aspect-[16/9] overflow-hidden rounded-[20px] bg-mist md:aspect-[21/8]">
          {show ? (
            <iframe
              title={`Map showing ${site.name}`}
              src={`https://maps.google.com/maps?q=${q}&z=16&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full border-0"
            />
          ) : (
            <button type="button" onClick={() => setShow(true)} className="group absolute inset-0 grid place-items-center">
              <span className="flex flex-col items-center gap-3 text-center">
                <span className="grid size-16 place-items-center rounded-full bg-accent-strong text-white transition-transform duration-500 ease-expo group-hover:scale-110">
                  <MapPin aria-hidden weight="fill" className="size-7" />
                </span>
                <span className="font-display text-[17px] font-semibold text-fg">Show map</span>
                <span className="max-w-[40ch] text-[14px] text-text">{site.address.lines.join(" ")}</span>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
