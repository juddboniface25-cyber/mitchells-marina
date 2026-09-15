import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The workspace root has its own lockfile; pin the root so Turbopack does not guess.
  turbopack: { root: __dirname },
  images: {
    // Next 16 restricts optimizer qualities to this allowlist; 85 is used
    // for the full-bleed hero images, 75 for everything else.
    qualities: [75, 85],
  },
};

export default nextConfig;
