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
          FragmentTrails provides powerful tools to {useCase.description}. Our AI-powered scholarship interview and candidate evaluation platform helps education institutions achieve fair, consistent, and efficient selection processes through advanced technology and proven methodologies.
        </p>
        
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-secondary">Understanding {useCase.name}</h2>
          <p className="mt-4 text-lg text-textDark">
            {useCase.name} is a critical challenge for education institutions, scholarship programs, and admissions committees worldwide. Traditional interview processes often suffer from inconsistencies, unconscious biases, and lack of standardization, leading to suboptimal selection decisions that can impact both institutions and candidates negatively.
          </p>
          <p className="mt-4 text-lg text-textDark">
            FragmentTrails addresses these challenges through a comprehensive platform that combines artificial intelligence, structured evaluation frameworks, and collaborative tools designed specifically for the education sector. Our solution enables institutions to implement evidence-based selection processes that are both fair and efficient.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-secondary">How FragmentTrails Helps</h2>
          <div className="mt-6 space-y-6">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">AI-Powered Bias Detection and Mitigation</h3>
              <p className="mt-3 text-textDark">
                Our advanced AI algorithms analyze interview responses in real-time, identifying potential biases based on language patterns, response lengths, and evaluation consistency. The system provides evaluators with actionable insights to ensure fair assessments and alerts when scoring patterns suggest unconscious bias may be influencing decisions.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Standardized Evaluation Rubrics and Criteria</h3>
              <p className="mt-3 text-textDark">
                FragmentTrails enables institutions to create and implement customized evaluation rubrics that align with their specific selection criteria. Our platform ensures all evaluators apply consistent standards across all candidates, reducing variability and improving the reliability of selection decisions. Rubrics can be tailored for different scholarship types, academic programs, or institutional priorities.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Real-Time Scoring and Candidate Comparison</h3>
              <p className="mt-3 text-textDark">
                Evaluators can score candidates in real-time using our intuitive interface, with immediate access to candidate profiles, application materials, and previous responses. The platform enables side-by-side candidate comparisons, ranking systems, and data-driven insights that support more informed selection decisions while maintaining transparency throughout the process.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Collaborative Panel Workflows</h3>
              <p className="mt-3 text-textDark">
                Our platform supports collaborative evaluation panels where multiple reviewers can assess candidates independently or in groups. Features include discussion threads, consensus-building tools, conflict resolution mechanisms, and comprehensive audit trails. This ensures diverse perspectives are considered while maintaining process integrity and accountability.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Comprehensive Analytics and Reporting</h3>
              <p className="mt-3 text-textDark">
                FragmentTrails provides detailed analytics on selection processes, evaluator performance, candidate demographics, and outcome metrics. Institutions can generate custom reports for stakeholders, identify areas for process improvement, and demonstrate the effectiveness and fairness of their selection practices to regulatory bodies and donors.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-secondary">Key Benefits for Your Institution</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Fairer and More Equitable Evaluations</h3>
              <p className="mt-3 text-textDark">
                By eliminating unconscious biases and ensuring consistent evaluation standards, FragmentTrails helps institutions create truly meritocratic selection processes that give all candidates equal opportunity regardless of background, demographics, or personal characteristics.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Consistent Scoring Across Evaluators</h3>
              <p className="mt-3 text-textDark">
                Our platform reduces inter-rater variability through standardized rubrics, calibration exercises, and real-time guidance. This ensures that candidates are evaluated consistently regardless of which evaluators review their applications or conduct their interviews.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Faster Selection Decision-Making</h3>
              <p className="mt-3 text-textDark">
                Streamlined workflows, automated scoring aggregation, and collaborative tools significantly reduce the time required to make selection decisions. Institutions can process more applications in less time while maintaining or improving decision quality.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Improved Candidate Experience</h3>
              <p className="mt-3 text-textDark">
                FragmentTrails creates a professional, transparent interview experience for candidates with clear communication, timely feedback, and fair processes. This enhances institutional reputation and attracts higher-quality applicants in future cycles.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Defensible Selection Processes</h3>
              <p className="mt-3 text-textDark">
                Comprehensive audit trails, documentation of evaluation rationale, and data-driven decision-making provide institutions with defensible selection processes that can withstand scrutiny from stakeholders, regulatory bodies, and legal challenges.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Cost and Resource Efficiency</h3>
              <p className="mt-3 text-textDark">
                By automating administrative tasks, reducing travel requirements through virtual interviews, and improving evaluator productivity, FragmentTrails helps institutions achieve significant cost savings while expanding their selection capacity.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-secondary">Implementation Process</h2>
          <div className="mt-6 space-y-4">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">1</div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Configuration and Setup</h3>
                <p className="mt-2 text-textDark">Our team works with your institution to configure evaluation rubrics, custom criteria, and workflow processes that align with your specific requirements and institutional values.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">2</div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Evaluator Training and Onboarding</h3>
                <p className="mt-2 text-textDark">We provide comprehensive training for evaluators on using the platform, understanding bias mitigation techniques, and applying standardized evaluation criteria effectively.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">3</div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Pilot and Refinement</h3>
                <p className="mt-2 text-textDark">Launch with a pilot program to validate the configuration, gather feedback, and make adjustments before full-scale implementation across your institution.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">4</div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Full Deployment and Optimization</h3>
                <p className="mt-2 text-textDark">Roll out across all selection processes with ongoing support, analytics review, and continuous improvement based on data insights and feedback.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-secondary">Success Metrics and Outcomes</h2>
          <p className="mt-4 text-lg text-textDark">
            Institutions using FragmentTrails for {useCase.name} typically see measurable improvements in their selection processes. Common outcomes include increased diversity among selected candidates, improved evaluator satisfaction, reduced time-to-decision, and enhanced ability to demonstrate process fairness to stakeholders.
          </p>
          <p className="mt-4 text-lg text-textDark">
            Our analytics dashboard helps institutions track these metrics over time, providing data-driven insights for continuous improvement and the ability to report outcomes to boards, donors, and regulatory authorities with confidence.
          </p>
        </div>

        <div className="mt-12 rounded-lg bg-primary/10 p-8">
          <h2 className="text-2xl font-bold text-secondary">Ready to Transform Your Selection Process?</h2>
          <p className="mt-4 text-lg text-textDark">
            Contact our team to learn how FragmentTrails can help your institution achieve {useCase.name} through AI-powered interview and evaluation technology. We offer customized solutions for universities, colleges, foundations, and scholarship programs of all sizes.
          </p>
          <div className="mt-6">
            <a
              href="/contact/"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary/90"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
