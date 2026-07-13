import type { Metadata } from "next";

const OG_TITLE =
  "The Stupidity — Kids on 40 MPH Machines Own Our Streets. Sign the Petition.";
const OG_DESCRIPTION =
  "Unlicensed minors on illegal e-bikes and e-motos tear through Liverpool while parents shrug and police say there's nothin' they can do. Read the tally, then sign — it takes 30 seconds.";

export const metadata: Metadata = {
  title: "The Stupidity — Unlicensed Kids, 40 MPH Machines, Zero Consequences",
  description: OG_DESCRIPTION,
  alternates: { canonical: "/stupidity" },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: "https://protectliverpoolny.org/stupidity",
    siteName: "Protect Liverpool NY",
    type: "website",
    images: [
      {
        url: "/stupidity/stupidity-og.jpg",
        width: 1200,
        height: 630,
        alt: "Cartoon of a pack of riders on illegal e-bikes taking over a suburban street while neighbors scatter and police shrug",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: ["/stupidity/stupidity-og.jpg"],
  },
};

export default function StupidityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
