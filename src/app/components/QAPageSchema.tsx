import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

interface Answer {
  text: string;
  authorName: string;
  authorUrl?: string;
  upvoteCount?: number;
  publishedAt: string;
  isAccepted?: boolean;
}

interface QAPageSchemaProps {
  questionUrl: string;
  questionTitle: string;
  questionText: string;
  authorName: string;
  authorUrl?: string;
  publishedAt: string;
  updatedAt?: string;
  answerCount?: number;
  upvoteCount?: number;
  viewCount?: number;
  answers: Answer[];
  category?: string;
}

/**
 * QAPage schema for Q&A style discussions
 * Helps Google understand question-answer content and display rich results
 */
export default function QAPageSchema({
  questionUrl,
  questionTitle,
  questionText,
  authorName,
  authorUrl,
  publishedAt,
  updatedAt,
  answerCount = 0,
  upvoteCount = 0,
  viewCount = 0,
  answers,
  category,
}: QAPageSchemaProps) {
  if (!hasPublicSiteUrl()) return null;

  const url = canonicalUrl(questionUrl);

  const payload = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      "@id": url,
      name: questionTitle,
      text: questionText,
      author: {
        "@type": "Person",
        name: authorName,
        ...(authorUrl && { url: canonicalUrl(authorUrl) }),
      },
      datePublished: publishedAt,
      ...(updatedAt && { dateModified: updatedAt }),
      answerCount,
      upvoteCount,
      viewCount,
      ...(category && {
        about: {
          "@type": "Thing",
          name: category,
        },
      }),
      acceptedAnswer: answers.find((a) => a.isAccepted)
        ? {
            "@type": "Answer",
            text: answers.find((a) => a.isAccepted)!.text,
            author: {
              "@type": "Person",
              name: answers.find((a) => a.isAccepted)!.authorName,
              ...(answers.find((a) => a.isAccepted)!.authorUrl && {
                url: canonicalUrl(answers.find((a) => a.isAccepted)!.authorUrl!),
              }),
            },
            datePublished: answers.find((a) => a.isAccepted)!.publishedAt,
            upvoteCount: answers.find((a) => a.isAccepted)!.upvoteCount || 0,
          }
        : undefined,
      suggestedAnswer: answers
        .filter((a) => !a.isAccepted)
        .map((answer) => ({
          "@type": "Answer",
          text: answer.text,
          author: {
            "@type": "Person",
            name: answer.authorName,
            ...(answer.authorUrl && { url: canonicalUrl(answer.authorUrl) }),
          },
          datePublished: answer.publishedAt,
          upvoteCount: answer.upvoteCount || 0,
        })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
