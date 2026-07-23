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
import RelatedArticles from "../RelatedArticles";
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
      modifiedTime: post.updatedISO ?? post.publishedISO,
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
    dateModified: post.updatedISO ?? post.publishedISO,
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
        modifiedDate={post.updatedISO}
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
            {post.date}
            {post.updatedISO ? " · Updated July 23, 2026" : ""} · {post.read}
          </p>
          <p className="mt-2 text-xs font-medium text-textMuted">
            Editorial guide by {SITE_NAME}
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-secondary sm:text-3xl">
            {post.title}
          </h1>
          <div className="mt-8 max-w-none space-y-4 text-base font-medium leading-relaxed text-textDark">
            <PostBody slug={slug} />
          </div>
          <RelatedArticles slug={slug} />
        </div>
      </div>
    </article>
  );
}
