import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import LegalDocShell from "../../components/LegalDocShell";
import { SITE_NAME } from "@/lib/seo-constants";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

const title = "Disclaimer";
const description = `Educational and informational disclaimer for ${SITE_NAME} content about Fragments, scholarship workflows, and learning topics.`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "disclaimer",
    "educational disclaimer",
    "FragmentTrails disclaimer",
    "informational content",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/disclaimer/") }
    : undefined,
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/disclaimer/") : undefined,
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

export default function DisclaimerPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Disclaimer", path: "/disclaimer/" },
        ]}
      />
      <LegalDocShell
        eyebrow="Legal"
        title="Disclaimer"
        lead={`Important limitations on how to use content published on ${SITE_NAME} about Fragments and related educational topics.`}
      >
        <h2>1. Educational and informational purpose</h2>
        <p>
          {SITE_NAME} publishes marketing pages, blog articles, and product
          descriptions related to{" "}
          <strong className="font-semibold text-slate-800">Fragments</strong>{" "}
          and broader topics such as classroom discussion, scholarship
          interviews, and educational assessment. This material is for general
          educational and informational purposes only.
        </p>
        <p>
          Nothing on this website constitutes professional advice—legal,
          financial, medical, academic admissions, employment, or otherwise. You
          should not rely on site content as a substitute for advice from a
          qualified professional or your own institution’s policies.
        </p>

        <h2>2. No guarantees of outcomes</h2>
        <p>
          Descriptions of processes, best practices, fairness methods, scoring
          approaches, or technology capabilities do not guarantee any particular
          result for students, educators, scholarship programs, or
          institutions. Outcomes depend on many factors outside our control,
          including how tools are configured and used.
        </p>

        <h2>3. Accuracy and completeness</h2>
        <p>
          We strive to keep content accurate and useful, but we do not warrant
          that all information is complete, current, or error-free. Laws,
          regulations, institutional rules, and product features change. Always
          verify critical information with authoritative sources.
        </p>

        <h2>4. Product information</h2>
        <p>
          Feature lists, pricing summaries, and screenshots on this marketing
          site may be simplified or illustrative. The Fragments product
          experience, plans, and availability may differ. Binding commitments
          about the product appear only in applicable product terms, order
          forms, or written agreements—not in blog posts or marketing copy
          alone.
        </p>

        <h2>5. Third-party content and links</h2>
        <p>
          Links to external sites or mentions of third-party tools are for
          convenience. We do not control and are not responsible for third-party
          content, accuracy, or practices. Inclusion of a link or reference is
          not an endorsement.
        </p>

        <h2>6. Advertising</h2>
        <p>
          Advertisements that may appear on the site (including via Google or
          other partners) are the responsibility of the respective advertisers.
          We do not endorse advertised products or services merely because an ad
          appears on {SITE_NAME}.
        </p>

        <h2>7. User responsibility</h2>
        <p>
          You are responsible for how you interpret and apply information from
          this site. Institutions remain responsible for compliance with their
          own policies, accreditation requirements, and applicable education or
          privacy laws when evaluating candidates or running programs.
        </p>

        <h2>8. Limitation</h2>
        <p>
          To the maximum extent permitted by law, {SITE_NAME} and its operators
          disclaim liability for decisions made or actions taken based on
          content from this website. Additional limitations appear in our{" "}
          <Link href="/terms/">Terms of Service</Link>.
        </p>

        <h2>9. Contact</h2>
        <p>
          Questions about this disclaimer:{" "}
          <a href="mailto:support@fragments.com">support@fragments.com</a> or
          our <Link href="/contact/">contact form</Link>. We operate
          online-only.
        </p>
        <p>
          Related documents:{" "}
          <Link href="/privacy/">Privacy Policy</Link>,{" "}
          <Link href="/terms/">Terms of Service</Link>,{" "}
          <Link href="/cookies/">Cookie Policy</Link>.
        </p>
      </LegalDocShell>
    </>
  );
}
