import Link from "next/link";
import Image from "next/image";
import { BlogPostMeta } from "../../(marketing)/blog/_data";

interface BlogCardProps {
  post: BlogPostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Meta */}
        <div className="mb-3 flex items-center gap-2 text-xs font-medium text-slate-500">
          <time dateTime={post.publishedISO}>{post.date}</time>
          <span className="text-slate-300">·</span>
          <span>{post.read}</span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-orange-600 transition-colors">
          <Link href={`/blog/${post.slug}/`} className="hover:underline">
            {post.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Read More Button */}
        <Link
          href={`/blog/${post.slug}/`}
          className="inline-flex items-center text-sm font-semibold text-orange-600 transition-colors hover:text-orange-700 group-hover:translate-x-1 duration-200"
        >
          Read more
          <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
