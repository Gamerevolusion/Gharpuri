"use client";

import { useState } from "react";
import Image from "next/image";
import { timelineEvents } from "@/data/timeline";
import { Reveal, StaggerReveal } from "@/components/ui/Reveal";

export default function Timeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="timeline"
      className="py-20 md:py-28 bg-[#11110F] border-t border-[#594A3A]/30"
      aria-labelledby="timeline-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#B89A5A] text-xs tracking-[0.2em] uppercase font-medium border border-[#B89A5A]/30 px-3 py-1 rounded bg-[#292724]/50">
            04
          </span>
          <Reveal>
            <h2
              id="timeline-heading"
              className="font-display text-2xl md:text-3xl font-semibold text-[#F1E8D4]"
            >
              Journey Through Time
            </h2>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <p className="text-[#D8C49D] max-w-2xl mb-12">
            From early rock-cut traditions through Portuguese period, rediscovery, conservation, UNESCO inscription, the 2023 CyArk digital documentation, and present-day preservation initiatives.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative pl-2">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#594A3A]/30" aria-hidden="true" />
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#B89A5A]/50" style={{ height: "50%" }} aria-hidden="true" />

          <StaggerReveal className="space-y-6" staggerDelay={80}>
            {timelineEvents.map((event, idx) => (
              <div key={idx}>
                <article
                  className={`border-l-2 border-[#B89A5A]/40 ml-6 pl-6 ${
                    expandedId === event.year ? "border-l-[#B89A5A]" : ""
                  }`}
                >
                  {/* Timeline marker dot */}
                  <div
                    className={`flex items-start gap-4 group ${
                      expandedId === event.year ? "mt-1" : ""
                    }`}
                  >
                    {/* Year badge */}
                    <div className="flex-shrink-0 mt-1">
                      <span
                        className={`inline-block w-14 text-right text-sm font-mono ${
                          expandedId === event.year
                            ? "text-[#F1E8D4] bg-[#B89A5A] px-3 py-1.5 rounded"
                            : "text-[#B89A5A] bg-[#292724] px-3 py-1.5 rounded border border-[#594A3A] group-hover:border-[#B89A5A]/50 transition-colors"
                        }`}
                      >
                        {event.year}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3
                          className={`font-display text-lg font-semibold ${
                            expandedId === event.year
                              ? "text-[#F1E8D4]"
                              : "text-[#F1E8D4] group-hover:text-[#B89A5A] transition-colors"
                          }`}
                        >
                          {event.title}
                        </h3>
                        {event.confidence === "debated" && (
                          <span className="text-[10px] tracking-[0.15em] text-[#8F7644] italic bg-[#292724] px-2 py-0.5 rounded border border-[#594A3A]/50 flex-shrink-0">
                            dating debated
                          </span>
                        )}
                      </div>
                      <p
                        className={`text-sm text-[#D8C49D] leading-relaxed line-clamp-2 transition-all duration-200 ${
                          expandedId === event.year ? "line-clamp-none mt-2" : ""
                        }`}
                      >
                        {event.description}
                      </p>

                      {/* Expand indicator */}
                      <div className="mt-2 flex items-center gap-2 text-xs text-[#8F7644]">
                        <span className="tracking-[0.1em]">{event.source}</span>
                        <button
                          className="p-0.5 rounded hover:bg-[#292724]/80 transition-colors"
                          onClick={() => toggleExpand(event.year)}
                          aria-expanded={expandedId === event.year}
                          aria-label={expandedId === event.year ? "Collapse entry" : "Expand entry"}
                        >
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${expandedId === event.year ? "rotate-180" : ""}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>

                      {/* Expanded content */}
                      {expandedId === event.year && (
                        <div className="mt-4 pt-4 border-t border-[#594A3A]/50 space-y-4 reveal-enter">
                          {event.image && (
                            <div className="relative aspect-video rounded-lg overflow-hidden border border-[#594A3A] mb-2">
                              <Image
                                src={event.image}
                                alt={`${event.title} — Elephanta heritage`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" aria-hidden="true" />
                            </div>
                          )}
                          <p className="text-sm text-[#D8C49D] leading-relaxed">
                            {event.description}
                          </p>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#8F7644] italic">
                            <span className="tracking-[0.1em]">{event.source}</span>
                          </div>
                          <button
                            className="text-xs text-[#B89A5A] hover:text-[#F1E8D4] underline underline-offset-4"
                            onClick={() => toggleExpand(event.year)}
                          >
                            Collapse
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </StaggerReveal>
        </div>

        {/* Legend */}
        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#8F7644] border-t border-[#594A3A]/50 pt-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#B89A5A] border border-[#080807]" aria-hidden="true" />
              <span>Established date</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-[0.15em] text-[#8F7644] italic bg-[#292724] px-2 py-0.5 rounded border border-[#594A3A]/50 flex-shrink-0">
                dating debated
              </span>
              <span>Scholarly debate</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
