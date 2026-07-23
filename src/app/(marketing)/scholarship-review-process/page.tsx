import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faClipboardCheck, faUsers, faChartBar, faClock } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Scholarship Review Process | FragmentTrails",
  description: "Streamline your scholarship review process with AI-powered tools. Efficient candidate evaluation, collaborative workflows, and data-driven decision making for scholarship programs.",
  keywords: [
    "scholarship review process",
    "scholarship evaluation workflow",
    "scholarship committee software",
    "scholarship assessment process",
    "scholarship selection workflow",
    "scholarship review automation",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/scholarship-review-process/") }
    : undefined,
};

export default function ScholarshipReviewProcessPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Scholarship Review Process", path: "/scholarship-review-process/" },
        ]}
      />
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Scholarship Management</p>
          <h1 className="frag-hero-h1 mt-1.5">Scholarship Review Process</h1>
          <p className="frag-hero-lead max-w-2xl">
            Modernize your scholarship review process with AI-powered tools. Streamline candidate evaluation, enable collaborative committee workflows, and make data-driven selection decisions.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Challenges in Scholarship Review</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Scholarship committees face significant challenges managing the review process efficiently while ensuring fairness and transparency. Manual processes, email coordination, and spreadsheet tracking create bottlenecks and introduce errors.
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faClock} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Time Constraints</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Reviewing hundreds of applications withintight deadlines creates pressure that can compromise evaluation quality.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Coordination Burden</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Coordinating multiple reviewers across different schedules and locations creates administrative overhead.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faClipboardCheck} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Inconsistent Standards</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Without standardized criteria, reviewers apply different standards, making fair comparisons difficult.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Streamlined Review Workflow</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            FragmentTrails transforms the scholarship review process with automated workflows, standardized evaluation, and collaborative tools designed specifically for scholarship committees.
          </p>
          <div className="mx-auto mt-10 max-w-4xl space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faClipboardCheck} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Automated Screening & Triage</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Automatically screen applications against minimum qualifications and eligibility criteria. Triage applications into priority tiers, ensuring reviewers focus on qualified candidates. Reduce manual review time by 70% while ensuring no promising applicant is overlooked.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <FontAwesomeIcon icon={faUsers} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Collaborative Committee Workflows</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Enable committee members to review applications asynchronously, share notes, and discuss candidates within the platform. Eliminate scheduling conflicts and email chains. Build consensus through structured discussion threads and voting mechanisms.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faGraduationCap} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Standardized Review Criteria</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Implement consistent evaluation rubrics across all reviewers. Define clear criteria with detailed descriptors for each score level. Ensure every application is evaluated against the same standards, enabling fair comparison and reducing bias.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faChartBar} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Real-Time Progress Tracking</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Monitor review progress in real-time with dashboards showing completion status, reviewer workload, and bottlenecks. Send automated reminders to reviewers and identify applications requiring additional review. Ensure timely decisions and meet deadlines consistently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Process Optimization Features</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Smart Assignment</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Automatically assign applications to reviewers based on expertise, workload balance, and conflict of interest checks.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Calibration Tools</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Conduct calibration sessions to align reviewer scoring. Identify outliers and provide targeted feedback for consistency.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Decision Support</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Aggregate scores across reviewers, calculate composite rankings, and provide decision support for final selections.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">System Integration</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Integrate with scholarship management systems, student information systems, and CRM platforms for seamless data flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">Transform Your Scholarship Review</h2>
          <p className="frag-lead mx-auto mt-4 max-w-2xl">
            Join scholarship programs using FragmentTrails to streamline review processes and make better decisions.
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
