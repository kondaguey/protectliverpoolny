import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviation & Safety — Runway 10 Hazard",
  description:
    "A 184-foot unlit tower sits 0.25 miles from the Runway 10 approach at Syracuse Hancock Airport. Bird strike risks, 5G altimeter interference, and FAA obstruction analysis.",
  alternates: { canonical: "/the-facts/aviation" },
  openGraph: {
    title: "Aviation & Safety | Protect Liverpool NY",
    description:
      "Unlit. Unmarked. 0.25 miles from the Runway 10 approach. Why this tower is an aviation safety hazard.",
    url: "https://protectliverpoolny.org/the-facts/aviation",
  },
};

export default function AviationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
