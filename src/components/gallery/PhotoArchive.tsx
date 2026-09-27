"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { archiveItems } from "@/data/archive";
import { fieldPhotos, type FieldPhotoItem } from "@/data/fieldDocumentation";
import { Reveal, StaggerReveal } from "@/components/ui/Reveal";

const generalPhotoItems = archiveItems;

export default function PhotoArchive() {
  const [activeTab, setActiveTab] = useState<"field" | "all">("field");
  const [selectedFieldPhoto, setSelectedFieldPhoto] = useState<FieldPhotoItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = (photo: FieldPhotoItem) => {
    const idx = fieldPhotos.findIndex((p) => p.id === photo.id);
    setCurrentIndex(idx !== -1 ? idx : 0);
    setSelectedFieldPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedFieldPhoto(null);
  };

  const handleNext = useCallback(() => {
    const nextIdx = (currentIndex + 1) % fieldPhotos.length;
    setCurrentIndex(nextIdx);
    setSelectedFieldPhoto(fieldPhotos[nextIdx]);
  }, [currentIndex]);

  const handlePrev = useCallback(() => {
    const prevIdx = (currentIndex - 1 + fieldPhotos.length) % fieldPhotos.length;
    setCurrentIndex(prevIdx);
    setSelectedFieldPhoto(fieldPhotos[prevIdx]);
  }, [currentIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedFieldPhoto) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedFieldPhoto, handleNext, handlePrev]);

  return (
    <section
      id="photo-archive"
      className="py-20 md:py-28 bg-[#11110F] border-t border-[#594A3A]/30"
      aria-labelledby="photo-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#B89A5A] text-xs tracking-[0.2em] uppercase font-medium border border-[#B89A5A]/30 px-3 py-1 rounded bg-[#292724]/50">
            09
          </span>
          <Reveal>
            <h2
              id="photo-heading"
              className="font-display text-2xl md:text-3xl font-semibold text-[#F1E8D4]"
            >
              Photo Archive & Field Documentation
            </h2>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <p className="text-[#D8C49D] max-w-3xl mb-8 leading-relaxed">
            Firsthand photographic documentation of Gharapuri Island and Cave 1. Explore on-site field surveys captured with real-time GPS coordinates, elevation, and rigorous archaeological analysis detailing rock-cut architecture, iconography, and conservation conditions.
          </p>
        </Reveal>

        {/* View Switcher Tabs */}
        <Reveal delay={150}>
          <div className="flex flex-wrap items-center gap-3 mb-10 pb-4 border-b border-[#594A3A]/30">
            <button
              onClick={() => setActiveTab("field")}
              className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 flex items-center gap-2 ${
                activeTab === "field"
                  ? "bg-[#B89A5A] text-[#11110F] border-[#B89A5A] shadow-md shadow-[#B89A5A]/20 font-semibold"
                  : "bg-[#292724] text-[#D8C49D] border-[#594A3A] hover:border-[#B89A5A]/50 hover:text-[#F1E8D4]"
              }`}
              aria-pressed={activeTab === "field"}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              On-Site Field Documentation ({fieldPhotos.length})
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                activeTab === "all"
                  ? "bg-[#B89A5A] text-[#11110F] border-[#B89A5A] shadow-md shadow-[#B89A5A]/20 font-semibold"
                  : "bg-[#292724] text-[#D8C49D] border-[#594A3A] hover:border-[#B89A5A]/50 hover:text-[#F1E8D4]"
              }`}
              aria-pressed={activeTab === "all"}
            >
              Complete Curated Catalog ({generalPhotoItems.length})
            </button>
          </div>
        </Reveal>

        {/* TAB 1: FIELD DOCUMENTATION (DETAILED ANALYSIS VIEW) */}
        {activeTab === "field" && (
          <div className="space-y-12">
            {/* Field Survey Verification Callout */}
            <Reveal delay={200}>
              <div className="p-4 rounded-xl bg-[#292724]/70 border border-[#B89A5A]/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#B89A5A]/10 text-[#B89A5A] mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#F1E8D4] uppercase tracking-wider">
                      Verified On-Site Field Survey · 27 September 2026
                    </h3>
                    <p className="text-xs text-[#D8C49D] mt-0.5">
                      Geolocated with GPS Map Camera (Elephanta Caves Main Temple, Mumbai Harbour). Elevation 65m–70m.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#B89A5A] bg-[#11110F]/80 px-3 py-1.5 rounded-lg border border-[#594A3A]">
                  <span>LAT: 18°57&apos;45&quot; N</span>
                  <span>·</span>
                  <span>LNG: 72°55&apos;58&quot; E</span>
                </div>
              </div>
            </Reveal>

            {/* Field Photos Showcase Cards with Full Visual Analysis */}
            <div className="space-y-10">
              {fieldPhotos.map((photo, idx) => (
                <article
                  key={photo.id}
                  className="bg-[#292724] border border-[#594A3A] rounded-2xl overflow-hidden hover:border-[#B89A5A]/60 transition-all duration-300 shadow-xl group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Left: Image Container with GPS Map Watermark */}
                    <div
                      className="lg:col-span-5 relative min-h-[320px] lg:min-h-[440px] cursor-pointer overflow-hidden bg-[#11110F]"
                      onClick={() => openLightbox(photo)}
                    >
                      <Image
                        src={photo.image}
                        alt={photo.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 1024px) 100vw, 42vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#11110F] via-transparent to-transparent opacity-60" />

                      {/* Click to expand pill */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <span className="text-[11px] font-mono text-[#F1E8D4] bg-[#11110F]/80 backdrop-blur-sm px-2.5 py-1 rounded border border-[#B89A5A]/30">
                          {photo.coordinates.lat}, {photo.coordinates.lng}
                        </span>
                        <span className="text-[11px] text-[#B89A5A] bg-[#11110F]/90 px-3 py-1 rounded-full border border-[#B89A5A]/50 flex items-center gap-1.5 font-medium shadow">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                          Inspect High-Res
                        </span>
                      </div>

                      {/* Category tag */}
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-[#B89A5A] text-[#11110F] shadow">
                          {photo.category}
                        </span>
                      </div>
                    </div>

                    {/* Right: Comprehensive Visual & Iconographic Analysis */}
                    <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        {/* Header details */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-3 border-b border-[#594A3A]/40 text-xs">
                          <span className="font-mono text-[#B89A5A] font-semibold tracking-wider">
                            RECORD {photo.id} · PHOTO {String(idx + 1).padStart(2, "0")} / 05
                          </span>
                          <span className="text-[#8F7644] font-mono">
                            {photo.date} · {photo.time} · Alt: {photo.coordinates.elevation}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F1E8D4] mb-1 group-hover:text-[#B89A5A] transition-colors">
                          {photo.title}
                        </h3>
                        <p className="text-xs uppercase tracking-wider text-[#8F7644] font-medium mb-4">
                          {photo.subtitle}
                        </p>

                        {/* Visual & Architectural Analysis Body */}
                        <div className="mb-6 space-y-3">
                          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B89A5A]">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Visual & Archaeological Analysis:
                          </div>
                          <p className="text-sm text-[#E8D8B8] leading-relaxed">
                            {photo.detailedAnalysis}
                          </p>
                        </div>

                        {/* Key Architectural & Iconographic Features */}
                        <div className="mb-5 bg-[#11110F]/60 rounded-xl p-4 border border-[#594A3A]/40">
                          <h4 className="text-[11px] uppercase tracking-wider font-semibold text-[#D8C49D] mb-2.5">
                            Key Observed Features in Image:
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {photo.architecturalFeatures.map((feat, fIdx) => (
                              <li key={fIdx} className="text-xs text-[#D8C49D] flex items-start gap-2">
                                <span className="text-[#B89A5A] mt-0.5">✦</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Footer Actions & Metadata */}
                      <div className="pt-4 border-t border-[#594A3A]/40 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-1.5">
                          {photo.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] text-[#8F7644] bg-[#11110F] px-2 py-0.5 rounded border border-[#594A3A]/40 font-mono"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={() => openLightbox(photo)}
                          className="px-4 py-2 text-xs font-semibold text-[#11110F] bg-[#B89A5A] hover:bg-[#D8C49D] rounded-lg transition-colors flex items-center gap-1.5 shadow"
                        >
                          <span>Full Screen & Context</span>
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: COMPLETE ARCHIVE MASONRY GRID */}
        {activeTab === "all" && (
          <StaggerReveal className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3" staggerDelay={40}>
            {generalPhotoItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#292724] border border-[#594A3A] rounded-xl overflow-hidden hover:border-[#B89A5A]/50 transition-all duration-300 hover:-translate-y-0.5 group-hover:shadow-lg group-hover:shadow-[#B89A5A]/5 flex flex-col"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="gallery-image"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11110F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-[10px] text-[#B89A5A] font-mono tracking-wider">
                        {item.id}
                      </p>
                      <p className="text-xs font-semibold text-[#F1E8D4] truncate">
                        {item.title}
                      </p>
                      <p className="text-[9px] text-[#8F7644] truncate">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-2.5 bg-[#292724] flex-1 flex flex-col justify-between">
                  <p className="text-xs font-medium text-[#F1E8D4] truncate">
                    {item.title}
                  </p>
                  <p className="text-[10px] text-[#8F7644] truncate mt-1">
                    {item.category} · {item.source}
                  </p>
                </div>
              </div>
            ))}
          </StaggerReveal>
        )}

        {/* Footnote / Attribution */}
        <Reveal delay={200}>
          <div className="mt-12 text-xs text-[#8F7644] italic border-t border-[#594A3A]/30 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <span>
              On-site field photography documented at Gharapuri Island with GPS-georeferenced positioning.
            </span>
            <span className="font-mono text-[10px] text-[#B89A5A]">
              Archaeological Survey of India (ASI) Reference Framework
            </span>
          </div>
        </Reveal>
      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL WITH FULL ARCHAEOLOGICAL & GPS DATA */}
      {selectedFieldPhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#11110F]/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={selectedFieldPhoto.title}
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-5xl bg-[#1E1C19] border border-[#B89A5A]/50 rounded-2xl overflow-hidden shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#594A3A] bg-[#292724]">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#B89A5A] text-[#11110F]">
                  {selectedFieldPhoto.id}
                </span>
                <span className="text-xs text-[#D8C49D] font-mono">
                  {selectedFieldPhoto.coordinates.lat} · {selectedFieldPhoto.coordinates.lng} · Elev {selectedFieldPhoto.coordinates.elevation}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-lg bg-[#11110F]/80 text-[#D8C49D] hover:text-[#B89A5A] hover:bg-[#11110F] transition-colors border border-[#594A3A]"
                  aria-label="Previous field image"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="p-1.5 rounded-lg bg-[#11110F]/80 text-[#D8C49D] hover:text-[#B89A5A] hover:bg-[#11110F] transition-colors border border-[#594A3A]"
                  aria-label="Next field image"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button
                  onClick={closeLightbox}
                  className="p-1.5 rounded-lg bg-[#11110F]/80 text-[#D8C49D] hover:text-[#F1E8D4] hover:bg-rose-900/40 transition-colors border border-[#594A3A] ml-2"
                  aria-label="Close dialog"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8 space-y-6">
              {/* Photo Display */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#594A3A] bg-black shadow-inner">
                <Image
                  src={selectedFieldPhoto.image}
                  alt={selectedFieldPhoto.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-display text-2xl font-bold text-[#F1E8D4] mb-1">
                  {selectedFieldPhoto.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#B89A5A] font-semibold mb-3">
                  {selectedFieldPhoto.subtitle} · {selectedFieldPhoto.location}
                </p>
                <p className="text-sm sm:text-base text-[#E8D8B8] leading-relaxed mb-6">
                  {selectedFieldPhoto.detailedAnalysis}
                </p>
              </div>

              {/* Context Breakdown Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#292724] border border-[#594A3A] rounded-xl p-4">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#B89A5A] mb-2 flex items-center gap-1.5">
                    <span>🏛️</span> Historical & Iconographic Context
                  </h4>
                  <p className="text-xs text-[#D8C49D] leading-relaxed">
                    {selectedFieldPhoto.historicalContext}
                  </p>
                </div>
                <div className="bg-[#292724] border border-[#594A3A] rounded-xl p-4">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#B89A5A] mb-2 flex items-center gap-1.5">
                    <span>🛡️</span> Conservation & Structural Status
                  </h4>
                  <p className="text-xs text-[#D8C49D] leading-relaxed">
                    {selectedFieldPhoto.conservationNotes}
                  </p>
                </div>
              </div>

              {/* Architectural features */}
              <div className="bg-[#292724] border border-[#594A3A] rounded-xl p-4">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#B89A5A] mb-2">
                  Observed Architectural Markers
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedFieldPhoto.architecturalFeatures.map((feat, idx) => (
                    <div key={idx} className="text-xs text-[#D8C49D] flex items-center gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* GPS metadata strip */}
              <div className="p-3 bg-[#11110F] rounded-lg border border-[#594A3A]/60 flex flex-wrap items-center justify-between text-xs text-[#8F7644] font-mono">
                <div>Source: {selectedFieldPhoto.originalFilename}</div>
                <div>Recorded: {selectedFieldPhoto.date} {selectedFieldPhoto.time}</div>
                <div className="text-[#B89A5A]">Elephanta Caves Main Temple (Cave 1)</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
