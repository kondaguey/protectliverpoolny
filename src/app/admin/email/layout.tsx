import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — Email",
  robots: { index: false, follow: false },
};

export default function AdminEmailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-dark-950 text-dark-50 font-sans antialiased">
      {children}
    </div>
  );
}
