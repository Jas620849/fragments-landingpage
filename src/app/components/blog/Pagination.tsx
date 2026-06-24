"use client";

import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  const getPageUrl = (page: number) => {
    if (page === 1) {
      return "/blog/";
    }
    return `${basePath}/${page}/`;
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Pagination">
      {/* Previous Button */}
      <Link
        href={getPageUrl(currentPage - 1)}
        onClick={(e) => {
          if (currentPage === 1) {
            e.preventDefault();
          }
        }}
        className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-colors ${
          currentPage === 1
            ? "border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed"
            : "border-slate-200 bg-white text-slate-700 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
        }`}
        aria-label="Previous page"
        aria-disabled={currentPage === 1}
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </Link>

      {/* Page Numbers */}
      {getPageNumbers().map((page, index) => (
        typeof page === "number" ? (
          <Link
            key={index}
            href={getPageUrl(page)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-colors ${
              currentPage === page
                ? "border-orange-500 bg-orange-500 text-white font-semibold"
                : "border-slate-200 bg-white text-slate-700 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
            }`}
            aria-label={`Page ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </Link>
        ) : (
          <span
            key={index}
            className="inline-flex h-10 w-10 items-center justify-center text-slate-400"
          >
            {page}
          </span>
        )
      ))}

      {/* Next Button */}
      <Link
        href={getPageUrl(currentPage + 1)}
        onClick={(e) => {
          if (currentPage === totalPages) {
            e.preventDefault();
          }
        }}
        className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-colors ${
          currentPage === totalPages
            ? "border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed"
            : "border-slate-200 bg-white text-slate-700 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
        }`}
        aria-label="Next page"
        aria-disabled={currentPage === totalPages}
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </nav>
  );
}
