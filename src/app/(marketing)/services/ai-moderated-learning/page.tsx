import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../../components/BreadcrumbSchema";
import ServiceSchema from "../../../components/ServiceSchema";

const title = "AI-Moderated Learning Platform | Fragments";
const description =
  "Experience AI-moderated learning with Fragments. Our intelligent system ensures quality discussions, fair assessment, and meaningful engagement in educational settings.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "AI moderated learning",
    "artificial intelligence in education",
    "automated discussion moderation",
    "AI assessment tools",
    "smart classroom technology",
    "fragment trails",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/services/ai-moderated-learning/") }
    : undefined,
  openGraph: {
    title: `${title} | Fragments`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/services/ai-moderated-learning/") : undefined,
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

export default function AIModeratedLearningPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: "AI-Moderated Learning", path: "/services/ai-moderated-learning/" },
        ]}
      />
      <ServiceSchema
        name="AI-Moderated Learning"
        description="Experience AI-moderated learning with Fragments. Our intelligent system ensures quality discussions, fair assessment, and meaningful engagement in educational settings."
      />
      <div className="min-h-screen">
        <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
          <div className="frag-container">
            <p className="frag-hero-eyebrow">Services</p>
            <h1 className="frag-hero-h1 mt-1.5">AI-Moderated Learning</h1>
            <p className="frag-hero-lead mx-auto !max-w-xl text-balance">
              Intelligent moderation that ensures quality discussions, fair assessment, and meaningful engagement in every educational setting.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
          <div className="frag-container">
            <h2 className="frag-title text-center">How AI Moderation Works</h2>
            <p className="frag-lead mx-auto mt-4 max-w-3xl">
              FragmentTrails uses advanced artificial intelligence to analyze, evaluate, and moderate educational discussions in real-time. Our AI system is trained on academic discourse patterns and educational best practices to ensure quality, fairness, and meaningful engagement.
            </p>
            <div className="mx-auto mt-8 max-w-4xl space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Content Analysis</h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                    AI analyzes student contributions for quality, relevance, and scholarly merit in real-time. Natural language processing identifies key concepts, argumentation quality, evidence usage, and academic tone to assess contribution value.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Quality Scoring</h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                    Each contribution is scored based on academic standards and discussion guidelines. Multi-dimensional scoring evaluates critical thinking, evidence support, clarity, relevance, and constructive engagement with peers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Fair Assessment</h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                    Consistent and unbiased evaluation ensures every student receives fair feedback. AI eliminates human bias in assessment, applying the same standards to all students regardless of background, writing style, or participation patterns.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600 font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Continuous Improvement</h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                    The system learns and improves over time, adapting to your specific educational context. Machine learning algorithms refine scoring models based on educator feedback, course-specific patterns, and institutional standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="frag-container">
            <h2 className="frag-title text-center">Benefits for Educators</h2>
            <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-secondary">Save Time</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                  Automate moderation and focus on teaching instead of managing discussions. AI handles routine evaluation tasks, freeing educators to provide high-value feedback on complex issues and facilitate deeper learning.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-secondary">Consistent Standards</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                  Apply the same quality standards across all students and discussions. Eliminate subjective variations in grading and ensure every student is evaluated against the same academic criteria.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-secondary">Data-Driven Insights</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                  Get detailed analytics on student engagement and discussion quality. Identify struggling students early, track learning progress, and make data-informed decisions about curriculum adjustments.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-secondary">Scalable Solution</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                  Handle large cohorts and multiple classrooms without additional resources. AI moderation scales effortlessly from small seminars to massive online courses while maintaining quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
          <div className="frag-container text-center">
            <h2 className="frag-title">Experience AI-Moderated Learning</h2>
            <p className="frag-lead mx-auto mt-3 max-w-2xl">
              See how intelligent moderation can transform your educational discussions.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`${process.env.NEXT_PUBLIC_FRONTEND_APP_URL || "https://app.fragmenttrails.com"}/auth/register`}
                className="frag-btn-primary inline-flex min-w-[10rem] px-5 shadow-md shadow-orange-500/25 sm:min-w-[11rem]"
              >
                Start Free Trial
              </a>
              <a href="/contact/" className="inline-flex min-w-[10rem] items-center justify-center rounded-lg border-2 border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:min-w-[11rem] sm:text-sm">
                Request Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
