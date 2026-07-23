export const COOKIE_CONSENT_STORAGE_KEY = "fragments_cookie_consent_v1";

export type CookieConsentChoice = "all" | "essential";

export function readCookieConsent(): CookieConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { choice?: CookieConsentChoice };
    return parsed.choice === "all" || parsed.choice === "essential"
      ? parsed.choice
      : null;
  } catch {
    return null;
  }
}

export function writeCookieConsent(choice: CookieConsentChoice): void {
  try {
    localStorage.setItem(
      COOKIE_CONSENT_STORAGE_KEY,
      JSON.stringify({ choice, at: Date.now() })
    );
  } catch {
    /* private mode / blocked storage */
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("fragments-cookie-consent", { detail: { choice } })
    );
  }
}

/** True when the visitor accepted optional cookies (analytics / ads). */
export function hasOptionalCookieConsent(): boolean {
  return readCookieConsent() === "all";
}
