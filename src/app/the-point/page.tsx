import type { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { marina, contacts, onThePoint, fleetSale } from "@/data/marina";

export const metadata: Metadata = {
  title: "Rentals, Charters, Restaurant, Golf and Ice Cream on the Point",
  description:
    "Everything that shares the point at Mitchell's Point Marina: SML Boat Rentals, Captain Bert's striper charters, Mitchell's Restaurant & Pizzeria, BucketGolf on the lawn, Captain Scoop ice cream, yoga, cornhole and the Sunshine Daydream Festival.",
};

export default function ThePointPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-10 grain">
        <p className="eyebrow">Same address, different doors</p>
        <h1 className="display text-7xl sm:text-8xl lg:text-9xl mt-2">The point</h1>
        <div className="rule2 left max-w-[10rem] mt-3 text-ink" />
        <p className="serif text-xl mt-6 max-w-2xl leading-snug">
          The marina owns the docks and the pumps. Around them, on the same few acres, are a rental fleet, a charter
          captain, a pizzeria with a stage, a nine-hole BucketGolf course and an ice cream window. Each has its own
          phone and its own hours; here they are in one place.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 space-y-16">
        {onThePoint.map((p, i) => (
          <article key={p.id} id={p.id} className={`reveal grid lg:grid-cols-12 gap-8 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="lg:col-span-6 frame aspect-[16/10] border border-ink">
              <Image src={p.img} alt={p.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className={p.id === "charters" ? "object-[50%_30%]" : ""} />
            </div>
            <div className="lg:col-span-6">
              <p className="eyebrow">{p.eyebrow}</p>
              <h2 className="display text-5xl sm:text-6xl mt-1">{p.name}</h2>
              <p className="serif text-lg leading-relaxed mt-4 text-ink-soft">{p.body}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={p.link.url} target="_blank" rel="noopener" className="btn solid">{p.link.label}</a>
                {p.phone && (
                  <a href={p.phone.phoneHref} className="btn">{p.phone.phoneDisplay}</a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-cream border-y border-ink mt-20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <SectionTitle eyebrow={fleetSale.when} title="Buy a boat off the rental fleet" />
            <p className="serif text-lg leading-relaxed mt-6">{fleetSale.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={fleetSale.contact.phoneHref} className="btn solid">Chris Levey, {fleetSale.contact.phoneDisplay}</a>
              <a href={marina.facebookUrl} target="_blank" rel="noopener" className="btn">The price list on Facebook</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 reveal">
            <div className="frame aspect-[4/3] border border-ink">
              <Image src="/img/tritoon-dock.jpg" alt="A tritoon at the dock with its cover off" fill sizes="(min-width:1024px) 25vw, 50vw" />
            </div>
            <div className="frame aspect-[4/3] border border-ink">
              <Image src="/img/deckboat-dock.jpg" alt="A Hurricane deck boat tied at the dock" fill sizes="(min-width:1024px) 25vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-20 grid md:grid-cols-2 gap-6">
        <div className="border border-ink p-6 bg-paper reveal">
          <p className="eyebrow">Staying over</p>
          <h2 className="display text-4xl mt-1">A rental on the point</h2>
          <p className="text-sm text-ink-soft leading-relaxed mt-3">
            There is a lakeside vacation rental on the point for visitors who want to walk to the boat in the morning.
            It books through Lake Retreat, not the marina.
          </p>
          <a href={contacts.lodging.url} target="_blank" rel="noopener" className="underline-run font-bold text-sm mt-4 inline-block">See the listing</a>
        </div>
        <div className="border border-ink p-6 bg-paper reveal">
          <p className="eyebrow">Keeping up</p>
          <h2 className="display text-4xl mt-1">The page is the bulletin board</h2>
          <p className="text-sm text-ink-soft leading-relaxed mt-3">
            Tournament dates, the food truck schedule, ice cream hours, the fleet price list and campers for sale all
            go up on the marina&rsquo;s Facebook page first. Follow {marina.facebookHandle} and you&rsquo;ll see it the
            day it&rsquo;s posted.
          </p>
          <a href={marina.facebookUrl} target="_blank" rel="noopener" className="underline-run font-bold text-sm mt-4 inline-block">{marina.facebookHandle} on Facebook</a>
        </div>
      </section>
    </>
  );
}
