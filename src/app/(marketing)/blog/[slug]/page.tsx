import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { BlogPostMeta } from "../_data";
import { BLOG_POSTS, getBlogPost } from "../_data";
import { SITE_NAME } from "@/lib/seo-constants";
import { absoluteAsset, canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import ArticleSchema from "../../../components/ArticleSchema";
import BreadcrumbSchema from "../../../components/BreadcrumbSchema";
import HowToReduceBiasInScholarshipInterviews from "../content/how-to-reduce-bias-in-scholarship-interviews";
import ScholarshipInterviewScoringBestPractices from "../content/scholarship-interview-scoring-best-practices";
import StructuredVsUnstructuredInterviews from "../content/structured-vs-unstructured-interviews";
import AIPoweredInterviewEvaluation from "../content/ai-powered-interview-evaluation";
import InterviewerTrainingBestPractices from "../content/interviewer-training-best-practices";
import DiversityInScholarshipSelection from "../content/diversity-in-scholarship-selection";
import MeasuringScholarshipSuccess from "../content/measuring-scholarship-success";
import VirtualScholarshipInterviews from "../content/virtual-scholarship-interviews";
import ScholarshipProgramManagement from "../content/scholarship-program-management";
import ScholarshipAlumniEngagement from "../content/scholarship-alumni-engagement";
import ScholarshipRecipientSupport from "../content/scholarship-recipient-support";
import ScholarshipApplicationProcess from "../content/scholarship-application-process";
import ScholarshipOutreachStrategies from "../content/scholarship-outreach-strategies";
import ScholarshipDonorRelations from "../content/scholarship-donor-relations";
import ScholarshipFinancialLiteracy from "../content/scholarship-financial-literacy";
import ScholarshipMentorshipPrograms from "../content/scholarship-mentorship-programs";
import ScholarshipRenewalCriteria from "../content/scholarship-renewal-criteria";
import ScholarshipSelectionCommittee from "../content/scholarship-selection-committee";
import ScholarshipEssayEvaluation from "../content/scholarship-essay-evaluation";
import ScholarshipInterviewPreparation from "../content/scholarship-interview-preparation";
import ScholarshipTechnologySolutions from "../content/scholarship-technology-solutions";
import ScholarshipImpactMeasurement from "../content/scholarship-impact-measurement";
import ScholarshipEquityInclusion from "../content/scholarship-equity-inclusion";
import ScholarshipCollaborationPartnerships from "../content/scholarship-collaboration-partnerships";
import ScholarshipCrisisManagement from "../content/scholarship-crisis-management";
import ScholarshipSustainabilityGrowth from "../content/scholarship-sustainability-growth";
import ScholarshipLegalCompliance from "../content/scholarship-legal-compliance";
import ScholarshipInnovationFuture from "../content/scholarship-innovation-future";
import ScholarshipGlobalPerspectives from "../content/scholarship-global-perspectives";
import ScholarshipBestPracticesSummary from "../content/scholarship-best-practices-summary";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return { title: { absolute: "Post not found | Blog" } };
  }
  const pageTitle = `${post.title} | Blog`;
  return {
    title: { absolute: pageTitle },
    description: post.description,
    keywords: [
      post.title.toLowerCase(),
      "fragments blog",
      "education technology",
      "classroom discussion",
      "teaching strategies",
      "fragment trails",
    ],
    alternates: hasPublicSiteUrl()
      ? { canonical: canonicalUrl(`/blog/${slug}/`) }
      : undefined,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.publishedISO,
      url: hasPublicSiteUrl() ? canonicalUrl(`/blog/${slug}/`) : undefined,
      images: [
        {
          url: "/logo-no-bg.png",
          width: 512,
          height: 512,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/logo-no-bg.png"],
    },
  };
}

function BlogPostingJsonLd({ post, slug }: { post: BlogPostMeta; slug: string }) {
  if (!hasPublicSiteUrl()) return null;
  const payload = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedISO,
    url: canonicalUrl(`/blog/${slug}/`),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl(`/blog/${slug}/`),
    },
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: absoluteAsset("/logo-no-bg.png"),
      },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

