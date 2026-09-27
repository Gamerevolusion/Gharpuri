"use client";

import { sculptures } from "@/data/sculptures";
import { useState } from "react";
import Image from "next/image";
import { Reveal, StaggerReveal } from "@/components/ui/Reveal";

export default function Sculptures() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSculpture, setLightboxSculpture] = useState<typeof sculptures[0] | null>(null);

  const openLightbox = (sculpture: typeof sculptures[0]) => {
    setLightboxSculpture(sculpture);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxSculpture(null);
  };

  return (
    <>
      <section
        id="sculptures"
        className="py-20 md:py-28 bg-[#11110F] border-t border-[#594A3A]/30"
        aria-labelledby="sculptures-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#B89A5A] text-xs tracking-[0.2em] uppercase font-medium border border-[#B89A5A]/30 px-3 py-1 rounded bg-[#292724]/50">
              06
            </span>
            <Reveal>
              <h2
                id="sculptures-heading"
                className="font-display text-2xl md:text-3xl font-semibold text-[#F1E8D4]"
              >
                Sculptures
              </h2>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <p className="text-[#D8C49D] max-w-2xl mb-12">
              The sculptural programme of Elephanta&apos;s Cave 1 — a concentrated, sophisticated expression of Shaiva iconography carved into stone.
            </p>
          </Reveal>

          {/* Editorial gallery — not uniform cards */}
          <StaggerReveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8" staggerDelay={100}>
            {sculptures.map((sculpture) => (
              <article
                key={sculpture.id}
                className="group relative bg-[#292724] border border-[#594A3A] rounded-xl overflow-hidden hover:border-[#B89A5A]/50 transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden">
                  <Image
                    src={sculpture.image}
                    alt={sculpture.name}
                    fill
                    className="gallery-image"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    onClick={() => openLightbox(sculpture)}
                    style={{ cursor: "zoom-in" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292724] via-transparent to-transparent opacity-60" aria-hidden="true" />
                </div>

                {/* Content overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#292724]/95 to-transparent">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] tracking-[0.15em] text-[#B89A5A] font-mono bg-[#11110F]/60 px-2 py-0.5 rounded border border-[#B89A5A]/20">
                          {sculpture.id}
                        </span>
                        <span className="text-[#594A3A]">·</span>
                        <span className="text-[10px] text-[#8F7644]">{sculpture.location}</span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-[#F1E8D4] mb-1 group-hover:text-[#B89A5A] transition-colors">
                        {sculpture.name}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        className="p-2 text-[#D8C49D] hover:text-[#B89A5A] bg-[#11110F]/60 rounded-lg transition-colors hover:bg-[#11110F]/80 focus-visible:outline-2 focus-visible:outline-[#B89A5A]"
                        aria-label={`View details for ${sculpture.name} — opens lightbox`}
                        onClick={() => openLightbox(sculpture)}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-[#D8C49D] leading-relaxed mt-2 line-clamp-2">
                    {sculpture.description}
                  </p>
                  <div className="flex flex-wrap gap-x-2.5 gap-y-1 mt-2 text-xs text-[#8F7644]">
                    {sculpture.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="italic">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Source attribution */}
                <div className="absolute top-2 right-2">
                  <span className="text-[9px] tracking-[0.1em] text-[#8F7644] bg-[#11110F]/70 px-1.5 py-0.5 rounded border border-[#594A3A]/30 backdrop-blur-sm">
                    {sculpture.source}
                  </span>
                </div>
              </article>
            ))}
          </StaggerReveal>

          {/* Additional note */}
          <Reveal delay={200}>
            <div className="mt-8 text-xs text-[#8F7644] italic border-t border-[#594A3A]/30 pt-4">
              All images sourced from Wikimedia Commons under Creative Commons licenses. Individual attributions noted in Sources & Credits. Click any image to open a detailed lightbox view.
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lightbox overlay */}
      {lightboxOpen && lightboxSculpture && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${lightboxSculpture.name} — detailed view`}
        >
          <div
            className="relative max-w-4xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 p-2 bg-[#11110F]/80 rounded-full text-[#D8C49D] hover:text-[#B89A5A] hover:bg-[#11110F] transition-colors focus-visible:outline-2 focus-visible:outline-[#B89A5A]"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#594A3A] bg-[#080807] shadow-2xl">
              <Image
                src={lightboxSculpture.image}
                alt={lightboxSculpture.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden="true" />
            </div>

            <div className="mt-4 bg-[#11110F] border border-[#594A3A]/50 rounded-lg p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] tracking-[0.15em] text-[#B89A5A] font-mono">{lightboxSculpture.id}</span>
                    <span className="text-[#594A3A]">·</span>
                    <span className="text-xs text-[#8F7644]">{lightboxSculpture.location}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#F1E8D4]">{lightboxSculpture.name}</h3>
                </div>
                <span className="text-[9px] text-[#8F7644] bg-[#292724] px-2 py-1 rounded border border-[#594A3A]/30 whitespace-nowrap">
                  {lightboxSculpture.source}
                </span>
              </div>
              <p className="text-sm text-[#D8C49D] leading-relaxed mt-2">{lightboxSculpture.description}</p>
              <div className="flex flex-wrap gap-x-2 gap-y-1 mt-2 text-[10px] text-[#8F7644]">
                {lightboxSculpture.tags.map((tag) => (
                  <span key={tag} className="italic">{tag}</span>
                ))}
              </div>
            </div>

            {/* Keyboard hint */}
            <p className="mt-3 text-[10px] text-[#8F7644] text-center">
              Press <kbd className="bg-[#292724] px-1.5 py-0.5 rounded border border-[#594A3A] text-[9px]">Esc</kbd> to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}
