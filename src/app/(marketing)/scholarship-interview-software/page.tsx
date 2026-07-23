import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import FAQSchema from "../../components/FAQSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faChartBar, faBalanceScale, faUsers } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Scholarship Interview Software | FragmentTrails - Committee Coordination & Decision Support",
  description: "Coordinate scholarship interview committees with FragmentTrails. Our software supports distributed panels, asynchronous deliberation, consensus-building tools, and comprehensive documentation for defensible selection decisions.",
  keywords: [
    "scholarship interview software",
    "scholarship committee coordination",
    "asynchronous interview deliberation",
    "consensus-building tools",
    "distributed interview panels",
    "scholarship decision support",
    "committee collaboration software",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/scholarship-interview-software/") }
    : undefined,
};

const scholarshipInterviewFAQs = [
  {
    question: "What is scholarship interview software?",
    answer: "Scholarship interview software is a digital platform that helps education institutions conduct, evaluate, and manage scholarship interviews with AI-powered scoring, structured evaluation, and bias reduction tools.",
  },
  {
    question: "How does FragmentTrails reduce bias in scholarship interviews?",
    answer: "FragmentTrails uses AI-powered bias detection algorithms, standardized evaluation rubrics, and structured interview frameworks to minimize unconscious bias and ensure fair candidate assessment.",
  },
  {
    question: "Can universities use this software for admissions interviews?",
    answer: "Yes, FragmentTrails is designed for both scholarship and admissions interviews. Universities, colleges, and educational institutions can use it for any type of candidate evaluation process.",
  },
  {
    question: "How long does it take to implement the scholarship interview software?",
    answer: "Implementation typically takes 1-2 weeks for setup and training. The platform is cloud-based and requires no complex IT infrastructure, allowing for quick deployment.",
  },
];

export default function ScholarshipInterviewSoftwarePage() {
  return (
    <>
      <FAQSchema faqs={scholarshipInterviewFAQs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Scholarship Interview Software", path: "/scholarship-interview-software/" },
        ]}
      />
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Scholarship Management</p>
          <h1 className="frag-hero-h1 mt-1.5">Scholarship Interview Software</h1>
          <p className="frag-hero-lead max-w-2xl">
    Coordinate distributed scholarship interview committees with tools for asynchronous deliberation, consensus building, and defensible decision documentation. Support geographically dispersed panels while maintaining evaluation quality.
  </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Challenges of Distributed Committees</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
    Scholarship committees often span multiple locations, time zones, and institutions. Coordinating geographically dispersed committee members, scheduling synchronous meetings, and achieving consensus without face-to-face interaction creates significant administrative burden and can delay decisions.
  </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faMicrophone} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Scheduling Conflicts</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Coordinating committee members across time zones and busy schedules makes synchronous deliberation meetings difficult to arrange, causing delays in decision-making.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBalanceScale} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Communication Silos</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Email chains and scattered communication tools create information silos. Committee members miss critical context, and discussions become fragmented across multiple channels.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Documentation Gaps</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Without centralized documentation, committee discussions and decision rationale are lost. This creates challenges for transparency, audit requirements, and explaining decisions to stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Asynchronous Committee Coordination</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
    FragmentTrails enables scholarship committees to deliberate asynchronously without sacrificing decision quality. Our platform provides structured discussion tools, voting mechanisms, and comprehensive documentation that support distributed committees while ensuring fair, transparent decisions.
  </p>
          <div className="mx-auto mt-10 max-w-4xl space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faMicrophone} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Structured Discussion Threads</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Enable committee members to discuss candidates through organized, threaded conversations. Each candidate has a dedicated discussion space where committee members can share insights, raise concerns, and build consensus asynchronously. All discussions are time-stamped and attributed for transparency.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <FontAwesomeIcon icon={faChartBar} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Consensus-Building Voting</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Implement structured voting mechanisms to gauge committee sentiment and build consensus. Support ranking votes, approval voting, and weighted voting based on committee roles. Visualize voting patterns and identify areas of disagreement requiring further discussion.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faBalanceScale} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Decision Rationale Documentation</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Capture comprehensive documentation of committee decisions, including discussion summaries, voting records, and final rationale. Generate decision reports that explain why candidates were selected or not selected, providing defensible documentation for audits and stakeholder communication.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faUsers} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Real-Time Progress Tracking</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Committee chairs monitor deliberation progress with dashboards showing which members have participated, which candidates have been discussed, and where consensus has been achieved. Send automated reminders to committee members who haven&apos;t engaged, ensuring timely decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Committee Management Features</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Role-Based Permissions</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Define committee roles with appropriate permissions—chairs can facilitate discussions and finalize decisions, members can participate in deliberations, and observers can view proceedings without voting rights. Ensure proper access control for sensitive committee work.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Conflict of Interest Management</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Automatically detect and flag potential conflicts of interest based on committee member affiliations, relationships, or prior interactions with candidates. Require recusal from discussions where conflicts exist, ensuring ethical committee processes.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Audit Trail Generation</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Generate complete audit trails of committee activities including member logins, discussion contributions, votes cast, and decisions made. Export audit reports for compliance reviews, donor reporting, or institutional governance requirements.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Stakeholder Communication</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Generate decision summaries and notification letters for candidates, donors, and institutional leadership. Customize communication templates while ensuring consistency and professionalism in all committee correspondence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">Transform Scholarship Interviews</h2>
          <p className="frag-lead mx-auto mt-4 max-w-2xl">
            Join scholarship programs using FragmentTrails to conduct fair, efficient interviews.
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
