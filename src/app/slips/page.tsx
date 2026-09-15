import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { marina, docks, groundsAmenities } from "@/data/marina";

export const metadata: Metadata = {
  title: "Boat Slips, Covered and Open, up to 50 ft",
  description: `Covered floating slips for houseboats to 50 ft, covered slips to 29 ft, open and covered lift slips, and PWC drive-ups at Mitchell's Point Marina, Smith Mountain Lake. Annual leases; join the waitlist. ${marina.phoneDisplay}.`,
};

export default function SlipsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-10 grain">
        <p className="eyebrow">Five docks, one point</p>
        <h1 className="display text-7xl sm:text-8xl lg:text-9xl mt-2">Boat slips</h1>
        <div className="rule2 left max-w-[10rem] mt-3 text-ink" />
        <p className="serif text-xl mt-6 max-w-2xl leading-snug">
          Covered and open slips for everything from a jet ski to a 50-foot houseboat, leased by the year. The docks
          sit off both shores of the point, a short walk from the gas dock, the shower house and the restaurant.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact#form" className="btn solid">Join the waitlist</Link>
          <a href={marina.phoneHref} className="btn red">Call {marina.phoneDisplay}</a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 space-y-16">
        {docks.map((d, i) => (
          <article key={d.id} id={d.id} className={`reveal grid lg:grid-cols-12 gap-8 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="lg:col-span-6 frame aspect-[16/9] border border-ink">
              <Image src={d.img} alt={d.alt} fill sizes="(min-width:1024px) 50vw, 100vw" />
            </div>
            <div className="lg:col-span-6">
              <p className="eyebrow">{d.tag}</p>
              <h2 className="display text-5xl sm:text-6xl mt-1">{d.name}</h2>
              <p className="display text-2xl text-moss mt-2">{d.fits}</p>
              <ul className="mt-4 space-y-2">
                {d.features.map((f) => (
                  <li key={f} className="flex items-baseline gap-3 text-sm text-ink-soft leading-relaxed">
                    <span className="text-moss">▸</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-cream border-y border-ink mt-20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
          <div className="reveal">
            <SectionTitle eyebrow="With every slip" title="On the grounds" />
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {groundsAmenities.map((a) => (
                <li key={a} className="flex items-baseline gap-3 text-sm border-b border-line pb-2">
                  <span className="text-moss">▸</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal border border-ink bg-paper p-6">
            <p className="eyebrow">How slips work here</p>
            <h2 className="display text-4xl mt-1">Annual leases and a waitlist</h2>
            <p className="text-sm text-ink-soft leading-relaxed mt-3">
              Slips lease by the year and most are spoken for, so new boats go on a waitlist by dock. Tell us the boat
              (length, weight, covered or open) and when you&rsquo;d like to start; when a slip that fits comes open,
              the marina calls. RV tenants can be added to the same list, but a site does not include a slip.
            </p>
            <p className="text-sm text-ink-soft leading-relaxed mt-3">
              Pricing and current availability are by phone. Transient tie-up for fuel, the store and the restaurant
              is at the gas dock, no lease needed.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/contact#form" className="btn solid">Waitlist form</Link>
              <a href={marina.phoneHref} className="btn">{marina.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-20 grid md:grid-cols-3 gap-6">
        {[
          { img: "/img/beach.jpg", alt: "The beach at the marina with kayaks pulled up on the sand", cap: "The beach, below the RV loop" },
          { img: "/img/playground.jpg", alt: "A playground set on the grass by the water", cap: "The playground" },
          { img: "/img/pwc-driveup.jpg", alt: "Jet skis on drive-up floats along the dock", cap: "PWC drive-ups by the gas dock" },
        ].map((f) => (
          <figure key={f.img} className="reveal">
            <div className="frame aspect-[4/3] border border-ink">
              <Image src={f.img} alt={f.alt} fill sizes="(min-width:768px) 33vw, 100vw" />
            </div>
            <figcaption className="text-sm text-smoke mt-2">{f.cap}</figcaption>
          </figure>
        ))}
      </section>
    </>
  );
}
