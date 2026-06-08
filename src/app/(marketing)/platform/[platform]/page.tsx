import { Metadata } from "next";
import Link from "next/link";

const PLATFORMS: Record<string, { name: string; category: string; description: string }> = {
  "product-hunt": {
    name: "Product Hunt",
    category: "Product Discovery",
    description: "The best new products in tech, everyday",
  },
  reddit: {
    name: "Reddit",
    category: "Community",
    description: "The front page of the internet",
  },
  "indie-hackers": {
    name: "Indie Hackers",
    category: "Community",
    description: "Connect with indie founders and learn from their journeys",
  },
  "hacker-news": {
    name: "Hacker News",
    category: "Community",
    description: "A computer science link aggregator",
  },
  betalist: {
    name: "BetaList",
    category: "Product Discovery",
    description: "Discover and get early access to the latest startups and products",
  },
  alternativeto: {
    name: "AlternativeTo",
    category: "Software Directory",
    description: "Find new software alternatives",
  },
  g2: {
    name: "G2",
    category: "Review Platform",
    description: "The world's largest business software review platform",
  },
  capterra: {
    name: "Capterra",
    category: "Review Platform",
    description: "Discover the right software for your business",
  },
  "getapp": {
    name: "GetApp",
    category: "Software Directory",
    description: "The best software applications for your business",
  },
  "software-advice": {
    name: "Software Advice",
    category: "Software Directory",
    description: "Software recommendations and reviews",
  },
  saashub: {
    name: "SaaSHub",
    category: "Software Directory",
    description: "Discover the best SaaS products",
  },
  startupbase: {
    name: "StartupBase",
    category: "Startup Directory",
    description: "Discover and track the best startups",
  },
  microlaunch: {
    name: "Microlaunch",
    category: "Product Discovery",
    description: "Launch your micro-SaaS product",
  },
  uneed: {
    name: "Uneed",
    category: "Product Discovery",
    description: "The best tools for your next project",
  },
  fazier: {
    name: "Fazier",
    category: "Product Discovery",
    description: "Discover the best products for your workflow",
  },
  "launching-next": {
    name: "Launching Next",
    category: "Product Discovery",
    description: "The best upcoming product launches",
  },
  "theres-an-ai-for-that": {
    name: "There's An AI For That",
    category: "AI Directory",
    description: "The largest database of AI tools",
  },
  futurepedia: {
    name: "Futurepedia",
    category: "AI Directory",
    description: "The largest AI tools directory",
  },
  "ai-tool-hunt": {
    name: "AI Tool Hunt",
    category: "AI Directory",
    description: "Discover the best AI tools",
  },
  "topai-tools": {
    name: "TopAI Tools",
    category: "AI Directory",
    description: "Top AI tools for your needs",
  },
  "toolify-ai": {
    name: "Toolify AI",
    category: "AI Directory",
    description: "The best AI tools directory",
  },
};

export async function generateStaticParams() {
  return Object.keys(PLATFORMS).map((platform) => ({
    platform,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ platform: string }> }): Promise<Metadata> {
  const { platform } = await params;
  const platformData = PLATFORMS[platform];

  if (!platformData) {
    return {
      title: "Platform Not Found",
    };
  }

  return {
    title: `${platformData.name} - FragmentTrails Integration`,
    description: `Discover how FragmentTrails integrates with ${platformData.name}. ${platformData.description}. Streamline your scholarship interview and classroom discussion management.`,
    keywords: [
      platformData.name,
      platformData.category,
      "FragmentTrails",
      "scholarship interview software",
      "classroom discussion platform",
      "AI moderation",
      "student engagement",
    ],
    openGraph: {
      title: `${platformData.name} - FragmentTrails`,
      description: `Discover how FragmentTrails integrates with ${platformData.name}. ${platformData.description}.`,
      type: "website",
    },
  };
}

export default async function PlatformPage({ params }: { params: Promise<{ platform: string }> }) {
  const { platform } = await params;
  const platformData = PLATFORMS[platform];

  if (!platformData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Platform Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="border-b border-slate-200/80 bg-slate-900 py-16 sm:py-20">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">{platformData.category}</p>
          <h1 className="frag-hero-h1 mt-2">
            {platformData.name} Integration
          </h1>
          <p className="frag-hero-lead max-w-3xl mt-4">
            {platformData.description}. Discover how FragmentTrails enhances your workflow with seamless {platformData.name} integration.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="frag-container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Why FragmentTrails on {platformData.name}?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-highlight-dark">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">AI-Powered Moderation</h3>
                    <p className="mt-1 text-slate-600">Automated content moderation for fair and unbiased discussions</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-highlight-dark">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Structured Interviews</h3>
                    <p className="mt-1 text-slate-600">Standardized interview processes for fair candidate evaluation</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-highlight-dark">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Real-time Analytics</h3>
                    <p className="mt-1 text-slate-600">Comprehensive insights and performance metrics</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Perfect For
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-slate-900">Scholarship Committees</h3>
                  <p className="mt-2 text-slate-600">Streamline your interview and selection process with AI-powered tools</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-slate-900">Educational Institutions</h3>
                  <p className="mt-2 text-slate-600">Enhance classroom discussions with AI moderation and engagement tracking</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-slate-900">HR Teams</h3>
                  <p className="mt-2 text-slate-600">Reduce bias and improve candidate evaluation with structured interviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-slate-600 mb-8">
              Join thousands of organizations using FragmentTrails to transform their interview and discussion processes
            </p>
            <Link
              href="/pricing/"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:from-amber-400 hover:to-orange-500"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
