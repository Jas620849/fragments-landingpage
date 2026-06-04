import { CONTENT_CATEGORIES } from "./seo-constants";

export interface Link {
  url: string;
  text: string;
  type: "topic" | "thread" | "category" | "external";
  relevance: number;
}

export interface InternalLinkingContext {
  currentUrl: string;
  currentType: "topic" | "thread" | "category" | "home";
  category?: string;
  topicSlug?: string;
  relatedTopics?: string[];
  relatedThreads?: string[];
  content?: string;
}

/**
 * Generate internal links for a page based on context
 * Ensures minimum 10 internal links per page for SEO
 */
export function generateInternalLinks(context: InternalLinkingContext): Link[] {
  const links: Link[] = [];

  // 1. Add category link (if not on category page)
  if (context.currentType !== "category" && context.category) {
    const category = CONTENT_CATEGORIES.find((c) => c.slug === context.category);
    if (category) {
      links.push({
        url: `/category/${category.slug}`,
        text: category.name,
        type: "category",
        relevance: 1.0,
      });
    }
  }

  // 2. Add topic link (if on thread page)
  if (context.currentType === "thread" && context.topicSlug) {
    links.push({
      url: `/topic/${context.topicSlug}`,
      text: "Back to Topic",
      type: "topic",
      relevance: 1.0,
    });
  }

  // 3. Add related topics
  if (context.relatedTopics && context.relatedTopics.length > 0) {
    context.relatedTopics.forEach((slug) => {
      links.push({
        url: `/topic/${slug}`,
        text: formatSlug(slug),
        type: "topic",
        relevance: 0.8,
      });
    });
  }

  // 4. Add related threads
  if (context.relatedThreads && context.relatedThreads.length > 0) {
    context.relatedThreads.forEach((slug) => {
      links.push({
        url: `/thread/${slug}`,
        text: formatSlug(slug),
        type: "thread",
        relevance: 0.7,
      });
    });
  }

  // 5. Add category navigation (if on category page)
  if (context.currentType === "category") {
    CONTENT_CATEGORIES.forEach((category) => {
      if (category.slug !== context.category) {
        links.push({
          url: `/category/${category.slug}`,
          text: category.name,
          type: "category",
          relevance: 0.5,
        });
      }
    });
  }

  // 6. Add home link
  links.push({
    url: "/",
    text: "Home",
    type: "category",
    relevance: 0.4,
  });

  // 7. Add categories overview
  links.push({
    url: "/categories",
    text: "Browse All Categories",
    type: "category",
    relevance: 0.4,
  });

  // 8. Add popular topics from same category
  if (context.category) {
    const popularTopics = getPopularTopicsForCategory(context.category);
    popularTopics.forEach((topic) => {
      if (!links.find((l) => l.url === topic.url)) {
        links.push({
          ...topic,
          relevance: 0.6,
        });
      }
    });
  }

  // 9. Add popular threads from same category
  if (context.category) {
    const popularThreads = getPopularThreadsForCategory(context.category);
    popularThreads.forEach((thread) => {
      if (!links.find((l) => l.url === thread.url)) {
        links.push({
          ...thread,
          relevance: 0.5,
        });
      }
    });
  }

  // 10. Ensure minimum 10 links by adding more categories if needed
  while (links.length < 10) {
    const additionalCategory = CONTENT_CATEGORIES.find(
      (c) => !links.find((l) => l.url === `/category/${c.slug}`)
    );
    if (additionalCategory) {
      links.push({
        url: `/category/${additionalCategory.slug}`,
        text: additionalCategory.name,
        type: "category",
        relevance: 0.3,
      });
    } else {
      break;
    }
  }

  // Sort by relevance and return top links
  return links.sort((a, b) => b.relevance - a.relevance).slice(0, 15);
}

/**
 * Get popular topics for a category
 * In production, this would query your database
 */
function getPopularTopicsForCategory(categorySlug: string): Link[] {
  const categoryTopics: Record<string, Link[]> = {
    physics: [
      { url: "/topic/what-is-electricity", text: "What Is Electricity", type: "topic", relevance: 0.9 },
      { url: "/topic/atomic-structure", text: "Atomic Structure", type: "topic", relevance: 0.85 },
      { url: "/topic/newton-laws", text: "Newton Laws", type: "topic", relevance: 0.8 },
    ],
    chemistry: [
      { url: "/topic/chemical-bonds", text: "Chemical Bonds", type: "topic", relevance: 0.9 },
      { url: "/topic/periodic-table", text: "Periodic Table", type: "topic", relevance: 0.85 },
    ],
    "computer-science": [
      { url: "/topic/algorithms-basics", text: "Algorithms Basics", type: "topic", relevance: 0.9 },
      { url: "/topic/data-structures", text: "Data Structures", type: "topic", relevance: 0.85 },
    ],
    "machine-learning": [
      { url: "/topic/machine-learning-basics", text: "Machine Learning Basics", type: "topic", relevance: 0.9 },
      { url: "/topic/neural-networks", text: "Neural Networks", type: "topic", relevance: 0.85 },
    ],
  };

  return categoryTopics[categorySlug] || [];
}

/**
 * Get popular threads for a category
 * In production, this would query your database
 */
function getPopularThreadsForCategory(categorySlug: string): Link[] {
  const categoryThreads: Record<string, Link[]> = {
    physics: [
      { url: "/thread/understanding-electricity", text: "Understanding Electricity", type: "thread", relevance: 0.8 },
      { url: "/thread/electron-behavior", text: "Electron Behavior", type: "thread", relevance: 0.75 },
    ],
    chemistry: [
      { url: "/thread/bond-types", text: "Types of Chemical Bonds", type: "thread", relevance: 0.8 },
    ],
    "computer-science": [
      { url: "/thread/sorting-algorithms", text: "Sorting Algorithms", type: "thread", relevance: 0.8 },
      { url: "/thread/big-o-notation", text: "Big O Notation", type: "thread", relevance: 0.75 },
    ],
    "machine-learning": [
      { url: "/thread/ml-model-selection", text: "ML Model Selection", type: "thread", relevance: 0.8 },
      { url: "/thread/overfitting-solutions", text: "Overfitting Solutions", type: "thread", relevance: 0.75 },
    ],
  };

  return categoryThreads[categorySlug] || [];
}

/**
 * Format slug to readable text
 */
function formatSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Inject internal links into content automatically
 * This finds keywords in content and links them to relevant topics
 */
export function injectInternalLinks(content: string, context: InternalLinkingContext): string {
  let modifiedContent = content;
  const links = generateInternalLinks(context);
  const usedLinks = new Set<string>();

  // Get keywords from categories
  const allKeywords = CONTENT_CATEGORIES.flatMap((c) => c.keywords);

  // Find and link keywords in content
  allKeywords.forEach((keyword) => {
    const regex = new RegExp(`\\b${keyword}\\b`, "gi");
    modifiedContent = modifiedContent.replace(regex, (match) => {
      // Find a relevant link for this keyword
      const relevantLink = links.find(
        (link) =>
          link.text.toLowerCase().includes(keyword.toLowerCase()) &&
          !usedLinks.has(link.url) &&
          link.type === "topic"
      );

      if (relevantLink) {
        usedLinks.add(relevantLink.url);
        return `<a href="${relevantLink.url}" class="text-blue-600 hover:underline">${match}</a>`;
      }

      return match;
    });
  });

  return modifiedContent;
}
