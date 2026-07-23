"use client";

import { useEffect, useRef, useState } from "react";
import { hasOptionalCookieConsent } from "@/lib/cookie-consent";

type AdSenseUnitProps = {
  /** AdSense ad unit slot id */
  slot: string;
  className?: string;
  format?: string;
  fullWidthResponsive?: boolean;
};

/**
 * In-article / content ad unit. Renders only when:
 * - NEXT_PUBLIC_ADSENSE_CLIENT is set
 * - visitor accepted optional cookies
 * Place only on indexable publisher pages (blog articles), never on demo platform.
 */
export default function AdSenseUnit({
  slot,
  className = "",
  format = "auto",
  fullWidthResponsive = true,
}: AdSenseUnitProps) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim();
  const [allowed, setAllowed] = useState(false);
  const pushed = useRef(false);

  useEffect(() => {
    const sync = () => setAllowed(hasOptionalCookieConsent());
    sync();
    window.addEventListener("fragments-cookie-consent", sync);
    return () => window.removeEventListener("fragments-cookie-consent", sync);
  }, []);

  useEffect(() => {
    if (!client || !allowed || !slot || pushed.current) return;
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      pushed.current = true;
    } catch {
      /* AdSense may throw if script not ready yet */
    }
  }, [allowed, client, slot]);

  if (!client || !allowed || !slot) return null;

  return (
    <div className={`my-8 overflow-hidden ${className}`} aria-hidden>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
}
