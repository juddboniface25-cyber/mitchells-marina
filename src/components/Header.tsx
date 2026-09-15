import Link from "next/link";
import Image from "next/image";
import { marina, contacts } from "@/data/marina";

const nav = [
  { href: "/", label: "Home", mobile: false },
  { href: "/slips", label: "Slips", mobile: true },
  { href: "/rv-sites", label: "RV Sites", short: "RV", mobile: true },
  { href: "/fuel", label: "Fuel", mobile: false },
  { href: "/the-point", label: "The Point", mobile: false },
  { href: "/contact", label: "Contact", mobile: true },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-ink">
      {/* Ticker strip: the facts a boater wants before anything else. */}
      <div className="bg-ink text-paper text-[0.7rem] font-bold tracking-[0.18em] uppercase">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-8 flex items-center justify-between gap-4">
          <span className="truncate">
            {marina.streetAddress}, {marina.city} · marker {marina.lakeMarker}
          </span>
          <span className="hidden sm:block truncate">Slips · RV sites · gas dock · rentals · charters</span>
          <a href={marina.phoneHref} className="hover:text-leaf whitespace-nowrap">
            {marina.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-3 sm:gap-6 h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group" aria-label="Mitchell's Point Marina home">
            <Image
              src="/brand/lighthouse.png"
              alt=""
              width={44}
              height={44}
              priority
              className="h-9 w-9 sm:h-11 sm:w-11 rounded-full transition-transform group-hover:-rotate-6"
            />
            <span className="display text-lg sm:text-3xl tracking-wide whitespace-nowrap">Mitchell&rsquo;s Point</span>
            <span className="hidden lg:block eyebrow border-l border-line pl-3">Marina &amp; RV Park · Smith Mountain Lake</span>
          </Link>

          <nav aria-label="Primary" className="flex items-center gap-2.5 sm:gap-6">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`underline-run text-[0.75rem] sm:text-sm tracking-[0.1em] sm:tracking-[0.12em] uppercase font-bold whitespace-nowrap ${n.mobile ? "" : "hidden md:inline"}`}
              >
                {"short" in n ? (<><span className="sm:hidden">{n.short}</span><span className="hidden sm:inline">{n.label}</span></>) : n.label}
              </Link>
            ))}
            <a
              href={contacts.rentals.bookUrl}
              target="_blank"
              rel="noopener"
              className="btn solid hidden sm:inline-flex !py-2.5 !px-4"
            >
              Rent a boat
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
