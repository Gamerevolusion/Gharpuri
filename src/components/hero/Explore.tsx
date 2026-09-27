import { exploreCategories } from "@/data/explore";
import Link from "next/link";
import Image from "next/image";
import { Reveal, StaggerReveal } from "@/components/ui/Reveal";

export default function Explore() {
  return (
    <section
      id="explore"
      className="py-20 md:py-28 bg-[#11110F] border-t border-[#594A3A]/30"
      aria-labelledby="explore-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#B89A5A] text-xs tracking-[0.2em] uppercase font-medium border border-[#B89A5A]/30 px-3 py-1 rounded bg-[#292724]/50">
            02
          </span>
          <Reveal>
            <h2
              id="explore-heading"
              className="font-display text-2xl md:text-3xl font-semibold text-[#F1E8D4]"
            >
              Explore the Heritage
            </h2>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <p className="text-[#D8C49D] max-w-2xl mb-12">
            Six entry points into Elephanta&apos;s heritage — from the caves themselves to the island community, from sculpture to archival documentation.
          </p>
        </Reveal>

        {/* Museum-panel grid */}
        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={80}>
          {exploreCategories.map((category) => (
            <article
              key={category.id}
              className="group relative bg-[#292724] border border-[#594A3A] rounded-xl overflow-hidden hover:border-[#B89A5A]/50 transition-all duration-300 hover:-translate-y-0.5 card-hover h-full flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={category.image}
                  alt={`${category.title} — Elephanta heritage`}
                  fill
                  className="gallery-image"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#292724] via-transparent to-transparent" aria-hidden="true" />
                {/* Archive number badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] tracking-[0.15em] text-[#B89A5A] bg-[#11110F]/85 px-2 py-1 rounded border border-[#B89A5A]/30 backdrop-blur-sm">
                    {category.archiveNumber}
                  </span>
                </div>
                {/* Hover overlay clue */}
                <div className="absolute inset-0 bg-[#B89A5A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <h3 className="font-display text-xl font-semibold text-[#F1E8D4] mb-2 group-hover:text-[#B89A5A] transition-colors duration-200">
                  {category.title}
                </h3>
                <p className="text-sm text-[#D8C49D] leading-relaxed mb-4 line-clamp-3">
                  {category.description}
                </p>
                <Link
                  href={category.link}
                  className="inline-flex items-center gap-2 text-sm text-[#B89A5A] hover:text-[#F1E8D4] transition-colors font-medium group/link"
                >
                  Explore
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
