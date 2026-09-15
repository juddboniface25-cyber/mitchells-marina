import type { Metadata } from "next";
import Image from "next/image";
import { marina, contacts, hours } from "@/data/marina";
import PointMap from "@/components/PointMap";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Contact, Hours and Slip Waitlist",
  description: `${marina.address}. Marina, slips, RV sites and fuel: ${marina.phoneDisplay}. Hours by season, directions by road and by water, and the slip and RV site inquiry form.`,
};

const numbers = [
  { label: "Slips, RV sites, fuel, rentals", ...marina },
  { label: "Mitchell's Restaurant & Pizzeria", ...contacts.restaurant },
  { label: "Boat sales (Chris Levey)", ...contacts.boatSales },
  { label: "Striper charters (Captain Bert)", ...contacts.charters },
];

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-10 grain">
        <p className="eyebrow">Come see us</p>
        <h1 className="display text-7xl sm:text-8xl lg:text-9xl mt-2">Contact &amp; hours</h1>
        <div className="rule2 left max-w-[10rem] mt-3 text-ink" />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10">
        {/* Left: the facts */}
        <div className="lg:col-span-5 space-y-10">
          <div className="border border-ink p-6 bg-paper">
            <h2 className="display text-4xl">Where</h2>
            <address className="not-italic serif text-lg mt-3 leading-relaxed">
              {marina.streetAddress}
              <br />
              {marina.city}, {marina.region} {marina.postalCode}
            </address>
            <p className="text-sm text-ink-soft mt-2">
              Follow Trading Post Road off Smith Mountain Lake Parkway all the way down the point. By water, marker{" "}
              {marina.lakeMarker}; come in to the gas dock at the tip.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={marina.mapsUrl} target="_blank" rel="noopener" className="btn solid">Directions</a>
              <a href={marina.phoneHref} className="btn red">{marina.phoneDisplay}</a>
            </div>
          </div>

          <div className="border border-ink p-6 bg-paper">
            <h2 className="display text-4xl">Who to call</h2>
            <ul className="mt-4 space-y-2">
              {numbers.map((n) => (
                <li key={n.label} className="flex justify-between gap-4 text-sm border-b border-line pb-2">
                  <span>{n.label}</span>
                  <a href={n.phoneHref} className="underline-run font-bold whitespace-nowrap tabular-nums">{n.phoneDisplay}</a>
                </li>
              ))}
            </ul>
          </div>

          <div id="hours" className="border border-ink p-6 bg-paper">
            <h2 className="display text-4xl">When</h2>
            <ul className="mt-4 space-y-3">
              {hours.seasons.map((s) => (
                <li key={s.label} className="border-b border-line pb-2">
                  <span className="block text-[0.7rem] font-bold uppercase tracking-[0.12em] text-moss">{s.label}</span>
                  <span className="text-sm">{s.text}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-ink-soft mt-4">{hours.note} Holidays and weather move things; the phone is always right.</p>
          </div>

          <div className="border border-ink p-6 bg-paper">
            <h2 className="display text-4xl">Follow along</h2>
            <p className="text-sm text-ink-soft mt-2">
              Tournament dates, food truck days, ice cream hours, boats and campers for sale, all posted on Facebook first.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href={marina.facebookUrl} target="_blank" rel="noopener" className="underline-run">{marina.facebookHandle} on Facebook</a></li>
              <li><a href={contacts.restaurant.url} target="_blank" rel="noopener" className="underline-run">Mitchell&rsquo;s Restaurant &amp; Pizzeria</a></li>
              <li><a href={contacts.rentals.url} target="_blank" rel="noopener" className="underline-run">SML Boat Rentals</a></li>
              <li><a href={contacts.charters.url} target="_blank" rel="noopener" className="underline-run">Captain Bert&rsquo;s charters</a></li>
              <li><a href={marina.bbb.url} target="_blank" rel="noopener" className="underline-run">BBB profile, {marina.bbb.rating} since {marina.bbb.since}</a></li>
            </ul>
          </div>
        </div>

        {/* Right: the map, three ways */}
        <div className="lg:col-span-7 space-y-6">
          <div className="border border-ink bg-cream p-4">
            <p className="eyebrow mb-3">The point, by road and by water</p>
            <PointMap />
          </div>
          <div className="border border-ink overflow-hidden aspect-[4/3]">
            <iframe
              title="Map to Mitchell's Point Marina & RV Park"
              src={marina.mapsEmbed}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <figure>
            <div className="frame aspect-[3/2] border border-ink">
              <Image src="/img/marina-aerial.jpg" alt="Aerial view of the point: the road in, the RV loop, the covered docks and the gas dock and pavilion at the tip" fill sizes="(min-width:1024px) 58vw, 100vw" />
            </div>
            <figcaption className="text-sm text-smoke mt-2">
              The point from above: the road and RV loop, the covered slips along the shore, the gas dock and pavilion
              at the tip.
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="form" className="mx-auto max-w-7xl px-4 sm:px-6 mt-20 scroll-mt-28">
        <p className="eyebrow">Slips, sites, boats</p>
        <h2 className="display text-5xl sm:text-6xl mt-2">Get on the list</h2>
        <div className="rule2 left max-w-[8rem] mt-3 text-moss" />
        <p className="text-sm text-ink-soft mt-4 max-w-xl">
          Slips and sites lease by the year, so most inquiries go on a waitlist. Tell us what you have and when
          you&rsquo;d like to start, and the marina calls when something that fits opens up.
        </p>
        <div className="mt-8">
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
