import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wildlife & Environment Impact",
  description:
    "Bald eagles, migratory birds, pollinators, and ecosystem-wide harm. Peer-reviewed research shows cell tower RF radiation disrupts wildlife near Liverpool, NY.",
  alternates: { canonical: "/the-facts/wildlife" },
  openGraph: {
    title: "Wildlife & Environment | Protect Liverpool NY",
    description:
      "Eagles, migratory birds, and bees are all at risk. The peer-reviewed science on RF radiation and wildlife.",
    url: "https://protectliverpoolny.org/the-facts/wildlife",
  },
};

export default function WildlifeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
