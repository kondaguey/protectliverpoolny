import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community & Land Value Impact",
  description:
    "How a 184-foot cell tower built on state land is bypassing local zoning, tanking property values, and setting a dangerous precedent for communities across New York.",
  alternates: { canonical: "/the-facts/community" },
  openGraph: {
    title: "Community & Land Value Impact | Protect Liverpool NY",
    description:
      "Property values, the state land loophole, and what other towns have done to fight back.",
    url: "https://protectliverpoolny.org/the-facts/community",
  },
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
