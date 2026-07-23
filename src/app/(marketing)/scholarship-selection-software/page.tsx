import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faUsers, faChartLine, faShieldAlt, faBalanceScale } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Scholarship Selection Software | FragmentTrails",
  description: "Transform your scholarship selection process with FragmentTrails. AI-powered evaluation tools help committees make fair, data-driven decisions while reducing bias and improving efficiency.",
  keywords: [
    "scholarship selection software",
    "scholarship selection platform",
    "scholarship assessment software",
    "candidate ranking system",
    "scholarship decision support",
    "scholarship committee management",
    "fair scholarship selection",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/scholarship-selection-software/") }
    : undefined,
};

export default function ScholarshipSelectionSoftwarePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Scholarship Selection Software", path: "/scholarship-selection-software/" },
        ]}
      />
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Scholarship Management</p>
          <h1 className="frag-hero-h1 mt-1.5">Scholarship Selection Software</h1>
          <p className="frag-hero-lead max-w-2xl">
            Transform your scholarship selection process with AI-powered evaluation tools that help committees make fair, data-driven decisions while reducing bias and improving efficiency.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">The Challenge of Modern Scholarship Selection</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Scholarship committees face increasing pressure to select the most deserving candidates while ensuring fairness, transparency, and efficiency. Traditional selection methods often rely on subjective evaluations, inconsistent criteria, and manual processes that can introduce bias and errors.
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBalanceScale} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Bias Concerns</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Unconscious bias can influence decisions, leading to unfair outcomes and reduced diversity in scholarship recipients.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Process Inconsistency</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Different committee members may apply different standards, making it difficult to compare candidates fairly.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faChartLine} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Manual Workload</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Paper-based evaluations and spreadsheets create administrative burden and increase the risk of errors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">How FragmentTrails Solves These Problems</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Our scholarship selection software provides a comprehensive solution that addresses the core challenges of modern scholarship programs through structured evaluation, AI-powered insights, and collaborative workflows.
          </p>
          <div className="mx-auto mt-10 max-w-4xl space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Structured Evaluation Framework</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Implement standardized evaluation criteria across all committee members. Our platform allows you to define custom rubrics with weighted criteria, ensuring every candidate is assessed consistently. Committee members score candidates using the same framework, eliminating subjective variations and creating a fair comparison baseline.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <FontAwesomeIcon icon={faShieldAlt} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">AI-Powered Bias Detection</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Our machine learning algorithms analyze evaluation patterns to identify potential bias in scoring. The system flags inconsistencies between committee members, unusual score distributions, and patterns that may indicate unconscious bias. This data-driven approach helps committees calibrate their evaluations and make more objective decisions.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faUsers} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Collaborative Committee Workflows</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Enable seamless collaboration among committee members with real-time discussion threads, shared candidate profiles, and integrated scoring dashboards. Committee members can discuss candidates within the platform, share insights, and reach consensus more efficiently. All discussions and decisions are documented for transparency and accountability.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faChartLine} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Data-Driven Decision Support</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Access comprehensive analytics and reporting tools that provide insights into your selection process. Track candidate performance across criteria, analyze committee member scoring patterns, and generate reports for stakeholders. Make informed decisions based on data rather than gut feelings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Key Features for Scholarship Committees</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Customizable Selection Criteria</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Define evaluation criteria specific to your scholarship program. Assign weights to different criteria based on their importance. Create multiple rubrics for different scholarship types or categories.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Automated Candidate Screening</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Set minimum eligibility requirements and let the system automatically screen candidates. Filter by GPA, test scores, financial need, or custom criteria. Focus committee time on qualified candidates.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Interview Management</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Schedule, conduct, and evaluate scholarship interviews within the platform. Use structured interview questions, record responses, and score candidates using standardized rubrics.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Audit Trails & Compliance</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Every action is logged for complete transparency. Generate compliance reports for auditors, donors, or regulatory bodies. Demonstrate fair selection processes with documented evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">Ready to Transform Your Scholarship Selection?</h2>
          <p className="frag-lead mx-auto mt-4 max-w-2xl">
            Join scholarship programs that are already using FragmentTrails to make fairer, more efficient selection decisions.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`${process.env.NEXT_PUBLIC_FRONTEND_APP_URL || "https://app.fragmenttrails.com"}/auth/register`}
              className="frag-btn-primary inline-flex min-w-[10rem] px-5 shadow-md shadow-orange-500/25 sm:min-w-[11rem]"
            >
              Get Started Free
            </a>
            <a href="/contact/" className="inline-flex min-w-[10rem] items-center justify-center rounded-lg border-2 border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:min-w-[11rem] sm:text-sm">
              Request Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
