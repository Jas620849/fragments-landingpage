"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  readCookieConsent,
  writeCookieConsent,
  type CookieConsentChoice,
} from "@/lib/cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readCookieConsent() === null);
  }, []);

  useEffect(() => {
    if (!visible) {
      document.body.style.paddingBottom = "";
      return;
    }
    document.body.style.paddingBottom =
      "max(8.5rem, calc(env(safe-area-inset-bottom, 0px) + 6rem))";
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, [visible]);

  const save = (choice: CookieConsentChoice) => {
    writeCookieConsent(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 pt-2 sm:px-6 sm:pb-6"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-2xl shadow-slate-900/15 ring-1 ring-slate-100 backdrop-blur-md sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="min-w-0 flex-1">
            <h2
              id="cookie-banner-title"
              className="text-sm font-extrabold text-slate-900 sm:text-base"
            >
              Cookies & privacy
            </h2>
            <p
              id="cookie-banner-desc"
              className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm"
            >
              We use cookies and similar technologies to run the site, measure
              traffic, and—when enabled—show relevant ads (for example Google
              AdSense). By clicking &quot;Accept all&quot;, you agree to optional cookies
              for analytics and advertising. &quot;Essential only&quot; keeps required
              cookies for security and basic functionality. See our{" "}
              <Link
                href="/cookies/"
                className="font-semibold text-highlight-dark underline decoration-highlight/30 underline-offset-2 hover:text-secondary"
              >
                Cookie policy
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy/"
                className="font-semibold text-highlight-dark underline decoration-highlight/30 underline-offset-2 hover:text-secondary"
              >
                Privacy policy
              </Link>{" "}
              for details.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:w-auto sm:min-w-[200px]">
            <button
              type="button"
              className="rounded-xl bg-slate-900 px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-slate-800"
              onClick={() => save("all")}
              aria-label="Accept all cookies"
            >
              Accept all
            </button>
            <button
              type="button"
              className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-center text-sm font-bold text-slate-800 transition hover:bg-slate-50"
              onClick={() => save("essential")}
              aria-label="Accept only essential cookies"
            >
              Essential only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
