import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faCalendarAlt, faComments, faHandshake } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Interview Panel Management Software | FragmentTrails",
  description: "Comprehensive interview panel management software for scholarship and admission interviews. Coordinate evaluators, standardize scoring, and streamline panel workflows.",
  keywords: [
    "interview panel management software",
    "interview panel coordination",
    "evaluator management system",
    "committee interview software",
    "panel evaluation tools",
    "interview committee workflow",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/interview-panel-management/") }
    : undefined,
};

export default function InterviewPanelManagementPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Interview Panel Management", path: "/interview-panel-management/" },
        ]}
      />
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Panel Coordination</p>
          <h1 className="frag-hero-h1 mt-1.5">Interview Panel Management Software</h1>
          <p className="frag-hero-lead max-w-2xl">
            Coordinate and manage interview panels efficiently. Our software helps schedule evaluators, standardize scoring across panel members, and streamline collaborative decision-making for scholarship and admission interviews.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Challenges of Panel Interview Management</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Managing interview panels involves coordinating multiple evaluators, scheduling conflicts, ensuring consistent scoring, and facilitating collaborative decision-making. Without proper tools, panel management becomes time-consuming and error-prone.
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faCalendarAlt} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Scheduling Complexity</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Coordinating multiple evaluators across different time zones and schedules creates logistical challenges and delays.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Score Variance</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Different panel members may apply different standards, making it difficult to aggregate scores fairly.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faComments} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Communication Gaps</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Without proper collaboration tools, panel members struggle to discuss candidates and reach consensus effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Streamlined Panel Management</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            FragmentTrails provides comprehensive tools to manage every aspect of interview panels, from scheduling to final decision-making.
          </p>
          <div className="mx-auto mt-10 max-w-4xl space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faCalendarAlt} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Automated Scheduling</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Schedule interview panels with automated conflict resolution. Match evaluators to candidates based on expertise, availability, and workload. Send automated reminders and manage rescheduling without administrative burden.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <FontAwesomeIcon icon={faUsers} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Standardized Panel Scoring</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Ensure all panel members use the same scoring rubrics and criteria. Aggregate scores automatically with configurable weighting systems. Identify and address scoring discrepancies between panel members through calibration.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faComments} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Collaborative Discussion Tools</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Enable panel members to discuss candidates within the platform. Share notes, debate assessments, and build consensus through structured discussion threads. All discussions are documented for transparency.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faHandshake} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Consensus-Building Mechanisms</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Implement voting systems, ranking exercises, and consensus-building tools to help panels reach decisions efficiently. Track individual positions and document the rationale for final decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Panel Management Features</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Evaluator Assignment</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Assign evaluators to panels based on expertise, workload balancing, and conflict of interest checks. Ensure fair distribution of evaluation responsibilities.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Real-Time Collaboration</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Enable real-time collaboration during panel discussions. Share candidate profiles, compare scores, and reach consensus without leaving the platform.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Panel Analytics</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Track panel performance, evaluator consistency, and decision patterns. Use analytics to improve panel effectiveness and identify training needs.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Decision Documentation</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Document panel decisions with complete audit trails. Record individual votes, discussion summaries, and final rationale for transparency and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">Streamline Your Panel Management</h2>
          <p className="frag-lead mx-auto mt-4 max-w-2xl">
            Join organizations using FragmentTrails to manage interview panels efficiently and fairly.
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
