"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const navLinks = [
  { label: "Explore", href: "#explore" },
  { label: "Archive", href: "#archive" },
  { label: "3D Experience", href: "#three-d" },
  { label: "Oral Histories", href: "#oral-histories" },
  { label: "Timeline", href: "#timeline" },
  { label: "Preservation", href: "#preservation" },
  { label: "Survey Results", href: "#survey-results" },
  { label: "About", href: "#about" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "nav-scrolled"
            : "bg-transparent"
        }`}
        aria-label="Primary navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Wordmark */}
            <Link
              href="#"
              className="flex flex-col items-start gap-0.5 group"
              aria-label="GHARAPURI homepage"
            >
              <span className="font-display text-xl md:text-2xl font-semibold tracking-[0.15em] text-[#F1E8D4] group-hover:text-[#B89A5A] transition-colors duration-200">
                GHARAPURI
              </span>
              <span className="text-[10px] md:text-[11px] tracking-[0.2em] text-[#8F7644] uppercase font-medium">
                The Digital Memory of Elephanta
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm text-[#D8C49D] hover:text-[#B89A5A] hover:bg-[#292724]/80 rounded-lg transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#B89A5A]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#archive"
                className="ml-4 px-5 py-2.5 text-sm font-medium bg-[#B89A5A] text-[#11110F] hover:bg-[#8F7644] active:scale-[0.97] rounded-lg transition-all duration-200 shadow-lg shadow-[#B89A5A]/20 hover:shadow-[#B89A5A]/30 focus-visible:outline-2 focus-visible:outline-[#B89A5A]"
                onClick={() => setMobileOpen(false)}
              >
                Enter the Caves
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 text-[#D8C49D] hover:text-[#B89A5A] transition-colors focus-visible:outline-2 focus-visible:outline-[#B89A5A] rounded-lg hover:bg-[#292724]/80"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <Reveal>
                {mobileOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </Reveal>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-[#080807]"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
        <nav
          className="relative z-50 h-full flex flex-col bg-[#11110F] overflow-y-auto"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-[#594A3A]">
            <span className="text-sm font-medium text-[#8F7644] uppercase tracking-[0.2em]">
              Navigation
            </span>
            <button
              className="p-2 text-[#D8C49D] hover:text-[#B89A5A] transition-colors rounded-lg hover:bg-[#292724]/80 focus-visible:outline-2 focus-visible:outline-[#B89A5A]"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link, idx) => (
              <Reveal key={link.label} delay={idx * 30} className="flex items-center">
                <Link
                  href={link.href}
                  className="flex-1 px-4 py-4 text-lg text-[#E8D8B8] hover:text-[#B89A5A] hover:bg-[#292724]/80 rounded-lg border-l-3 border-transparent hover:border-[#B89A5A] transition-all duration-200 hover:-translate-x-0.5 focus-visible:outline-2 focus-visible:outline-[#B89A5A] group"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="inline-block w-1 h-7 bg-[#B89A5A]/30 mr-3 mb-0.5 transition-colors duration-200 group-hover:bg-[#B89A5A] group-hover:mr-2" aria-hidden="true" />
                  {link.label}
                </Link>
              </Reveal>
            ))}
            <div className="mt-6 pt-6 border-t border-[#594A3A]">
              <Reveal delay={240}>
                <Link
                  href="#archive"
                  className="block w-full px-4 py-4 text-lg font-medium bg-[#B89A5A] text-[#11110F] text-center hover:bg-[#8F7644] active:scale-[0.97] rounded-lg transition-all duration-200 shadow-lg shadow-[#B89A5A]/20 hover:shadow-[#B89A5A]/30 focus-visible:outline-2 focus-visible:outline-[#B89A5A]"
                  onClick={() => setMobileOpen(false)}
                >
                  Enter the Caves
                </Link>
              </Reveal>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
