/**
 * Every fact on the site traces to something the marina controls: the old
 * mitchellspoint.com pages (captured 2026-09-15), the @MitchellsPointMarina
 * Facebook page (posts and photos pulled 2026-09-15), smlboatrentals.com and
 * mitchellssmlstriperguides.com. Nothing here is invented. Anything the owner
 * has not confirmed is marked in TASKS.md and, where it matters on the page,
 * with `confirmed: false` here.
 */

export const marina = {
  name: "Mitchell's Point Marina & RV Park",
  shortName: "Mitchell's Point",
  tagline: "Slips, RV sites, the gas dock and everything else on the point at Smith Mountain Lake.",
  // Canonical origin. Swap to mitchellspoint.com once DNS moves to Vercel:
  // metadataBase, the sitemap, robots and the JSON-LD all read from here.
  siteUrl: "https://mitchells-marina.vercel.app",
  legacyUrl: "http://www.mitchellspoint.com",
  address: "3553 Trading Post Rd, Huddleston, VA 24104",
  addressShort: "3553 Trading Post Rd, Huddleston, VA",
  streetAddress: "3553 Trading Post Rd",
  city: "Huddleston",
  region: "VA",
  postalCode: "24104",
  // One number for rentals, fuel, RV sites and slips (old site + Chamber).
  phoneDisplay: "(540) 484-3980",
  phoneHref: "tel:+15404843980",
  facebookHandle: "@MitchellsPointMarina",
  facebookUrl: "https://www.facebook.com/MitchellsPointMarina/",
  mapsUrl: "https://maps.google.com/?q=3553+Trading+Post+Rd,+Huddleston,+VA+24104",
  mapsEmbed: "https://www.google.com/maps?q=3553+Trading+Post+Rd,+Huddleston,+VA+24104&z=15&output=embed",
  // Destination for the slip / RV inquiry form. The form composes a mailto:
  // (no backend, no secrets). Currently Judd's address for the end-to-end
  // test. TODO(owner): swap for the marina's inbox before handoff. Empty
  // string disables the form behind its phone notice.
  inquiryEmail: "juddboniface25@gmail.com" as string,
  lakeMarker: "C3 on Craddock Creek",
  bbb: {
    rating: "A+",
    since: 2018,
    url: "https://www.bbb.org/us/va/huddleston/profile/boat-rentals/mitchells-point-marina-rv-park-0613-90007981",
  },
  award: "Voted Best of Smith Mountain Lake, 2022",
} as const;

/** The other businesses on the point, each with its own number or site. */
export const contacts = {
  restaurant: {
    name: "Mitchell's Restaurant & Pizzeria",
    phoneDisplay: "(540) 296-0664",
    phoneHref: "tel:+15402960664",
    url: "https://mitchells-website.vercel.app",
    facebook: "https://www.facebook.com/meetmeatmitchells/",
  },
  rentals: {
    name: "SML Boat Rentals",
    phoneDisplay: "(540) 484-3980",
    phoneHref: "tel:+15404843980",
    url: "https://smlboatrentals.com",
    bookUrl: "https://rentals.smlboatrentals.com",
  },
  boatSales: { name: "Chris Levey, boat sales", phoneDisplay: "(540) 875-9096", phoneHref: "tel:+15408759096" },
  charters: {
    name: "Captain Bert's Fishin' Charters",
    phoneDisplay: "(540) 521-8235",
    phoneHref: "tel:+15405218235",
    url: "https://mitchellssmlstriperguides.com/",
  },
  lodging: {
    name: "Lakeside vacation rental on the point",
    url: "https://rentals.lakeretreat.com/rns/vacation-rental/huddleston/va/super_fun",
  },
} as const;

/**
 * Hours. The old site publishes none and the directories disagree (Apple
 * Maps 9-7 daily, a Google snippet 9-5, the Chamber "Memorial Day to Labor
 * Day 9-7 seven days, winter weekends and limited weekdays"). The seasonal
 * version is the most specific and the most plausible for a gas dock, so it
 * is what the page shows, worded as a season rather than a table, until the
 * owner confirms. No "open now" badge is rendered while `confirmed` is false.
 */
