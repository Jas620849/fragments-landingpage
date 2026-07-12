import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import {
  faCheckCircle,
  faTimesCircle,
  faBalanceScale,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const title = "Compare FragmentTrails | Scholarship Interview Software Alternatives";
const description =
  "Compare FragmentTrails with traditional interview methods and other assessment platforms. See why FragmentTrails leads in fair, defensible scholarship and admissions evaluation.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "fragmenttrails vs alternatives",
    "scholarship interview software comparison",
    "candidate evaluation platform comparison",
    "bias reduction tools comparison",
    "structured interview software comparison",
    "educational assessment platform comparison",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/compare/") }
    : undefined,
  openGraph: {
    title: `${title} | FragmentTrails`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/compare/") : undefined,
    images: [
      {
        url: "/logo-no-bg.png",
        width: 512,
        height: 512,
        alt: "FragmentTrails Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | FragmentTrails`,
    description,
    images: ["/logo-no-bg.png"],
  },
};

export default function ComparePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare/" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-slate-900 py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_30%,rgba(45,212,191,0.35),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.25),transparent_40%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400 sm:text-base">
            Compare
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            FragmentTrails vs Traditional Methods
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 sm:text-xl">
            See how FragmentTrails transforms scholarship and admissions evaluation compared to traditional interview approaches and other assessment platforms.
          </p>
        </div>
      </section>

      {/* Traditional Methods Comparison */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">FragmentTrails vs Traditional Interviews</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Traditional interview methods often lack structure, consistency, and fairness. FragmentTrails addresses these limitations with AI-powered tools and structured evaluation frameworks.
          </p>
          <div className="mx-auto mt-12 max-w-4xl overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 px-4 text-left text-sm font-semibold text-secondary">Feature</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-secondary">Traditional Interviews</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-blue-600">FragmentTrails</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 text-sm font-medium text-slate-700">Structured Questions</td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 text-sm font-medium text-slate-700">Standardized Scoring</td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 text-sm font-medium text-slate-700">Bias Detection</td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 text-sm font-medium text-slate-700">Evidence Requirements</td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 text-sm font-medium text-slate-700">Audit Trails</td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 text-sm font-medium text-slate-700">Multi-Reviewer Collaboration</td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-sm font-medium text-slate-700">Analytics & Reporting</td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">FragmentTrails vs Other Platforms</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Compare FragmentTrails with other assessment platforms to understand our unique advantages in scholarship and admissions evaluation.
          </p>
          <div className="mx-auto mt-12 max-w-4xl overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 px-4 text-left text-sm font-semibold text-secondary">Capability</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-secondary">Generic HR Tools</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-secondary">Video Interview Platforms</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-blue-600">FragmentTrails</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 text-sm font-medium text-slate-700">Education-Specific Design</td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 text-sm font-medium text-slate-700">Evidence-Based Evaluation</td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 text-sm font-medium text-slate-700">AI-Powered Quality Assessment</td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 text-sm font-medium text-slate-700">Fragment Trail Methodology</td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 text-sm font-medium text-slate-700">Scholarship-Specific Workflows</td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 text-sm font-medium text-slate-700">FERPA Compliance</td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-sm font-medium text-slate-700">Defensible Audit Trails</td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Key Differentiators</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBalanceScale} className="h-10 w-10 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Education-First Design
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Built specifically for educational assessment, not adapted from corporate hiring tools. FragmentTrails understands scholarship selection, admissions processes, and classroom evaluation contexts.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBalanceScale} className="h-10 w-10 text-teal-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Evidence-Based Methodology
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Unique fragment trail approach requires candidates to support responses with evidence and sources. This creates defensible evaluation records and assesses critical thinking skills.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBalanceScale} className="h-10 w-10 text-amber-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                AI + Human Collaboration
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                AI-powered assistance enhances human judgment rather than replacing it. Two-stage moderation combines automated screening with human review for optimal quality and fairness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FragmentTrails */}
      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Why Institutions Choose FragmentTrails</h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-secondary">Proven Fairness Outcomes</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Institutions using FragmentTrails report 35-40% reduction in selection bias and significant improvements in diversity outcomes. Our bias reduction frameworks are based on research and validated through real-world implementation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">Defensible Decision-Making</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Complete audit trails, evidence-based evaluation, and documented decision rationale provide the documentation needed for accreditation reviews, legal challenges, and stakeholder accountability.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">Efficiency Without Compromise</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Automate routine evaluation tasks while maintaining human oversight of critical decisions. Institutions report 40% time savings while improving evaluation quality and consistency.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">Scalable Implementation</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                From single scholarship programs to university-wide assessment systems, FragmentTrails scales to meet institutional needs without sacrificing quality or increasing administrative burden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="frag-title">See the Difference</h2>
          <p className="frag-lead mx-auto mt-3 max-w-2xl">
            Schedule a demonstration to see how FragmentTrails transforms evaluation processes compared to traditional methods and other platforms.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact/"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Request Demo
            </Link>
            <Link
              href="/case-studies/"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600 sm:px-8 sm:py-3.5 sm:text-base"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
