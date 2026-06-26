import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faVideo, faUsers, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Student Interview Management System | FragmentTrails",
  description: "Complete student interview management for universities and scholarship programs. Schedule, conduct, and evaluate interviews with AI-powered tools.",
  keywords: [
    "student interview management system",
    "student interview platform",
    "admissions interview software",
    "scholarship interview software",
    "interview workflow automation",
    "campus interview coordination",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/student-interview-management/") }
    : undefined,
};

export default function StudentInterviewManagementPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Student Interview Management", path: "/student-interview-management/" },
        ]}
      />
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Interview Coordination</p>
          <h1 className="frag-hero-h1 mt-1.5">Student Interview Management System</h1>
          <p className="frag-hero-lead max-w-2xl">
            Streamline your entire student interview process from scheduling to evaluation. AI-powered tools help universities and scholarship programs make better admission decisions.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Complexity of Student Interview Management</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Managing student interviews for admissions and scholarships involves coordinating hundreds of candidates, dozens of interviewers, multiple locations, and tight timelines. Without proper tools, this process becomes a logistical nightmare.
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faCalendarAlt} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Scheduling Chaos</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Coordinating schedules across candidates, interviewers, and time zones creates endless conflicts and rescheduling.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faVideo} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Technology Fragmentation</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Using different tools for video, phone, and in-person interviews creates disjointed experiences and data silos.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Evaluator Coordination</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Ensuring interviewers have candidate materials, evaluation criteria, and consistent information is challenging.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Comprehensive Interview Management</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            FragmentTrails provides an end-to-end student interview management system that handles every aspect of the interview process, from initial scheduling to final evaluation.
          </p>
          <div className="mx-auto mt-10 max-w-4xl space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faCalendarAlt} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Automated Scheduling</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Streamline interview scheduling with automated calendar integration, self-service booking for candidates, and conflict resolution. Support multiple interview formats including video, phone, and in-person. Send automated reminders and handle rescheduling without administrative burden.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <FontAwesomeIcon icon={faVideo} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Unified Interview Platform</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Conduct all interviews within a single platform regardless of format. Built-in video conferencing, phone integration, and in-person check-in ensure consistent experience. Record interviews with consent for later review and quality assurance.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faGraduationCap} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Centralized Candidate Data</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Provide interviewers with complete candidate profiles including applications, essays, transcripts, and previous evaluations. Ensure every interviewer has the context they need to conduct effective interviews. Maintain data consistency across all interview stages.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faUsers} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Collaborative Evaluator Workflows</h3>
                <p className="mt-2 sm leading-relaxed text-slate-600">
                  Enable interviewers to collaborate before and after interviews. Share candidate insights, discuss evaluations, and reach consensus through structured workflows. Track interviewer participation and ensure balanced perspectives in final decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">System Capabilities</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Real-Time Moderation</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                AI-powered interview moderation ensures consistent questions, detects bias, and provides real-time feedback to interviewers.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Instant Scoring</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Score candidates during interviews with structured rubrics. Aggregate scores across interviewers for comprehensive evaluation.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">System Integration</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Integrate with admissions systems, CRM platforms, and student information systems for seamless data flow.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Analytics & Reporting</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Track interview outcomes, evaluator performance, and decision patterns. Use analytics to improve interview quality and selection accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">Streamline Student Interviews</h2>
          <p className="frag-lead mx-auto mt-4 max-w-2xl">
            Join institutions using FragmentTrails for comprehensive student interview management.
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
