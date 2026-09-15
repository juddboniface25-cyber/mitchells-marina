"use client";

import { useState } from "react";
import { marina } from "@/data/marina";

/**
 * Slip waitlist / RV site inquiry form.
 *
 * There is no backend: the site is fully static, so submitting composes a
 * `mailto:` and hands off to the visitor's mail app. `marina.inquiryEmail`
 * is the entire configuration. While it is empty the fields render disabled
 * behind a notice, because a form that silently drops a lease inquiry is
 * worse than no form at all.
 */

const topics = [
  "Boat slip waitlist",
  "RV site lease",
  "Buying a rental boat from the fleet",
  "Something else",
];

const field =
  "w-full bg-paper border border-ink px-3 py-2.5 text-sm placeholder:text-smoke/70 focus:border-moss disabled:bg-cream disabled:text-smoke disabled:cursor-not-allowed";
const label = "grid gap-1 text-xs font-bold tracking-[0.12em] uppercase";

export default function InquiryForm({ defaultTopic = topics[0] }: { defaultTopic?: string }) {
  const configured = marina.inquiryEmail !== "";
  const [topic, setTopic] = useState(defaultTopic);
  const [name, setName] = useState("");
  const [boat, setBoat] = useState("");
  const [contact, setContact] = useState("");
  const [msg, setMsg] = useState("");
  const [handedOff, setHandedOff] = useState(false);

  const body = [
    `Name: ${name}`,
    boat ? `Boat or rig: ${boat}` : null,
    `Phone or email: ${contact}`,
    `About: ${topic}`,
    "",
    msg,
    "",
    `Sent from ${marina.siteUrl}/contact`,
  ]
    .filter((l) => l !== null)
    .join("\n");
  const href = `mailto:${marina.inquiryEmail}?subject=${encodeURIComponent(`${topic} — ${name || "website"}`)}&body=${encodeURIComponent(body)}`;

  return (
    <div>
      {!configured && (
        <p role="status" className="mb-5 border border-coral bg-cream px-4 py-3 text-sm text-coral-deep">
          <strong className="font-bold">This form isn&rsquo;t live yet.</strong> Until the marina&rsquo;s inbox is set up, call{" "}
          <a href={marina.phoneHref} className="underline">{marina.phoneDisplay}</a> or message the page on{" "}
          <a href={marina.facebookUrl} target="_blank" rel="noopener" className="underline">Facebook</a>.
        </p>
      )}
      <form
        className="border border-ink bg-cream p-6 grid gap-4 sm:grid-cols-2"
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = href;
          setHandedOff(true);
        }}
      >
        <label className={label}>
          Your name
          <input className={field} value={name} onChange={(e) => setName(e.target.value)} required disabled={!configured} autoComplete="name" />
        </label>
        <label className={label}>
          Boat or rig <span className="normal-case tracking-normal text-smoke">(length, type)</span>
          <input className={field} value={boat} onChange={(e) => setBoat(e.target.value)} disabled={!configured} placeholder="24 ft pontoon, 38 ft fifth wheel" />
        </label>
        <label className={label}>
          Phone or email
          <input className={field} value={contact} onChange={(e) => setContact(e.target.value)} required disabled={!configured} autoComplete="tel" />
        </label>
        <label className={label}>
          This is about
          <select className={field} value={topic} onChange={(e) => setTopic(e.target.value)} disabled={!configured}>
            {topics.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
        <label className={`${label} sm:col-span-2`}>
          Anything else
          <textarea className={`${field} min-h-32`} value={msg} onChange={(e) => setMsg(e.target.value)} required disabled={!configured} placeholder="Covered or open, when you'd like to start, whether you're on the lake already." />
        </label>
        <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
          <button type="submit" className="btn solid" disabled={!configured}>Send as email</button>
          <span className="text-xs text-smoke">
            Or call <a href={marina.phoneHref} className="underline-run text-ink">{marina.phoneDisplay}</a> and skip the typing.
          </span>
          {handedOff && (
            <p role="status" className="text-sm text-moss font-bold w-full">
              Your email app should have opened. Hit send and we&rsquo;ll be in touch. Nothing happened? Call {marina.phoneDisplay}.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
