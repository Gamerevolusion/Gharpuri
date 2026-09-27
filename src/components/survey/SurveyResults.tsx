"use client";

import { useState, useMemo } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  surveyMeta,
  heardOfCaves,
  visitedCaves,
  familiarityDistribution,
  interestAspects,
  shouldDigitallyDocument,
  digitalMethods,
  wouldUseWebsite,
  threeDUsefulnessDistribution,
  preferredContent,
  biggestChallenge,
  wouldContribute,
  topSuggestions,
} from "@/data/surveyData";

/* ─── HELPERS ─────────────────────────────────────────────────── */

function percentage(value: number, total: number) {
  return Math.round((value / total) * 100);
}

/* ─── MINI BAR CHART (horizontal) ─────────────────────────────── */

function HorizontalBarChart({
  data,
  total,
  accentColor = "#B89A5A",
}: {
  data: Record<string, number>;
  total: number;
  accentColor?: string;
}) {
  const maxVal = Math.max(...Object.values(data));
  return (
    <div className="flex flex-col gap-2.5">
      {Object.entries(data).map(([label, value]) => {
        const pct = percentage(value, total);
        const barWidth = Math.max((value / maxVal) * 100, 4);
        return (
          <div key={label} className="group">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-[#D8C49D] truncate max-w-[70%]">
                {label}
              </span>
              <span className="text-xs font-mono text-[#8F7644] tabular-nums">
                {value} ({pct}%)
              </span>
            </div>
            <div className="relative h-5 rounded-full bg-[#292724] overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${barWidth}%`,
                  background: `linear-gradient(90deg, ${accentColor}88, ${accentColor})`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── DONUT / RING CHART (SVG) ───────────────────────────────── */

function DonutChart({
  data,
  total,
  colors,
  size = 160,
}: {
  data: Record<string, number>;
  total: number;
  colors: string[];
  size?: number;
}) {
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  let cumulativeOffset = 0;

  const segments = Object.entries(data).map(([label, value], i) => {
    const pct = value / total;
    const dashLength = pct * circumference;
    const offset = cumulativeOffset;
    cumulativeOffset += dashLength;
    return { label, value, pct, dashLength, offset, color: colors[i % colors.length] };
  });

  return (
    <div className="flex flex-col items-center gap-4">
      <svg width={size} height={size} viewBox="0 0 160 160" aria-hidden="true">
        {segments.map((s) => (
          <circle
            key={s.label}
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke={s.color}
            strokeWidth="18"
            strokeDasharray={`${s.dashLength} ${circumference - s.dashLength}`}
            strokeDashoffset={-s.offset}
            strokeLinecap="butt"
            className="transition-all duration-700"
            transform="rotate(-90 80 80)"
          />
        ))}
        <text x="80" y="75" textAnchor="middle" className="fill-[#F1E8D4] text-xl font-semibold" style={{ fontFamily: "var(--font-inter)" }}>
          {total}
        </text>
        <text x="80" y="95" textAnchor="middle" className="fill-[#8F7644] text-[10px]" style={{ fontFamily: "var(--font-inter)" }}>
          responses
        </text>
      </svg>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
        {segments.map((s) => (
          <span key={s.label} className="flex items-center gap-1.5 text-[11px] text-[#D8C49D]">
            <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: s.color }} />
            {s.label} ({Math.round(s.pct * 100)}%)
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── STAT CARD ───────────────────────────────────────────────── */

function StatCard({
  label,
  value,
  subtitle,
  icon,
}: {
  label: string;
  value: string;
  subtitle?: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-[#292724]/60 border border-[#594A3A]/50 rounded-xl p-5 flex flex-col items-center text-center hover:border-[#B89A5A]/40 transition-colors duration-300">
      <div className="text-[#B89A5A] mb-2">{icon}</div>
      <span className="font-display text-2xl font-semibold text-[#F1E8D4]">{value}</span>
      <span className="text-xs text-[#8F7644] mt-1">{label}</span>
      {subtitle && <span className="text-[10px] text-[#594A3A] mt-0.5">{subtitle}</span>}
    </div>
  );
}

/* ─── LIKERT SCALE VISUAL ─────────────────────────────────────── */

function LikertScale({
  data,
  total,
}: {
  data: Record<string, number>;
  total: number;
}) {
  const likertColors = ["#8B4513", "#B8860B", "#B89A5A", "#9ACD32", "#32CD32"];
  return (
    <div className="space-y-3">
      <div className="flex rounded-lg overflow-hidden h-8">
        {Object.entries(data).map(([score, count], i) => {
          const pct = (count / total) * 100;
          if (pct < 1) return null;
          return (
            <div
              key={score}
              className="relative flex items-center justify-center transition-all duration-500"
              style={{
                width: `${pct}%`,
                backgroundColor: likertColors[i],
                minWidth: pct > 3 ? undefined : "12px",
              }}
              title={`Score ${score}: ${count} (${Math.round(pct)}%)`}
            >
              {pct > 8 && (
                <span className="text-[10px] font-semibold text-[#11110F] drop-shadow">
                  {Math.round(pct)}%
                </span>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex justify-between text-[10px] text-[#8F7644]">
        <span>1 — Not familiar</span>
        <span>5 — Very familiar</span>
      </div>
    </div>
  );
}

/* ─── SECTION TABS ────────────────────────────────────────────── */

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "awareness", label: "Awareness & Interest" },
  { id: "digital", label: "Digital Preferences" },
  { id: "feedback", label: "Feedback & Suggestions" },
] as const;

type TabId = (typeof tabs)[number]["id"];

/* ─── MAIN COMPONENT ──────────────────────────────────────────── */

export default function SurveyResults() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const avgFamiliarity = useMemo(() => {
    let sum = 0, count = 0;
    Object.entries(familiarityDistribution).forEach(([score, n]) => {
      sum += parseInt(score) * n;
      count += n;
    });
    return (sum / count).toFixed(1);
  }, []);

  const avg3D = useMemo(() => {
    let sum = 0, count = 0;
    Object.entries(threeDUsefulnessDistribution).forEach(([score, n]) => {
      sum += parseInt(score) * n;
      count += n;
    });
    return (sum / count).toFixed(1);
  }, []);

  const accentGold = "#B89A5A";

  return (
    <section
      id="survey-results"
      className="py-20 md:py-28 bg-[#11110F] border-t border-[#594A3A]/30"
      aria-labelledby="survey-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#B89A5A] text-xs tracking-[0.2em] uppercase font-medium border border-[#B89A5A]/30 px-3 py-1 rounded bg-[#292724]/50">
              10
            </span>
            <h2
              id="survey-heading"
              className="font-display text-2xl md:text-3xl font-semibold text-[#F1E8D4]"
            >
              Survey Results
            </h2>
          </div>
          <p className="text-[#D8C49D] max-w-2xl mb-4">
            {surveyMeta.description}
          </p>
          <p className="text-xs text-[#8F7644] italic mb-8">
            {surveyMeta.totalResponses} responses collected on {surveyMeta.collectionDate}. Names and roll numbers have been anonymised.
          </p>
        </Reveal>

        {/* Tab Navigation */}
        <Reveal delay={100}>
          <div className="flex flex-wrap gap-1 mb-10 p-1 bg-[#292724]/40 rounded-xl border border-[#594A3A]/30 w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#B89A5A] text-[#11110F] font-medium shadow-lg shadow-[#B89A5A]/20"
                    : "text-[#D8C49D] hover:text-[#B89A5A] hover:bg-[#292724]/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* ─── TAB: OVERVIEW ──────────────────────────────────── */}
        {activeTab === "overview" && (
          <div className="space-y-10 animate-in">
            {/* Key stats */}
            <Reveal delay={100}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard
                  label="Total Responses"
                  value={surveyMeta.totalResponses.toString()}
                  icon={
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  }
                />
                <StatCard
                  label="Have heard of caves"
                  value={`${percentage(heardOfCaves["Yes"], surveyMeta.totalResponses)}%`}
                  subtitle={`${heardOfCaves["Yes"]} of ${surveyMeta.totalResponses}`}
                  icon={
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  }
                />
                <StatCard
                  label="Avg. Familiarity"
                  value={`${avgFamiliarity}/5`}
                  subtitle="1–5 scale"
                  icon={
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  }
                />
                <StatCard
                  label="Would use website"
                  value={`${percentage(
                    (wouldUseWebsite["Definitely"] || 0) + (wouldUseWebsite["Probably"] || 0),
                    surveyMeta.totalResponses
                  )}%`}
                  subtitle="Definitely + Probably"
                  icon={
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  }
                />
              </div>
            </Reveal>

            {/* Donut charts row */}
            <Reveal delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-[#292724]/40 border border-[#594A3A]/30 rounded-xl p-6">
                  <h3 className="text-sm font-medium text-[#F1E8D4] mb-4 text-center">
                    Heard of Elephanta Caves?
                  </h3>
                  <DonutChart
                    data={heardOfCaves}
                    total={surveyMeta.totalResponses}
                    colors={["#32CD32", "#B89A5A", "#594A3A"]}
                  />
                </div>
                <div className="bg-[#292724]/40 border border-[#594A3A]/30 rounded-xl p-6">
                  <h3 className="text-sm font-medium text-[#F1E8D4] mb-4 text-center">
                    Visited the Caves?
                  </h3>
                  <DonutChart
                    data={visitedCaves}
                    total={surveyMeta.totalResponses}
                    colors={["#32CD32", "#594A3A"]}
                  />
                </div>
                <div className="bg-[#292724]/40 border border-[#594A3A]/30 rounded-xl p-6">
                  <h3 className="text-sm font-medium text-[#F1E8D4] mb-4 text-center">
                    Would Contribute Content?
                  </h3>
                  <DonutChart
                    data={wouldContribute}
                    total={surveyMeta.totalResponses}
                    colors={["#32CD32", "#B89A5A", "#8B4513"]}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        )}

        {/* ─── TAB: AWARENESS & INTEREST ──────────────────────── */}
        {activeTab === "awareness" && (
          <div className="space-y-10 animate-in">
            {/* Familiarity scale */}
            <Reveal delay={100}>
              <div className="bg-[#292724]/40 border border-[#594A3A]/30 rounded-xl p-6">
                <h3 className="text-sm font-medium text-[#F1E8D4] mb-1">
                  Familiarity with History & Cultural Significance
                </h3>
                <p className="text-xs text-[#8F7644] mb-4">
                  Average: {avgFamiliarity} / 5 across {surveyMeta.totalResponses} respondents
                </p>
                <LikertScale data={familiarityDistribution} total={surveyMeta.totalResponses} />
              </div>
            </Reveal>

            {/* Interest aspects */}
            <Reveal delay={200}>
              <div className="bg-[#292724]/40 border border-[#594A3A]/30 rounded-xl p-6">
                <h3 className="text-sm font-medium text-[#F1E8D4] mb-4">
                  Which aspects of Elephanta interest you the most?
                </h3>
                <p className="text-xs text-[#8F7644] mb-4">Respondents could select multiple options</p>
                <HorizontalBarChart data={interestAspects} total={surveyMeta.totalResponses} accentColor={accentGold} />
              </div>
            </Reveal>

            {/* Should digitally document */}
            <Reveal delay={300}>
              <div className="bg-[#292724]/40 border border-[#594A3A]/30 rounded-xl p-6">
                <h3 className="text-sm font-medium text-[#F1E8D4] mb-4">
                  Should heritage be digitally documented?
                </h3>
                <HorizontalBarChart data={shouldDigitallyDocument} total={surveyMeta.totalResponses} accentColor="#32CD32" />
              </div>
            </Reveal>

            {/* Biggest challenge */}
            <Reveal delay={400}>
              <div className="bg-[#292724]/40 border border-[#594A3A]/30 rounded-xl p-6">
                <h3 className="text-sm font-medium text-[#F1E8D4] mb-4">
                  Biggest challenge in preserving heritage sites
                </h3>
                <HorizontalBarChart data={biggestChallenge} total={surveyMeta.totalResponses} accentColor="#D4756B" />
              </div>
            </Reveal>
          </div>
        )}

        {/* ─── TAB: DIGITAL PREFERENCES ──────────────────────── */}
        {activeTab === "digital" && (
          <div className="space-y-10 animate-in">
            {/* Digital methods */}
            <Reveal delay={100}>
              <div className="bg-[#292724]/40 border border-[#594A3A]/30 rounded-xl p-6">
                <h3 className="text-sm font-medium text-[#F1E8D4] mb-4">
                  Which digital methods could help preserve heritage?
                </h3>
                <p className="text-xs text-[#8F7644] mb-4">Respondents could select multiple options</p>
                <HorizontalBarChart data={digitalMethods} total={surveyMeta.totalResponses} accentColor="#6B93D4" />
              </div>
            </Reveal>

            {/* Website usage */}
            <Reveal delay={200}>
              <div className="bg-[#292724]/40 border border-[#594A3A]/30 rounded-xl p-6">
                <h3 className="text-sm font-medium text-[#F1E8D4] mb-4">
                  Would you use a heritage exploration website?
                </h3>
                <HorizontalBarChart data={wouldUseWebsite} total={surveyMeta.totalResponses} accentColor="#32CD32" />
              </div>
            </Reveal>

            {/* 3D usefulness */}
            <Reveal delay={300}>
              <div className="bg-[#292724]/40 border border-[#594A3A]/30 rounded-xl p-6">
                <h3 className="text-sm font-medium text-[#F1E8D4] mb-1">
                  How useful would 3D virtual exploration be?
                </h3>
                <p className="text-xs text-[#8F7644] mb-4">
                  Average: {avg3D} / 5 · {percentage(
                    (threeDUsefulnessDistribution["4"] || 0) + (threeDUsefulnessDistribution["5"] || 0),
                    surveyMeta.totalResponses
                  )}% rated it 4 or 5
                </p>
                <LikertScale data={threeDUsefulnessDistribution} total={surveyMeta.totalResponses} />
              </div>
            </Reveal>

            {/* Preferred content */}
            <Reveal delay={400}>
              <div className="bg-[#292724]/40 border border-[#594A3A]/30 rounded-xl p-6">
                <h3 className="text-sm font-medium text-[#F1E8D4] mb-4">
                  What content would you most like to find?
                </h3>
                <p className="text-xs text-[#8F7644] mb-4">Respondents could select multiple options</p>
                <HorizontalBarChart data={preferredContent} total={surveyMeta.totalResponses} accentColor={accentGold} />
              </div>
            </Reveal>
          </div>
        )}

        {/* ─── TAB: FEEDBACK & SUGGESTIONS ────────────────────── */}
        {activeTab === "feedback" && (
          <div className="space-y-10 animate-in">
            <Reveal delay={100}>
              <div className="bg-[#292724]/40 border border-[#594A3A]/30 rounded-xl p-6">
                <h3 className="text-sm font-medium text-[#F1E8D4] mb-2">
                  Top Suggestions from Respondents
                </h3>
                <p className="text-xs text-[#8F7644] mb-6">
                  Grouped and ranked by frequency of similar responses
                </p>
                <div className="space-y-4">
                  {topSuggestions.map((suggestion, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 bg-[#11110F] rounded-lg border border-[#594A3A]/30 hover:border-[#B89A5A]/30 transition-colors duration-300"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#B89A5A]/20 border border-[#B89A5A]/40 flex items-center justify-center">
                        <span className="text-xs font-semibold text-[#B89A5A]">
                          {i + 1}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-[#D8C49D] leading-relaxed italic">
                          &ldquo;{suggestion.text}&rdquo;
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="h-1.5 rounded-full bg-[#292724] flex-1 max-w-[120px] overflow-hidden">
                            <div
                              className="h-full rounded-full bg-[#B89A5A] transition-all duration-700"
                              style={{ width: `${(suggestion.count / topSuggestions[0].count) * 100}%` }}
                            />
                          </div>
                          <span className="text-[10px] text-[#8F7644] font-mono tabular-nums">
                            {suggestion.count} {suggestion.count === 1 ? "response" : "responses"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Key Insights */}
            <Reveal delay={200}>
              <div className="bg-gradient-to-br from-[#B89A5A]/10 to-[#292724]/40 border border-[#B89A5A]/30 rounded-xl p-6">
                <h3 className="text-sm font-medium text-[#F1E8D4] mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#B89A5A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Key Insights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "High awareness, low visitation",
                      text: `${percentage(heardOfCaves["Yes"], surveyMeta.totalResponses)}% have heard of the caves, but only ${percentage(visitedCaves["Yes"], surveyMeta.totalResponses)}% have visited — reinforcing the value of a digital archive.`,
                    },
                    {
                      title: "Strong support for digital documentation",
                      text: `${percentage(shouldDigitallyDocument["Definitely yes"] + shouldDigitallyDocument["Probably yes"], surveyMeta.totalResponses)}% support digital heritage documentation, validating this project's approach.`,
                    },
                    {
                      title: "3D exploration highly valued",
                      text: `Average usefulness rating of ${avg3D}/5 for 3D virtual exploration, with ${percentage(
                        threeDUsefulnessDistribution["4"] + threeDUsefulnessDistribution["5"],
                        surveyMeta.totalResponses
                      )}% rating it 4 or 5.`,
                    },
                    {
                      title: "Willingness to contribute",
                      text: `${percentage(wouldContribute["Yes"], surveyMeta.totalResponses)}% would contribute their own content, and an additional ${percentage(wouldContribute["Maybe"], surveyMeta.totalResponses)}% are open to it.`,
                    },
                  ].map((insight) => (
                    <div
                      key={insight.title}
                      className="bg-[#11110F]/60 rounded-lg p-4 border border-[#594A3A]/20"
                    >
                      <h4 className="text-xs font-medium text-[#B89A5A] uppercase tracking-wide mb-1.5">
                        {insight.title}
                      </h4>
                      <p className="text-xs text-[#D8C49D] leading-relaxed">
                        {insight.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
