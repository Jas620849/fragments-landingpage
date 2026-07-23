"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { hasOptionalCookieConsent } from "@/lib/cookie-consent";

/**
 * Loads the AdSense script only after optional cookie consent.
 * Set NEXT_PUBLIC_ADSENSE_CLIENT (e.g. ca-pub-xxxxxxxx).
 * Units render via AdSenseUnit on indexable blog content only.
 */
export default function AdSenseLoader() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(hasOptionalCookieConsent());
    sync();
    window.addEventListener("fragments-cookie-consent", sync);
    return () => window.removeEventListener("fragments-cookie-consent", sync);
  }, []);

  if (!client || !allowed) return null;

  return (
    <Script
      id="adsense-loader"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(client)}`}
      crossOrigin="anonymous"
      strategy="lazyOnload"
    />
  );
}
