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
import BlogPostRail from "../../../components/blog/BlogPostRail";
import AdSenseUnit from "../../../components/AdSenseUnit";
import BlogPostClient from "./BlogPostClient";
import AuthorCard from "../../../components/blog/AuthorCard";
import ArticleNavigation from "../../../components/blog/ArticleNavigation";
import HowToReduceBiasInScholarshipInterviews from "../content/how-to-reduce-bias-in-scholarship-interviews";
import StructuredVsUnstructuredInterviews from "../content/structured-vs-unstructured-interviews";
import AIPoweredInterviewEvaluation from "../content/ai-powered-interview-evaluation";
import CommonInterviewScoringMistakes from "../content/common-interview-scoring-mistakes";
import BuildingEvaluationRubrics from "../content/building-evaluation-rubrics";
import InterviewModerationExplained from "../content/interview-moderation-explained";
import EvaluatorCalibrationMethods from "../content/evaluator-calibration-methods";
import EducationalAssessmentTools from "../content/educational-assessment-tools";
import WhyMostScholarshipApplicationsGetRejected from "../content/why-most-scholarship-applications-get-rejected";
import ScholarshipInterviews15Questions from "../content/scholarship-interviews-15-questions-you-should-practice-today";
import HowToIncreaseChancesOfWinningScholarship from "../content/how-to-increase-your-chances-of-winning-a-scholarship-in-2026";
import SevenSkillsContent from "../content/7-skills-every-scholarship-winner-has-in-common";
import ScholarshipSuccessStartsBefore from "../content/scholarship-success-starts-before-you-submit-your-application";
import HowToBuildScholarshipWorthyProfile from "../content/how-to-build-a-scholarship-worthy-student-profile";
import WhyMostStudentsForgetWhatTheyLearn from "../content/why-most-students-forget-what-they-learn-online";
import OnlineLearningIsntBroken from "../content/online-learning-isnt-broken-traditional-teaching-methods-are";
import HowActiveLearningImproves from "../content/how-active-learning-improves-student-success";
import TheSecretBehindHighlyEngaged from "../content/the-secret-behind-highly-engaged-online-students";
import WhyDiscussionBasedLearning from "../content/why-discussion-based-learning-outperforms-traditional-quizzes";
import TheFutureOfOnlineEducation from "../content/the-future-of-online-education-is-more-than-ai";
import AreOnlineExamsReallyMeasuring from "../content/are-online-exams-really-measuring-student-knowledge";
import HowDiscussionSkillsCanImprove from "../content/how-discussion-skills-can-improve-your-scholarship-interviews";
import TheHiddenFactorsScholarshipCommittees from "../content/the-hidden-factors-scholarship-committees-look-for";
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
      "classroom discussion",
      "educational assessment",
      "discussion moderation",
      "evaluation rubrics",
      "FragmentTrails",
    ],
    alternates: hasPublicSiteUrl()
      ? { canonical: canonicalUrl(`/blog/${slug}/`) }
      : undefined,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.publishedISO,
      modifiedTime: post.publishedISO,
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
    dateModified: post.publishedISO,
    url: canonicalUrl(`/blog/${slug}/`),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl(`/blog/${slug}/`),
    },
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: canonicalUrl("/"),
    },
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
  // Direct import mapping for all blog posts to ensure unique content
  const contentMap: Record<string, React.ReactNode> = {
    "how-to-reduce-bias-in-scholarship-interviews": <HowToReduceBiasInScholarshipInterviews />,
    "why-most-scholarship-applications-get-rejected": <WhyMostScholarshipApplicationsGetRejected />,
    "structured-vs-unstructured-interviews": <StructuredVsUnstructuredInterviews />,
    "scholarship-interviews-15-questions-you-should-practice-today": <ScholarshipInterviews15Questions />,
    "ai-powered-interview-evaluation": <AIPoweredInterviewEvaluation />,
    "how-to-increase-your-chances-of-winning-a-scholarship-in-2026": <HowToIncreaseChancesOfWinningScholarship />,
    "common-interview-scoring-mistakes": <CommonInterviewScoringMistakes />,
    "7-skills-every-scholarship-winner-has-in-common": <SevenSkillsContent />,
    "building-evaluation-rubrics": <BuildingEvaluationRubrics />,
    "how-discussion-skills-can-improve-your-scholarship-interviews": <HowDiscussionSkillsCanImprove />,
    "interview-moderation-explained": <InterviewModerationExplained />,
    "the-hidden-factors-scholarship-committees-look-for": <TheHiddenFactorsScholarshipCommittees />,
    "evaluator-calibration-methods": <EvaluatorCalibrationMethods />,
    "scholarship-success-starts-before-you-submit-your-application": <ScholarshipSuccessStartsBefore />,
    "educational-assessment-tools": <EducationalAssessmentTools />,
    "how-to-build-a-scholarship-worthy-student-profile": <HowToBuildScholarshipWorthyProfile />,
    "why-most-students-forget-what-they-learn-online": <WhyMostStudentsForgetWhatTheyLearn />,
    "online-learning-isnt-broken-traditional-teaching-methods-are": <OnlineLearningIsntBroken />,
    "how-active-learning-improves-student-success": <HowActiveLearningImproves />,
    "the-secret-behind-highly-engaged-online-students": <TheSecretBehindHighlyEngaged />,
    "why-discussion-based-learning-outperforms-traditional-quizzes": <WhyDiscussionBasedLearning />,
    "the-future-of-online-education-is-more-than-ai": <TheFutureOfOnlineEducation />,
    "are-online-exams-really-measuring-student-knowledge": <AreOnlineExamsReallyMeasuring />,
    "scholarship-selection-committee": <ScholarshipSelectionCommittee />,
    "scholarship-essay-evaluation": <ScholarshipEssayEvaluation />,
    "scholarship-interview-preparation": <ScholarshipInterviewPreparation />,
    "scholarship-technology-solutions": <ScholarshipTechnologySolutions />,
    "scholarship-impact-measurement": <ScholarshipImpactMeasurement />,
    "scholarship-equity-inclusion": <ScholarshipEquityInclusion />,
    "scholarship-collaboration-partnerships": <ScholarshipCollaborationPartnerships />,
    "scholarship-crisis-management": <ScholarshipCrisisManagement />,
    "scholarship-sustainability-growth": <ScholarshipSustainabilityGrowth />,
    "scholarship-legal-compliance": <ScholarshipLegalCompliance />,
    "scholarship-innovation-future": <ScholarshipInnovationFuture />,
    "scholarship-global-perspectives": <ScholarshipGlobalPerspectives />,
    "scholarship-best-practices-summary": <ScholarshipBestPracticesSummary />,
  };

  return contentMap[slug] || <HowToReduceBiasInScholarshipInterviews />;
}

