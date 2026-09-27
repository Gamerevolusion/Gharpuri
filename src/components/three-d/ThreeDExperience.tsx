"use client";

import { useState } from "react";
import Image from "next/image";
import { threeDExperiences, secondary3DResources, processSteps } from "@/data/threeD";
import type { SecondaryResource, ProcessStep } from "@/data/types";

const metadata =
  "DIGITAL DOCUMENTATION · MAIN CAVE · CAPTURED: 2023 · METHOD: LiDAR + PHOTOGRAMMETRY · EXPERIENCE: TAPESTRY / CYARK";

export default function ThreeDExperience() {
  const [launchExpanded, setLaunchExpanded] = useState(false);

  const handleLaunch = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(
      threeDExperiences[0]?.url || "https://tapestry.cyark.org/content/elephanta",
      "_blank",
      "noopener,noreferrer"
    );
    setLaunchExpanded(true);
  };

  return (
    <section
      id="three-d"
      className="py-20 md:py-28 bg-[#11110F] border-t border-[#594A3A]/30"
      aria-labelledby="three-d-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#B89A5A] text-xs tracking-[0.2em] uppercase font-medium border border-[#B89A5A]/30 px-3 py-1 rounded">
            03
          </span>
          <h2
            id="three-d-heading"
            className="font-display text-2xl md:text-3xl font-semibold text-[#F1E8D4]"
          >
            The Caves, Preserved in 3D
          </h2>
        </div>
        <p className="text-[#D8C49D] max-w-3xl mb-8 italic">
          &quot;A digital record of stone, space and sculpture.&quot;
        </p>

        {/* Primary 3D experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Left: explanatory content */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-[#F1E8D4] mb-3">
                  Elephanta Main Cave — 3D Documentation
                </h3>
                <p className="text-[#D8C49D] leading-relaxed mb-4">
                  In 2023, CyArk — working in partnership with local institutions — conducted comprehensive 3D digital documentation of Elephanta&apos;s Main Cave using LiDAR scanning and photogrammetry. The result is a detailed digital record of the cave&apos;s geometry, surface texture, and sculptural elements: a resource for conservation monitoring and for public access to a site that is difficult to experience fully in person.
                </p>
                <p className="text-[#D8C49D] leading-relaxed">
                  This is not GHARAPURI&apos;s scan. It is CyArk&apos;s documentation, presented here as a link to their platform — because the primary record belongs where it was created.
                </p>
              </div>

              {/* Metadata strip */}
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-[#8F7644] border border-[#594A3A]/50 bg-[#292724]/50 p-4 rounded">
                <span className="tracking-[0.1em]">{metadata}</span>
              </div>

              {/* CTA — polished launch card */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleLaunch}
                  className="inline-flex items-center gap-3 px-6 py-4 text-base font-medium bg-[#B89A5A] text-[#11110F] hover:bg-[#8F7644] active:scale-[0.98] transition-all duration-200 rounded-lg shadow-lg shadow-[#B89A5A]/20 focus-visible:outline-2 focus-visible:outline-[#B89A5A] group"
                  aria-label="Open Elephanta 3D experience in Tapestry/CyArk (new tab)"
                >
                  <svg className="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <span>
                    <span className="block text-sm font-semibold">Enter the Caves in 3D</span>
                    <span className="block text-xs opacity-70 mt-0.5">Tapestry / CyArk · Opens in new tab</span>
                  </span>
                </button>
                {launchExpanded && (
                  <p className="text-xs text-[#B89A5A] animate-pulse self-center">
                    Opening Tapestry…
                  </p>
                )}
              </div>

              {/* Attribution note */}
              <p className="text-xs text-[#8F7644] italic leading-relaxed border-t border-[#594A3A]/30 pt-4">
                {threeDExperiences[0]?.credit}
              </p>
            </div>
          </div>

          {/* Right: preview + launch context */}
          <div className="order-1 lg:order-2">
            {/* Static preview image with ken-burns style */}
            <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-[#594A3A] bg-[#292724] mb-4 group">
              <Image
                src="/images/trimurti.jpg"
                alt="Elephanta Cave 1 — the Trimurti sculpture, subject of the 2023 CyArk 3D documentation"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.03] will-change-transform"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11110F]/85 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-xs text-[#D8C49D] bg-[#080807]/80 px-2 py-1 rounded border border-[#594A3A]/50">
                  Preview — Elephanta Cave 1
                </span>
                <span className="text-[10px] text-[#B89A5A] bg-[#080807]/80 px-2 py-1 rounded border border-[#594A3A]/50 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Interactive 3D available
                </span>
              </div>
            </div>

            {/* Launch card visual — clearly indicates an external experience */}
            <div className="relative bg-[#080807] border border-[#594A3A]/50 rounded-lg p-5 mb-2">
              <div className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-[#B89A5A] rounded-full border-2 border-[#11110F] flex items-center justify-center">
                <svg className="w-3 h-3 text-[#11110F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-xs text-[#8F7644] mb-1">
                <span className="inline-flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536A11.959 11.959 0 0115.5 15.5H9V4.5M15.5 15.5l1.564-1.564M15.5 15.5l-1.564 1.564" />
                  </svg>
                  WebGL 3D experience
                </span>
              </p>
              <p className="text-xs text-[#D8C49D] leading-relaxed">
                Tapestry by CyArk is a browser-based 3D virtual tour. It requires WebGL and a modern browser.
                <br />
                <span className="text-[#8F7644]">GHARAPURI links out — the full interactive tour lives on CyArk&apos;s platform.</span>
              </p>
              <div className="mt-3 flex items-center gap-2 text-[10px] text-[#8F7644] border-t border-[#594A3A]/50 pt-2">
                <span className="tracking-[0.1em]">CYARK / TAPESTRY · 2023 · MAIN CAVE</span>
                <span className="text-[#594A3A]">·</span>
                <span className="italic">LiDAR + Photogrammetry</span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary resources */}
        <div className="mb-16">
          <h3 className="font-display text-xl font-semibold text-[#F1E8D4] mb-6">
            More Ways to Explore
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {secondary3DResources.map((resource: SecondaryResource, idx: number) => (
              <article
                key={idx}
                className="bg-[#292724] border border-[#594A3A] rounded-lg p-5 hover:border-[#B89A5A]/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <h4 className="font-medium text-[#F1E8D4] mb-2">{resource.title}</h4>
                <p className="text-xs text-[#8F7644] mb-3">{resource.provider}</p>
                <p className="text-sm text-[#D8C49D] leading-relaxed mb-4">{resource.description}</p>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[#B89A5A] hover:text-[#F1E8D4] transition-colors group"
                >
                  Visit
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <p className="text-[10px] text-[#8F7644] mt-2 italic">{resource.credit}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Process diagram */}
        <div>
          <h3 className="font-display text-xl font-semibold text-[#F1E8D4] mb-8 text-center">
            How a Cave Becomes Data
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-3">
            {processSteps.map((step: ProcessStep) => (
              <div
                key={step.step}
                className="flex-1 max-w-sm bg-[#292724] border border-[#594A3A] rounded-lg p-4 text-center hover:border-[#B89A5A]/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="text-[#B89A5A] font-mono text-sm tracking-wider mb-2">
                  {step.step}
                </div>
                <h4 className="font-medium text-[#F1E8D4] mb-1 text-sm">{step.title}</h4>
                <p className="text-xs text-[#D8C49D] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#8F7644] text-center mt-6 italic">
            LiDAR uses laser pulses to measure distance; photogrammetry derives 3D geometry from multiple photographs. Together they produce a dense, measurable digital record.
          </p>
        </div>

        {/* Mobile fallback note */}
        <div className="mt-8 text-center text-xs text-[#8F7644] border-t border-[#594A3A]/30 pt-4">
          <span className="italic">
            On mobile devices, the full 3D tour is best experienced on a desktop browser. This section provides a preview image and direct link to the Tapestry experience.
          </span>
        </div>
      </div>
    </section>
  );
}
