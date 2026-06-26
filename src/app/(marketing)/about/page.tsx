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

const title = "About Fragments | AI-Moderated Educational Platform";
const description =
  "Learn about Fragments - the AI-moderated educational platform that encourages scholarly discourse while financially rewarding knowledgeable educators. Discover our mission, history, and team.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "about fragments",
    "fragments company history",
    "educational platform mission",
    "scholarly discourse platform",
    "AI-moderated learning",
    "fragment trails",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/about/") }
    : undefined,
  openGraph: {
    title: `${title} | Fragments`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/about/") : undefined,
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
        name="Fragments"
        description="AI-moderated educational platform that encourages scholarly discourse while financially rewarding knowledgeable educators."
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
            <h1 className="frag-hero-h1 mt-1.5">About Fragments</h1>
            <p className="frag-hero-lead max-w-none">
              The only platform online that encourages scholarly discourse while
              financially rewarding knowledgeable and dedicated educators.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">We invite…</h2>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3 md:gap-8">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-5 ring-1 ring-slate-100 sm:p-6">
              <FontAwesomeIcon icon={faBook} className="mx-auto h-9 w-9 text-amber-500" />
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                <span className="font-bold text-amber-700">Educators</span> to share
                their expertise with fragments of information.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-5 ring-1 ring-slate-100 sm:p-6">
              <FontAwesomeIcon icon={faComments} className="mx-auto h-9 w-9 text-teal-600" />
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                <span className="font-bold text-teal-700">Learners</span> to ask
                questions and participate in scholarly discussion to extend the
                trail of fragments.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-5 ring-1 ring-slate-100 sm:p-6">
              <FontAwesomeIcon
                icon={faChalkboardUser}
                className="mx-auto h-9 w-9 text-blue-700"
              />
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                <span className="font-bold text-blue-800">Reviewers</span> to provide
                feedback in the spirit of knowledge sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Our Story</h2>
          <div className="mx-auto mt-8 max-w-3xl">
            <p className="text-base font-medium leading-relaxed text-slate-600">
              Fragments was founded with a simple yet powerful vision: to create an educational platform that truly values and rewards the expertise of educators while providing learners with access to high-quality, scholarly discourse.
            </p>
            <p className="mt-4 text-base font-medium leading-relaxed text-slate-600">
              We recognized that traditional educational platforms often fail to adequately compensate educators for their knowledge and time. At the same time, learners struggle to find reliable, well-moderated discussions that enhance their understanding. Fragments bridges this gap by creating an ecosystem where educators are financially rewarded for quality contributions, and learners benefit from structured, AI-moderated scholarly discussions.
            </p>
            <p className="mt-4 text-base font-medium leading-relaxed text-slate-600">
              Our platform leverages cutting-edge artificial intelligence to moderate discussions, ensure quality, and maintain academic standards. This allows us to scale scholarly discourse while preserving the human element that makes education meaningful.
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
              <h3 className="mt-3 text-lg font-semibold text-secondary">Fair Compensation</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Educators deserve to be paid for their expertise. We ensure fair financial rewards for quality contributions that benefit the learning community.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faLock} className="h-8 w-8 text-teal-600" />
              <h3 className="mt-3 text-lg font-semibold text-secondary">Quality First</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                AI-powered moderation and expert review ensure that all content meets high academic standards and provides genuine educational value.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-amber-600" />
              <h3 className="mt-3 text-lg font-semibold text-secondary">Community Driven</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                We believe in the power of community. Our platform thrives on the collective knowledge and collaborative spirit of educators and learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Our Team</h2>
          <p className="frag-lead mx-auto mt-3 max-w-2xl">
            A passionate team of educators, technologists, and innovators committed to transforming online education.
          </p>
          <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-teal-500 text-2xl font-bold text-white">
                  FD
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Founding Team</h3>
                  <p className="text-sm font-medium text-slate-600">Education & Technology Experts</p>
                </div>
              </div>
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-600">
                Our founders bring decades of combined experience in education technology, academic research, and software development. They envisioned a platform that truly values educational expertise.
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
                Our engineering team specializes in artificial intelligence, natural language processing, and scalable platform architecture. They build the technology that powers our AI-moderated discussions.
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
                Our academic advisors ensure that our platform maintains the highest standards of scholarly discourse. They guide content quality and educational best practices.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-2xl font-bold text-white">
                  CS
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Community Support</h3>
                  <p className="text-sm font-medium text-slate-600">User Success Team</p>
                </div>
              </div>
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-600">
                Our community support team ensures that every user has a positive experience on Fragments. They provide guidance, resolve issues, and foster a welcoming learning environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Platform features</h2>
          <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-2">
            {[
              {
                icon: faCog,
                title: "Fragment trails",
                body: "Create and follow educational paths curated by expert contributors. Navigate complex topics through structured, interconnected discussions.",
                border: "border-l-teal-500",
              },
              {
                icon: faUsers,
                title: "Community engagement",
                body: "Connect with fellow learners and educators in your field of interest. Build networks and collaborate on educational projects.",
                border: "border-l-amber-500",
              },
              {
                icon: faLock,
                title: "Quality assurance",
                body: "AI-powered moderation and expert review process ensure all content meets high academic standards and provides genuine value.",
                border: "border-l-blue-600",
              },
              {
                icon: faCertificate,
                title: "Verified contributors",
                body: "Content created by authenticated subject matter experts. Trust that you're learning from qualified educators and professionals.",
                border: "border-l-amber-500",
              },
              {
                icon: faRocket,
                title: "Scalable learning",
                body: "From individual classrooms to massive online courses, our platform scales to meet your educational needs without compromising quality.",
                border: "border-l-purple-500",
              },
              {
                icon: faDollarSign,
                title: "Financial rewards",
                body: "Educators earn compensation for quality contributions. Turn your expertise into income while helping others learn.",
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
