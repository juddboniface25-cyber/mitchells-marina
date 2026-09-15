import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { marina, fuelAndStore, hours, contacts } from "@/data/marina";

export const metadata: Metadata = {
  title: "Gas Dock, Pump-out and Ship Store",
  description: `Fuel at the dock, pump-outs, oil and marine supplies, and a store with cold beer, snacks, ice cream and bait at Mitchell's Point Marina on Smith Mountain Lake. Marker C3, Craddock Creek. ${marina.phoneDisplay}.`,
};

export default function FuelPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-10 grain">
        <p className="eyebrow">Under the lighthouse · marker {marina.lakeMarker}</p>
        <h1 className="display text-7xl sm:text-8xl lg:text-9xl mt-2">Gas dock &amp; store</h1>
        <div className="rule2 left max-w-[10rem] mt-3 text-ink" />
        <p className="serif text-xl mt-6 max-w-2xl leading-snug">
          Pull in at the tip of the point. Fuel, a pump-out, oil and parts, and a store with the cold things and the
          bait. The restaurant and the ice cream window are a few steps up the dock.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 space-y-4 reveal">
          <div className="frame aspect-[16/10] border border-ink">
            <Image src="/img/gas-dock.jpg" alt="The gas dock and store with the striped lighthouse on the roof, boats fueling alongside" fill sizes="(min-width:1024px) 58vw, 100vw" priority />
          </div>
          <div className="frame aspect-[16/10] border border-ink">
            <Image src="/img/gas-dock-2.jpg" alt="Boats waiting at the pumps on the gas dock" fill sizes="(min-width:1024px) 58vw, 100vw" />
          </div>
        </div>
        <div className="lg:col-span-5 space-y-8">
          <div className="border border-ink p-6 bg-paper reveal">
            <h2 className="display text-4xl">At the pump</h2>
            <ul className="mt-4 space-y-2">
              {fuelAndStore.fuel.map((x) => (
                <li key={x} className="flex items-baseline gap-3 text-sm border-b border-line pb-2">
                  <span className="text-moss">▸</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-ink p-6 bg-paper reveal">
            <h2 className="display text-4xl">In the store</h2>
            <ul className="mt-4 space-y-2">
              {fuelAndStore.store.map((x) => (
                <li key={x} className="flex items-baseline gap-3 text-sm border-b border-line pb-2">
                  <span className="text-moss">▸</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div id="hours" className="border border-ink p-6 bg-cream reveal">
            <h2 className="display text-4xl">Dock hours</h2>
            <ul className="mt-4 space-y-3">
              {hours.seasons.map((s) => (
                <li key={s.label} className="border-b border-line pb-2">
                  <span className="block text-[0.7rem] font-bold uppercase tracking-[0.12em] text-moss">{s.label}</span>
                  <span className="text-sm">{s.text}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-smoke mt-3">{hours.note} Off-season, call before you count on the pump.</p>
            <a href={marina.phoneHref} className="btn red mt-4">Call {marina.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper mt-20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <div className="frame aspect-[4/3] border border-paper/30 reveal">
            <Image src="/img/festival-sunset.jpg" alt="A crowd on the lawn at sunset during a festival at the point" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-[50%_35%]" />
          </div>
          <div className="reveal">
            <SectionTitle eyebrow="A few steps from the pump" title="Fuel up, then stay" />
            <p className="serif text-lg mt-6 text-paper/85 leading-relaxed">
              The pizzeria and tiki bar share the tip of the point with the gas dock, with live music four nights a
              week in season. Captain Scoop&rsquo;s hand-dipped ice cream is by the store all summer. On Tuesdays in
              summer, when the kitchen rests, a food truck sets up at the marina.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={contacts.restaurant.url} target="_blank" rel="noopener" className="btn !border-paper !text-paper hover:!bg-paper hover:!text-ink">The restaurant</a>
              <Link href="/the-point" className="btn !border-paper/40 !text-paper/80 hover:!bg-paper hover:!text-ink">Everything on the point</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
