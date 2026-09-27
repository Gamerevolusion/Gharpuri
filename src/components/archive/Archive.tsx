"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { archiveItems, archiveCategories } from "@/data/archive";
import { Reveal, StaggerReveal } from "@/components/ui/Reveal";

type Category = (typeof archiveCategories)[number];

export default function Archive() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    let items = archiveItems;

    if (selectedCategory === "Field Documentation") {
      items = items.filter((item) => item.tags.includes("Field Survey"));
    } else if (selectedCategory !== "All") {
      items = items.filter((item) => item.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          item.location.toLowerCase().includes(query)
      );
    }

    return items;
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="archive"
      className="py-20 md:py-28 bg-[#11110F] border-t border-[#594A3A]/30"
      aria-labelledby="archive-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#B89A5A] text-xs tracking-[0.2em] uppercase font-medium border border-[#B89A5A]/30 px-3 py-1 rounded bg-[#292724]/50">
            07
          </span>
          <Reveal>
            <h2
              id="archive-heading"
              className="font-display text-2xl md:text-3xl font-semibold text-[#F1E8D4]"
            >
              Digital Archive
            </h2>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <p className="text-[#D8C49D] max-w-2xl mb-8">
            A browsable catalog of Elephanta&apos;s documented heritage — filter by category, search by keyword, and explore individual records styled as museum catalog entries.
          </p>
        </Reveal>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Category filter */}
          <Reveal delay={100} className="flex-shrink-0">
            <label htmlFor="category-filter" className="text-xs text-[#8F7644] uppercase tracking-[0.15em] block mb-2">
              Category
            </label>
            <div className="flex flex-wrap gap-1" id="category-filter" role="group" aria-label="Filter by category">
              {archiveCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-sm rounded-lg border transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-[#B89A5A] text-[#11110F] border-[#B89A5A] font-medium shadow-sm shadow-[#B89A5A]/20"
                      : "bg-[#292724] text-[#D8C49D] border-[#594A3A] hover:border-[#B89A5A]/50 hover:text-[#F1E8D4] transition-colors"
                  }`}
                  aria-pressed={selectedCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Search */}
          <Reveal delay={150} className="flex-1">
            <label htmlFor="archive-search" className="text-xs text-[#8F7644] uppercase tracking-[0.15em] block mb-2">
              Search
            </label>
            <div className="relative">
              <input
                id="archive-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, location, tag..."
                className="w-full bg-[#292724] border border-[#594A3A] rounded-lg px-4 py-2.5 pl-10 text-sm text-[#E8D8B8] placeholder-[#8F7644] focus:outline-none focus:border-[#B89A5A] focus:ring-1 focus:ring-[#B89A5A]/30 transition-colors"
                aria-label="Search archive items"
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8F7644] transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </Reveal>
        </div>

        {/* Results count */}
        <Reveal delay={200}>
          <div className="text-xs text-[#8F7644] mb-4">
            Showing {filteredItems.length} of {archiveItems.length} items
            {searchQuery && <span> matching &quot;{searchQuery}&quot;</span>}
          </div>
        </Reveal>

        {/* Catalog grid */}
        {filteredItems.length > 0 ? (
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={60}>
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="bg-[#292724] border border-[#594A3A] rounded-xl overflow-hidden hover:border-[#B89A5A]/50 transition-all duration-300 hover:-translate-y-0.5 group card-hover h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="gallery-image"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292724] via-transparent to-transparent" aria-hidden="true" />
                </div>

                {/* Catalog metadata */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] tracking-[0.15em] text-[#B89A5A] font-mono bg-[#11110F]/60 px-2 py-0.5 rounded border border-[#B89A5A]/20">
                      {item.id}
                    </span>
                    <span className="text-[10px] text-[#8F7644] italic">{item.source}</span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-[#F1E8D4] mb-1 group-hover:text-[#B89A5A] transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap gap-x-2.5 gap-y-1 text-xs text-[#D8C49D] mb-2">
                    <span className="text-[#8F7644]">{item.category}</span>
                    <span className="text-[#594A3A]">·</span>
                    <span>{item.location}</span>
                  </div>

                  <p className="text-sm text-[#D8C49D] leading-relaxed line-clamp-2 mb-3">
                    {item.description}
                  </p>

                  {item.date && (
                    <div className="text-xs text-[#8F7644] mb-2">
                      {item.date}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] text-[#8F7644] bg-[#11110F]/40 px-1.5 py-0.5 rounded border border-[#594A3A]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Source note for on-site field survey entries */}
                {item.tags.includes("Field Survey") && (
                  <div className="px-4 pb-3">
                    <span className="text-[10px] text-[#B89A5A] font-mono border-t border-[#594A3A]/50 pt-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      ON-SITE GPS FIELD SURVEY · SEPT 2026
                    </span>
                  </div>
                )}
              </article>
            ))}
          </StaggerReveal>
        ) : (
          <Reveal>
            <div className="text-center py-12">
              <p className="text-[#D8C49D] mb-2">No items match your filter.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="text-sm text-[#B89A5A] hover:text-[#F1E8D4] mt-2 underline underline-offset-4 transition-colors"
              >
                Clear filters
              </button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
