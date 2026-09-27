"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const metadata = "ELEPHANTA ISLAND · MUMBAI, INDIA · UNESCO WORLD HERITAGE SITE";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#11110F]" aria-labelledby="hero-heading">
      {/* Background image with Ken Burns effect */}
      <div className="absolute inset-0">
        <div ref={imageRef} className="hero-bg absolute inset-0">
          <Image
            src="/images/trimurti.jpg"
            alt="Elephanta Caves, Cave 1 — the monumental Trimurti sculpture in the main shrine"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#11110F]/55 via-[#11110F]/70 to-[#080807]" aria-hidden="true" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,fade_11110F_40%,fade_080807_100%)]" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Wordmark */}
          <Reveal delay={100}>
            <div className="mb-6 flex flex-col">
              <span className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[0.18em] text-[#F1E8D4]">
                GHARAPURI
              </span>
              <span className="text-sm tracking-[0.25em] text-[#B89A5A] uppercase font-medium mt-1">
                The Digital Memory of Elephanta
              </span>
            </div>
          </Reveal>

          {/* Tagline */}
          <Reveal delay={200}>
            <p className="text-xs tracking-[0.2em] text-[#8F7644] uppercase font-medium mb-6">
              A Digital Heritage Archive
            </p>
          </Reveal>

          {/* Hero statement */}
          <Reveal delay={300}>
            <h1
              id="hero-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-[#F1E8D4] mb-6"
            >
              Preserving what exists, documenting what is remembered, and making Elephanta&apos;s heritage accessible for future generations.
            </h1>
          </Reveal>

          {/* CTA buttons */}
          <Reveal delay={400}>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="#archive"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium bg-[#B89A5A] text-[#11110F] hover:bg-[#8F7644] active:scale-[0.97] rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#B89A5A] group"
              >
                Explore the Archive
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#three-d"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium border-2 border-[#B89A5A]/40 text-[#B89A5A] hover:bg-[#B89A5A]/10 hover:border-[#B89A5A] active:scale-[0.97] rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#B89A5A] group"
              >
                Enter the Caves in 3D
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </Reveal>

          {/* Metadata strip */}
          <Reveal delay={500}>
            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-1.5 text-xs text-[#D8C49D] border-t border-[#594A3A]/50 pt-4">
              <span className="tracking-[0.1em]">{metadata}</span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <Reveal delay={700}>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[#8F7644]">
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </Reveal>
    </section>
  );
}
