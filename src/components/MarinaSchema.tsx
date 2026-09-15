import { marina, contacts, hours } from "@/data/marina";

/**
 * schema.org markup for the marina. There is no Marina type, so the marina
 * is a LocalBusiness and the campground is a second RVPark node at the same
 * address, both hanging off one `@id`. Every value comes from `@/data/marina`,
 * so the page, the footer and the structured data can never disagree.
 *
 * Deliberately omitted: `geo`. lake.com lists 37.0632, -79.5603, but the
 * coordinates have not been checked against the aerial, and wrong ones would
 * misroute customers on a lake with limited road access. `aggregateRating`
 * is omitted on purpose: Google's review-snippet policy bars ratings copied
 * from third-party sites.
 */
export function MarinaSchema() {
  const address = {
    "@type": "PostalAddress",
    streetAddress: marina.streetAddress,
    addressLocality: marina.city,
    addressRegion: marina.region,
    postalCode: marina.postalCode,
    addressCountry: "US",
  };

  const openingHours = hours.confirmed
    ? [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: hours.spec.days,
          opens: hours.spec.opens,
          closes: hours.spec.closes,
          validFrom: hours.spec.validFrom,
          validThrough: hours.spec.validThrough,
        },
      ]
    : undefined;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${marina.siteUrl}/#marina`,
        name: marina.name,
        url: marina.siteUrl,
        telephone: marina.phoneDisplay,
        image: [`${marina.siteUrl}/opengraph-image.jpg`],
        logo: `${marina.siteUrl}/brand/lighthouse.png`,
        description:
          "Full-service marina on Smith Mountain Lake: covered and open boat slips up to 50 ft, houseboat slips, PWC drive-ups, annual-lease RV sites, gas dock, pump-out, ship store, boat rentals and striper charters.",
        address,
        hasMap: marina.mapsUrl,
        sameAs: [marina.facebookUrl, marina.bbb.url, marina.legacyUrl],
        ...(openingHours ? { openingHoursSpecification: openingHours } : {}),
        amenityFeature: [
          "Covered boat slips",
          "Open boat slips",
          "Houseboat slips",
          "Lift slips",
          "PWC drive-ups",
          "Gas dock",
          "Pump-out station",
          "Ship store",
          "Shower house",
          "Beach",
          "Playground",
        ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
        department: [
          { "@id": `${marina.siteUrl}/#rvpark` },
          { "@type": "Restaurant", name: contacts.restaurant.name, url: contacts.restaurant.url, telephone: contacts.restaurant.phoneDisplay, address },
          { "@type": "LocalBusiness", name: contacts.rentals.name, url: contacts.rentals.url, telephone: contacts.rentals.phoneDisplay, address },
        ],
      },
      {
        "@type": "RVPark",
        "@id": `${marina.siteUrl}/#rvpark`,
        name: `${marina.name} RV sites`,
        url: `${marina.siteUrl}/rv-sites`,
        telephone: marina.phoneDisplay,
        address,
        parentOrganization: { "@id": `${marina.siteUrl}/#marina` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Values are all first-party literals from our own data module.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
