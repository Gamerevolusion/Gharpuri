import { Reveal, StaggerReveal } from "@/components/ui/Reveal";

const pillars = [
  {
    title: "Physical Preservation",
    description:
      "The primary, irreplaceable work: protecting the stone itself from weathering, salt erosion, vegetation encroachment, and visitor wear. Conservation is not restoration to a previous state — it is the maintenance of what currently exists.",
    color: "#594A3A",
  },
  {
    title: "Digital Documentation",
    description:
      "Creating permanent digital records — 3D scans, photographs, measurements — that exist independently of the physical site. These records serve both conservation monitoring (comparing over time) and public access.",
    color: "#B89A5A",
  },
  {
    title: "Community Memory",
    description:
      "Recording the knowledge, experience, and testimony of people connected to the island — residents, workers, guides, visitors — as an additional layer of heritage documentation.",
    color: "#8F7644",
  },
  {
    title: "Research",
    description:
      "Supporting scholarly work on Elephanta&apos;s history, iconography, architecture, and conservation needs. Research informs both preservation strategy and public interpretation.",
    color: "#D8C49D",
  },
  {
    title: "Public Access",
    description:
      "Making Elephanta&apos;s heritage accessible — through onsite engagement, digital platforms, and archival resources — while balancing access with the need to protect the physical site.",
    color: "#F1E8D4",
  },
];

export default function Preservation() {
  return (
    <section
      id="preservation"
      className="py-20 md:py-28 bg-[#11110F] border-t border-[#594A3A]/30"
      aria-labelledby="preservation-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#B89A5A] text-xs tracking-[0.2em] uppercase font-medium border border-[#B89A5A]/30 px-3 py-1 rounded bg-[#292724]/50">
            06
          </span>
          <Reveal>
            <h2
              id="preservation-heading"
              className="font-display text-2xl md:text-3xl font-semibold text-[#F1E8D4]"
            >
              The Challenge of Preservation
            </h2>
          </Reveal>
        </div>

        {/* Editorial text */}
        <Reveal delay={100} className="max-w-4xl mb-12 space-y-6">
          <p className="text-lg md:text-xl text-[#E8D8B8] leading-relaxed">
            Elephanta&apos;s caves face the same challenges as many rock-cut and exposed heritage sites: salt-laden air from the Arabian Sea, humidity, temperature fluctuations, biological growth, and the cumulative effects of thousands of visitors.
          </p>
          <p className="text-lg md:text-xl text-[#E8D8B8] leading-relaxed">
            Physical preservation — the work of the Archaeological Survey of India and other conservation bodies — addresses these threats directly. This is the primary, non-negotiable work: maintaining the stone, managing drainage, controlling vegetation, and limiting damage.
          </p>
          <p className="text-lg md:text-xl text-[#E8D8B8] leading-relaxed">
            Digital documentation does not replace this work. It adds a parallel layer: the creation of permanent, measurable records that can be used to monitor change over time, to provide access to those who cannot visit in person, and to support research and interpretation.
          </p>
          <p className="text-lg md:text-xl text-[#E8D8D4] leading-relaxed">
            These two layers — physical and digital — are not the same thing, and they answer to different needs. GHARAPURI is a contribution to the digital layer. It does not substitute for the physical.
          </p>
        </Reveal>

        {/* Five pillars */}
        <StaggerReveal
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16"
          staggerDelay={80}
        >
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="bg-[#292724] border border-[#594A3A] rounded-xl p-5 hover:border-[#B89A5A]/50 transition-all duration-300 hover:-translate-y-0.5 group card-hover h-full flex flex-col"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center mb-4 text-xs font-bold text-[#11110F]"
                style={{ backgroundColor: pillar.color }}
              >
                {String(idx + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-lg font-semibold text-[#F1E8D4] mb-2 group-hover:text-[#B89A5A] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#D8C49D] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </StaggerReveal>

        {/* Quote */}
        <Reveal delay={200}>
          <blockquote className="border-l-2 border-[#B89A5A]/50 pl-6 py-2 italic">
            <p className="text-lg md:text-xl text-[#E8D8B8] leading-relaxed font-display">
              &quot;Digital preservation doesn&apos;t replace physical conservation. It adds a documentation and accessibility layer — a parallel record that serves different needs.&quot;
            </p>
            <p className="text-xs text-[#8F7644] mt-3 tracking-[0.1em]">
              GHARAPURI documentation principle
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
