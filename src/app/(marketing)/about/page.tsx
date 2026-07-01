import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import OrganizationSchema from "../../components/OrganizationSchema";
import {
  faBook,
  faCertificate,
  faChalkboardUser,
  faCog,
  faComments,
  faDollarSign,
  faLock,
  faRocket,
  faScaleBalanced,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const title = "About FragmentTrails | Structured Discussion Platform for Education";
const description =
  "Learn about FragmentTrails - the structured discussion platform enabling fair evaluations through evidence-based academic discourse. Discover our mission to transform educational assessments and scholarship interviews.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "about fragmenttrails",
    "structured discussion platform",
    "educational assessment tools",
    "scholarship interview software",
    "academic discourse platform",
    "evidence-based learning",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/about/") }
    : undefined,
  openGraph: {
    title: `${title} | FragmentTrails`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/about/") : undefined,
    images: [
      {
        url: "/logo-no-bg.png",
        width: 512,
        height: 512,
        alt: "FragmentTrails Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | FragmentTrails`,
    description,
    images: ["/logo-no-bg.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ]}
      />
      <OrganizationSchema
        name="FragmentTrails"
        description="Structured discussion platform enabling fair evaluations through evidence-based academic discourse for scholarship committees, educators, and institutions."
        url={hasPublicSiteUrl() ? canonicalUrl("/") : "https://fragmenttrails.com"}
        logo="https://fragmenttrails.com/logo-no-bg.png"
        sameAs={[
          "https://twitter.com/fragmenttrails",
          "https://linkedin.com/company/fragmenttrails",
        ]}
        contactPoint={{
          type: "ContactPoint",
          telephone: "+1-555-123-4567",
          contactType: "customer service",
          availableLanguage: "English",
        }}
      />
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_30%,rgba(45,212,191,0.35),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.25),transparent_40%)]"
          aria-hidden
        />
        <div className="relative frag-container">
          <div className="max-w-lg">
            <p className="frag-hero-eyebrow">About us</p>
            <h1 className="frag-hero-h1 mt-1.5">About FragmentTrails</h1>
            <p className="frag-hero-lead max-w-none">
              A structured discussion platform enabling scholarship committees, educators, and institutions to conduct fair, evidence-based evaluations through academic discourse.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">Who We Serve</h2>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3 md:gap-8">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-5 ring-1 ring-slate-100 sm:p-6">
              <FontAwesomeIcon icon={faBook} className="mx-auto h-9 w-9 text-amber-500" />
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                <span className="font-bold text-amber-700">Scholarship Committees</span> seeking fair, structured interview processes with AI-powered scoring and bias reduction tools.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-5 ring-1 ring-slate-100 sm:p-6">
              <FontAwesomeIcon icon={faComments} className="mx-auto h-9 w-9 text-teal-600" />
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                <span className="font-bold text-teal-700">Educators</span> building evidence-based classroom discussions where students learn to construct arguments using sources.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-5 ring-1 ring-slate-100 sm:p-6">
              <FontAwesomeIcon
                icon={faChalkboardUser}
                className="mx-auto h-9 w-9 text-blue-700"
              />
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                <span className="font-bold text-blue-800">Institutions</span> standardizing assessment processes across departments with collaborative evaluation tools and defensible records.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Our Mission</h2>
          <div className="mx-auto mt-8 max-w-3xl">
            <p className="text-base font-medium leading-relaxed text-slate-600">
              FragmentTrails was founded to address a critical challenge in educational assessment: the need for fair, consistent, and defensible evaluation processes. Traditional interviews and unstructured discussions often introduce bias, lack standardization, and fail to provide administrators with clear documentation of decision-making processes.
            </p>
            <p className="mt-4 text-base font-medium leading-relaxed text-slate-600">
              Our founders recognized that scholarship committees, educators, and institutions needed tools to conduct evidence-based evaluations where every response requires supporting documentation and every contribution undergoes quality review. We built FragmentTrails to replace subjective assessments with structured discussions that create transparent audit trails.
            </p>
            <p className="mt-4 text-base font-medium leading-relaxed text-slate-600">
              Today, FragmentTrails serves scholarship committees conducting fair interviews, educators building evidence-based classroom discussions, and institutions standardizing assessment processes across departments. Our platform combines AI-powered quality screening with human academic judgment to ensure discussions maintain rigor while remaining accessible.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Our Values</h2>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faScaleBalanced} className="h-8 w-8 text-blue-600" />
              <h3 className="mt-3 text-lg font-semibold text-secondary">Fair Evaluation</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Every assessment should be objective and defensible. Our structured discussion framework reduces bias and creates transparent documentation for administrative review.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faLock} className="h-8 w-8 text-teal-600" />
              <h3 className="mt-3 text-lg font-semibold text-secondary">Academic Rigor</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Evidence-based discussions require sources, logical reasoning, and quality screening. Our two-stage moderation ensures content meets scholarly standards.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-amber-600" />
              <h3 className="mt-3 text-lg font-semibold text-secondary">Institutional Trust</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Administrators need defensible records and consistent processes. FragmentTrails provides audit trails that stand up to scrutiny from accreditors and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Our Team</h2>
          <p className="frag-lead mx-auto mt-3 max-w-2xl">
            A dedicated team combining expertise in educational assessment, artificial intelligence, and academic administration.
          </p>
          <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-teal-500 text-2xl font-bold text-white">
                  FD
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Founding Team</h3>
                  <p className="text-sm font-medium text-slate-600">Educational Assessment Experts</p>
                </div>
              </div>
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-600">
                Our founders bring extensive experience in scholarship administration, academic assessment design, and educational technology. They recognized the need for structured evaluation tools that reduce bias while maintaining academic rigor.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-2xl font-bold text-white">
                  ET
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Engineering Team</h3>
                  <p className="text-sm font-medium text-slate-600">AI & Platform Development</p>
                </div>
              </div>
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-600">
                Our engineering team specializes in natural language processing, machine learning for educational applications, and secure platform architecture. They build the infrastructure that powers structured academic discussions.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-2xl font-bold text-white">
                  AC
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Academic Advisors</h3>
                  <p className="text-sm font-medium text-slate-600">Subject Matter Experts</p>
                </div>
              </div>
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-600">
                Our academic advisors ensure that evaluation frameworks align with best practices in scholarship selection and classroom assessment. They guide the development of fair, evidence-based evaluation criteria.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-2xl font-bold text-white">
                  CS
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Customer Success</h3>
                  <p className="text-sm font-medium text-slate-600">Implementation & Support</p>
                </div>
              </div>
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-600">
                Our customer success team helps institutions implement FragmentTrails effectively, providing training for administrators and educators while ensuring smooth integration with existing assessment processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Platform Capabilities</h2>
          <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-2">
            {[
              {
                icon: faCog,
                title: "Structured fragment trails",
                body: "Educators create discussion trails with sourced opening fragments. Students extend these with evidence-based responses, creating visible chains of reasoning suitable for evaluation.",
                border: "border-l-teal-500",
              },
              {
                icon: faUsers,
                title: "Collaborative evaluation",
                body: "Multiple reviewers can assess contributions simultaneously with consistent criteria, enabling fair scholarship interviews and classroom assessments.",
                border: "border-l-amber-500",
              },
              {
                icon: faLock,
                title: "Two-stage quality moderation",
                body: "Automated screening for plagiarism and baseline quality, followed by human review for tone and academic alignment, ensures all content meets standards.",
                border: "border-l-blue-600",
              },
              {
                icon: faCertificate,
                title: "Defensible evaluation records",
                body: "Complete audit trails of discussions and evaluations provide documentation that administrators can present to accreditors and stakeholders.",
                border: "border-l-amber-500",
              },
              {
                icon: faRocket,
                title: "Institutional scalability",
                body: "From single scholarship committees to university-wide assessment programs, the platform scales while maintaining consistent evaluation standards.",
                border: "border-l-purple-500",
              },
              {
                icon: faDollarSign,
                title: "Bias reduction tools",
                body: "AI-powered scoring and structured evaluation frameworks help reduce unconscious bias in scholarship interviews and academic assessments.",
                border: "border-l-green-500",
              },
            ].map((f) => (
              <div
                key={f.title}
                className={`flex gap-3 rounded-xl border border-slate-200/90 border-l-[3px] bg-slate-50/50 p-4 shadow-sm ring-1 ring-slate-100 sm:gap-4 sm:p-5 ${f.border}`}
              >
                <FontAwesomeIcon icon={f.icon} className="mt-0.5 h-7 w-7 shrink-0 text-secondary" />
                <div>
                  <h3 className="text-[0.9375rem] font-semibold text-secondary">{f.title}</h3>
                  <p className="mt-1 text-[13px] font-medium leading-relaxed text-textMuted sm:text-sm">
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
