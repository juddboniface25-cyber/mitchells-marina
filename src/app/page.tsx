import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { marina, contacts, docks, onThePoint, stats, hours, fleetSale } from "@/data/marina";

const services = [
  { href: "/slips", eyebrow: "Covered, open, lift and houseboat", title: "Boat slips", body: "Five docks from PWC drive-ups to 50 ft houseboat slips with 100 amp pedestals, water and satellite TV. Annual leases; waitlist by phone or the form.", img: "/img/a-dock.jpg", alt: "The covered floating slips on A Dock" },
  { href: "/rv-sites", eyebrow: "Annual lease", title: "RV sites", body: "Waterfront and non-waterfront sites with free sewer and 30 amp hookups, water and trash in the lease, and the whole point out your door.", img: "/img/rv-sites-2.jpg", alt: "RV sites on the water with decks and a stone shoreline" },
  { href: "/fuel", eyebrow: "At the tip", title: "Gas dock & store", body: "Fuel, oil, pump-outs and a maintenance shop, plus cold beer, snacks, ice cream and bait under the lighthouse.", img: "/img/gas-dock-2.jpg", alt: "Boats fueling at the gas dock beneath the lighthouse" },
];

export default function Home() {
  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="relative overflow-hidden grain">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-8 sm:pt-16 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-end">
          <div className="reveal relative">
            <p className="eyebrow mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-ink" /> Smith Mountain Lake · Huddleston, Virginia
            </p>
            <h1 className="display leading-[0.82]">
              <span className="block text-[clamp(2rem,6vw,4.5rem)] text-moss">Tie up at</span>
              <span className="block text-[clamp(3.6rem,12vw,10rem)]">Mitchell&rsquo;s Point</span>
            </h1>
            <div className="rule2 left max-w-[14rem] mt-4 text-ink" />
            <p className="serif text-xl sm:text-2xl mt-6 max-w-xl leading-snug">
              A full-service marina and RV park on its own point at Smith Mountain Lake. Covered and open slips for
              boats up to 50 feet, annual RV sites, a gas dock and store, boat rentals, striper charters, and a
              pizzeria with a stage at the end of the road. Come by road or come by boat.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/slips" className="btn solid">Boat slips</Link>
              <Link href="/rv-sites" className="btn">RV sites</Link>
              <a href={marina.phoneHref} className="btn red">Call {marina.phoneDisplay}</a>
            </div>
            <p className="mt-6 text-sm flex items-center gap-2">
              <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-leaf" />
              <span>
                <strong className="font-bold">{hours.seasons[0].label}:</strong> {hours.seasons[0].text}.{" "}
                <Link href="/contact#hours" className="underline-run">Off-season hours</Link>
              </span>
            </p>
          </div>

          {/* Photo stack: three frames, like charts on a table. */}
          <div className="relative h-[24rem] sm:h-[30rem] lg:h-[36rem] reveal">
            <div className="frame absolute left-0 bottom-0 w-[62%] aspect-[3/4] border border-ink shadow-[10px_10px_0_0_var(--color-leaf)]">
              <Image src="/img/lawn-lighthouse.jpg" alt="The lawn at the point with the lighthouse on the gas dock and the lake behind" fill sizes="(min-width:1024px) 30vw, 60vw" priority className="object-[40%_50%]" />
            </div>
            <div className="frame absolute right-0 top-0 w-[48%] aspect-[4/3] border border-ink bg-cream">
              <Image src="/img/marina-point.jpg" alt="Docks and boat slips at Mitchell's Point Marina on a clear day" fill sizes="(min-width:1024px) 24vw, 48vw" />
            </div>
            <div className="frame absolute right-[6%] bottom-[12%] w-[36%] aspect-square rounded-full border-2 border-paper shadow-[0_0_0_2px_var(--color-ink)]">
              <Image src="/img/tritoon-red.jpg" alt="A rental tritoon on the lake" fill sizes="(min-width:1024px) 18vw, 36vw" />
            </div>
            <Image
              src="/brand/lighthouse.png"
              alt=""
              width={120}
              height={120}
              className="absolute -top-4 left-[8%] w-20 sm:w-28 h-auto rounded-full rotate-[-8deg] drop-shadow-[3px_3px_0_var(--color-ink)]"
            />
          </div>
        </div>

        {/* Aerial band */}
        <div className="relative h-[34vw] max-h-[26rem] min-h-[11rem] border-y border-ink">
          <Image src="/img/marina-aerial.jpg" alt="Aerial view of the point: the RV loop, the covered docks along the shore and the gas dock and pavilion at the tip, surrounded by the lake" fill className="object-cover object-[50%_45%]" sizes="100vw" priority />
          <p className="absolute left-4 sm:left-6 bottom-4 bg-paper text-ink px-3 py-2 text-xs font-bold tracking-[0.18em] uppercase border border-ink">
            3553 Trading Post Rd · marker C3 on Craddock Creek
          </p>
        </div>
      </section>

      {/* ───────────── Marquee: what's on the point ───────────── */}
      <section aria-label="On the point" className="border-b border-ink bg-ink text-paper py-3 overflow-hidden">
        <div className="marquee">
          <div>
            {[...docks.map((d) => d.name), "Gas dock", "Pump-out", "Ship store", "RV sites", "Shower house", "Beach", "Playground", "Boat rentals", "Striper charters", "BucketGolf", "Ice cream", "Pizza and live music", ...docks.map((d) => d.name), "Gas dock", "Pump-out", "Ship store", "RV sites", "Shower house", "Beach", "Playground", "Boat rentals", "Striper charters", "BucketGolf", "Ice cream", "Pizza and live music"].map((m, i) => (
              <span key={i} className="display text-2xl sm:text-3xl px-6 flex items-center gap-6">
                {m}
                <span className="inline-block h-2 w-2 rounded-full bg-leaf" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Three services ───────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <SectionTitle eyebrow="What the marina does" title="Slips, sites and fuel" className="reveal" />
        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <article key={s.href} className="reveal group">
              <Link href={s.href} className="block">
                <div className="frame aspect-[4/3] border border-ink">
                  <Image src={s.img} alt={s.alt} fill sizes="(min-width:1024px) 33vw, 100vw" className="transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <p className="eyebrow mt-5">{s.eyebrow}</p>
                <h3 className="display text-4xl mt-1">{s.title}</h3>
              </Link>
              <p className="text-sm leading-relaxed mt-2 text-ink-soft">{s.body}</p>
              <Link href={s.href} className="underline-run font-bold text-sm mt-3 inline-block">Details and how to apply</Link>
            </article>
          ))}
        </div>
      </section>

      {/* ───────────── The pitch ───────────── */}
      <section className="bg-cream border-y border-ink py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 reveal">
            <SectionTitle eyebrow="A point, not a parking lot" title="Everything at the end of one road." />
            <p className="serif text-lg leading-relaxed mt-6">
              Trading Post Road runs down the spine of the point, through the RV sites, past the lawn, and ends at the
              gas dock with the lighthouse on its roof. The docks are off either shore. The restaurant, the ice cream
              window and the rental desk are all within a hundred yards of the pump.
            </p>
            <p className="serif text-lg leading-relaxed mt-4">
              Slip and site leases run by the year, so the people on the docks are neighbors, not transients. A
              Better Business Bureau A+ since 2018, and Best of Smith Mountain Lake in 2022.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {stats.map((s) => (
                <div key={s.label} className="border border-ink p-4">
                  <p className="display text-4xl text-moss">{s.n}</p>
                  <p className="eyebrow mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 reveal">
            <div className="frame aspect-[4/5] border border-ink">
              <Image src="/img/golf-swing.jpg" alt="A golfer on the BucketGolf course on the lawn, the lake behind" fill sizes="(min-width:1024px) 28vw, 50vw" />
            </div>
            <div className="frame aspect-[4/5] border border-ink mt-10">
              <Image src="/img/e-dock.jpg" alt="Covered lift slips on E Dock" fill sizes="(min-width:1024px) 28vw, 50vw" />
            </div>
            <div className="frame aspect-[4/5] border border-ink -mt-10">
              <Image src="/img/campsite.jpg" alt="A camper on its site under the trees, a deck built out front" fill sizes="(min-width:1024px) 28vw, 50vw" />
            </div>
            <div className="frame aspect-[4/5] border border-ink">
              <Image src="/img/sunset-docks.jpg" alt="Sunset over the lake from the marina, kayaks stacked by the dock" fill sizes="(min-width:1024px) 28vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── On the point ───────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <SectionTitle eyebrow="Same point, different doors" title="Rent, fish, eat, play" align="center" className="reveal" />
        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {onThePoint.map((p) => (
            <li key={p.id} className="reveal group">
              <div className="frame aspect-[4/3] border border-ink relative">
                <Image src={p.img} alt={p.alt} fill sizes="(min-width:1024px) 30vw, (min-width:640px) 50vw, 100vw" className="transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <p className="eyebrow mt-4">{p.eyebrow}</p>
              <h3 className="display text-3xl mt-1">{p.name}</h3>
              <p className="text-sm text-ink-soft mt-1 leading-relaxed">{p.body}</p>
              <a href={p.link.url} target="_blank" rel="noopener" className="underline-run font-bold text-sm mt-3 inline-block">{p.link.label}</a>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Link href="/the-point" className="btn">All of it, with phone numbers</Link>
        </div>
      </section>

      {/* ───────────── Fleet sale ───────────── */}
      <section className="bg-ink text-paper py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <div className="frame aspect-[4/3] border border-paper/30 reveal">
            <Image src="/img/tritoon-dock.jpg" alt="A late-model tritoon tied at the dock, ready for a buyer" fill sizes="(min-width:1024px) 40vw, 100vw" />
          </div>
          <div className="reveal">
            <p className="eyebrow !text-paper/60">{fleetSale.when}</p>
            <h2 className="display text-6xl sm:text-7xl mt-2">The rental fleet goes on sale</h2>
            <div className="rule2 left max-w-[8rem] mt-3 text-leaf" />
            <p className="serif text-lg mt-6 text-paper/85 leading-relaxed">{fleetSale.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={fleetSale.contact.phoneHref} className="btn !border-paper !text-paper hover:!bg-paper hover:!text-ink">
                Call Chris, {fleetSale.contact.phoneDisplay}
              </a>
              <a href={marina.facebookUrl} target="_blank" rel="noopener" className="btn !border-paper/40 !text-paper/80 hover:!bg-paper hover:!text-ink">
                This year&rsquo;s list on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Come by boat ───────────── */}
      <section id="directions" className="mx-auto max-w-7xl px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="frame aspect-[16/9] border border-ink reveal">
          <Image src="/img/sunset-lake.jpg" alt="Sunset over Smith Mountain Lake from the marina" fill sizes="(min-width:1024px) 50vw, 100vw" />
        </div>
        <div className="reveal">
          <SectionTitle eyebrow="Getting here" title="By road, or by water" />
          <p className="serif text-lg leading-relaxed mt-6">
            By road, follow Trading Post Road off Smith Mountain Lake Parkway all the way to the end. By water, find
            marker {marina.lakeMarker} and come in to the gas dock at the tip of the point; the pump, the store and the
            restaurant are right there.
          </p>
          <ul className="mt-6 space-y-2">
            {[
              { name: "Directions", note: marina.addressShort, url: marina.mapsUrl },
              { name: "Mitchell's Restaurant & Pizzeria", note: "the pavilion at the tip", url: contacts.restaurant.url },
              { name: "SML Boat Rentals", note: "book online", url: contacts.rentals.bookUrl },
            ].map((n) => (
              <li key={n.name} className="flex items-baseline gap-3 border-b border-line pb-2">
                <span className="text-moss">▸</span>
                <a href={n.url} target="_blank" rel="noopener" className="underline-run font-bold">{n.name}</a>
                <span className="text-sm text-smoke">{n.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
