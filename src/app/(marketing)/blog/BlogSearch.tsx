"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function BlogSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/blog/?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative mb-8">
      <div className="relative">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"
        />
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-12 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          aria-label="Search blog articles"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Clear search"
          >
            <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
          </button>
        )}
      </div>
    </form>
  );
}
