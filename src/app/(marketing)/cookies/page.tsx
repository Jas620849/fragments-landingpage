import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import LegalDocShell from "../../components/LegalDocShell";
import { SITE_NAME } from "@/lib/seo-constants";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

const title = "Cookie Policy";
const description = `How ${SITE_NAME} uses cookies and similar technologies, including analytics, consent preferences, and optional advertising.`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "cookie policy",
    "FragmentTrails cookies",
    "cookie consent",
    "analytics cookies",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/cookies/") }
    : undefined,
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/cookies/") : undefined,
    images: [
      {
        url: "/logo-no-bg.png",
        width: 512,
        height: 512,
        alt: `${SITE_NAME} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${SITE_NAME}`,
    description,
    images: ["/logo-no-bg.png"],
  },
};

export default function CookiesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Cookie Policy", path: "/cookies/" },
        ]}
      />
      <LegalDocShell
        eyebrow="Legal"
        title="Cookie Policy"
        lead={`This Cookie Policy explains how ${SITE_NAME} uses cookies and similar technologies on fragmenttrails.com.`}
      >
        <h2>1. What are cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a
          website. Similar technologies include local storage, pixels, and
          scripts that help a site function, remember preferences, or measure
          usage. In this policy, “cookies” includes those similar technologies
          where relevant.
        </p>

        <h2>2. How we use cookies</h2>
        <p>We use cookies to:</p>
        <ul>
          <li>Keep the site working securely and reliably</li>
          <li>Remember your cookie consent choice</li>
          <li>
            Measure traffic and improve content when you allow optional cookies
          </li>
          <li>
            Support advertising measurement if ads are shown on the site
          </li>
        </ul>

        <h2>3. Cookie consent</h2>
        <p>
          When you first visit, a cookie banner lets you choose{" "}
          <strong className="font-semibold text-slate-800">Accept all</strong>{" "}
          or{" "}
          <strong className="font-semibold text-slate-800">
            Essential only
          </strong>
          . Your choice is stored in your browser (local storage key used by
          our consent banner) so we can respect it on later visits. You can
          clear site data in your browser to reset the banner and choose again.
        </p>

        <h2>4. Types of cookies we use</h2>
        <h3>Essential</h3>
        <p>
          Required for basic operation, security, and storing your consent
          preference. These run even if you choose “Essential only.”
        </p>
        <h3>Analytics (optional)</h3>
        <p>
          When enabled and permitted by your consent choice, we may use:
        </p>
        <ul>
          <li>
            <strong className="font-semibold text-slate-800">
              Google Analytics
            </strong>{" "}
            — page views, sessions, and related usage metrics
          </li>
          <li>
            <strong className="font-semibold text-slate-800">
              Google Tag Manager
            </strong>{" "}
            — loading and managing analytics and related tags
          </li>
          <li>
            <strong className="font-semibold text-slate-800">
              Microsoft Clarity
            </strong>{" "}
            — optionally, when configured for this deployment, for heatmaps and
            session behavior insights
          </li>
        </ul>
        <p>
          We do not claim to use other tracking products beyond what is
          integrated in this site’s code and environment configuration.
        </p>
        <h3>Advertising (may apply)</h3>
        <p>
          Our{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800">
            ads.txt
          </code>{" "}
          authorizes Google advertising (publisher ID pub-9403979213834433). If
          Google AdSense or similar ads appear, advertising cookies or similar
          technologies may be used to serve and measure ads. Whether ads load
          on a given visit can depend on configuration, region, and consent.
        </p>

        <h2>5. Third-party cookies</h2>
        <p>
          Analytics and advertising partners may set their own cookies when
          their scripts run. Those parties process data under their privacy
          policies. Examples include Google and, when enabled, Microsoft.
        </p>

        <h2>6. Managing cookies</h2>
        <p>You can control cookies by:</p>
        <ul>
          <li>Using our on-site consent banner choices</li>
          <li>Blocking or deleting cookies in your browser settings</li>
          <li>
            Using industry opt-out tools for interest-based advertising where
            available (for example Google’s ad settings)
          </li>
        </ul>
        <p>
          Blocking all cookies may affect some site features. Essential storage
          for consent may still be needed for the banner to work correctly.
        </p>

        <h2>7. More about privacy</h2>
        <p>
          For how we handle personal data more broadly, see our{" "}
          <Link href="/privacy/">Privacy Policy</Link>. Related documents:{" "}
          <Link href="/terms/">Terms of Service</Link>,{" "}
          <Link href="/disclaimer/">Disclaimer</Link>.
        </p>

        <h2>8. Contact</h2>
        <p>
          Cookie or privacy questions:{" "}
          <a href="mailto:support@fragments.com">support@fragments.com</a> or
          our <Link href="/contact/">contact form</Link>. We operate
          online-only.
        </p>
      </LegalDocShell>
    </>
  );
}
