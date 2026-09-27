"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteMapMarkers, siteMapNote } from "@/data/siteMap";
import type { SiteMapMarker } from "@/data/types";

export default function SiteMap() {
  const [selectedMarker, setSelectedMarker] = useState<SiteMapMarker | null>(null);
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

  const handleMarkerSelect = useCallback((marker: SiteMapMarker) => {
    setSelectedMarker((prev) => (prev?.id === marker.id ? null : marker));
  }, []);

  const handleMarkerHover = useCallback((id: string | null) => {
    setHoveredMarker(id);
  }, []);

  return (
    <section
      id="site-map"
      className="py-20 md:py-28 bg-[#11110F] border-t border-[#594A3A]/30"
      aria-labelledby="map-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#B89A5A] text-xs tracking-[0.2em] uppercase font-medium border border-[#B89A5A]/30 px-3 py-1 rounded">
            05
          </span>
          <h2
            id="map-heading"
            className="font-display text-2xl md:text-3xl font-semibold text-[#F1E8D4]"
          >
            Site Map
          </h2>
        </div>
        <p className="text-[#D8C49D] max-w-2xl mb-8">
          An interpretive schematic of Elephanta Island&apos;s principal locations. Click a marker for details.
        </p>

        {/* Warning note */}
        <div className="bg-[#292724]/50 border border-[#594A3A]/50 rounded-lg p-4 mb-8">
          <p className="text-xs text-[#8F7644] italic leading-relaxed">
            {siteMapNote}
          </p>
        </div>

        {/* Map + panel layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SVG Schematic */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-xl border-2 border-[#594A3A] bg-[#080807] p-4 shadow-2xl">
              {/* Island outline + markers */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                role="img"
                aria-labelledby="map-svg-title map-svg-desc"
                onClick={() => {
                  // Clicking empty area of SVG deselects
                  if (selectedMarker) setSelectedMarker(null);
                }}
              >
                <title id="map-svg-title">Elephanta Island Interpretive Schematic</title>
                <desc id="map-svg-desc">
                  A schematic diagram of Elephanta Island showing the approximate positions of cave complexes, the jetty, and other points of interest. Not to scale.
                </desc>

                {/* Island shape (stylized oval) */}
                <ellipse
                  cx="200"
                  cy="200"
                  rx="160"
                  ry="140"
                  fill="#1a1a18"
                  stroke="#594A3A"
                  strokeWidth="1.5"
                />

                {/* Grid lines (subtle) */}
                <line x1="0" y1="200" x2="400" y2="200" stroke="#594A3A" strokeWidth="0.5" opacity="0.3" />
                <line x1="200" y1="0" x2="200" y2="400" stroke="#594A3A" strokeWidth="0.5" opacity="0.3" />

                {/* Cave markers */}
                {siteMapMarkers.map((marker: SiteMapMarker) => {
                  const isActive = selectedMarker?.id === marker.id;
                  const isHovered = hoveredMarker === marker.id;
                  const labelX = marker.x * 4;
                  const labelY = marker.y * 4;

                  return (
                    <g
                      key={marker.id}
                      role="button"
                      tabIndex={0}
                      aria-label={`${marker.name}${isActive ? " — selected" : ""}${isHovered ? ", hovered" : ""}`}
                      aria-pressed={isActive}
                      className={`cursor-pointer transition-all duration-300 ${
                        isActive ? "opacity-100" : isHovered ? "opacity-95" : "opacity-80"
                      }`}
                      onMouseEnter={() => handleMarkerHover(marker.id)}
                      onMouseLeave={() => handleMarkerHover(null)}
                      onClick={() => handleMarkerSelect(marker)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
                          e.preventDefault();
                          handleMarkerSelect(marker);
                        }
                        if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight") {
                          e.preventDefault();
                          const currentIdx = siteMapMarkers.findIndex((m) => m.id === marker.id);
                          const nextIdx =
                            e.key === "ArrowRight" || e.key === "ArrowDown"
                              ? Math.min(currentIdx + 1, siteMapMarkers.length - 1)
                              : Math.max(currentIdx - 1, 0);
                          const next = siteMapMarkers[nextIdx];
                          if (next) handleMarkerSelect(next);
                        }
                      }}
                      transform={`translate(${labelX - 20}, ${labelY - 10})`}
                      style={{
                        transition: "transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    >
                      {/* Connecting line to center */}
                      <line
                        x1="200"
                        y1="200"
                        x2={labelX}
                        y2={labelY}
                        stroke="#594A3A"
                        strokeWidth="0.5"
                        opacity="0.4"
                        strokeDasharray="4 4"
                      />

                      {/* Marker ring — appears on hover */}
                      {isHovered && (
                        <circle
                          cx={labelX}
                          cy={labelY}
                          r={14}
                          fill="none"
                          stroke="#B89A5A"
                          strokeWidth="1.5"
                          opacity="0.4"
                          className="transition-all duration-200"
                        />
                      )}

                      {/* Marker dot — scales on hover/active */}
                      <circle
                        cx={labelX}
                        cy={labelY}
                        r={isActive ? 7 : isHovered ? 6 : 5}
                        fill={isActive ? "#F1E8D4" : "#B89A5A"}
                        stroke="#080807"
                        strokeWidth="2"
                        className="transition-all duration-200 will-change-transform"
                      />

                      {/* Label — appears below marker */}
                      <text
                        x={labelX}
                        y={labelY + 20}
                        textAnchor="middle"
                        className="text-[10px] leading-tight select-none"
                        style={{
                          fill: isActive ? "#F1E8D4" : isHovered ? "#B89A5A" : "#8F7644",
                          fontFamily: "var(--font-inter)",
                          fontWeight: isActive ? 600 : 400,
                          textShadow: isActive
                            ? "0 1px 3px rgba(0,0,0,0.8)"
                            : isHovered
                            ? "0 1px 2px rgba(0,0,0,0.7)"
                            : "none",
                        }}
                        pointerEvents="none"
                      >
                        {marker.name}
                      </text>

                      {/* Active indicator: small filled dot inside marker */}
                      {isActive && (
                        <circle
                          cx={labelX}
                          cy={labelY}
                          r={12}
                          fill="none"
                          stroke="#F1E8D4"
                          strokeWidth="1"
                          opacity="0.35"
                          className="animate-pulse"
                        />
                      )}
                    </g>
                  );
                })}

                {/* Compass rose */}
                <g transform="translate(350, 30)">
                  <circle r="15" fill="none" stroke="#594A3A" strokeWidth="0.5" />
                  <line x1="0" y1="-12" x2="0" y2="12" stroke="#8F7644" strokeWidth="1" />
                  <line x1="-12" y1="0" x2="12" y2="0" stroke="#594A3A" strokeWidth="0.5" />
                  <text x="0" y="-16" textAnchor="middle" className="text-[#8F7644] text-[8px]">N</text>
                </g>

                {/* Scale bar */}
                <g transform="translate(20, 370)">
                  <line x1="0" y1="0" x2="60" y2="0" stroke="#8F7644" strokeWidth="1" />
                  <line x1="0" y1="-4" x2="0" y2="4" stroke="#8F7644" strokeWidth="1" />
                  <line x1="60" y1="-4" x2="60" y2="4" stroke="#8F7644" strokeWidth="1" />
                  <text x="30" y="10" textAnchor="middle" className="text-[#8F7644] text-[8px]">Not to scale</text>
                </g>
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] text-[#8F7644]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#B89A5A] border border-[#080807]"></span>
                Marker
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F1E8D4] border border-[#080807]"></span>
                Selected
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-[#594A3A] border-x border-[#594A3A]/50"></span>
                Connection
              </span>
            </div>
          </div>

          {/* Info panel */}
          <div className="min-h-[300px]">
            {selectedMarker ? (
              <div className="h-full space-y-4 animate-in">
                {/* Close button */}
                <button
                  className="self-start mb-1 text-xs text-[#8F7644] hover:text-[#B89A5A] transition-colors flex items-center gap-1 rounded px-2 py-1 hover:bg-[#292724]/50"
                  onClick={() => setSelectedMarker(null)}
                  aria-label="Close marker details"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Show all locations
                </button>

                {/* Marker image */}
                {selectedMarker.image ? (
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-[#594A3A] mb-1">
                    <Image
                      src={selectedMarker.image}
                      alt={selectedMarker.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" aria-hidden="true" />
                  </div>
                ) : (
                  <div className="aspect-video rounded-lg bg-[#292724] border border-[#594A3A] mb-1 flex items-center justify-center">
                    <span className="text-xs text-[#8F7644] italic">No image available</span>
                  </div>
                )}

                {/* Marker details */}
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#F1E8D4] mb-3">
                    {selectedMarker.name}
                  </h3>
                  <p className="text-sm text-[#D8C49D] leading-relaxed mb-4">
                    {selectedMarker.description}
                  </p>

                  {/* Archive references */}
                  {selectedMarker.archiveRefs.length > 0 && (
                    <div className="collapse-in">
                      <h4 className="text-xs tracking-[0.2em] text-[#8F7644] uppercase font-medium mb-2">
                        Archive References
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedMarker.archiveRefs.map((ref: string) => (
                          <span
                            key={ref}
                            className="text-xs text-[#B89A5A] bg-[#292724] px-2.5 py-1 rounded border border-[#B89A5A]/30 font-mono"
                          >
                            {ref}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Link */}
                  <Link
                    href="#archive"
                    className="mt-2 inline-flex items-center gap-2 text-sm text-[#B89A5A] hover:text-[#F1E8D4] transition-colors group"
                  >
                    View in Archive
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                <svg className="w-12 h-12 text-[#594A3A] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.95 1.95 0 01-2.777 0l-4.244-4.243a8.06 8.06 0 011.566-5.499l6.504-6.504a2.5 2.5 0 013.536 3.536L10.828 14.314a4.5 4.5 0 00-1.218 6.857l-1.414 1.414a4.5 4.5 0 006.364 0l1.414-1.414a4.5 4.5 0 00-1.218-6.857z" />
                </svg>
                <p className="text-sm text-[#D8C49D]">Click a marker to explore</p>
                <p className="text-xs text-[#8F7644] mt-1">
                  Select any point on the schematic to see details
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="text-[10px] px-2 py-1 bg-[#292724] rounded border border-[#594A3A]/50 text-[#8F7644]">
                    <kbd className="bg-[#11110F] px-1 rounded text-[9px]">Tab</kbd> to navigate markers
                  </span>
                  <span className="text-[10px] px-2 py-1 bg-[#292724] rounded border border-[#594A3A]/50 text-[#8F7644]">
                    <kbd className="bg-[#11110F] px-1 rounded text-[9px]">Enter</kbd> to select
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
