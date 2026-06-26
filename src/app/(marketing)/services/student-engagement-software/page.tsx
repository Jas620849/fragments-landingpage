import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../../components/BreadcrumbSchema";
import ServiceSchema from "../../../components/ServiceSchema";

const title = "Student Engagement Software | Fragments";
const description =
  "Boost student engagement with Fragments. Our platform increases participation, encourages scholarly discourse, and creates meaningful learning experiences in classrooms.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "student engagement software",
    "classroom engagement tools",
    "increase student participation",
    "education engagement platform",
    "student motivation software",
    "fragment trails",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/services/student-engagement-software/") }
    : undefined,
  openGraph: {
    title: `${title} | Fragments`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/services/student-engagement-software/") : undefined,
    images: [
      {
        url: "/logo-no-bg.png",
        width: 512,
        height: 512,
        alt: "Fragments Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Fragments`,
    description,
    images: ["/logo-no-bg.png"],
  },
};

export default function StudentEngagementSoftwarePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: "Student Engagement Software", path: "/services/student-engagement-software/" },
        ]}
      />
      <ServiceSchema
        name="Student Engagement Software"
        description="Boost student engagement with Fragments. Our platform increases participation, encourages scholarly discourse, and creates meaningful learning experiences in classrooms."
      />
      <div className="min-h-screen">
        <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
          <div className="frag-container">
            <p className="frag-hero-eyebrow">Services</p>
            <h1 className="frag-hero-h1 mt-1.5">Student Engagement Software</h1>
            <p className="frag-hero-lead mx-auto !max-w-xl text-balance">
              Increase participation, encourage scholarly discourse, and create meaningful learning experiences with our engagement platform.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
          <div className="frag-container">
            <h2 className="frag-title text-center">Why Engagement Matters</h2>
            <p className="frag-lead mx-auto mt-4 max-w-3xl">
              Engaged students learn better, participate more, and achieve higher academic outcomes. Traditional lectures often fail to capture student attention or provide meaningful participation opportunities. FragmentTrails transforms passive learning into active engagement through structured discussions and gamified participation.
            </p>
            <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-secondary">Higher Participation</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                  Students are more likely to contribute when discussions are structured and rewarding. Fragment trails encourage every student to participate, not just the most vocal.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-secondary">Better Retention</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                  Active participation leads to deeper understanding and longer-term knowledge retention. Students who engage in discussions retain 60% more information than passive listeners.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-secondary">Improved Outcomes</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                  Engaged classrooms see better test scores, higher completion rates, and greater satisfaction. Structured discussions correlate with improved academic performance across all subjects.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="frag-container">
            <h2 className="frag-title text-center">Engagement Features</h2>
            <div className="mx-auto mt-8 max-w-4xl space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Rewards & Badges</h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                    Gamification elements motivate students to participate and contribute quality content. Earn badges for meaningful contributions, streaks for consistent participation, and recognition for scholarly discourse.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Progress Tracking</h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                    Students can track their progress and see how their contributions improve over time. Visual dashboards show participation history, quality metrics, and growth trajectories that encourage continuous improvement.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Peer Recognition</h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                    Students can recognize and appreciate quality contributions from their peers. Build a supportive learning community where students celebrate each other&apos;s insights and scholarly achievements.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Real-Time Feedback</h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                    Receive immediate feedback on contributions with AI-powered quality assessments. Students learn to improve their discourse quality through constructive, real-time guidance and suggestions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
          <div className="frag-container text-center">
            <h2 className="frag-title">Boost Engagement Today</h2>
            <p className="frag-lead mx-auto mt-3 max-w-2xl">
              Join educators who are transforming their classrooms with better student engagement.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`${process.env.NEXT_PUBLIC_FRONTEND_APP_URL || "https://app.fragmenttrails.com"}/auth/register`}
                className="frag-btn-primary inline-flex min-w-[10rem] px-5 shadow-md shadow-orange-500/25 sm:min-w-[11rem]"
              >
                Get Started Free
              </a>
              <a href="/contact/" className="inline-flex min-w-[10rem] items-center justify-center rounded-lg border-2 border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:min-w-[11rem] sm:text-sm">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
