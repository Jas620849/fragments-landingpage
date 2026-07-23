import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import LegalDocShell from "../../components/LegalDocShell";
import { SITE_NAME } from "@/lib/seo-constants";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

const title = "Privacy Policy";
const description = `How ${SITE_NAME} collects, uses, and protects personal information on this website, including cookies, analytics, and contact form data.`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "privacy policy",
    "FragmentTrails privacy",
    "data protection",
    "cookies",
    "personal information",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/privacy/") }
    : undefined,
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/privacy/") : undefined,
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

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy/" },
        ]}
      />
      <LegalDocShell
        eyebrow="Legal"
        title="Privacy Policy"
        lead={`This Privacy Policy explains how ${SITE_NAME} (“we,” “us,” or “our”) handles information when you visit fragmenttrails.com and related marketing pages for the Fragments product.`}
      >
        <h2>1. Who we are</h2>
        <p>
          {SITE_NAME} operates this marketing website to describe and promote{" "}
          <strong className="font-semibold text-slate-800">Fragments</strong>,
          our educational discussion and learning platform. We operate online
          only. We do not publish a physical business address or phone number on
          this site. For privacy questions, use the contact options below.
        </p>

        <h2>2. Information we collect</h2>
        <h3>Information you provide</h3>
        <p>
          When you submit our{" "}
          <Link href="/contact/">contact form</Link>, we collect the details you
          enter, which typically include your name, email address, subject, and
          message. That information is sent to our backend API so we can respond
          to your inquiry.
        </p>
        <h3>Information collected automatically</h3>
        <p>
          Like most websites, we may automatically collect technical and usage
          data such as IP address, browser type, device information, pages
          viewed, approximate location derived from IP, referring URLs, and
          timestamps. This happens through cookies and similar technologies
          described in our <Link href="/cookies/">Cookie Policy</Link>.
        </p>

        <h2>3. How we use information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Operate, secure, and improve this website</li>
          <li>Respond to contact-form messages and support requests</li>
          <li>Understand site traffic and content performance</li>
          <li>Remember your cookie consent preferences</li>
          <li>Comply with legal obligations where applicable</li>
        </ul>
        <p>
          We do not sell your personal information. We do not use contact-form
          submissions for unrelated marketing lists without a clear basis to do
          so.
        </p>

        <h2>4. Cookies and similar technologies</h2>
        <p>
          We use a cookie consent banner so you can choose “Accept all” or
          “Essential only.” Essential cookies support basic site functionality
          and storing your consent choice. Optional cookies help us measure and
          improve the site. Details are in our{" "}
          <Link href="/cookies/">Cookie Policy</Link>.
        </p>

        <h2>5. Analytics and third-party tools</h2>
        <p>
          Depending on configuration and your consent choice, this site may use:
        </p>
        <ul>
          <li>
            <strong className="font-semibold text-slate-800">
              Google Analytics
            </strong>{" "}
            — to measure visits, page views, and related usage metrics
          </li>
          <li>
            <strong className="font-semibold text-slate-800">
              Google Tag Manager
            </strong>{" "}
            — to manage and deploy analytics and related tags
          </li>
          <li>
            <strong className="font-semibold text-slate-800">
              Microsoft Clarity
            </strong>{" "}
            — optionally, when enabled via site configuration, for session
            insights such as heatmaps and behavior analytics
          </li>
        </ul>
        <p>
          These providers process data under their own privacy policies. We only
          describe tools that are actually integrated into this codebase; we do
          not invent additional trackers here.
        </p>

        <h2>6. Advertising</h2>
        <p>
          This site includes an{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800">
            ads.txt
          </code>{" "}
          entry authorizing Google as an advertising seller (publisher ID
          pub-9403979213834433). Third-party advertising, including Google
          AdSense or similar services, may appear on the site now or in the
          future. If ads are shown, ad partners may use cookies or similar
          technologies to deliver and measure ads, subject to your consent
          settings and applicable law. We will update this policy if our
          advertising practices change in a material way.
        </p>

        <h2>7. How we share information</h2>
        <p>We may share information with:</p>
        <ul>
          <li>
            Service providers that help us run the site (for example hosting,
            analytics, or email delivery related to contact requests)
          </li>
          <li>
            Advertising partners, if and when ads are served on the site
          </li>
          <li>
            Authorities when required by law or to protect rights, safety, or
            security
          </li>
        </ul>
        <p>
          Contact-form data is transmitted to our API endpoint for processing
          and response. We require service providers to use information only as
          needed to perform their services for us.
        </p>

        <h2>8. Data retention</h2>
        <p>
          We retain contact-form and related communications as long as needed to
          respond and keep a reasonable business record, unless a longer period
          is required by law. Analytics data is retained according to each
          provider’s settings and our operational needs. Cookie consent choices
          stored in your browser remain until you clear site data or change your
          preference.
        </p>

        <h2>9. Your rights and choices</h2>
        <p>
          Depending on where you live, you may have rights to access, correct,
          delete, or restrict use of your personal information, and to object to
          certain processing. You can also:
        </p>
        <ul>
          <li>
            Choose “Essential only” or “Accept all” in our cookie banner
          </li>
          <li>Clear cookies and site data in your browser</li>
          <li>
            Opt out of interest-based Google ads via Google’s ad settings where
            available
          </li>
          <li>
            Contact us to request access to or deletion of information you
            submitted through the contact form, subject to legal limits
          </li>
        </ul>
        <p>
          If you are in the EEA, UK, or another region with similar laws, you
          may also have the right to lodge a complaint with your local data
          protection authority.
        </p>

        <h2>10. Children’s privacy</h2>
        <p>
          This marketing website is directed to educators, institutions, and
          adult visitors. We do not knowingly collect personal information from
          children through this marketing site’s contact form. If you believe a
          child has submitted personal information to us, contact us and we will
          take appropriate steps to delete it.
        </p>

        <h2>11. International visitors</h2>
        <p>
          We may process information in the United States or other countries
          where we or our service providers operate. Those countries may have
          different data-protection laws than your home country. By using this
          site, you understand that your information may be transferred to those
          locations as needed to provide the services described here.
        </p>

        <h2>12. Security</h2>
        <p>
          We take reasonable technical and organizational measures to protect
          personal information. No method of transmission or storage is fully
          secure, and we cannot guarantee absolute security.
        </p>

        <h2>13. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The “Last
          updated” date at the top will change when we do. Continued use of the
          site after an update means you accept the revised policy, to the
          extent permitted by law.
        </p>

        <h2>14. Contact us</h2>
        <p>
          For privacy questions or requests, email{" "}
          <a href="mailto:support@fragments.com">support@fragments.com</a> or
          use our <Link href="/contact/">contact form</Link>. We operate
          online-only and do not list a public street address or phone number.
        </p>
        <p>
          Related documents:{" "}
          <Link href="/terms/">Terms of Service</Link>,{" "}
          <Link href="/cookies/">Cookie Policy</Link>,{" "}
          <Link href="/disclaimer/">Disclaimer</Link>.
        </p>
      </LegalDocShell>
    </>
  );
}
