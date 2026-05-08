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
      // /foil and /foil/ go to the FOIL evidence catalog page.
      // Direct file paths like /foil/some-file.pdf are still served
      // as static files from /public/foil/ — they do not match these.
      { source: "/foil", destination: "/the-facts/foil-evidence", permanent: false },
      { source: "/foil/", destination: "/the-facts/foil-evidence", permanent: false },
    ];
  },
};

export default nextConfig;
