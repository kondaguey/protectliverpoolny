import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Protect Liverpool NY — Stop the 184-Foot Cell Tower",
  description:
    "A grassroots campaign fighting the unauthorized 184-foot cell tower being built in Liverpool, NY without community notice. Sign the petition and take action.",
  keywords: [
    "Liverpool NY",
    "cell tower",
    "protect Liverpool",
    "Phoenix Tower International",
    "NYSTA",
    "petition",
    "Town of Salina",
    "Onondaga County",
  ],
  openGraph: {
    title: "Protect Liverpool NY — Stop the 184-Foot Cell Tower",
    description:
      "They're building an 18-story tower in our backyards. And they're not telling anyone. Sign the petition now.",
    type: "website",
    url: "https://protectliverpoolny.org",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-dark-950 text-dark-50 font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