export const hours = {
  confirmed: false,
  seasons: [
    { label: "Memorial Day to Labor Day", text: "9 AM to 7 PM, seven days a week" },
    { label: "Spring and fall", text: "Weekends, with limited weekday hours" },
    { label: "Winter", text: "Limited hours. Call ahead for fuel." },
  ],
  note: "The gas dock and store run on the marina's hours. The restaurant, the ice cream window and the rental desk keep their own.",
  /** Schema.org mirror of the summer schedule, with the season as validity. */
  spec: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "19:00",
    validFrom: "2027-05-31",
    validThrough: "2027-09-06",
  },
};

export type Dock = {
  id: string;
  name: string;
  tag: string;
  fits: string;
  img: string;
  alt: string;
  features: string[];
};

/** Docks as the old site lists them, plus the slip rules from the page's own posts. */
export const docks: Dock[] = [
  {
    id: "a",
    name: "A Dock",
    tag: "Houseboats and large boats",
    fits: "Up to 50 ft",
    img: "/img/a-dock.jpg",
    alt: "A Dock: the covered floating slips for large boats and houseboats, roofed in green metal",
    features: [
      "Covered floating slips, the first of their kind on Smith Mountain Lake: no line tending as the lake rises and falls, nothing pinched under the roof",
      "Lighted pedestals with up to 100 amps of power",
      "Water connections and satellite TV",
    ],
  },
  {
    id: "b",
    name: "B Dock",
    tag: "Runabouts and pontoons",
    fits: "Up to 29 ft and 10,000 lb",
    img: "/img/b-dock.jpg",
    alt: "B Dock: covered slips with boats tied up under the roof",
    features: ["Covered slips", "Potable water", "Up to 30 amp service available"],
  },
  {
    id: "d",
    name: "D Dock",
    tag: "Open lift slips",
    fits: "Lift slips, uncovered",
    img: "/img/d-dock.jpg",
    alt: "D Dock: a row of open lift slips on the water",
    features: ["Open lift slips: the boat comes out of the water between trips"],
  },
  {
    id: "e",
    name: "E Dock",
    tag: "Covered lift slips",
    fits: "Up to 24 ft and 5,000 lb",
    img: "/img/e-dock.jpg",
    alt: "E Dock: covered lift slips with a tan roof",
    features: ["Covered lift slips", "Lake water at the slip", "20 amp power"],
  },
  {
    id: "pwc",
    name: "PWC drive-ups",
    tag: "Jet skis and small craft",
    fits: "Personal watercraft",
    img: "/img/pwc-driveup.jpg",
    alt: "A dock lined with jet skis on drive-up floats",
    features: ["Drive-up floats along the dock, a few steps from the gas dock"],
  },
];

/** Shared by every slip and site: from the old site's A Dock page and the Chamber listing. */
export const groundsAmenities = [
  "Septic pump-out",
  "Beach",
  "Shower house",
  "Playground",
  "Restaurant and tiki bar",
  "Gas dock and store",
  "Lawn with a BucketGolf course",
  "Parking by the slips",
];

/** RV sites: old-site prices and the lease terms the page spelled out in its Sept 2026 listing. */
export const rvSites = {
  kinds: ["Waterfront sites", "Non-waterfront sites"],
  included: [
    "Free full hookup for sewer",
    "Free 30 amp electric hookup, separately metered",
    "Water, sewer and trash in the lease",
  ],
  separate: ["Electric use, by the meter", "Xfinity fiber internet"],
  rules: [
    "Annual lease only. No nightly or weekly camping.",
    "Not a primary residence, and no short-term rentals of your site.",
    "Tenants submit a background and credit check.",
    "A boat slip is not included with a site. Ask to be added to the slip waitlist.",
  ],
  services: [
    { name: "Camper positioning and leveling", price: "$50 per hour" },
    { name: "Deck building and other work", price: "Call for a quote" },
  ],
};

/** Gas dock and store, from the old fuel page, the Chamber listing and the page's posts. */
export const fuelAndStore = {
  fuel: ["Gas at the dock", "Oil and marine supplies", "Pump-outs", "Fully equipped maintenance facility"],
  store: ["Cold beer and beverages", "Snacks and sundries", "Prepackaged Hershey's ice cream", "Night crawlers and bait", "Ice"],
};

export type PointItem = {
  id: string;
  name: string;
  eyebrow: string;
  body: string;
  img: string;
  alt: string;
  link: { label: string; url: string };
  phone?: { phoneDisplay: string; phoneHref: string };
};

