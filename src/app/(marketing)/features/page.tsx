import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import {
  faComments,
  faUsers,
  faChartBar,
  faShieldAlt,
  faBolt,
  faCheckCircle,
  faGlobe,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const title = "Features | FragmentTrails - Structured Discussion Platform for Education";
const description =
  "Explore FragmentTrails features: structured fragment trails, two-stage quality moderation, collaborative evaluation tools, and defensible assessment records for scholarship committees and educators.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "fragmenttrails features",
    "structured discussion platform",
    "scholarship interview tools",
    "evidence-based assessment",
    "collaborative evaluation",
    "quality moderation",
    "bias reduction tools",
    "educational assessment software",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/features/") }
    : undefined,
  openGraph: {
    title: `${title} | FragmentTrails`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/features/") : undefined,
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

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Features", path: "/features/" },
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
            Features
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Platform Features for Fair Educational Assessments
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 sm:text-xl">
            Structured discussion trails, two-stage quality moderation, and collaborative evaluation tools designed for scholarship committees, educators, and institutions conducting defensible assessments.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Core Assessment Features</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faComments} className="h-10 w-10 text-teal-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Structured Fragment Trails
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Educators create sourced opening fragments with specific questions. Students extend trails with evidence-based responses, creating visible chains of reasoning suitable for evaluation and administrative review.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faShieldAlt} className="h-10 w-10 text-green-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Two-Stage Quality Moderation
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Automated screening for plagiarism and baseline quality, followed by human review for tone and academic alignment, ensures all content meets scholarly standards before publication.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faUsers} className="h-10 w-10 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Collaborative Evaluation
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Multiple reviewers can assess contributions simultaneously with consistent criteria, enabling fair scholarship interviews and classroom assessments with defensible evaluation records.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faChartBar} className="h-10 w-10 text-purple-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                AI-Powered Scoring
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Machine learning algorithms evaluate response quality, evidence usage, and argument structure to provide consistent scoring that reduces unconscious bias in scholarship and admissions decisions.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faCheckCircle} className="h-10 w-10 text-amber-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Defensible Audit Trails
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Complete records of discussions, evaluations, and decision-making processes provide documentation that administrators can present to accreditors, stakeholders, and legal reviewers.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBolt} className="h-10 w-10 text-orange-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Bias Reduction Frameworks
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Structured evaluation criteria and anonymized review processes help minimize unconscious bias, ensuring fair outcomes for scholarship candidates and student assessments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educator Features */}
      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">For Scholarship Committees</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">
                  Standardized Interview Process
                </h3>
                <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                  Create consistent interview structures across all candidates with predefined questions and evaluation rubrics that ensure fair comparison.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">
                  Multi-Reviewer Collaboration
                </h3>
                <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                  Enable panel members to review and score candidate responses independently while maintaining consistent evaluation criteria across all reviewers.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">
                  Evidence-Based Evaluation
                </h3>
                <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                  Require candidates to support responses with evidence and sources, creating defensible evaluation records suitable for administrative and legal review.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">
                  Automated Scoring Assistance
                </h3>
                <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                  AI-powered scoring suggestions help reviewers maintain consistency while allowing final human judgment on all award decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Institutional Capabilities</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faGlobe} className="h-10 w-10 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Institutional Scalability
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                From single scholarship committees to university-wide assessment programs, the platform scales while maintaining consistent evaluation standards across departments.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faShieldAlt} className="h-10 w-10 text-green-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                FERPA Compliance
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Built-in compliance with educational data privacy regulations including FERPA, ensuring student and candidate data protection for institutional use.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faMobileAlt} className="h-10 w-10 text-teal-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Integration Ready
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                API access and integration capabilities allow connection with existing student information systems, CRM platforms, and institutional databases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="frag-title">Ready to Implement Fair Assessments?</h2>
          <p className="frag-lead mx-auto mt-3 max-w-2xl">
            Contact our team to learn how FragmentTrails can help your scholarship committee, educational institution, or assessment program implement structured, defensible evaluation processes.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact/"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Get Started
            </Link>
            <Link
              href="/about/"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
