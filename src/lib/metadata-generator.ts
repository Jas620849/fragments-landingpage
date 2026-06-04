import type { Metadata } from "next";
import { SITE_NAME, CONTENT_CATEGORIES } from "./seo-constants";
import { canonicalUrl, absoluteAsset } from "./site";

export interface TopicMetadata {
  title: string;
  slug: string;
  description?: string;
  category?: string;
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
  image?: string;
}

export interface ThreadMetadata {
  title: string;
  slug: string;
  topicTitle: string;
  topicSlug: string;
  description?: string;
  author?: string;
  replyCount?: number;
  viewCount?: number;
  publishedAt?: string;
  updatedAt?: string;
}

export interface CategoryMetadata {
  slug: string;
  name: string;
  description?: string;
  topicCount?: number;
}

/**
 * Generate metadata for a topic page
 */
export function generateTopicMetadata(topic: TopicMetadata): Metadata {
  const category = topic.category
    ? CONTENT_CATEGORIES.find((c) => c.slug === topic.category)
    : null;

  const title = topic.title;
  const description =
    topic.description ||
    `Explore ${title} on Fragment Trails. Join the discussion, share your knowledge, and learn from the community.`;

  const keywords = [
    title,
    ...(category?.keywords || []),
    "academic discussion",
    "knowledge sharing",
    "research",
    "education",
  ];

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords,
    authors: topic.author ? [{ name: topic.author }] : undefined,
    openGraph: {
      type: "article",
      title,
      description,
      publishedTime: topic.publishedAt,
      modifiedTime: topic.updatedAt,
      authors: topic.author ? [topic.author] : undefined,
      url: canonicalUrl(`/topic/${topic.slug}`),
      images: topic.image
        ? [
            {
              url: absoluteAsset(topic.image),
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : [
            {
              url: absoluteAsset("/logo-no-bg.png"),
              width: 512,
              height: 512,
              alt: SITE_NAME,
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: topic.image ? [absoluteAsset(topic.image)] : [absoluteAsset("/logo-no-bg.png")],
    },
    alternates: {
      canonical: `/topic/${topic.slug}`,
    },
  };
}

/**
 * Generate metadata for a thread page
 */
export function generateThreadMetadata(thread: ThreadMetadata): Metadata {
  const title = thread.title;
  const description =
    thread.description ||
    `Join the discussion about ${thread.topicTitle}. ${thread.replyCount || 0} replies from the community.`;

  const keywords = [
    title,
    thread.topicTitle,
    "discussion",
    "thread",
    "academic",
    "question",
    "answer",
  ];

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords,
    authors: thread.author ? [{ name: thread.author }] : undefined,
    openGraph: {
      type: "article",
      title,
      description,
      publishedTime: thread.publishedAt,
      modifiedTime: thread.updatedAt,
      authors: thread.author ? [thread.author] : undefined,
      url: canonicalUrl(`/thread/${thread.slug}`),
      images: [
        {
          url: absoluteAsset("/logo-no-bg.png"),
          width: 512,
          height: 512,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteAsset("/logo-no-bg.png")],
    },
    alternates: {
      canonical: `/thread/${thread.slug}`,
    },
  };
}

/**
 * Generate metadata for a category page
 */
export function generateCategoryMetadata(category: CategoryMetadata): Metadata {
  const title = `${category.name} | ${SITE_NAME}`;
  const description =
    category.description ||
    `Explore ${category.name} discussions on Fragment Trails. ${category.topicCount || 0} topics to explore and discuss.`;

  const categoryData = CONTENT_CATEGORIES.find((c) => c.slug === category.slug);
  const keywords = [
    category.name,
    ...(categoryData?.keywords || []),
    "academic discussion",
    "knowledge sharing",
  ];

  return {
    title,
    description,
    keywords,
    openGraph: {
      type: "website",
      title,
      description,
      url: canonicalUrl(`/category/${category.slug}`),
      images: [
        {
          url: absoluteAsset("/logo-no-bg.png"),
          width: 512,
          height: 512,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteAsset("/logo-no-bg.png")],
    },
    alternates: {
      canonical: `/category/${category.slug}`,
    },
  };
}

/**
 * Generate metadata for programmatic SEO pages (What Is, How Does, etc.)
 */
export interface ProgrammaticMetadata {
  type: "what-is" | "how-does" | "difference-between" | "advantages-of" | "history-of";
  subject: string;
  description?: string;
  category?: string;
}

export function generateProgrammaticMetadata(page: ProgrammaticMetadata): Metadata {
  const typeTitles = {
    "what-is": "What Is",
    "how-does": "How Does",
    "difference-between": "Difference Between",
    "advantages-of": "Advantages Of",
    "history-of": "History Of",
  };

  const title = `${typeTitles[page.type]} ${page.subject} | ${SITE_NAME}`;
  const description =
    page.description ||
    `Learn ${typeTitles[page.type].toLowerCase()} ${page.subject}. Comprehensive guide with explanations, examples, and expert insights from the Fragment Trails community.`;

  const keywords = [
    page.subject,
    typeTitles[page.type],
    "guide",
    "explanation",
    "tutorial",
    "academic",
    "education",
  ];

  const slug = `${page.type}-${page.subject.toLowerCase().replace(/\s+/g, "-")}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      type: "article",
      title,
      description,
      url: canonicalUrl(`/guide/${slug}`),
      images: [
        {
          url: absoluteAsset("/logo-no-bg.png"),
          width: 512,
          height: 512,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteAsset("/logo-no-bg.png")],
    },
    alternates: {
      canonical: `/guide/${slug}`,
    },
  };
}
