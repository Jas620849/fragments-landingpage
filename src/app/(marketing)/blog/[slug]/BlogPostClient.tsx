"use client";

import { useEffect, useState } from "react";
import type { BlogPostMeta } from "../_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faMedium,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

type BlogPostClientProps = {
  post: BlogPostMeta;
  slug: string;
};

export default function BlogPostClient({ post, slug }: BlogPostClientProps) {
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeHeading, setActiveHeading] = useState("");
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([]);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setReadingProgress(Math.min(progress, 100));

      // Update active heading
      const headingElements = document.querySelectorAll('h2, h3');
      let currentHeading = "";
      headingElements.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 150) {
          currentHeading = heading.id;
        }
      });
      setActiveHeading(currentHeading);
    };

    // Extract headings for TOC
    const extractHeadings = () => {
      const headingElements = document.querySelectorAll('h2, h3');
      const extractedHeadings: Array<{ id: string; text: string; level: number }> = [];
      headingElements.forEach((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
        extractedHeadings.push({
          id,
          text: heading.textContent || "",
          level: parseInt(heading.tagName.charAt(1)),
        });
      });
      setHeadings(extractedHeadings);
    };

    window.addEventListener('scroll', handleScroll);
    extractHeadings();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [slug]);

  const shareTitle = post.title;

  const shareButtons = [
    { icon: faFacebook, label: 'Facebook', color: 'bg-blue-600', shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
    { icon: faTwitter, label: 'Twitter', color: 'bg-sky-500', shareUrl: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}` },
    { icon: faMedium, label: 'Medium', color: 'bg-black', shareUrl: `https://medium.com/@fragmentswebsite` },
    { icon: faWhatsapp, label: 'WhatsApp', color: 'bg-green-500', shareUrl: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}` },
  ];

  const socialProfileButtons = [
    { icon: faMedium, label: 'Medium', color: 'bg-black', link: 'https://medium.com/@fragmentswebsite' },
    { icon: faFacebook, label: 'Facebook', color: 'bg-blue-600', link: 'https://www.facebook.com/profile.php?id=61590392447978' },
    { icon: faInstagram, label: 'Instagram', color: 'bg-pink-600', link: 'https://www.instagram.com/fragmentswebsite/' },
    { icon: faTwitter, label: 'X (Twitter)', color: 'bg-black', link: 'https://x.com/fragmenttrail' },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-100">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Share Buttons (Sticky on Desktop) */}
      <div className="hidden lg:fixed lg:left-8 lg:top-1/2 lg:-translate-y-1/2 lg:z-40 lg:flex lg:flex-col lg:gap-3">
        <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-textMuted text-center">Share</div>
        {shareButtons.map((button) => (
          <a
            key={button.label}
            href={button.shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${button.color} flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition hover:scale-110 hover:shadow-xl`}
            aria-label={`Share on ${button.label}`}
          >
            <FontAwesomeIcon icon={button.icon} className="h-5 w-5" />
          </a>
        ))}
        <button
          onClick={copyToClipboard}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white shadow-lg transition hover:scale-110 hover:bg-slate-600 hover:shadow-xl"
          aria-label="Copy link"
        >
          <FontAwesomeIcon icon={faLink} className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Share Buttons */}
      <div className="mb-6 lg:hidden">
        <div className="mb-2 text-xs font-bold uppercase tracking-wider text-textMuted">Share this article</div>
        <div className="flex gap-3">
          {shareButtons.map((button) => (
            <a
              key={button.label}
              href={button.shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${button.color} flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition hover:scale-110`}
              aria-label={`Share on ${button.label}`}
            >
              <FontAwesomeIcon icon={button.icon} className="h-5 w-5" />
            </a>
          ))}
          <button
            onClick={copyToClipboard}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white shadow-lg transition hover:scale-110"
            aria-label="Copy link"
          >
            <FontAwesomeIcon icon={faLink} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Social Profile Links (Mobile) */}
      <div className="mb-6 lg:hidden">
        <div className="mb-2 text-xs font-bold uppercase tracking-wider text-textMuted">Follow us</div>
        <div className="flex gap-3">
          {socialProfileButtons.map((button) => (
            <a
              key={button.label}
              href={button.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${button.color} flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition hover:scale-110`}
              aria-label={button.label}
            >
              <FontAwesomeIcon icon={button.icon} className="h-5 w-5" />
            </a>
          ))}
          <a
            href="tel:+15075135675"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition hover:scale-110"
            aria-label="Phone"
          >
            <span className="text-xs font-bold">📞</span>
          </a>
        </div>
      </div>

      {/* Table of Contents */}
      {headings.length > 0 && (
        <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:hidden">
          <h3 className="mb-4 text-lg font-bold text-secondary">Table of Contents</h3>
          <nav className="space-y-2">
            {headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={`block py-2 text-sm transition hover:text-secondary ${
                  activeHeading === heading.id
                    ? 'font-bold text-blue-600'
                    : heading.level === 3
                    ? 'pl-4 text-textMuted'
                    : 'text-textDark'
                }`}
                style={{ paddingLeft: `${(heading.level - 2) * 16}px` }}
              >
                {heading.text}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
