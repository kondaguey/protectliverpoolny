import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
      {
        protocol: "https",
        hostname: "media.protectliverpoolny.org",
      },
    ],
  },
  async redirects() {
    return [
      // Bare /foil and /foil/ → the FOIL evidence catalog page.
      { source: "/foil", destination: "/the-facts/foil-evidence", permanent: false },
      { source: "/foil/", destination: "/the-facts/foil-evidence", permanent: false },
      // /foil/<filename> → the same file on R2 (media.protectliverpoolny.org).
      // The PDFs were migrated out of public/foil/ to keep the repo and
      // Vercel deploys lean. This redirect catches any stale links that
      // still point at the old static path.
      {
        source: "/foil/:path+",
        destination: "https://media.protectliverpoolny.org/foil/:path+",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
