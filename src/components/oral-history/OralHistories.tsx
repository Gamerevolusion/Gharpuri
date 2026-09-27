"use client";

import { useState } from "react";
import { oralHistories } from "@/data/oralHistories";
import { Reveal } from "@/components/ui/Reveal";

export default function OralHistories() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = selectedId
    ? oralHistories.find((oh) => oh.id === selectedId)
    : null;

  return (
    <section
      id="oral-histories"
      className="py-20 md:py-28 bg-[#11110F] border-t border-[#594A3A]/30"
      aria-labelledby="oral-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#B89A5A] text-xs tracking-[0.2em] uppercase font-medium border border-[#B89A5A]/30 px-3 py-1 rounded bg-[#292724]/50">
            08
          </span>
          <Reveal>
            <h2
              id="oral-heading"
              className="font-display text-2xl md:text-3xl font-semibold text-[#F1E8D4]"
            >
              Voices of Gharapuri
            </h2>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <p className="text-[#D8C49D] max-w-2xl mb-12">
            Oral history testimony, recorded through the Gharapuri Community Documentation Initiative (Field Recording Series, 2024). Composite testimony assembled through the project&apos;s documentation process.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Entry list */}
          <div className="lg:col-span-2">
            <div className="bg-[#292724] border border-[#594A3A] rounded-xl overflow-hidden">
              <Reveal delay={100} className="p-4 border-b border-[#594A3A] bg-[#11110F]/50">
                <h3 className="text-xs tracking-[0.2em] text-[#8F7644] uppercase font-medium">
                  Field Recording Series
                </h3>
              </Reveal>
              <div className="divide-y divide-[#594A3A]/50 max-h-[420px] overflow-y-auto">
                {oralHistories.map((entry) => (
                  <button
                    key={entry.id}
                    onClick={() => setSelectedId(entry.id)}
                    className={`w-full text-left p-4 transition-all duration-200 ${
                      selectedId === entry.id
                        ? "bg-[#B89A5A]/10 border-l-3 border-[#B89A5A]"
                        : "hover:bg-[#292724]/80"
                    }`}
                    aria-pressed={selectedId === entry.id}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] tracking-[0.1em] text-[#B89A5A] font-mono">
                            {entry.id}
                          </span>
                          <span className="text-[#594A3A]">·</span>
                          <span className="text-[10px] text-[#8F7644]">
                            {entry.language}
                          </span>
                        </div>
                        <p className="text-sm text-[#F1E8D4] font-medium mb-0.5">
                          {entry.roleTitle}
                        </p>
                        <p className="text-xs text-[#D8C49D] line-clamp-2 leading-relaxed">
                          {entry.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <span className="text-[10px] text-[#8F7644]">{entry.duration}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Selected entry detail */}
          <div className="lg:col-span-3">
            {selected ? (
              <Reveal delay={50} className="bg-[#292724] border border-[#594A3A] rounded-xl p-6 space-y-5">
                {/* Provenance line */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#8F7644] border-b border-[#594A3A]/50 pb-4">
                  <span className="tracking-[0.1em] text-[#B89A5A] font-mono">
                    {selected.id}
                  </span>
                  <span>RECORDED {selected.recordedYear}</span>
                  <span>FIELD DOCUMENTATION SERIES</span>
                </div>

                {/* Header */}
                <div>
                  <span className="text-xs text-[#8F7644] uppercase tracking-[0.15em]">
                    {selected.roleTitle}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-[#F1E8D4] mt-1">
                    {selected.description}
                  </h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-xs text-[#D8C49D]">
                    <span className="text-[#8F7644]">{selected.language}</span>
                    {selected.duration && (
                      <>
                        <span className="text-[#594A3A]">·</span>
                        <span>{selected.duration}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Audio player UI (visual only — no actual audio file) */}
                <div className="bg-[#11110F] border border-[#594A3A] rounded-lg p-4">
                  <div className="flex items-center gap-4">
                    <button
                      className="w-12 h-12 rounded-full bg-[#B89A5A] text-[#11110F] flex items-center justify-center hover:bg-[#8F7644] active:scale-[0.95] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#B89A5A]"
                      aria-label="Play audio recording (unavailable)"
                      disabled
                    >
                      <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                    <div className="flex-1">
                      <div className="h-1.5 bg-[#292724] rounded-full overflow-hidden mb-2">
                        <div className="h-full w-0 bg-[#B89A5A] rounded-full" />
                      </div>
                      <div className="flex justify-between text-[10px] text-[#8F7644]">
                        <span>0:00</span>
                        <span>{selected.duration}</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-[#8F7644] italic">
                      Recording unavailable — transcript only
                    </span>
                  </div>
                </div>

                {/* Transcript */}
                <div>
                  <h4 className="text-xs tracking-[0.2em] text-[#8F7644] uppercase font-medium mb-3">
                    Transcript
                  </h4>
                  <div className="bg-[#11110F] border border-[#594A3A]/50 rounded-lg p-5 max-h-[280px] overflow-y-auto">
                    <p className="text-sm text-[#D8C49D] leading-relaxed whitespace-pre-wrap">
                      {selected.transcript}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[#B89A5A] bg-[#B89A5A]/10 px-2.5 py-1 rounded border border-[#B89A5A]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Attribution */}
                <p className="text-xs text-[#8F7644] italic border-t border-[#594A3A]/50 pt-3">
                  Attributed to: {selected.attribution}
                </p>
              </Reveal>
            ) : (
              <Reveal>
                <div className="bg-[#292724] border border-[#594A3A] rounded-xl p-12 text-center">
                  <svg className="w-12 h-12 text-[#594A3A] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 013 3z" />
                  </svg>
                  <p className="text-[#D8C49D]">Select an entry to read</p>
                  <p className="text-xs text-[#8F7644] mt-1">Choose a testimony from the list to view the full transcript</p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