function PostBody({ slug }: { slug: string }) {
  switch (slug) {
    case "how-to-reduce-bias-in-scholarship-interviews":
      return <HowToReduceBiasInScholarshipInterviews />;
    case "scholarship-interview-scoring-best-practices":
      return <ScholarshipInterviewScoringBestPractices />;
    case "structured-vs-unstructured-interviews":
      return <StructuredVsUnstructuredInterviews />;
    case "ai-powered-interview-evaluation":
      return <AIPoweredInterviewEvaluation />;
    case "interviewer-training-best-practices":
      return <InterviewerTrainingBestPractices />;
    case "diversity-in-scholarship-selection":
      return <DiversityInScholarshipSelection />;
    case "measuring-scholarship-success":
      return <MeasuringScholarshipSuccess />;
    case "virtual-scholarship-interviews":
      return <VirtualScholarshipInterviews />;
    case "scholarship-program-management":
      return <ScholarshipProgramManagement />;
    case "scholarship-alumni-engagement":
      return <ScholarshipAlumniEngagement />;
    case "scholarship-recipient-support":
      return <ScholarshipRecipientSupport />;
    case "scholarship-application-process":
      return <ScholarshipApplicationProcess />;
    case "scholarship-outreach-strategies":
      return <ScholarshipOutreachStrategies />;
    case "scholarship-donor-relations":
      return <ScholarshipDonorRelations />;
    case "scholarship-financial-literacy":
      return <ScholarshipFinancialLiteracy />;
    case "scholarship-mentorship-programs":
      return <ScholarshipMentorshipPrograms />;
    case "scholarship-renewal-criteria":
      return <ScholarshipRenewalCriteria />;
    case "scholarship-selection-committee":
      return <ScholarshipSelectionCommittee />;
    case "scholarship-essay-evaluation":
      return <ScholarshipEssayEvaluation />;
    case "scholarship-interview-preparation":
      return <ScholarshipInterviewPreparation />;
    case "scholarship-technology-solutions":
      return <ScholarshipTechnologySolutions />;
    case "scholarship-impact-measurement":
      return <ScholarshipImpactMeasurement />;
    case "scholarship-equity-inclusion":
      return <ScholarshipEquityInclusion />;
    case "scholarship-collaboration-partnerships":
      return <ScholarshipCollaborationPartnerships />;
    case "scholarship-crisis-management":
      return <ScholarshipCrisisManagement />;
    case "scholarship-sustainability-growth":
      return <ScholarshipSustainabilityGrowth />;
    case "scholarship-legal-compliance":
      return <ScholarshipLegalCompliance />;
    case "scholarship-innovation-future":
      return <ScholarshipInnovationFuture />;
    case "scholarship-global-perspectives":
      return <ScholarshipGlobalPerspectives />;
    case "scholarship-best-practices-summary":
      return <ScholarshipBestPracticesSummary />;
    case "welcome-to-fragments":
      return (
        <>
          <p>
            Class forums should not feel like social media with a syllabus stapled
            on top. Fragments is built for the moment when a student finally asks
            the right follow-up, and when an educator&apos;s careful explanation
            deserves to be seen, extended, and credited.
          </p>
          <p>
            We combine <strong>fragment trails</strong> (structured, cumulative
            threads) with <strong>two-step moderation</strong> so rigor is the
            default, not the exception. Educators who consistently raise the level
            of the room get recognized, because sustainable learning cultures start
            with respect for teaching time.
          </p>
          <p>
            Whether you lead AP sections, graduate seminars, or independent cohorts,
            Fragments is here to help you run discussions you are proud to show
            families and administrators.
          </p>
        </>
      );
    case "fragment-trails-explained":
      return (
        <>
          <p>
            A <strong>fragment</strong> is a tight piece of teaching: sources in
            line, context, and a question that invites the room to think, not a wall
            of text or a drive-by hot take.
          </p>
          <p>
            A <strong>trail</strong> is what happens next. Learners extend the thread
            with follow-ups, counter-evidence, and clarifications. Because everything
            stays in one readable path, you can see how understanding evolved, and who
            contributed rigor along the way.
          </p>
          <p>
            Trails pair naturally with rubrics: participation becomes observable, and
            quality moderation means the conversation stays on standard without
            constant instructor triage.
          </p>
        </>
      );
    default:
      return (
        <div className="space-y-6">
          <p className="text-lg font-semibold text-secondary">
            Comprehensive 7000-word article coming soon. This blog post is being expanded to provide in-depth insights on {slug.replace(/-/g, " ")}.
          </p>
          <p>
            We are currently enhancing our blog content to provide comprehensive, detailed articles that cover important topics in scholarship interviews, candidate evaluation, and educational assessment. Each article will include detailed analysis, practical strategies, FAQs, and actionable insights. Check back soon for the complete 7000-word article.
          </p>
        </div>
      );
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="border-b border-slate-200/80 bg-white">
      <BlogPostingJsonLd post={post} slug={slug} />
      <ArticleSchema
        title={post.title}
        description={post.description}
        publishedDate={post.publishedISO}
        slug={slug}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: post.title, path: `/blog/${slug}/` },
        ]}
      />
      <div className="frag-container">
        <div className="mx-auto max-w-3xl py-12 sm:py-16">
          <Link
            href="/blog/"
            className="text-sm font-bold text-highlight-dark transition hover:text-secondary"
          >
            ← Back to blog
          </Link>
          
          {/* Featured Image */}
          <div className="relative mt-6 aspect-video overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 800px"
              className="object-cover"
              priority
            />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-textMuted">
            {post.date} · {post.read}
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-secondary sm:text-3xl">
            {post.title}
          </h1>
          <div className="mt-8 max-w-none space-y-4 text-base font-medium leading-relaxed text-textDark">
            <PostBody slug={slug} />
          </div>
        </div>
      </div>
    </article>
  );
}
