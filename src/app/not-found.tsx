import type { Metadata } from "next";
import Link from "next/link";
import { marina } from "@/data/marina";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-24 text-center grain">
      <p className="eyebrow">404</p>
      <h1 className="display text-6xl sm:text-7xl mt-2">That one slipped its lines.</h1>
      <div className="rule2 mx-auto max-w-[8rem] mt-4 text-moss" />
      <p className="serif text-lg text-ink-soft mt-6 max-w-md mx-auto">
        We couldn&rsquo;t find that page. The old site&rsquo;s addresses moved when this one launched. Try the slips, or
        give us a call.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        <Link href="/slips" className="btn solid">Boat slips</Link>
        <Link href="/" className="btn">Back to the point</Link>
      </div>
      <p className="text-sm text-smoke mt-8">
        {marina.addressShort} ·{" "}
        <a href={marina.phoneHref} className="underline-run text-ink">{marina.phoneDisplay}</a>
      </p>
    </div>
  );
}
