import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surveillance & Privacy Concerns",
  description:
    "Cell towers are surveillance infrastructure. License plate readers, cell-site simulators, and the erosion of privacy in Liverpool, NY — and what you can do about it.",
  alternates: { canonical: "/the-facts/surveillance" },
  openGraph: {
    title: "Surveillance & Privacy | Protect Liverpool NY",
    description:
      "Cell towers aren't just for calls. They're surveillance infrastructure. Here's what they're not telling you.",
    url: "https://protectliverpoolny.org/the-facts/surveillance",
  },
};

export default function SurveillanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