function categorySlug(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="border-b border-slate-200/80 bg-gradient-to-b from-primary/30 via-bgAlt/50 to-white">
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

      <div className="frag-container py-6 sm:py-8 lg:py-10">
        {/* Client Component for Interactive Features */}
        <BlogPostClient post={post} slug={slug} />

        {/* Mobile / tablet topic chips */}
        <div className="mb-5 flex gap-2 overflow-x-auto pb-1 xl:hidden">
          <Link
            href="/blog/"
            className="shrink-0 rounded-lg border border-slate-200/80 bg-white px-3 py-1.5 text-xs font-semibold text-secondary shadow-sm"
          >
            All
          </Link>
          <Link
            href={`/blog/category/${categorySlug(post.category)}/`}
            className="shrink-0 rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-secondary ring-1 ring-highlight/25"
          >
            {post.category}
          </Link>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-6 xl:gap-8">
          {/* Left: blog post content (70%) */}
          <div className="lg:col-span-8 xl:col-span-9">
            {/* Back to Blog - moved to top */}
            <div className="mb-4">
              <Link
                href="/blog/"
                className="inline-flex items-center text-sm font-semibold text-textMuted transition hover:text-secondary"
              >
                ← Back to blog
              </Link>
            </div>

            {/* Hero Image - clean without text overlay */}
            <div className="relative mb-6 overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative aspect-[21/9] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={`${post.title} - Featured image for ${post.category} article`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Title and Description - moved below image */}
            <div className="mb-6">
              <Link
                href={`/blog/category/${categorySlug(post.category)}/`}
                className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-blue-700"
              >
                {post.category}
              </Link>
              <h1 className="mt-4 text-2xl font-bold leading-tight text-secondary sm:text-3xl lg:text-4xl">
                {post.title}
              </h1>
              <p className="mt-3 text-base font-medium text-textMuted sm:text-lg">
                {post.description}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-textMuted">
                <span>{post.date} · {post.read}</span>
              </div>
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none space-y-4 rounded-xl bg-white px-6 py-8 shadow-sm ring-1 ring-slate-100/80 sm:px-8 sm:py-10 lg:px-10 lg:py-12 text-base font-medium leading-relaxed text-textDark prose-headings:font-bold prose-headings:text-secondary prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-secondary prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-slate-50 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-textMuted prose-ul:list-disc prose-ol:list-decimal prose-li:my-2">
              <PostBody slug={slug} />
            </div>

            {/* Author Card */}
            <div className="mt-8">
              <AuthorCard />
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap items-center gap-3 rounded-xl bg-white px-6 py-6 shadow-sm ring-1 ring-slate-100/80">
              <span className="text-sm font-bold text-secondary">Tags:</span>
              {post.category.split(' ').map((tag, index) => (
                <Link
                  key={index}
                  href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}/`}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-textMuted transition hover:bg-blue-100 hover:text-blue-600"
                >
                  {tag}
                </Link>
              ))}
              <Link
                href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}/`}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-textMuted transition hover:bg-blue-100 hover:text-blue-600"
              >
                {post.category}
              </Link>
              <Link
                href="/blog/"
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-textMuted transition hover:bg-blue-100 hover:text-blue-600"
              >
                Scholarship
              </Link>
              <Link
                href="/blog/"
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-textMuted transition hover:bg-blue-100 hover:text-blue-600"
              >
                Interview
              </Link>
            </div>

            {/* Article Navigation */}
            <div className="mt-8">
              <ArticleNavigation currentSlug={slug} />
            </div>

            {process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG ? (
              <AdSenseUnit
                slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG}
                className="mt-8"
              />
            ) : null}
          </div>

          {/* Right: related blog posts (30%) - starts from top */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-24">
              <BlogPostRail post={post} />
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
