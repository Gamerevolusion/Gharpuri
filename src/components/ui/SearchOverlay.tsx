"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { archiveItems } from "@/data/archive";
import { timelineEvents } from "@/data/timeline";
import { sculptures } from "@/data/sculptures";
import { oralHistories } from "@/data/oralHistories";

interface SearchResult {
  type: "archive" | "timeline" | "sculpture" | "oral-history" | "3d" | "preservation";
  title: string;
  description: string;
  href: string;
  metadata: string;
  tags?: string[];
}

interface SearchSection {
  type: SearchResult["type"];
  label: string;
  icon: React.ReactNode;
}

const searchSections: SearchSection[] = [
  {
    type: "archive",
    label: "Archive",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    type: "timeline",
    label: "Timeline",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    type: "sculpture",
    label: "Sculptures",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.84a12.08 12.08 0 01.66 6.13L16 14l-3 3-3-3 1.16-1.84a12.08 12.08 0 01-.66-6.13L8 14l3-3 3 3-1.16 1.84a12.08 12.08 0 01.66 6.13z" />
      </svg>
    ),
  },
  {
    type: "oral-history",
    label: "Oral Histories",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 9.077 12 8.239 12 7.214v-1.57a4.5 4.5 0 110-4.576V7.214c0 .565.293 1.11.8 1.486l2.353 2.353a4.5 4.5 0 01-4.576 4.576L12.424 15H9a1 1 0 01-1 1v4a1 1 0 01-1 1z" />
      </svg>
    ),
  },
];

function buildResults(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  const results: SearchResult[] = [];

  // Archive
  archiveItems.forEach((item) => {
    if (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags.some((t) => t.toLowerCase().includes(q)) ||
      item.location.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    ) {
      results.push({
        type: "archive",
        title: item.title,
        description: item.description,
        href: `#archive`,
        metadata: `${item.id} · ${item.source}`,
        tags: item.tags,
      });
    }
  });

  // Timeline
  timelineEvents.forEach((event) => {
    if (
      event.title.toLowerCase().includes(q) ||
      event.description.toLowerCase().includes(q) ||
      event.year.toLowerCase().includes(q)
    ) {
      results.push({
        type: "timeline",
        title: event.title,
        description: event.description,
        href: `#timeline`,
        metadata: event.year,
      });
    }
  });

  // Sculptures
  sculptures.forEach((s) => {
    if (
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.tags.some((t) => t.toLowerCase().includes(q))
    ) {
      results.push({
        type: "sculpture",
        title: s.name,
        description: s.description,
        href: `#sculptures`,
        metadata: `${s.id} · ${s.location}`,
        tags: s.tags,
      });
    }
  });

  // Oral histories
  oralHistories.forEach((oh) => {
    if (
      oh.roleTitle.toLowerCase().includes(q) ||
      oh.description.toLowerCase().includes(q) ||
      oh.tags.some((t) => t.toLowerCase().includes(q))
    ) {
      results.push({
        type: "oral-history",
        title: oh.roleTitle,
        description: oh.description,
        href: `#oral-histories`,
        metadata: `${oh.id} · ${oh.language}`,
        tags: oh.tags,
      });
    }
  });

  // 3D experience
  if (q.includes("3d") || q.includes("cyark") || q.includes("tapestry") || q.includes("scan")) {
    results.push({
      type: "3d",
      title: "3D Experience — Elephanta Main Cave",
      description:
        "CyArk digital documentation of Elephanta Cave 1 (2023), featuring LiDAR + photogrammetry 3D data via Tapestry.",
      href: `#three-d`,
      metadata: "2023 · LiDAR + Photogrammetry · CyArk / Tapestry",
    });
  }

  // Preservation
  if (q.includes("preserv") || q.includes("conserv") || q.includes("weather") || q.includes("erosion")) {
    results.push({
      type: "preservation",
      title: "Preservation & Conservation",
      description:
        "Physical preservation, digital documentation, community memory, research, and public access — the five pillars of Elephanta's preservation strategy.",
      href: `#preservation`,
      metadata: "Five pillars · ASI / UNESCO",
    });
  }

  return results;
}

