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
            {platformData.description}. Discover how FragmentTrails enhances your workflow with seamless {platformData.name} integration for scholarship interviews, classroom discussions, and candidate evaluation.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="frag-container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              About {platformData.name}
            </h2>
            <p className="text-lg text-slate-600 mb-4">
              {platformData.name} is a leading {platformData.category} platform that serves millions of users worldwide. As a trusted destination for discovering new products, connecting with communities, and finding software solutions, {platformData.name} provides valuable exposure and reach for innovative tools like FragmentTrails.
            </p>
            <p className="text-lg text-slate-600 mb-4">
              FragmentTrails has established a presence on {platformData.name} to connect with educators, scholarship providers, and institutions seeking modern solutions for interview management and classroom discussion moderation. Our integration with {platformData.name} allows users to discover our AI-powered platform through a channel they already trust and use regularly.
            </p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why FragmentTrails on {platformData.name}?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-highlight-dark">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">AI-Powered Moderation</h3>
                    <p className="mt-2 text-slate-600">Automated content moderation for fair and unbiased discussions. Our AI algorithms analyze conversation patterns, identify potential biases, and provide real-time guidance to ensure productive and equitable dialogue in both scholarship interviews and classroom settings.</p>
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
                    <p className="mt-2 text-slate-600">Standardized interview processes for fair candidate evaluation. FragmentTrails enables institutions to create consistent evaluation rubrics, conduct structured interviews, and score candidates objectively, reducing bias and improving selection outcomes.</p>
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
                    <p className="mt-2 text-slate-600">Comprehensive insights and performance metrics. Track participation patterns, identify engagement trends, and measure the effectiveness of your discussions and interviews with detailed analytics that inform continuous improvement.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-highlight-dark">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Seamless Integration</h3>
                    <p className="mt-2 text-slate-600">Easy integration with existing workflows. FragmentTrails is designed to work alongside your current tools and processes, providing a smooth transition to AI-powered evaluation without disrupting established procedures.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Perfect For
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-slate-900">Scholarship Committees</h3>
                  <p className="mt-2 text-slate-600">Streamline your interview and selection process with AI-powered tools. Reduce bias, improve consistency, and make better decisions with data-driven insights that support fair and equitable scholarship distribution.</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-slate-900">Educational Institutions</h3>
                  <p className="mt-2 text-slate-600">Enhance classroom discussions with AI moderation and engagement tracking. Create more inclusive learning environments where all students can participate meaningfully while instructors focus on facilitating rather than policing conversations.</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-slate-900">HR Teams</h3>
                  <p className="mt-2 text-slate-600">Reduce bias and improve candidate evaluation with structured interviews. Implement consistent evaluation criteria across all hiring processes while maintaining the human touch that's essential for cultural fit assessment.</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-slate-900">Research Organizations</h3>
                  <p className="mt-2 text-slate-600">Conduct structured interviews and focus groups with built-in analysis tools. Ensure consistency across research sessions while capturing rich qualitative data that can be systematically analyzed and reported.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              How FragmentTrails Enhances {platformData.name} Workflows
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-3">Discovery</h3>
                <p className="text-slate-600">Users discover FragmentTrails through {platformData.name} when searching for scholarship interview solutions, classroom discussion tools, or AI-powered evaluation platforms.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-3">Evaluation</h3>
                <p className="text-slate-600">Prospective users can review FragmentTrails features, read feedback from other {platformData.name} users, and assess how our platform meets their specific needs.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-3">Implementation</h3>
                <p className="text-slate-600">Seamless onboarding process with dedicated support ensures smooth integration with existing workflows, maximizing the value of FragmentTrails from day one.</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Getting Started with FragmentTrails
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Whether you discovered FragmentTrails through {platformData.name} or are exploring our platform directly, getting started is simple. Our team provides comprehensive onboarding, training, and ongoing support to ensure your institution maximizes the benefits of AI-powered interview and discussion management.
            </p>
            <div className="rounded-lg bg-primary/10 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Ready to Transform Your Evaluation Process?</h3>
              <p className="text-slate-600 mb-6">
                Join the growing community of educators, scholarship providers, and institutions using FragmentTrails to create fairer, more efficient, and more insightful evaluation processes.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-primary/90"
                >
                  Schedule a Demo
                </Link>
                <Link
                  href="/pricing/"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
