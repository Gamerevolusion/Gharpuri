import Image from "next/image";
import { archiveItems } from "@/data/archive";
import { Reveal, StaggerReveal } from "@/components/ui/Reveal";

const photoItems = archiveItems.filter((item) => item.category !== "Stories").slice(0, 12);

export default function PhotoArchive() {
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
              Photo Archive
            </h2>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <p className="text-[#D8C49D] max-w-2xl mb-10">
            A cinematic selection of documented imagery from Elephanta&apos;s heritage. Each image carries metadata including image ID, location, category, and source attribution.
          </p>
        </Reveal>

        {/* Grid */}
        <StaggerReveal className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3" staggerDelay={50}>
          {photoItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#292724] border border-[#594A3A] rounded-xl overflow-hidden hover:border-[#B89A5A]/50 transition-all duration-300 hover:-translate-y-0.5 group-hover:shadow-lg group-hover:shadow-[#B89A5A]/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="gallery-image"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>

              {/* Overlay metadata */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#11110F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <p className="text-[9px] text-[#D8C49D] tracking-[0.1em] truncate">
                    {item.id} · {item.location}
                  </p>
                  <p className="text-[8px] text-[#8F7644] italic">
                    {item.source === "Field Documentation Series"
                      ? "FIELD DOCUMENTATION SERIES"
                      : item.source}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </StaggerReveal>

        {/* Attribution note */}
        <Reveal delay={200}>
          <div className="mt-8 text-xs text-[#8F7644] italic border-t border-[#594A3A]/30 pt-4">
            All images sourced from Wikimedia Commons under Creative Commons licenses. See Sources & Credits for full attributions.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
