import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Stupidity — Unlicensed Kids, 40 MPH Machines, Zero Consequences",
  description:
    "E-motorcycles and e-bikes ridden illegally by minors are tearing through Liverpool's streets, parks, and sidewalks — while parents shrug and police say they can't act. Read the tally, then sign the demand for real enforcement.",
  alternates: { canonical: "/stupidity" },
  openGraph: {
    title: "The Stupidity | Protect Liverpool NY",
    description:
      "Unlicensed kids on 25–40 mph machines, in traffic, through parks, past your children. The parents allow it. The police say they can't stop it. We can.",
    url: "https://protectliverpoolny.org/stupidity",
  },
};

export default function StupidityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
