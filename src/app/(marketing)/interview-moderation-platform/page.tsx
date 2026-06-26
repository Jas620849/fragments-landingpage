import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faRobot, faCheckDouble, faGraduationCap, faBalanceScale } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Interview Moderation Platform | FragmentTrails",
  description: "AI-powered interview moderation platform for fair, structured scholarship and admission interviews. Bias reduction and quality assurance for education institutions.",
  keywords: [
    "interview moderation platform",
    "interview moderation software",
    "AI interview moderation",
    "bias free interview platform",
    "structured interview moderation",
    "interview quality assurance",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/interview-moderation-platform/") }
    : undefined,
};

export default function InterviewModerationPlatformPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Interview Moderation Platform", path: "/interview-moderation-platform/" },
        ]}
      />
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Quality Assurance</p>
          <h1 className="frag-hero-h1 mt-1.5">Interview Moderation Platform</h1>
          <p className="frag-hero-lead max-w-2xl">
            Ensure fair, consistent interviews with AI-powered moderation. Our platform reduces bias, maintains quality standards, and provides structured frameworks for scholarship and admission interviews.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">The Need for Interview Moderation</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Unmoderated interviews can lead to inconsistent experiences, biased questions, and unfair outcomes. Scholarship committees and admissions offices need tools to ensure every interview meets quality standards and provides equal opportunity for all candidates.
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBalanceScale} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Inconsistent Questions</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Interviewers may ask different questions to different candidates, making fair comparisons impossible.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faShieldAlt} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Bias in Interactions</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Interviewer behavior, tone, and follow-up questions can be influenced by unconscious bias affecting candidate performance.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faCheckDouble} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Quality Variance</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Without oversight, interview quality varies significantly between interviewers, compromising the selection process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">AI-Powered Moderation Capabilities</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            FragmentTrails combines AI technology with human oversight to create a comprehensive interview moderation system that ensures quality, fairness, and consistency across all interviews.
          </p>
          <div className="mx-auto mt-10 max-w-4xl space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faRobot} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Real-Time Content Analysis</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  AI analyzes interview transcripts in real-time to identify inappropriate questions, biased language, or off-topic discussions. The system alerts moderators when interviews deviate from approved frameworks, allowing immediate intervention to maintain quality standards.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <FontAwesomeIcon icon={faBalanceScale} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Bias Detection & Flagging</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Our AI detects patterns that may indicate bias in interviewer behavior, including differential questioning, varying follow-up depth, or tone differences based on candidate characteristics. Flagged interviews are reviewed by human moderators to ensure fair treatment.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faCheckDouble} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Framework Compliance Monitoring</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Ensure interviewers follow approved question frameworks and time allocations. The system tracks which questions are asked, measures response time, and verifies that all required topics are covered. Generate compliance reports for quality assurance.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faGraduationCap} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Evaluator Training & Feedback</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Use moderation data to provide targeted feedback to interviewers. Identify areas for improvement, share best practices from high-performing interviewers, and track improvement over time. Build a culture of continuous quality improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Moderation Platform Features</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Live Moderation Dashboard</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Monitor interviews in real-time from a central dashboard. View live transcripts, receive alerts for potential issues, and intervene when necessary to maintain interview quality.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Post-Interview Review</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Review completed interviews with AI-generated quality scores. Access flagged sections, review compliance with frameworks, and provide structured feedback to interviewers.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Customizable Moderation Rules</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Define moderation rules specific to your organization&apos;s standards. Set thresholds for bias detection, specify required questions, and customize quality criteria.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Compliance Reporting</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Generate comprehensive reports on interview quality, bias incidents, and compliance metrics. Demonstrate fair practices to auditors, donors, or regulatory bodies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">Ensure Interview Quality & Fairness</h2>
          <p className="frag-lead mx-auto mt-4 max-w-2xl">
            Join institutions using FragmentTrails to moderate interviews and ensure consistent, fair candidate evaluations.
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
