import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

const INDUSTRIES = [
  { code: "universities", name: "Universities", description: "Higher education institutions conducting scholarship and admission interviews" },
  { code: "colleges", name: "Colleges", description: "Colleges and community colleges managing student selection processes" },
  { code: "foundations", name: "Foundations", description: "Private and public scholarship foundations" },
  { code: "government-programs", name: "Government Programs", description: "Government-funded scholarship and fellowship programs" },
  { code: "fellowships", name: "Fellowships", description: "Fellowship and grant programs for research and study" },
  { code: "ngos", name: "NGOs", description: "Non-governmental organizations offering educational scholarships" },
];

export async function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({
    organization: industry.code,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ organization: string }> }): Promise<Metadata> {
  const { organization } = await params;
  const industry = INDUSTRIES.find((i) => i.code === organization);
  if (!industry) {
    return {
      title: "Scholarship Interview Platform",
      description: "Scholarship interview and candidate evaluation platform for education institutions.",
    };
  }

  return {
    title: `Scholarship Interview Software for ${industry.name} | FragmentTrails`,
    description: `Specialized scholarship interview and candidate evaluation platform for ${industry.name}. AI-powered assessment tools tailored for ${industry.description}.`,
    keywords: [
      `scholarship interview software ${industry.name}`,
      `candidate evaluation platform ${industry.name}`,
      `interview assessment tools ${industry.name}`,
      `scholarship management ${industry.name}`,
      `education technology ${industry.name}`,
    ],
    alternates: hasPublicSiteUrl()
      ? { canonical: canonicalUrl(`/industry/${industry.code}/`) }
      : undefined,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ organization: string }> }) {
  const { organization } = await params;
  const industry = INDUSTRIES.find((i) => i.code === organization);
  if (!industry) {
    return <div>Industry not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
        <h1 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
          Scholarship Interview Software for {industry.name}
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-textDark">
          FragmentTrails provides specialized scholarship interview and candidate evaluation solutions for {industry.name}. Our AI-powered platform is designed to meet the unique needs of {industry.description}.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary">Tailored for {industry.name}</h2>
          <ul className="mt-4 space-y-2 text-textDark">
            <li>• Customizable evaluation criteria for {industry.name}</li>
            <li>• AI-powered interview moderation and scoring</li>
            <li>• Bias reduction for fair candidate selection</li>
            <li>• Collaborative committee workflows</li>
            <li>• Comprehensive reporting and analytics</li>
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary">Key Benefits</h2>
          <ul className="mt-4 space-y-2 text-textDark">
            <li>• Streamlined interview processes</li>
            <li>• Consistent and fair evaluations</li>
            <li>• Data-driven selection decisions</li>
            <li>• Improved candidate experience</li>
            <li>• Time and resource efficiency</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
