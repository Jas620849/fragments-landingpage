import type { Metadata } from "next";
import Link from "next/link";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";
import FAQPageSchema from "@/app/components/FAQPageSchema";
import ServiceSchema from "@/app/components/ServiceSchema";

export const metadata: Metadata = {
  title: "Scholarship Tracking and Review System | Fragment Trails",
  description: "Scholarship tracking and review system for universities and scholarship providers. Streamline applications, reviews, scoring, and committee workflows.",
  keywords: [
    "scholarship tracking and review system",
    "scholarship management software",
    "scholarship application tracking",
    "scholarship review workflow",
    "scholarship committee management",
    "scholarship evaluation platform",
    "scholarship applicant review system",
    "scholarship administration software",
    "scholarship selection process",
    "higher education scholarship management",
    "scholarship review dashboard",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/scholarship-tracking-and-review-system/") }
    : undefined,
  openGraph: {
    title: "Scholarship Tracking and Review System | Fragment Trails",
    description: "Scholarship tracking and review system for universities and scholarship providers. Streamline applications, reviews, scoring, and committee workflows.",
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/scholarship-tracking-and-review-system/") : undefined,
  },
};

const faqs = [
  {
    question: "What is a scholarship tracking and review system?",
    answer: "A scholarship tracking and review system is a software platform designed to streamline the entire scholarship management process, from application submission through final selection. It enables universities, foundations, and scholarship providers to collect applications, assign reviewers, standardize evaluations, collaborate on decisions, and maintain audit trails—all in one centralized platform.",
  },
  {
    question: "How does Fragment Trails improve scholarship review workflows?",
    answer: "Fragment Trails transforms scholarship review workflows by automating repetitive tasks, standardizing evaluation criteria, and enabling real-time collaboration. Reviewers can access applications securely, score candidates using consistent rubrics, and communicate with committee members without email chains. Administrators gain visibility into progress, can identify bottlenecks, and generate comprehensive reports for stakeholders.",
  },
  {
    question: "Can scholarship committees collaborate in real-time?",
    answer: "Yes, Fragment Trails enables real-time collaboration for scholarship committees. Reviewers can discuss applications, share notes, and calibrate scores within the platform. Committee chairs can monitor progress, assign applications based on expertise, and facilitate consensus-building without scheduling endless meetings. All discussions and decisions are documented for transparency and compliance.",
  },
  {
    question: "How does the system handle reviewer assignment and workload distribution?",
    answer: "The scholarship tracking system includes intelligent reviewer assignment features. Administrators can manually assign applications based on reviewer expertise, or use automated distribution to ensure balanced workloads. The system tracks reviewer capacity, sends deadline reminders, and provides dashboards showing who has completed evaluations and who needs follow-up.",
  },
  {
    question: "What scoring and evaluation features are available?",
    answer: "Fragment Trails provides comprehensive scoring and evaluation tools including customizable rubrics, weighted criteria, normalized scoring across reviewers, bias detection alerts, and comparative ranking. Reviewers can add qualitative comments alongside quantitative scores, and the system calculates composite scores while flagging outliers for discussion.",
  },
  {
    question: "Is the scholarship review system suitable for large-scale programs?",
    answer: "Absolutely. Fragment Trails scales to handle scholarship programs of any size, from dozens to thousands of applications. The cloud-based infrastructure ensures performance regardless of volume, and features like bulk assignment, automated screening, and parallel review workflows enable large programs to maintain quality and timeliness even with high application volumes.",
  },
  {
    question: "How does the system ensure fairness and reduce bias in scholarship selection?",
    answer: "The platform promotes fairness through standardized evaluation rubrics, blind review options where identifying information is hidden, bias detection algorithms that flag outlier scores, and audit trails showing all reviewer actions. Committee chairs can review score distributions, identify potential bias patterns, and facilitate recalibration discussions before final decisions.",
  },
  {
    question: "What reporting and analytics capabilities are included?",
    answer: "Fragment Trails provides robust reporting including applicant demographics, score distributions, reviewer performance metrics, workflow efficiency analytics, and compliance reports. Administrators can generate custom reports for stakeholders, export data for further analysis, and track year-over-year trends to continuously improve their scholarship programs.",
  },
  {
    question: "Can applicants track their scholarship application status?",
    answer: "Yes, the system includes applicant portals where candidates can submit applications, upload required documents, and track their review status. Applicants receive automated updates at key milestones, reducing inquiry volume for administrators while providing transparency throughout the evaluation process.",
  },
  {
    question: "How does the system integrate with existing university systems?",
    answer: "Fragment Trails offers integration capabilities with student information systems (SIS), customer relationship management (CRM) platforms, and authentication systems. Single sign-on (SSO) support simplifies access for reviewers and administrators, while data integrations eliminate manual data entry and ensure consistency across systems.",
  },
  {
    question: "What security measures protect applicant and reviewer data?",
    answer: "Security is paramount in scholarship management. Fragment Trails employs encryption in transit and at rest, role-based access controls, audit logging of all actions, compliance with FERPA and GDPR where applicable, and regular security assessments. Applicant data is segregated by scholarship program, and reviewers only access applications they&apos;re explicitly assigned to evaluate.",
  },
  {
    question: "How long does it take to implement a scholarship tracking system?",
    answer: "Implementation timelines vary based on program complexity and customization needs. Simple programs can be operational in days, while enterprise deployments with multiple integrations typically take 4-8 weeks. Fragment Trails provides onboarding support, template libraries, and training resources to accelerate adoption regardless of timeline.",
  },
  {
    question: "Can the system handle different types of scholarships?",
    answer: "Yes, the platform is highly configurable to accommodate various scholarship types including merit-based, need-based, talent-specific, demographic-targeted, and renewable scholarships. Each scholarship can have custom application forms, evaluation criteria, workflows, and approval processes while sharing common infrastructure for efficiency.",
  },
  {
    question: "What support is available for scholarship administrators and reviewers?",
    answer: "Fragment Trails provides comprehensive support including documentation libraries, video tutorials, live chat support, and dedicated customer success managers for enterprise clients. Reviewer training materials ensure consistent evaluation quality, and administrator resources help programs optimize their workflows and leverage advanced features.",
  },
  {
    question: "How does the pricing model work for scholarship tracking software?",
    answer: "Pricing is typically based on factors including number of applications, reviewers, and scholarship programs. Fragment Trails offers flexible pricing including per-application plans, annual subscriptions for institutions, and custom enterprise agreements. Contact our sales team for a quote tailored to your specific program needs and volume.",
  },
  {
    question: "Can the system manage multi-stage scholarship selection processes?",
    answer: "Absolutely. Fragment Trails supports complex multi-stage workflows including initial screening, first-round reviews, committee deliberations, finalist interviews, and final selection. Each stage can have different evaluation criteria, reviewer pools, and approval processes, with automated transitions and status tracking throughout the entire lifecycle.",
  },
];

export default function ScholarshipTrackingAndReviewSystemPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Scholarship Tracking and Review System", path: "/scholarship-tracking-and-review-system/" }]} />
      <FAQPageSchema faqs={faqs} category="Scholarship Tracking and Review System" />
      <ServiceSchema 
        name="Scholarship Tracking and Review System"
        description="Comprehensive scholarship tracking and review system for universities and scholarship providers. Streamline applications, reviews, scoring, and committee workflows with Fragment Trails."
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Scholarship Tracking and Review System
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
                Transform your scholarship program with intelligent tracking, streamlined reviews, and data-driven selection. Universities and scholarship providers trust Fragment Trails to manage thousands of applications efficiently while ensuring fairness and transparency.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="https://app.fragmenttrails.com/auth/register"
                  className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-orange-500/25 transition hover:bg-orange-600 sm:px-8 sm:text-base"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/contact/"
                  className="rounded-xl px-6 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50 sm:px-8 sm:text-base"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                The Challenge of Modern Scholarship Management
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Scholarship committees face overwhelming challenges: managing thousands of applications across spreadsheets, coordinating dozens of reviewers via email, ensuring consistent evaluation standards, and maintaining transparency for stakeholders. Manual processes lead to delays, inconsistencies, and frustrated applicants.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Without a centralized scholarship tracking and review system, programs struggle with lost applications, missed deadlines, unclear evaluation criteria, and difficulty demonstrating fairness to donors and auditors. The administrative burden distracts from the mission: identifying and supporting deserving students.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Comprehensive Scholarship Management Features
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                End-to-end capabilities designed specifically for scholarship programs
              </p>
            </div>
            
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Application Tracking */}
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Application Tracking</h3>
                <p className="mt-2 text-slate-600">
                  Centralized application management with status tracking, document management, and automated workflows. Applicants submit once, administrators track everything in real-time.
                </p>
              </div>

              {/* Reviewer Assignment */}
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Reviewer Assignment</h3>
                <p className="mt-2 text-slate-600">
                  Intelligent assignment based on expertise, workload balancing, and conflict detection. Manual override options give administrators full control while automation saves time.
                </p>
              </div>

              {/* Scoring & Evaluation */}
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Scoring & Evaluation</h3>
                <p className="mt-2 text-slate-600">
                  Customizable rubrics, weighted criteria, normalized scoring, and bias detection. Ensure consistent evaluations across all reviewers while identifying outliers for discussion.
                </p>
              </div>

              {/* Committee Collaboration */}
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Committee Collaboration</h3>
                <p className="mt-2 text-slate-600">
                  Real-time discussion threads, shared notes, and consensus-building tools. Committees can deliberate efficiently without endless email chains or scheduling conflicts.
                </p>
              </div>

              {/* Workflow Automation */}
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Workflow Automation</h3>
                <p className="mt-2 text-slate-600">
                  Automated reminders, deadline notifications, status transitions, and approval routing. Reduce manual tasks while ensuring no application falls through the cracks.
                </p>
              </div>

              {/* Reporting & Analytics */}
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Reporting & Analytics</h3>
                <p className="mt-2 text-slate-600">
                  Comprehensive dashboards, applicant demographics, score distributions, and compliance reports. Data-driven insights for continuous program improvement and stakeholder communication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Benefits for All Stakeholders
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Every participant in the scholarship process gains value from Fragment Trails
              </p>
            </div>

            <div className="mt-16 space-y-12">
              {/* For Universities */}
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">For Universities</h3>
                  <p className="mt-4 text-slate-600">
                    Universities managing multiple scholarship programs benefit from centralized administration, consistent processes across departments, and comprehensive reporting for institutional leadership. The scholarship tracking system integrates with existing SIS platforms, eliminates duplicate data entry, and provides audit trails essential for accreditation and donor compliance.
                  </p>
                  <ul className="mt-4 space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">✓</span>
                      Centralized management of all institutional scholarships
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">✓</span>
                      Consistent evaluation standards across departments
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">✓</span>
                      Integration with student information systems
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">✓</span>
                      Comprehensive reporting for leadership and donors
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-50 p-8">
                  <h4 className="font-semibold text-slate-900">Key Impact</h4>
                  <p className="mt-2 text-slate-600">
                    Universities using Fragment Trails report 60% reduction in administrative time, 40% faster review cycles, and significantly improved stakeholder satisfaction with scholarship processes.
                  </p>
                </div>
              </div>

              {/* For Scholarship Committees */}
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">For Scholarship Committees</h3>
                  <p className="mt-4 text-slate-600">
                    Committee members save time with streamlined review workflows, clear evaluation criteria, and efficient collaboration tools. The scholarship review system eliminates scheduling conflicts by enabling asynchronous deliberation, provides context for each application, and ensures all reviewers have equal access to information.
                  </p>
                  <ul className="mt-4 space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">✓</span>
                      Asynchronous review eliminates meeting scheduling
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">✓</span>
                      Clear evaluation rubrics ensure consistency
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">✓</span>
                      Real-time collaboration on difficult decisions
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">✓</span>
                      Mobile access for reviews anywhere, anytime
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-50 p-8">
                  <h4 className="font-semibold text-slate-900">Key Impact</h4>
                  <p className="mt-2 text-slate-600">
                    Committee members complete reviews 50% faster with higher satisfaction scores. The platform reduces decision-making time while improving consensus and documentation quality.
                  </p>
                </div>
              </div>

              {/* For Administrators */}
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">For Administrators</h3>
                  <p className="mt-4 text-slate-600">
                    Scholarship administrators gain complete visibility into program status, automated workflow management, and powerful reporting capabilities. The scholarship administration software handles routine tasks like deadline reminders and status updates, freeing administrators to focus on strategic program improvement and donor relations.
                  </p>
                  <ul className="mt-4 space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">✓</span>
                      Real-time dashboards show program status at a glance
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">✓</span>
                      Automated workflows reduce manual tasks by 70%
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">✓</span>
                      Custom reports for any stakeholder requirement
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">✓</span>
                      Audit trails ensure compliance and transparency
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-50 p-8">
                  <h4 className="font-semibold text-slate-900">Key Impact</h4>
                  <p className="mt-2 text-slate-600">
                    Administrators manage 3x more applications without additional staff, reduce errors by 90%, and provide faster response times to all stakeholders including applicants and donors.
                  </p>
                </div>
              </div>

              {/* For Applicants */}
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">For Applicants</h3>
                  <p className="mt-4 text-slate-600">
                    Students experience a streamlined application process with clear requirements, real-time status tracking, and timely communication. The applicant portal provides guidance throughout the process, reduces anxiety about missing deadlines, and ensures all applications receive full consideration regardless of submission timing.
                  </p>
                  <ul className="mt-4 space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">✓</span>
                      Single portal for all scholarship applications
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">✓</span>
                      Real-time status updates reduce uncertainty
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">✓</span>
                      Clear requirements prevent incomplete submissions
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">✓</span>
                      Fair evaluation with standardized criteria
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-50 p-8">
                  <h4 className="font-semibold text-slate-900">Key Impact</h4>
                  <p className="mt-2 text-slate-600">
                    Applicants report 80% higher satisfaction with the process, submit more complete applications, and provide positive feedback that enhances institutional reputation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Detailed Use Cases
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                How organizations leverage Fragment Trails for scholarship management
              </p>
            </div>

            <div className="mt-16 space-y-12">
              <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-2xl font-semibold text-slate-900">University-Wide Scholarship Program</h3>
                <p className="mt-4 text-slate-600">
                  A public university managing 200+ scholarships across 15 departments implemented Fragment Trails to centralize all scholarship administration. Previously, each department used different processes—spreadsheets, email, paper forms—leading to inconsistent student experiences and administrative burden. The scholarship tracking system now provides unified application portal, standardized review workflows, department-level autonomy within institutional standards, and comprehensive reporting for leadership and donors.
                </p>
                <p className="mt-4 text-slate-600">
                  <strong>Results:</strong> 65% reduction in administrative overhead, 50% faster award decisions, and improved donor satisfaction with transparent reporting.
                </p>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-2xl font-semibold text-slate-900">Private Foundation Scholarship Awards</h3>
                <p className="mt-4 text-slate-600">
                  A national foundation awarding 500 scholarships annually across multiple states needed a scalable solution for their growing program. Manual processes became unsustainable as application volume increased. Fragment Trails provided automated application screening, geographically distributed reviewer assignment, standardized evaluation criteria, and detailed reporting for board meetings and donor communications.
                </p>
                <p className="mt-4 text-slate-600">
                  <strong>Results:</strong> Scaled to handle 3x application volume without adding staff, maintained evaluation quality, and improved board confidence in selection decisions.
                </p>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-2xl font-semibold text-slate-900">Corporate Scholarship Program</h3>
                <p className="mt-4 text-slate-600">
                  A Fortune 500 company running employee-dependent scholarships needed a system that aligned with corporate values while ensuring fairness. Fragment Trails enabled custom evaluation criteria incorporating both merit and need, reviewer assignment from employee volunteers across locations, compliance tracking for corporate governance requirements, and integration with HR systems for eligibility verification.
                </p>
                <p className="mt-4 text-slate-600">
                  <strong>Results:</strong> Increased employee engagement in the program, ensured compliance with corporate policies, and provided measurable impact reporting for CSR initiatives.
                </p>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-2xl font-semibold text-slate-900">Graduate Fellowship Selection</h3>
                <p className="mt-4 text-slate-600">
                  A research university&apos;s graduate school needed a sophisticated system for selecting fellowship recipients from highly qualified applicant pools. The scholarship evaluation platform supported complex multi-stage reviews, faculty expertise matching for assignment, detailed rubrics for research potential assessment, and committee deliberation tools for final selection decisions.
                </p>
                <p className="mt-4 text-slate-600">
                  <strong>Results:</strong> Improved faculty participation in reviews, more consistent evaluation across departments, and better identification of top research candidates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Fragment Trails */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Why Choose Fragment Trails
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Built specifically for scholarship management, not generic project management
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <div className="flex gap-4">
                <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-orange-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Purpose-Built for Scholarships</h3>
                  <p className="mt-2 text-slate-600">
                    Unlike generic project management tools, Fragment Trails is designed specifically for scholarship workflows. Every feature—from application tracking to committee collaboration—addresses real scholarship management challenges.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-orange-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Rapid Implementation</h3>
                  <p className="mt-2 text-slate-600">
                    Get started quickly with pre-built templates for common scholarship types, intuitive configuration tools, and comprehensive onboarding support. Most programs are operational within days, not months.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-orange-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Enterprise-Grade Security</h3>
                  <p className="mt-2 text-slate-600">
                    Protect sensitive applicant and reviewer data with encryption, role-based access controls, audit trails, and compliance with FERPA, GDPR, and other regulations. Your data security is our priority.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-orange-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Continuous Innovation</h3>
                  <p className="mt-2 text-slate-600">
                    Benefit from regular feature updates based on customer feedback and evolving best practices. Our scholarship tracking system evolves with your needs and the changing landscape of higher education.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-orange-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Dedicated Support</h3>
                  <p className="mt-2 text-slate-600">
                    Access expert support from scholarship management specialists. From implementation through ongoing operations, our team ensures your success with training, resources, and responsive assistance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-orange-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Flexible Pricing</h3>
                  <p className="mt-2 text-slate-600">
                    Choose pricing that fits your program scale and budget. From per-application options for small programs to enterprise subscriptions for large institutions, we offer transparent pricing without hidden fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Manual Process vs Fragment Trails
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                See the difference a purpose-built scholarship tracking system makes
              </p>
            </div>

            <div className="mt-16 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Feature</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Manual Process</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-orange-600">Fragment Trails</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-600">Application Collection</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Email, paper forms, multiple systems</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Centralized online portal</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-600">Reviewer Assignment</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Manual email distribution</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Automated with workload balancing</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-600">Evaluation Criteria</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Inconsistent across reviewers</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Standardized rubrics for all</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-600">Committee Collaboration</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Email chains, in-person meetings</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Real-time platform collaboration</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-600">Progress Tracking</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Manual status spreadsheets</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Real-time dashboards</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-600">Deadline Management</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Manual reminders, often missed</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Automated notifications</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-600">Bias Detection</td>
                    <td className="px-6 py-4 text-sm text-slate-600">None</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Algorithmic outlier detection</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-600">Reporting</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Manual compilation, time-consuming</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Instant custom reports</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-600">Audit Trail</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Incomplete or nonexistent</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Complete action logging</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-600">Applicant Communication</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Manual, often delayed</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Automated status updates</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Customer Pain Points */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Common Pain Points We Solve
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Challenges that scholarship programs face without proper systems
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl bg-red-50 p-6 ring-1 ring-red-100">
                <h3 className="text-lg font-semibold text-red-900">Lost Applications</h3>
                <p className="mt-2 text-red-700">
                  Applications buried in email inboxes or misplaced in physical files never receive consideration, frustrating applicants and potentially missing deserving candidates.
                </p>
              </div>

              <div className="rounded-xl bg-red-50 p-6 ring-1 ring-red-100">
                <h3 className="text-lg font-semibold text-red-900">Inconsistent Evaluations</h3>
                <p className="mt-2 text-red-700">
                  Without standardized criteria, reviewers apply different standards, leading to unfair outcomes and difficulty justifying decisions to stakeholders.
                </p>
              </div>

              <div className="rounded-xl bg-red-50 p-6 ring-1 ring-red-100">
                <h3 className="text-lg font-semibold text-red-900">Reviewer Burnout</h3>
                <p className="mt-2 text-red-700">
                  Manual processes overwhelm reviewers with administrative tasks, reducing participation quality and making recruitment difficult year after year.
                </p>
              </div>

              <div className="rounded-xl bg-red-50 p-6 ring-1 ring-red-100">
                <h3 className="text-lg font-semibold text-red-900">Missed Deadlines</h3>
                <p className="mt-2 text-red-700">
                  Without automated reminders and progress tracking, reviews run late, delaying award notifications and potentially violating donor requirements.
                </p>
              </div>

              <div className="rounded-xl bg-red-50 p-6 ring-1 ring-red-100">
                <h3 className="text-lg font-semibold text-red-900">Poor Visibility</h3>
                <p className="mt-2 text-red-700">
                  Administrators lack real-time insight into program status, making it impossible to identify bottlenecks or provide accurate updates to leadership.
                </p>
              </div>

              <div className="rounded-xl bg-red-50 p-6 ring-1 ring-red-100">
                <h3 className="text-lg font-semibold text-red-900">Compliance Risks</h3>
                <p className="mt-2 text-red-700">
                  Inadequate documentation and audit trails create compliance risks for donor requirements, accreditation, and regulatory reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Outcomes */}
        <section className="bg-slate-900 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Key Outcomes with Fragment Trails
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Measurable improvements that transform scholarship programs
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-500">60%</div>
                <p className="mt-2 text-slate-300">Faster Reviews</p>
                <p className="mt-1 text-sm text-slate-400">Streamlined workflows and automated tasks accelerate evaluation cycles</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-orange-500">90%</div>
                <p className="mt-2 text-slate-300">Reduced Errors</p>
                <p className="mt-1 text-sm text-slate-400">Automated processes eliminate manual data entry mistakes</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-orange-500">70%</div>
                <p className="mt-2 text-slate-300">Less Admin Work</p>
                <p className="mt-1 text-sm text-slate-400">Automation handles routine tasks, freeing staff for strategic work</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-orange-500">85%</div>
                <p className="mt-2 text-slate-300">Better Decisions</p>
                <p className="mt-1 text-sm text-slate-400">Data-driven insights and standardized criteria improve selection quality</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Common questions about scholarship tracking and review systems
              </p>
            </div>

            <div className="mt-16 space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-xl bg-slate-50 p-6 ring-1 ring-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                  <p className="mt-2 text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-b from-orange-500 to-orange-600 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Transform Your Scholarship Program?
              </h2>
              <p className="mt-4 text-lg text-orange-100">
                Join universities and scholarship providers who trust Fragment Trails to manage their scholarship programs efficiently and fairly.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="https://app.fragmenttrails.com/auth/register"
                  className="rounded-xl bg-white px-8 py-4 text-sm font-semibold text-orange-600 shadow-md transition hover:bg-orange-50 sm:text-base"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/contact/"
                  className="rounded-xl px-8 py-4 text-sm font-semibold text-white ring-1 ring-white/50 transition hover:bg-white/10 sm:text-base"
                >
                  Schedule Demo
                </Link>
              </div>
              <p className="mt-6 text-sm text-orange-200">
                No credit card required • Free 14-day trial • Cancel anytime
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
