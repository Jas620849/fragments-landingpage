import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import CookieBanner from "./components/CookieBanner";
import DeferredChatWidget from "./components/DeferredChatWidget";
import JsonLd from "./components/JsonLd";
import WebVitals from "./components/WebVitals";
import GoogleAnalytics from "./components/GoogleAnalytics";
import GoogleTagManager from "./components/GoogleTagManager";
import MicrosoftClarity from "./components/MicrosoftClarity";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_TITLE,
  SITE_NAME,
  TARGET_LOCALES,
} from "@/lib/seo-constants";
import { getMetadataBase, hasPublicSiteUrl } from "@/lib/site";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  variable: "--font-main",
  weight: ["400", "500", "600", "700", "800"],
  fallback: ["system-ui", "sans-serif"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#eff6ff",
};

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: hasPublicSiteUrl()
    ? {
        canonical: "/",
        languages: Object.fromEntries(
          TARGET_LOCALES.map((locale) => [locale.code, "/"])
        ),
      }
    : undefined,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    ...(hasPublicSiteUrl()
      ? {
          url: "/",
          images: [
            {
              url: "/logo-no-bg.png",
              width: 512,
              height: 512,
              alt: SITE_NAME,
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    ...(hasPublicSiteUrl()
      ? {
          images: ["/logo-no-bg.png"],
        }
      : {}),
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo-no-bg.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/logo-no-bg.png",
  },
  manifest: "/manifest.json",
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
      </head>
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <WebVitals />
        <JsonLd />
        {children}
        <ToastContainer />
        <CookieBanner />
        <GoogleTagManager />
        <MicrosoftClarity />
        <GoogleAnalytics />
        <DeferredChatWidget />
      </body>
    </html>
  );
}
