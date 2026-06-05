import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

const USE_CASES = [
  { code: "reduce-interview-bias", name: "Reduce Interview Bias", description: "Eliminate unconscious bias in scholarship and admission interviews" },
  { code: "improve-candidate-scoring", name: "Improve Candidate Scoring", description: "Enhance accuracy and consistency in candidate evaluation and scoring" },
  { code: "interview-standardization", name: "Interview Standardization", description: "Standardize interview processes across evaluators and panels" },
  { code: "faster-selection-decisions", name: "Faster Selection Decisions", description: "Accelerate scholarship and admission selection processes" },
  { code: "fair-candidate-evaluation", name: "Fair Candidate Evaluation", description: "Ensure equitable and transparent candidate assessment" },
  { code: "panel-calibration", name: "Panel Calibration", description: "Calibrate interview panels for consistent scoring" },
  { code: "data-driven-selection", name: "Data-Driven Selection", description: "Make selection decisions based on comprehensive data and analytics" },
];

export async function generateStaticParams() {
  return USE_CASES.map((useCase) => ({
    goal: useCase.code,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ goal: string }> }): Promise<Metadata> {
  const { goal } = await params;
  const useCase = USE_CASES.find((u) => u.code === goal);
  if (!useCase) {
    return {
      title: "Scholarship Interview Platform",
      description: "Scholarship interview and candidate evaluation platform for education institutions.",
    };
  }

  return {
    title: `${useCase.name} with FragmentTrails | Scholarship Interview Software`,
    description: `Learn how FragmentTrails helps ${useCase.description}. AI-powered scholarship interview and candidate evaluation platform for education institutions.`,
    keywords: [
      `${useCase.name}`,
      "scholarship interview software",
      "candidate evaluation platform",
      "interview assessment tools",
      "education technology",
    ],
    alternates: hasPublicSiteUrl()
      ? { canonical: canonicalUrl(`/use-case/${useCase.code}/`) }
      : undefined,
  };
}

export default async function UseCasePage({ params }: { params: Promise<{ goal: string }> }) {
  const { goal } = await params;
  const useCase = USE_CASES.find((u) => u.code === goal);
  if (!useCase) {
    return <div>Use case not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
        <h1 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
          {useCase.name} with FragmentTrails
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-textDark">
          FragmentTrails provides powerful tools to {useCase.description}. Our AI-powered scholarship interview and candidate evaluation platform helps education institutions achieve fair, consistent, and efficient selection processes.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary">How FragmentTrails Helps</h2>
          <ul className="mt-4 space-y-2 text-textDark">
            <li>• AI-powered bias detection and mitigation</li>
            <li>• Standardized evaluation rubrics and criteria</li>
            <li>• Real-time scoring and candidate comparison</li>
            <li>• Collaborative panel workflows</li>
            <li>• Comprehensive analytics and reporting</li>
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary">Benefits</h2>
          <ul className="mt-4 space-y-2 text-textDark">
            <li>• Fairer and more equitable evaluations</li>
            <li>• Consistent scoring across evaluators</li>
            <li>• Faster selection decision-making</li>
            <li>• Improved candidate experience</li>
            <li>• Defensible selection processes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
