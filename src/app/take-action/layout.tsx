import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Take Action — Sign the Petition",
  description:
    "Sign the petition, call your representatives, attend town hall meetings, and contact local media. Here's your step-by-step action plan to fight the Liverpool NY cell tower.",
  alternates: { canonical: "/take-action" },
  openGraph: {
    title: "Take Action — Sign the Petition | Protect Liverpool NY",
    description:
      "Sign the petition and contact your elected officials. Your voice is the only weapon they can't ignore.",
    url: "https://protectliverpoolny.org/take-action",
  },
};

export default function TakeActionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
