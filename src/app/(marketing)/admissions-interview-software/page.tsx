import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faUniversity, faCalendarAlt, faBrain, faFileAlt } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Admissions Interview Software | FragmentTrails",
  description: "Transform college and university admissions with FragmentTrails. AI-powered interview software helps institutions evaluate candidates fairly, efficiently, and at scale.",
  keywords: [
    "admissions interview software",
    "college admissions interview platform",
    "university interview software",
    "admissions evaluation system",
    "higher education interview tools",
    "university admissions management",
    "college interview scheduling",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/admissions-interview-software/") }
    : undefined,
};

export default function AdmissionsInterviewSoftwarePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Admissions Interview Software", path: "/admissions-interview-software/" },
        ]}
      />
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Higher Education</p>
          <h1 className="frag-hero-h1 mt-1.5">Admissions Interview Software</h1>
          <p className="frag-hero-lead max-w-2xl">
            Transform your college and university admissions process with comprehensive interview software. AI-powered tools help evaluate candidates fairly and efficiently at scale.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Modernizing College Admissions Interviews</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            College and university admissions interviews play a crucial role in evaluating candidates beyond their academic records. However, traditional interview processes often suffer from scheduling challenges, inconsistent evaluation criteria, and subjective assessments that can compromise fairness.
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faCalendarAlt} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Scheduling Complexity</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Coordinating interviews between candidates, admissions officers, and faculty across multiple time zones creates logistical nightmares.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faUniversity} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Evaluation Inconsistency</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Different interviewers may ask different questions and use different evaluation standards, making candidate comparisons difficult.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBrain} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Subjective Assessments</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Without structured frameworks, interviews can be influenced by unconscious bias, leading to unfair outcomes and reduced diversity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">How FragmentTrails Modernizes Admissions</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Our admissions interview software provides a complete solution for higher education institutions seeking to modernize their interview processes while maintaining rigor and fairness.
          </p>
          <div className="mx-auto mt-10 max-w-4xl space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faCalendarAlt} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Automated Scheduling & Coordination</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Streamline interview scheduling with automated calendar integration, self-service booking for candidates, and intelligent conflict resolution. Support multiple interview formats including in-person, video, and phone interviews. Send automated reminders to reduce no-shows and ensure smooth operations.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Structured Interview Frameworks</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Implement standardized interview protocols with pre-approved question banks, scoring rubrics, and evaluation criteria. Ensure every candidate is asked similar questions and evaluated against the same standards. Customize frameworks for different programs, majors, or scholarship tracks.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faBrain} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">AI-Assisted Evaluation</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Leverage AI to transcribe interviews, analyze responses, and provide objective insights to supplement human evaluation. Our AI helps identify key themes, assess communication skills, and flag potential bias in interviewer assessments. Combine human judgment with data-driven insights for more holistic evaluations.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faFileAlt} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Comprehensive Documentation</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Capture detailed interview notes, recordings, and scores in a centralized system. Maintain complete audit trails for compliance and review. Generate comprehensive candidate profiles that combine interview performance with academic records, essays, and recommendations for holistic review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Features for Higher Education Institutions</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Multi-Format Interview Support</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Conduct in-person, video, phone, or asynchronous video interviews within a single platform. Provide flexibility for candidates while maintaining consistent evaluation standards across formats.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Committee Collaboration Tools</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Enable admissions committees to collaborate with shared candidate profiles, discussion threads, and consensus-building tools. Streamline committee decision-making with real-time collaboration features.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">System Integration</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Integrate with existing admissions systems, CRM platforms, and student information systems. Sync candidate data, update application statuses, and maintain data consistency across systems.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Analytics & Reporting</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Track interview metrics, analyze evaluator performance, and generate reports for institutional leadership. Use data to continuously improve your admissions process and demonstrate outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">Ready to Modernize Your Admissions Process?</h2>
          <p className="frag-lead mx-auto mt-4 max-w-2xl">
            Join universities and colleges that are transforming their admissions interviews with FragmentTrails.
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
