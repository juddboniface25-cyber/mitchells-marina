import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { marina, rvSites, groundsAmenities } from "@/data/marina";

export const metadata: Metadata = {
  title: "RV Sites on Smith Mountain Lake, Annual Lease",
  description: `Waterfront and non-waterfront RV sites at Mitchell's Point Marina, Huddleston VA. Annual lease with free sewer and 30 amp hookups, water and trash included. Slips, gas dock, restaurant and beach on the same point. ${marina.phoneDisplay}.`,
};

export default function RvSitesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-10 grain">
        <p className="eyebrow">Annual lease · Smith Mountain Lake</p>
        <h1 className="display text-7xl sm:text-8xl lg:text-9xl mt-2">RV sites</h1>
        <div className="rule2 left max-w-[10rem] mt-3 text-ink" />
        <p className="serif text-xl mt-6 max-w-2xl leading-snug">
          A season-after-season place on the lake without buying a lake house. Sites run down the point along
          Trading Post Road, waterfront and a row back, with the docks, the beach, the lawn and the restaurant a walk
          away.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact#form" className="btn solid">Ask about a site</Link>
          <a href={marina.phoneHref} className="btn red">Call {marina.phoneDisplay}</a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 grid grid-cols-2 gap-4 reveal">
          <div className="frame aspect-[4/3] border border-ink col-span-2">
            <Image src="/img/rv-sites-2.jpg" alt="Waterfront RV sites with decks along a stone shoreline" fill sizes="(min-width:1024px) 58vw, 100vw" priority />
          </div>
          <div className="frame aspect-[4/3] border border-ink">
            <Image src="/img/campsite.jpg" alt="A camper on its site under the trees with a deck built out front" fill sizes="(min-width:1024px) 28vw, 50vw" />
          </div>
          <div className="frame aspect-[4/3] border border-ink">
            <Image src="/img/rv-sites.jpg" alt="RV sites on the grass above the water" fill sizes="(min-width:1024px) 28vw, 50vw" />
          </div>
        </div>

        <div className="lg:col-span-5 space-y-8">
          <div className="border border-ink p-6 bg-paper reveal">
            <h2 className="display text-4xl">What a site comes with</h2>
            <ul className="mt-4 space-y-2">
              {rvSites.included.map((x) => (
                <li key={x} className="flex items-baseline gap-3 text-sm border-b border-line pb-2">
                  <span className="text-moss">▸</span>
                  {x}
                </li>
              ))}
            </ul>
            <p className="eyebrow mt-5">Billed separately</p>
            <ul className="mt-2 space-y-2">
              {rvSites.separate.map((x) => (
                <li key={x} className="flex items-baseline gap-3 text-sm border-b border-line pb-2">
                  <span className="text-smoke">▸</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-ink p-6 bg-paper reveal">
            <h2 className="display text-4xl">Services</h2>
            <ul className="mt-4">
              {rvSites.services.map((s) => (
                <li key={s.name} className="leader text-sm py-2 border-b border-line">
                  <span>{s.name}</span>
                  <span className="dots" />
                  <span className="font-bold tabular-nums">{s.price}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-smoke mt-3">Site rates are by phone and depend on the row. Ask when you call.</p>
          </div>
        </div>
      </section>

      <section className="bg-cream border-y border-ink mt-20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
          <div className="reveal">
            <SectionTitle eyebrow="Read before you call" title="The rules of the loop" />
            <ul className="mt-6 space-y-3">
              {rvSites.rules.map((r) => (
                <li key={r} className="flex items-baseline gap-3 serif text-lg leading-relaxed">
                  <span className="text-moss text-sm">▸</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <SectionTitle eyebrow="Out your door" title="On the grounds" />
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {groundsAmenities.map((a) => (
                <li key={a} className="flex items-baseline gap-3 text-sm border-b border-line pb-2">
                  <span className="text-moss">▸</span>
                  {a}
                </li>
              ))}
            </ul>
            <p className="text-sm text-ink-soft mt-5">
              Tenants sometimes sell a camper with its site lease; those listings go up on{" "}
              <a href={marina.facebookUrl} target="_blank" rel="noopener" className="underline-run font-bold">the marina&rsquo;s Facebook page</a>{" "}
              and the buyer takes over the lease after the background check.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-20 border border-ink bg-paper p-6 sm:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <p className="eyebrow">Sites and slips</p>
          <h2 className="display text-5xl mt-2">Tell us what you&rsquo;re bringing</h2>
          <p className="text-sm text-ink-soft mt-3 max-w-xl">
            Rig length, whether you want waterfront, and whether you also need a slip. The form opens an email to the
            marina; the phone works too.
          </p>
        </div>
        <Link href="/contact#form" className="btn solid">Open the form</Link>
      </section>
    </>
  );
}
