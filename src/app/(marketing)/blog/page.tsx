import type { Metadata } from "next";
import { BLOG_POSTS, getCategories } from "./_data";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import BlogCard from "../../components/blog/BlogCard";
import Pagination from "../../components/blog/Pagination";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | FragmentTrails - Scholarship Interview & Evaluation Insights",
  description: "Expert insights on scholarship interviews, candidate evaluation, bias reduction, and fair selection processes. Stay updated with the latest best practices.",
  keywords: [
    "scholarship interview blog",
    "candidate evaluation insights",
    "bias reduction strategies",
    "scholarship selection best practices",
    "interview scoring methods",
    "fair assessment techniques",
    "scholarship program management",
    "higher education evaluation",
  ],
  openGraph: {
    title: "Blog | FragmentTrails",
    description: "Expert insights on scholarship interviews, candidate evaluation, and fair selection processes.",
    type: "website",
  },
};

const POSTS_PER_PAGE = 9;

export default function BlogIndexPage() {
  const currentPage = 1;
  const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);
  const categories = getCategories();
  
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = BLOG_POSTS.slice(startIndex, endIndex);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
        ]}
      />
      
      {/* Hero Section */}
      <section className="border-b border-slate-200/80 bg-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400 sm:text-base">
            Blog
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ideas for Better Discussions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 sm:text-xl">
            Product updates, teaching tips, and how teams use Fragments in the wild.
          </p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-10 flex flex-wrap gap-3">
            <Link
              href="/blog/"
              className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              All Posts
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}/`}
                className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600"
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Grid Layout: 3 desktop, 2 tablet, 1 mobile */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {currentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                basePath="/blog/page"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
