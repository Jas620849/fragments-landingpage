import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faChartLine, faUsers, faClipboardCheck, faBrain } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Student Evaluation Platform | FragmentTrails",
  description: "Student evaluation platform for universities and scholarship programs. Comprehensive assessment tools for fair, consistent student evaluation.",
  keywords: [
    "student evaluation platform",
    "student assessment software",
    "education evaluation platform",
    "student performance tracking",
    "academic assessment tools",
    "holistic student evaluation",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/student-evaluation-platform/") }
    : undefined,
};

export default function StudentEvaluationPlatformPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Student Evaluation Platform", path: "/student-evaluation-platform/" },
        ]}
      />
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Education Assessment</p>
          <h1 className="frag-hero-h1 mt-1.5">Student Evaluation Platform</h1>
          <p className="frag-hero-lead max-w-2xl">
            Comprehensive student evaluation platform for universities and scholarship programs. Streamline assessment processes with AI-powered tools for fair, consistent student evaluation.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Modernizing Student Assessment</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Traditional student evaluation methods often rely on subjective assessments, inconsistent criteria, and manual processes that can introduce bias and inefficiency. Educational institutions need modern tools that enable holistic, fair, and data-driven student evaluation.
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faClipboardCheck} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Subjective Assessments</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Without structured frameworks, evaluations can be influenced by teacher bias or inconsistent standards.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Limited Collaboration</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Multiple evaluators struggle to coordinate and share insights, leading to fragmented assessment processes.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faChartLine} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Data Gaps</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Manual evaluation lacks the analytics needed to track progress, identify patterns, or demonstrate outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Comprehensive Evaluation Framework</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            FragmentTrails provides a complete student evaluation platform that supports holistic assessment across academic, extracurricular, and personal development dimensions.
          </p>
          <div className="mx-auto mt-10 max-w-4xl space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faGraduationCap} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Holistic Assessment Dimensions</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Evaluate students across multiple dimensions including academic achievement, critical thinking, collaboration skills, leadership potential, and personal growth. Move beyond grades to capture the full picture of student development.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <FontAwesomeIcon icon={faClipboardCheck} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Customizable Evaluation Criteria</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Design evaluation rubrics tailored to your institution&apos;s values and learning objectives. Define criteria for different programs, grade levels, or scholarship requirements. Ensure consistency while maintaining flexibility for diverse contexts.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faUsers} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Multi-Evaluator Collaboration</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Enable multiple teachers, mentors, or evaluators to contribute to student assessments. Share observations, discuss evaluations, and reach consensus through structured collaboration tools. Track evaluator contributions and ensure balanced perspectives.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faBrain} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">AI-Powered Insights</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Leverage AI to analyze student work, identify patterns in performance, and provide objective insights that supplement human evaluation. Detect potential bias in assessments and suggest calibration opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Platform Capabilities</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Performance Tracking</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Track student progress over time with comprehensive performance analytics. Monitor growth across evaluation dimensions and identify areas for improvement or intervention.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Portfolio Assessment</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Support portfolio-based evaluation where students showcase their best work across different domains. Enable holistic review of student achievements and capabilities.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">System Integration</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Integrate with learning management systems, student information systems, and academic databases. Sync grades, attendance, and other data for comprehensive evaluation.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Reporting & Analytics</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Generate detailed reports on student performance, program outcomes, and evaluation quality. Use analytics to improve teaching practices and demonstrate institutional effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">Transform Student Evaluation</h2>
          <p className="frag-lead mx-auto mt-4 max-w-2xl">
            Join educational institutions using FragmentTrails for fair, comprehensive student evaluation.
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
