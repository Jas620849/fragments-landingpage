import type { Metadata } from "next";
import { canonicalUrl } from "./site";

export interface PaginationMetadata {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

/**
 * Generate pagination metadata for SEO
 * Includes rel="next" and rel="prev" links for Google
 */
export function generatePaginationMetadata(
  pagination: PaginationMetadata
): Pick<Metadata, "alternates"> {
  const { currentPage, totalPages, basePath } = pagination;
  const links: Record<string, string> = {
    canonical: canonicalUrl(currentPage === 1 ? basePath : `${basePath}/page/${currentPage}`),
  };

  // Add rel="prev" link if not on first page
  if (currentPage > 1) {
    if (currentPage === 2) {
      links.prev = canonicalUrl(basePath);
    } else {
      links.prev = canonicalUrl(`${basePath}/page/${currentPage - 1}`);
    }
  }

  // Add rel="next" link if not on last page
  if (currentPage < totalPages) {
    links.next = canonicalUrl(`${basePath}/page/${currentPage + 1}`);
  }

  return {
    alternates: links,
  };
}

/**
 * Generate pagination schema for structured data
 */
export function generatePaginationSchema(
  pagination: PaginationMetadata,
  items: Array<{ name: string; url: string }>
) {
  const { currentPage, totalPages, basePath } = pagination;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Page ${currentPage} of ${totalPages}`,
    url: canonicalUrl(currentPage === 1 ? basePath : `${basePath}/page/${currentPage}`),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

/**
 * Generate pagination HTML links for page headers
 */
export function generatePaginationLinks(
  pagination: PaginationMetadata
): Array<{ rel: string; href: string }> {
  const { currentPage, totalPages, basePath } = pagination;
  const links: Array<{ rel: string; href: string }> = [];

  // Canonical
  links.push({
    rel: "canonical",
    href: canonicalUrl(currentPage === 1 ? basePath : `${basePath}/page/${currentPage}`),
  });

  // Previous
  if (currentPage > 1) {
    links.push({
      rel: "prev",
      href: canonicalUrl(currentPage === 2 ? basePath : `${basePath}/page/${currentPage - 1}`),
    });
  }

  // Next
  if (currentPage < totalPages) {
    links.push({
      rel: "next",
      href: canonicalUrl(`${basePath}/page/${currentPage + 1}`),
    });
  }

  return links;
}
