import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const metadata = "ELEPHANTA ISLAND · MUMBAI, INDIA · 1987 UNESCO WORLD HERITAGE SITE";
const archiveRef = "GH-001 · CAVE 1 · 6TH CENTURY CE · ASI / UNESCO";

export default function Introduction() {
  return (
    <section
      className="py-20 md:py-28 bg-[#11110F] border-t border-[#594A3A]/30"
      aria-labelledby="intro-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[#B89A5A] text-xs tracking-[0.2em] uppercase font-medium border border-[#B89A5A]/30 px-3 py-1 rounded bg-[#292724]/50">
              01
            </span>
            <h2
              id="intro-heading"
              className="font-display text-2xl md:text-3xl font-semibold text-[#F1E8D4]"
            >
              A Place Carved from Memory
            </h2>
          </div>
        </Reveal>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <Reveal delay={100} className="space-y-6">
              <p className="text-lg md:text-xl text-[#E8D8B8] leading-relaxed">
                Elephanta Island sits in Mumbai Harbour, a small landmass of rock, vegetation, and memory, reached by a ferry from the Gateway of India. Upon arrival, a climb of approximately 120 steps leads to a cave complex excavated into the island&apos;s basaltic cliff face — a place where stone has been shaped into one of the most concentrated and sophisticated expressions of early medieval Indian rock-cut architecture.
              </p>
              <p className="text-lg md:text-xl text-[#E8D8B8] leading-relaxed">
                The largest and most significant of these caves — Cave 1, often called the Great Cave — houses a sculptural programme centred on representations of Shiva. The most famous of these is the Trimurti: a three-headed figure of overwhelming scale and restraint, expressing creation, preservation, and destruction as aspects of a single, serene presence.
              </p>
              <p className="text-lg md:text-xl text-[#E8D8B8] leading-relaxed">
                The cave is not merely a container for sculpture. Its architecture — pillared veranda, mandapa-plan interior space, subsidiary shrines, and carefully placed light — is integral to how the carved forms are experienced. The relationship between architecture, sculpture, and space is what makes Elephanta architecturally significant, not simply the individual figures.
              </p>
              <p className="text-lg md:text-xl text-[#E8D8B8] leading-relaxed">
                Elephanta Caves were inscribed as a UNESCO World Heritage Site in 1987, recognized for their outstanding sculptural programme and as an exceptional testimony to Shaiva rock-cut architecture. The 2023 digital documentation campaign by CyArk — using LiDAR scanning and photogrammetry — has produced a detailed 3D record that serves both conservation monitoring and public access.
              </p>
            </Reveal>
          </div>

          {/* Image column */}
          <div className="order-1 lg:order-2">
            <Reveal delay={150}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#594A3A] shadow-2xl">
                <Image
                  src="/images/trimurti.jpg"
                  alt="Cave 1, Elephanta — the main shrine featuring the Trimurti sculpture"
                  fill
                  className="gallery-image"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal delay={250}>
              {/* Image caption strip */}
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#8F7644]">
                <span className="italic">Cave 1, Elephanta Island</span>
                <span className="text-[#594A3A]">·</span>
                <span>6th century CE</span>
                <span className="text-[#594A3A]">·</span>
                <span className="italic">Photo: Ingo Mehling — Wikimedia Commons, CC BY-SA 4.0</span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Metadata strip */}
        <Reveal delay={350}>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#8F7644] border-t border-[#594A3A]/50 pt-4">
            <span className="tracking-[0.1em]">{metadata}</span>
            <span className="text-[#594A3A]">·</span>
            <span className="italic">{archiveRef}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
