import { sources, mediaCredits } from "@/data/sources";
import { Reveal } from "@/components/ui/Reveal";

export default function Sources() {
  return (
    <section
      id="sources"
      className="py-20 md:py-28 bg-[#11110F] border-t border-[#594A3A]/30"
      aria-labelledby="sources-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#B89A5A] text-xs tracking-[0.2em] uppercase font-medium border border-[#B89A5A]/30 px-3 py-1 rounded bg-[#292724]/50">
            12
          </span>
          <Reveal>
            <h2
              id="sources-heading"
              className="font-display text-2xl md:text-3xl font-semibold text-[#F1E8D4]"
            >
              Sources & Credits
            </h2>
          </Reveal>
        </div>

        {/* Real sources */}
        <Reveal delay={100} className="mb-16">
          <h3 className="font-display text-xl font-semibold text-[#F1E8D4] mb-6">
            Institutional Sources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger-children">
            {sources.map((source) => (
              <div
                key={source.name}
                className="bg-[#292724] border border-[#594A3A] rounded-xl p-5 hover:border-[#B89A5A]/50 transition-all duration-300 hover:-translate-y-0.5 group card-hover"
              >
                <h4 className="font-medium text-[#F1E8D4] mb-2 group-hover:text-[#B89A5A] transition-colors">
                  {source.name}
                </h4>
                <p className="text-sm text-[#D8C49D] leading-relaxed mb-3">
                  {source.description}
                </p>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#B89A5A] hover:text-[#F1E8D4] inline-flex items-center gap-1 transition-colors group/link"
                >
                  Visit source
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <p className="text-[10px] text-[#8F7644] mt-2">Access: {source.access}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Image credits */}
        <Reveal delay={200} className="mb-16">
          <h3 className="font-display text-xl font-semibold text-[#F1E8D4] mb-6">
            Image Credits
          </h3>
          <p className="text-sm text-[#D8C49D] mb-6">
            All imagery on this site is sourced from Wikimedia Commons under Creative Commons licenses. Specific image credits are listed below with photographer attribution and license terms.
          </p>

          <div className="bg-[#292724] border border-[#594A3A] rounded-xl overflow-hidden reveal-enter">
            {/* Table header */}
            <div className="grid grid-cols-[80px_1.5fr_1fr_1.5fr] gap-2 px-4 py-3 bg-[#11110F] border-b border-[#594A3A] text-[10px] text-[#8F7644] uppercase tracking-[0.15em] font-medium">
              <span>Image ID</span>
              <span>Photographer & Source</span>
              <span>License</span>
              <span>Commons URL</span>
            </div>

            {/* Table rows */}
            <div className="divide-y divide-[#594A3A]/50 max-h-[420px] overflow-y-auto">
              {mediaCredits.map((credit) => (
                <div
                  key={credit.imageId}
                  className="grid grid-cols-[80px_1.5fr_1fr_1.5fr] gap-2 px-4 py-2.5 text-xs text-[#D8C49D] items-start"
                >
                  <span className="text-[#B89A5A] font-mono">{credit.imageId}</span>
                  <span className="line-clamp-2">{credit.source}</span>
                  <span className="text-[#8F7644]">{credit.license}</span>
                  {credit.url && (
                    <a
                      href={credit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B89A5A] hover:text-[#F1E8D4] truncate block transition-colors group/link"
                    >
                      View source
                      <svg className="w-3 h-3 inline-flex transition-transform duration-200 group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Third-party 3D content */}
        <Reveal delay={300} className="">
          <h3 className="font-display text-xl font-semibold text-[#F1E8D4] mb-6">
            Third-Party 3D Content
          </h3>
          <div className="bg-[#292724] border border-[#594A3A] rounded-xl p-5 mb-4 reveal-enter">
            <h4 className="font-medium text-[#F1E8D4] mb-2">
              CyArk / Tapestry — Elephanta Main Cave 3D Documentation
            </h4>
            <p className="text-sm text-[#D8C49D] leading-relaxed mb-2">
              The 3D Experience section links to CyArk&apos;s Tapestry platform, which hosts the 2023 LiDAR + photogrammetry documentation of Elephanta&apos;s Main Cave. GHARAPURI does not claim ownership of or affiliation with this data.
            </p>
            <a
              href="https://tapestry.cyark.org/content/elephanta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#B89A5A] hover:text-[#F1E8D4] inline-flex items-center gap-1 transition-colors group/link"
            >
              CyArk / Tapestry — Elephanta
              <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <div className="bg-[#292724] border border-[#594A3A] rounded-xl p-5 reveal-enter">
            <h4 className="font-medium text-[#F1E8D4] mb-2">
              Sketchfab Community Model
            </h4>
            <p className="text-sm text-[#D8C49D] leading-relaxed">
              The optional Sketchfab embed is a community-uploaded 3D model, not affiliated with or produced by GHARAPURI. CC attribution is retained per the model&apos;s original listing. This is presented as a community resource, not as GHARAPURI&apos;s own scan.
            </p>
          </div>
        </Reveal>

        {/* Attribution disclaimer */}
        <Reveal delay={400}>
          <div className="mt-8 text-xs text-[#8F7644] italic border-t border-[#594A3A]/50 pt-4">
            <p className="mb-2">
              GHARAPURI is a frontend-only static archive. No backend, database, authentication, API server, or AI service is used in this site. All content is static TypeScript, rendered client-side.
            </p>
            <p>
              Third-party content is linked or embedded via official channels with visible attribution. GHARAPURI does not claim ownership of, or affiliation with, any third-party content.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
