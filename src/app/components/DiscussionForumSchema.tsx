import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

interface DiscussionForumSchemaProps {
  threadUrl: string;
  threadTitle: string;
  threadText: string;
  authorName: string;
  authorUrl?: string;
  publishedAt: string;
  updatedAt?: string;
  replyCount?: number;
  interactionCount?: number;
  upvoteCount?: number;
  category?: string;
}

/**
 * DiscussionForumPosting schema for thread pages
 * Helps Google understand discussion forum content and display rich results
 */
export default function DiscussionForumSchema({
  threadUrl,
  threadTitle,
  threadText,
  authorName,
  authorUrl,
  publishedAt,
  updatedAt,
  replyCount = 0,
  interactionCount = 0,
  upvoteCount = 0,
  category,
}: DiscussionForumSchemaProps) {
  if (!hasPublicSiteUrl()) return null;

  const url = canonicalUrl(threadUrl);

  const payload = {
    "@context": "https://schema.org",
    "@type": "DiscussionForumPosting",
    "@id": url,
    headline: threadTitle,
    text: threadText,
    author: {
      "@type": "Person",
      name: authorName,
      ...(authorUrl && { url: canonicalUrl(authorUrl) }),
    },
    datePublished: publishedAt,
    ...(updatedAt && { dateModified: updatedAt }),
    interactionStatistic: [
      {
        "@type": "InteractionCounter",
        interactionType: {
          "@type": "ReplyAction",
        },
        userInteractionCount: replyCount,
      },
      {
        "@type": "InteractionCounter",
        interactionType: {
          "@type": "LikeAction",
        },
        userInteractionCount: upvoteCount,
      },
      {
        "@type": "InteractionCounter",
        interactionType: {
          "@type": "ViewAction",
        },
        userInteractionCount: interactionCount,
      },
    ],
    ...(category && {
      about: {
        "@type": "Thing",
        name: category,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
