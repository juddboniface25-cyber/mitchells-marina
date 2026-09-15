import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The workspace root has its own lockfile; pin the root so Turbopack does not guess.
  turbopack: { root: __dirname },
  // The old mitchellspoint.com URLs, so nothing indexed since 2013 dead-ends
  // once DNS moves. Restaurant page goes to the restaurant's own site.
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/boat_slips.html", destination: "/slips", permanent: true },
      { source: "/rv_sites.html", destination: "/rv-sites", permanent: true },
      { source: "/fuel_services.html", destination: "/fuel", permanent: true },
      { source: "/contact_mpm.html", destination: "/contact", permanent: true },
      { source: "/faq.html", destination: "/the-point", permanent: true },
      { source: "/mitchells_restaurant.html", destination: "https://mitchells-website.vercel.app", permanent: true },
    ];
  },
  images: {
    // Next 16 restricts optimizer qualities to this allowlist; 85 is used
    // for the full-bleed hero images, 75 for everything else.
    qualities: [75, 85],
  },
};

export default nextConfig;
