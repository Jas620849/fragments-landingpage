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
import BlogTopicsRail from "../../../components/blog/BlogTopicsRail";
import BlogPostRail from "../../../components/blog/BlogPostRail";
import AdSenseUnit from "../../../components/AdSenseUnit";
import HowToReduceBiasInScholarshipInterviews from "../content/how-to-reduce-bias-in-scholarship-interviews";
import StructuredVsUnstructuredInterviews from "../content/structured-vs-unstructured-interviews";
import AIPoweredInterviewEvaluation from "../content/ai-powered-interview-evaluation";
import CommonInterviewScoringMistakes from "../content/common-interview-scoring-mistakes";
import BuildingEvaluationRubrics from "../content/building-evaluation-rubrics";
import InterviewModerationExplained from "../content/interview-moderation-explained";
import EvaluatorCalibrationMethods from "../content/evaluator-calibration-methods";
import EducationalAssessmentTools from "../content/educational-assessment-tools";

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
  switch (slug) {
    case "how-to-reduce-bias-in-scholarship-interviews":
      return <HowToReduceBiasInScholarshipInterviews />;
    case "structured-vs-unstructured-interviews":
      return <StructuredVsUnstructuredInterviews />;
    case "ai-powered-interview-evaluation":
      return <AIPoweredInterviewEvaluation />;
    case "common-interview-scoring-mistakes":
      return <CommonInterviewScoringMistakes />;
    case "building-evaluation-rubrics":
      return <BuildingEvaluationRubrics />;
    case "interview-moderation-explained":
      return <InterviewModerationExplained />;
    case "evaluator-calibration-methods":
      return <EvaluatorCalibrationMethods />;
    case "educational-assessment-tools":
      return <EducationalAssessmentTools />;
    default:
      return notFound();
  }
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
          {/* Left: topics (Reddit-style communities rail) */}
          <aside className="hidden xl:col-span-2 xl:block">
            <div className="sticky top-24 rounded-xl border border-slate-200/80 bg-white/90 p-3 shadow-sm ring-1 ring-slate-100/80 backdrop-blur-sm">
              <BlogTopicsRail activeCategory={post.category} />
            </div>
          </aside>

          {/* Center: discussion post */}
          <div className="lg:col-span-8 xl:col-span-7">
            <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm ring-1 ring-slate-100/80">
              <div className="relative aspect-[2/1] bg-slate-100 sm:aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 720px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <Link
                    href={`/blog/category/${categorySlug(post.category)}/`}
                    className="text-xs font-bold uppercase tracking-wide text-accent-dark transition hover:text-accent"
                  >
                    {post.category}
                  </Link>
                  <span className="text-slate-300" aria-hidden>
                    ·
                  </span>
                  <Link
                    href="/blog/"
                    className="text-xs font-semibold text-textMuted transition hover:text-highlight-dark"
                  >
                    ← Back to blog
                  </Link>
                </div>

                <h1 className="mt-3 text-2xl font-bold tracking-tight text-secondary sm:text-3xl lg:text-[2rem] lg:leading-tight">
                  {post.title}
                </h1>
                <p className="mt-3 text-base font-medium leading-relaxed text-textMuted">
                  {post.description}
                </p>
                <p className="mt-3 text-xs font-semibold text-textMuted">
                  {post.date} · {post.read}
                  <span className="mx-1.5 text-slate-300">·</span>
                  Editorial by {SITE_NAME}
                </p>

                <div className="mt-8 space-y-4 border-t border-slate-100 pt-8 text-base font-medium leading-relaxed text-textDark">
                  <PostBody slug={slug} />
                </div>

                {process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG ? (
                  <AdSenseUnit
                    slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG}
                    className="border-t border-slate-100 pt-2"
                  />
                ) : null}
              </div>
            </div>
          </div>

          {/* Right: about / related / join (Quora-style rail) */}
          <aside className="mt-6 lg:col-span-4 lg:mt-0 xl:col-span-3">
            <div className="lg:sticky lg:top-24">
              <BlogPostRail post={post} />
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