export default function SearchOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const results = useMemo(() => buildResults(query), [query]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        setQuery("");
        setSelectedIndex(0);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => {
        document.body.style.overflow = "";
        clearTimeout(timer);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const grouped = results.reduce(
    (acc, r) => {
      if (!acc[r.type]) acc[r.type] = [];
      acc[r.type].push(r);
      return acc;
    },
    {} as Record<string, SearchResult[]>
  );

  const flatResults = Object.values(grouped).flat();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, flatResults.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && flatResults[selectedIndex]) {
      window.location.href = flatResults[selectedIndex].href;
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Toggle button */}
      <button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#B89A5A] text-[#11110F] flex items-center justify-center hover:bg-[#8F7644] transition-colors shadow-lg focus-visible:outline-2 focus-visible:outline-[#B89A5A]"
        onClick={() => setIsOpen(true)}
        aria-label="Open search (Ctrl+K)"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-start justify-center pt-24 px-4 bg-[#080807]/80 backdrop-blur-sm animate-in"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#080807]/60"
            onClick={() => {
              setIsOpen(false);
              setQuery("");
              setSelectedIndex(0);
            }}
            aria-hidden="true"
          />

          {/* Search panel */}
          <div className="relative w-full max-w-2xl bg-[#11110F] border border-[#594A3A] rounded-lg shadow-2xl overflow-hidden">
            {/* Search input */}
            <div className="flex items-center gap-3 p-4 border-b border-[#594A3A]">
              <svg className="w-5 h-5 text-[#8F7644] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search the archive, timeline, sculptures, oral histories..."
                className="flex-1 bg-transparent text-[#E8D8B8] placeholder-[#8F7644] text-lg outline-none border-none"
                aria-label="Search query"
                aria-autocomplete="list"
                aria-controls="search-results"
                aria-activedescendant={
                  flatResults[selectedIndex] ? `search-result-${selectedIndex}` : undefined
                }
              />
              <button
                ref={closeRef}
                className="text-xs text-[#8F7644] hover:text-[#D8C49D] px-2 py-1 rounded transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  setQuery("");
                  setSelectedIndex(0);
                }}
                aria-label="Close search"
              >
                ESC
              </button>
            </div>

            {/* Results */}
            {query && (
              <div
                id="search-results"
                className="max-h-[60vh] overflow-y-auto"
                role="listbox"
                aria-label="Search results"
                onKeyDown={handleKeyDown}
              >
                {flatResults.length > 0 ? (
                  <div className="divide-y divide-[#594A3A]/50">
                    {Object.entries(grouped).map(([type, items]) => {
                      const section = searchSections.find((s) => s.type === type);
                      return (
                        <div key={type}>
                          {/* Section header */}
                          <div className="sticky top-0 bg-[#11110F] z-10 px-4 py-2 flex items-center gap-2 border-b border-[#594A3A]/30">
                            {section?.icon}
                            <span className="text-xs text-[#8F7644] uppercase tracking-[0.15em] font-medium">
                              {section?.label}
                            </span>
                            <span className="text-xs text-[#8F7644]">
                              ({items.length})
                            </span>
                          </div>

                          {/* Items */}
                          {items.map((item, idx) => {
                            const globalIdx = flatResults.indexOf(item);
                            return (
                              <button
                                key={`${type}-${idx}`}
                                id={`search-result-${globalIdx}`}
                                className={`w-full text-left p-4 flex items-start gap-3 transition-colors ${
                                  globalIdx === selectedIndex
                                    ? "bg-[#B89A5A]/10"
                                    : "hover:bg-[#292724]/80"
                                }`}
                                onClick={() => {
                                  window.location.href = item.href;
                                  setIsOpen(false);
                                }}
                                onMouseEnter={() => setSelectedIndex(globalIdx)}
                                role="option"
                                aria-selected={globalIdx === selectedIndex}
                              >
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-0.5">
                                    <span className="text-[10px] tracking-[0.1em] text-[#B89A5A] font-mono">
                                      {item.metadata}
                                    </span>
                                  </div>
                                  <p className="text-sm text-[#F1E8D4] font-medium truncate">
                                    {item.title}
                                  </p>
                                  <p className="text-xs text-[#D8C49D] truncate">
                                    {item.description}
                                  </p>
                                  {item.tags && (
                                    <div className="flex flex-wrap gap-1 mt-1">
                                      {item.tags.slice(0, 3).map((tag) => (
                                        <span
                                          key={tag}
                                          className="text-[9px] text-[#8F7644] bg-[#292724] px-1.5 py-0.5 rounded"
                                        >
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </div>
                                <svg
                                  className="w-4 h-4 text-[#8F7644] flex-shrink-0 mt-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </button>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-[#D8C49D] mb-2">No results for &quot;{query}&quot;</p>
                    <p className="text-xs text-[#8F7644]">Try different keywords</p>
                  </div>
                )}
              </div>
            )}

            {/* Placeholder when no query */}
            {!query && (
              <div className="p-8 text-center">
                <p className="text-[#8F7644] text-sm">
                  Start typing to search across all sections
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  {[
                    { label: "Archive", hint: "GH-001" },
                    { label: "Timeline", hint: "1987" },
                    { label: "Sculptures", hint: "Trimurti" },
                    { label: "Oral Histories", hint: "Ferry" },
                  ].map((s) => (
                    <button
                      key={s.label}
                      className="text-xs text-[#8F7644] bg-[#292724] px-3 py-1.5 rounded border border-[#594A3A] hover:border-[#B89A5A]/50 transition-colors"
                      onClick={() => {
                        setQuery(s.hint);
                        setSelectedIndex(0);
                        inputRef.current?.focus();
                      }}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="px-4 py-2 border-t border-[#594A3A] bg-[#080807]/50 flex items-center justify-between text-[10px] text-[#8F7644]">
              <span>
                <kbd className="bg-[#292724] px-1.5 py-0.5 rounded border border-[#594A3A] text-[10px]">↑↓</kbd>
                navigate
                <kbd className="bg-[#292724] px-1.5 py-0.5 rounded border border-[#594A3A] text-[10px] ml-2">↵</kbd>
                select
                <kbd className="bg-[#292724] px-1.5 py-0.5 rounded border border-[#594A3A] text-[10px] ml-2">esc</kbd>
                close
              </span>
              <span className="text-[#B89A5A]">Ctrl+K to open</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
