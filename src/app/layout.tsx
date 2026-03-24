import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://protectliverpoolny.org";
const SITE_NAME = "Protect Liverpool NY";
const SITE_DESCRIPTION =
  "A grassroots campaign fighting the unauthorized 184-foot cell tower being built in Liverpool, NY without community notice. Sign the petition and take action.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Protect Liverpool NY — Stop the 184-Foot Cell Tower",
    template: "%s | Protect Liverpool NY",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Liverpool NY",
    "cell tower",
    "protect Liverpool",
    "Phoenix Tower International",
    "NYSTA",
    "petition",
    "Town of Salina",
    "Onondaga County",
    "cell tower health risks",
    "cell tower safety",
    "5G tower",
    "aviation safety",
    "community advocacy",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Protect Liverpool NY — Stop the 184-Foot Cell Tower",
    description:
      "They're building a 17-story tower in our backyards without telling us. Sign the petition now.",
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Protect Liverpool NY — Stop the 184-Foot Cell Tower",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protect Liverpool NY — Stop the 184-Foot Cell Tower",
    description:
      "They're building a 17-story tower in our backyards without telling us. Sign the petition now.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

/* Site-wide JSON-LD structured data */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "takeaction@protectliverpoolny.org",
        contactType: "customer support",
      },
      areaServed: {
        "@type": "Place",
        name: "Liverpool, NY",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://imagedelivery.net" />
        <link rel="dns-prefetch" href="https://imagedelivery.net" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-dark-950 text-dark-50 font-sans antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-danger-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-bold"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1" role="main">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
