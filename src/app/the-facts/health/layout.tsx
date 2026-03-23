import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health & Science — RF Radiation Research",
  description:
    "Peer-reviewed studies, federal court rulings, and SEC filings from the carriers themselves. The evidence is overwhelming — cell tower radiation poses real health risks.",
  alternates: { canonical: "/the-facts/health" },
  openGraph: {
    title: "Health & Science | Protect Liverpool NY",
    description:
      "NTP studies, Ramazzini Institute findings, and the EHT v. FCC federal court ruling. The science they don't want you to read.",
    url: "https://protectliverpoolny.org/the-facts/health",
  },
};

export default function HealthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
