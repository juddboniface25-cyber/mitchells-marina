import Link from "next/link";
import Image from "next/image";
import { marina, contacts, hours } from "@/data/marina";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-[auto_1fr_1fr_1fr] items-start">
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/brand/lighthouse.png"
            alt="Mitchell's Point Marina & RV Park"
            width={120}
            height={120}
            className="bg-paper rounded-full p-1"
          />
          <p className="serif italic text-paper/80 max-w-[18rem]">{marina.tagline}</p>
          <p className="text-[0.7rem] tracking-[0.14em] uppercase text-paper/60">
            {marina.award} · BBB {marina.bbb.rating}
          </p>
        </div>

        <div>
          <h2 className="display text-2xl mb-3">Find us</h2>
          <address className="not-italic text-sm leading-6 text-paper/85">
            {marina.streetAddress}
            <br />
            {marina.city}, {marina.region} {marina.postalCode}
            <br />
            By water: marker {marina.lakeMarker}
          </address>
          <ul className="mt-4 text-sm space-y-1 text-paper/85">
            <li>
              Marina, slips, RV, fuel: <a href={marina.phoneHref} className="underline-run">{marina.phoneDisplay}</a>
            </li>
            <li>
              Restaurant: <a href={contacts.restaurant.phoneHref} className="underline-run">{contacts.restaurant.phoneDisplay}</a>
            </li>
            <li>
              Boat sales: <a href={contacts.boatSales.phoneHref} className="underline-run">{contacts.boatSales.phoneDisplay}</a>
            </li>
            <li>
              Charters: <a href={contacts.charters.phoneHref} className="underline-run">{contacts.charters.phoneDisplay}</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="display text-2xl mb-3">Hours</h2>
          <ul className="text-sm text-paper/85 space-y-2">
            {hours.seasons.map((s) => (
              <li key={s.label} className="border-b border-paper/10 pb-2">
                <span className="block text-[0.7rem] font-bold uppercase tracking-[0.12em] text-leaf">{s.label}</span>
                {s.text}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-paper/60">{hours.note}</p>
        </div>

        <div>
          <h2 className="display text-2xl mb-3">Pages</h2>
          <ul className="text-sm space-y-2">
            <li><Link href="/slips" className="underline-run">Boat slips</Link></li>
            <li><Link href="/rv-sites" className="underline-run">RV sites</Link></li>
            <li><Link href="/fuel" className="underline-run">Gas dock &amp; store</Link></li>
            <li><Link href="/the-point" className="underline-run">Everything on the point</Link></li>
            <li><Link href="/contact" className="underline-run">Contact, hours &amp; waitlist</Link></li>
          </ul>
          <h2 className="display text-2xl mt-6 mb-3">Same point</h2>
          <ul className="text-sm space-y-2">
            <li><a href={contacts.restaurant.url} target="_blank" rel="noopener" className="underline-run">Mitchell&rsquo;s Restaurant &amp; Pizzeria</a></li>
            <li><a href={contacts.rentals.url} target="_blank" rel="noopener" className="underline-run">SML Boat Rentals</a></li>
            <li><a href={contacts.charters.url} target="_blank" rel="noopener" className="underline-run">Captain Bert&rsquo;s charters</a></li>
            <li><a href={marina.facebookUrl} target="_blank" rel="noopener" className="underline-run">{marina.facebookHandle} on Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row gap-2 justify-between text-[0.7rem] tracking-[0.1em] uppercase text-paper/50">
          <span>© {new Date().getFullYear()} {marina.name}</span>
          <span className="whitespace-nowrap">Site by Designs by Judd</span>
        </div>
      </div>
    </footer>
  );
}
