import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import LegalDocShell from "../../components/LegalDocShell";
import { SITE_NAME } from "@/lib/seo-constants";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

const title = "Terms of Service";
const description = `Terms governing use of the ${SITE_NAME} marketing website and information about the Fragments product.`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "terms of service",
    "FragmentTrails terms",
    "website terms",
    "user agreement",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/terms/") }
    : undefined,
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/terms/") : undefined,
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

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms/" },
        ]}
      />
      <LegalDocShell
        eyebrow="Legal"
        title="Terms of Service"
        lead={`These Terms of Service (“Terms”) govern your access to and use of the ${SITE_NAME} website at fragmenttrails.com and related marketing pages.`}
      >
        <h2>1. Agreement</h2>
        <p>
          By accessing or using this website, you agree to these Terms and our{" "}
          <Link href="/privacy/">Privacy Policy</Link>. If you do not agree, do
          not use the site.
        </p>
        <p>
          {SITE_NAME} is the public website brand for information about{" "}
          <strong className="font-semibold text-slate-800">Fragments</strong>,
          our educational discussion and learning product. Separate product
          terms, subscriptions, or account agreements may apply when you create
          an account or use the Fragments application itself. Those product
          terms control if they conflict with these marketing-site Terms for
          product use.
        </p>

        <h2>2. Who may use the site</h2>
        <p>
          You must be able to form a binding contract under applicable law to
          use this site. If you use the site on behalf of an organization, you
          represent that you have authority to bind that organization to these
          Terms.
        </p>

        <h2>3. Informational nature of this website</h2>
        <p>
          Content on this marketing site—including blog posts, service
          descriptions, pricing summaries, and educational articles—is provided
          for general information. It is not legal, financial, medical, or
          professional advice. See our{" "}
          <Link href="/disclaimer/">Disclaimer</Link> for more detail.
        </p>
        <p>
          Features, pricing, and availability of Fragments may change. We may
          update website content without notice. Marketing descriptions do not
          guarantee that any particular feature will be available in your
          region or plan.
        </p>

        <h2>4. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>
            Use the site in any way that violates applicable law or third-party
            rights
          </li>
          <li>
            Attempt to probe, scan, or test the vulnerability of the site or
            related systems without authorization
          </li>
          <li>
            Interfere with or disrupt the site, including by introducing
            malware or excessive automated requests
          </li>
          <li>
            Scrape, harvest, or collect personal information from the site
            without permission
          </li>
          <li>
            Misrepresent your identity or affiliation when submitting the
            contact form
          </li>
          <li>
            Use the site to send spam, phishing, or abusive messages
          </li>
        </ul>

        <h2>5. Contact form and communications</h2>
        <p>
          If you submit our contact form, you agree to provide accurate
          information and that we may use it to respond to your message as
          described in our <Link href="/privacy/">Privacy Policy</Link>. Form
          submissions are processed via our API. We are not obligated to respond
          to every message, but we aim to reply to good-faith inquiries.
        </p>

        <h2>6. Intellectual property</h2>
        <p>
          The site’s text, design, logos, graphics, and other materials are owned
          by us or our licensors and are protected by intellectual property
          laws. You may view and temporarily download pages for personal,
          non-commercial use. You may not copy, modify, distribute, sell, or
          create derivative works from site content without our prior written
          consent, except as allowed by law (for example, fair use).
        </p>
        <p>
          “{SITE_NAME}”, “Fragments”, and related marks are used to identify our
          website and product. Unauthorized use of our marks is prohibited.
        </p>

        <h2>7. Third-party links and tools</h2>
        <p>
          The site may link to third-party websites or use third-party services
          (for example analytics providers). We are not responsible for
          third-party content, policies, or practices. Your use of third-party
          services is governed by their terms.
        </p>

        <h2>8. Advertising</h2>
        <p>
          The site may display third-party advertising, including through Google
          or other partners identified in our{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800">
            ads.txt
          </code>{" "}
          file. Ads do not constitute an endorsement. Advertising partners may
          collect data as described in our Privacy and Cookie policies.
        </p>

        <h2>9. Disclaimer of warranties</h2>
        <p>
          THE SITE IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT
          PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
          INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE
          UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS, OR THAT
          CONTENT WILL BE ACCURATE OR COMPLETE.
        </p>

        <h2>10. Limitation of liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, {SITE_NAME.toUpperCase()} AND
          ITS OPERATORS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
          SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS,
          DATA, OR GOODWILL, ARISING FROM YOUR USE OF OR INABILITY TO USE THE
          SITE. OUR TOTAL LIABILITY FOR CLAIMS ARISING OUT OF THESE TERMS OR THE
          SITE WILL NOT EXCEED ONE HUNDRED U.S. DOLLARS (US $100), EXCEPT WHERE
          LIABILITY CANNOT BE LIMITED BY LAW.
        </p>

        <h2>11. Indemnity</h2>
        <p>
          You agree to indemnify and hold harmless {SITE_NAME} and its
          operators from claims, damages, losses, and expenses (including
          reasonable attorneys’ fees) arising from your misuse of the site or
          violation of these Terms, to the extent permitted by law.
        </p>

        <h2>12. Changes</h2>
        <p>
          We may modify these Terms or the site at any time. The “Last updated”
          date will reflect material changes. Continued use after changes
          constitutes acceptance of the updated Terms where permitted by law.
        </p>

        <h2>13. Termination</h2>
        <p>
          We may suspend or restrict access to the site if we reasonably believe
          you have violated these Terms or if needed for security or legal
          reasons. Provisions that by nature should survive (including
          intellectual property, disclaimers, and limitations of liability) will
          survive termination.
        </p>

        <h2>14. Governing law</h2>
        <p>
          These Terms are governed by the laws applicable where we operate our
          online business, without regard to conflict-of-law principles, except
          where mandatory consumer protections in your jurisdiction apply. If a
          court finds any provision unenforceable, the remaining provisions
          remain in effect.
        </p>

        <h2>15. Contact</h2>
        <p>
          Questions about these Terms:{" "}
          <a href="mailto:support@fragments.com">support@fragments.com</a> or
          our <Link href="/contact/">contact form</Link>. We operate
          online-only and do not list a public street address or phone number.
        </p>
        <p>
          Related documents:{" "}
          <Link href="/privacy/">Privacy Policy</Link>,{" "}
          <Link href="/cookies/">Cookie Policy</Link>,{" "}
          <Link href="/disclaimer/">Disclaimer</Link>.
        </p>
      </LegalDocShell>
    </>
  );
}