/** Everything else that shares the point. Each line traces to a post or a linked site. */
export const onThePoint: PointItem[] = [
  {
    id: "restaurant",
    name: "Mitchell's Restaurant & Pizzeria",
    eyebrow: "At the tip of the point",
    body: "Hand-tossed pizza, wings, smoked brisket and crab cakes under the pavilion, with live music four nights a week from May to mid-September. Tie up at the dock and walk up.",
    img: "/img/festival-lawn.jpg",
    alt: "A crowd in lawn chairs on the lawn at the point during a festival, tents up and the lake behind",
    link: { label: "The restaurant site", url: contacts.restaurant.url },
    phone: contacts.restaurant,
  },
  {
    id: "rentals",
    name: "SML Boat Rentals",
    eyebrow: "Rent for the day",
    body: "Bennington and Sweetwater 25 ft tritoons with 150, 200 and 250 hp Yamahas, Hurricane 22 and 25 ft deck boats, a 20 ft G3 fishing boat, plus kayaks, paddleboards and tow toys. Book online; the desk is by the gas dock.",
    img: "/img/tritoon.jpg",
    alt: "A rental tritoon idling on the lake on a clear day",
    link: { label: "Book a boat", url: contacts.rentals.bookUrl },
    phone: contacts.rentals,
  },
  {
    id: "charters",
    name: "Captain Bert's striper charters",
    eyebrow: "Fishing guides",
    body: "Smith Mountain Lake is Virginia's top striped bass fishery, with a lake record of 49.4 lb. Captain Daniel Berthiaume, Coast Guard licensed and insured, fishes live bait on down rods, planer boards and umbrella rigs from a 25 ft Sportsman 247. Parties up to six, all gear provided.",
    img: "/img/striper.jpg",
    alt: "An angler holding up a striped bass on the boat",
    link: { label: "Book a charter", url: contacts.charters.url },
    phone: contacts.charters,
  },
  {
    id: "golf",
    name: "BucketGolf on the lawn",
    eyebrow: "Mitchell's Point Country Club",
    body: "A three-hole short course and a driving range on the lawn, open daily. The nine-hole par 29 course runs a Sunday two-person captain's-choice tournament at 2 PM and is open by appointment. Break the course record of 17 and the ice cream is on us.",
    img: "/img/golf-lawn.jpg",
    alt: "A golfer mid-swing on the lawn at the point, the lake behind",
    link: { label: "Tournaments are posted on Facebook", url: marina.facebookUrl },
  },
  {
    id: "scoop",
    name: "Captain Scoop Hand Dipped Ice Cream",
    eyebrow: "Summer only",
    body: "Hand-dipped scoops by the gas dock through Labor Day, then a shorter schedule until the season closes. When the window is shut, the store has prepackaged Hershey's.",
    img: "/img/gas-dock.jpg",
    alt: "The gas dock and store with the lighthouse on the roof, boats tied up alongside",
    link: { label: "Hours on Facebook", url: marina.facebookUrl },
  },
  {
    id: "lawn",
    name: "Yoga, cornhole and festivals",
    eyebrow: "On the lawn",
    body: "Morning yoga on the lawn in season, a fall cornhole tournament, and the Sunshine Daydream Festival every July: bands from 2 PM, vendors on a mini Shakedown Street, lawn tickets to benefit Semper Fi & America's Fund. Come by land or anchor in the cove at C3.",
    img: "/img/yoga-lawn.jpg",
    alt: "A yoga class on mats on the lawn at the point, the lake behind them",
    link: { label: "What's coming up", url: marina.facebookUrl },
  },
];

/** The fall fleet sale, from the page's August posts (2025 and 2026). */
export const fleetSale = {
  when: "Every August",
  body: "Each year the rental fleet is sold to make room for new boats. Recent lists ran 2024 to 2026 Bennington and Sweetwater tritoons and 2022 Hurricane deck boats with 200 and 300 hp Yamahas. Every boat comes with a color fish finder, Bluetooth stereo, full storage cover, manuals and safety gear, and has its motor serviced before pickup between September and mid-October. No trailers, but the marina can help source one.",
  contact: contacts.boatSales,
};

/** Numbers for the home page. Each traces to a line above. */
export const stats = [
  { n: "50 ft", label: "houseboats on A Dock" },
  { n: "100 A", label: "at the pedestal" },
  { n: "A+", label: "with the BBB since 2018" },
];
