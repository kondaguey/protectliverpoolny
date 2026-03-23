import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Facts — What You Need to Know",
  description:
    "Explore the evidence: health risks from cell tower radiation, aviation safety hazards, wildlife impacts, surveillance concerns, and the state land loophole being exploited in Liverpool, NY.",
  alternates: { canonical: "/the-facts" },
  openGraph: {
    title: "The Facts | Protect Liverpool NY",
    description:
      "Health risks. Aviation hazards. Wildlife impacts. The evidence they don't want you to see.",
    url: "https://protectliverpoolny.org/the-facts",
  },
};

export default function TheFactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
