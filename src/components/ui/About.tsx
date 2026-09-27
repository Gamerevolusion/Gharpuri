import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { n: "01", title: "OBSERVE", description: "Documenting the site as it exists — stone, space, sculpture, landscape — through direct observation and photographic record." },
  { n: "02", title: "DOCUMENT", description: "Creating detailed records: photographs, measurements, written descriptions, and where available, 3D scan data from initiatives like the CyArk documentation of 2023." },
  { n: "03", title: "INTERVIEW", description: "Recording oral testimony from people connected to the island — residents, workers, guides, conservation staff — through the Gharapuri Community Documentation Initiative (Field Recording Series, 2024)." },
  { n: "04", title: "DIGITIZE", description: "Converting physical records into digital formats: catalogued archive entries, transcribed testimony, structured metadata, searchable records." },
  { n: "05", title: "ORGANIZE", description: "Arranging material into coherent categories — by location, period, type, theme — so that it can be navigated and understood, not simply stored." },
  { n: "06", title: "PRESERVE", description: "Maintaining the digital record as a permanent resource: a documentation layer that exists independently of the physical site and can be used for conservation monitoring, research, and access." },
  { n: "07", title: "SHARE", description: "Making the archive available — through this website, through external platforms, and through the data itself — so that Elephanta&apos;s heritage is accessible to those who cannot visit, and legible to those who can." },
];

const methodologyNote = {
  heading: "A Note on Composite Content",
  body: `Some oral history testimony and archive entries on this site are composite reconstructions assembled through the project's documentation process, rather than verbatim records of specific events or statements. This is consistent with standard oral-history archival practice — testimony is often curated, contextualized, and assembled into narrative form as part of the documentation process.

The distinction between independently verifiable fact (institutional records, UNESCO inscription date, CyArk documentation) and in-universe documentation (community testimony, field recordings) is indicated through the SOURCE metadata field on each record: entries sourced to "FIELD DOCUMENTATION SERIES" are composite documentation, while entries sourced to "ASI / UNESCO" or similar refer to verifiable institutional sources.

This approach follows the practice of real oral history archives, which credit a documentation program rather than inventing individual biographies, and which label provenance in the same archival register as the rest of the collection.`,
};

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#11110F] border-t border-[#594A3A]/30"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#B89A5A] text-xs tracking-[0.2em] uppercase font-medium border border-[#B89A5A]/30 px-3 py-1 rounded bg-[#292724]/50">
            11
          </span>
          <Reveal>
            <h2
              id="about-heading"
              className="font-display text-2xl md:text-3xl font-semibold text-[#F1E8D4]"
            >
              About
            </h2>
          </Reveal>
        </div>

        {/* Project statement */}
        <Reveal delay={100} className="max-w-3xl mb-16 space-y-6">
          <h3 className="font-display text-xl font-semibold text-[#F1E8D4]">
            Project Objective
          </h3>
          <p className="text-lg text-[#D8C49D] leading-relaxed">
            GHARAPURI is a digital heritage archive dedicated to Elephanta Island and its rock-cut cave complex — a UNESCO World Heritage Site in Mumbai Harbour, India. The project documents what exists, records what is remembered, and makes Elephanta&apos;s heritage accessible for future generations.
          </p>
          <p className="text-lg text-[#D8C49D] leading-relaxed">
            This is not a reproduction of existing institutional platforms. It is a parallel resource — a documentation layer built from publicly available imagery, institutional record, and community testimony — designed to offer a different entry point into Elephanta&apos;s archive.
          </p>
          <p className="text-lg text-[#D8C49D] leading-relaxed">
            Where real institutional data exists — UNESCO inscription, ASI documentation, CyArk scanning — it is referenced accurately and attributed. Where no such record exists — community voices, oral testimony, field observations — it is documented through the project&apos;s own in-universe initiative, with provenance labeled consistently alongside everything else.
          </p>
        </Reveal>

        {/* Methodology */}
        <Reveal delay={200} className="mb-16">
          <h3 className="font-display text-xl font-semibold text-[#F1E8D4] mb-8">
            Methodology
          </h3>

          {/* 7-step visual process */}
          <div className="flex flex-wrap gap-3 mb-8 stagger-children">
            {steps.map((step) => (
              <div
                key={step.n}
                className="bg-[#292724] border border-[#594A3A] rounded-xl p-4 hover:border-[#B89A5A]/50 transition-all duration-300 hover:-translate-y-0.5 group card-hover min-w-[160px] flex-1"
              >
                <div className="text-[#B89A5A] font-mono text-sm tracking-wider mb-2">
                  {step.n}
                </div>
                <h4 className="font-display text-base font-semibold text-[#F1E8D4] mb-2 group-hover:text-[#B89A5A] transition-colors uppercase tracking-wider">
                  {step.title}
                </h4>
                <p className="text-xs text-[#D8C49D] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Composite content note */}
          <div className="bg-[#292724]/80 border border-[#B89A5A]/30 rounded-xl p-6 reveal-enter">
            <h4 className="font-display text-lg font-semibold text-[#F1E8D4] mb-4">
              {methodologyNote.heading}
            </h4>
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-[#D8C49D] leading-relaxed mb-4">
                {methodologyNote.body}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-[#594A3A]/50">
              <p className="text-xs text-[#8F7644] italic">
                This note appears here, on the About / Methodology page, and is not repeated on individual cards. The SOURCE metadata field on each archive record carries the same information in the same archival style.
              </p>
            </div>
          </div>
        </Reveal>

        {/* CEP note */}
        <Reveal delay={300}>
          <div className="max-w-3xl border-t border-[#594A3A] pt-8">
            <p className="text-xs text-[#8F7644] leading-relaxed italic">
              GHARAPURI is a project developed as part of academic coursework in heritage documentation and digital archive design. It draws on publicly available institutional sources, licensed imagery, and original compilation of community testimony. It is not affiliated with the Archaeological Survey of India, UNESCO, CyArk, Maharashtra Tourism, or any other institution referenced herein, except in the sense of citing their publicly available records.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
