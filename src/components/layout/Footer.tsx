import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const footerNavLinks = [
  { label: "Explore", href: "#explore" },
  { label: "Archive", href: "#archive" },
  { label: "3D Experience", href: "#three-d" },
  { label: "Oral Histories", href: "#oral-histories" },
  { label: "Timeline", href: "#timeline" },
  { label: "Site Map", href: "#site-map" },
  { label: "Preservation", href: "#preservation" },
  { label: "About", href: "#about" },
];

const sourceLinks = [
  { label: "UNESCO World Heritage Centre", href: "https://whc.unesco.org/en/list/244" },
  { label: "Archaeological Survey of India", href: "https://asi.nic.in/" },
  { label: "CyArk / Tapestry", href: "https://tapestry.cyark.org/content/elephanta" },
  { label: "Google Arts & Culture", href: "https://artsandculture.google.com/project/elephanta-caves" },
  { label: "Wikimedia Commons", href: "https://commons.wikimedia.org/wiki/Category:Elephanta_Caves" },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#080807] border-t border-[#594A3A] mt-auto"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Reveal delay={100} className="mb-6">
              <div className="flex flex-col gap-2">
                <span className="font-display text-xl font-semibold tracking-[0.15em] text-[#F1E8D4]">
                  GHARAPURI
                </span>
                <span className="text-[11px] tracking-[0.2em] text-[#8F7644] uppercase font-medium">
                  The Digital Memory of Elephanta
                </span>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-sm text-[#D8C49D] leading-relaxed max-w-xs">
                Preserving what exists, documenting what is remembered, and making Elephanta&apos;s heritage accessible for future generations.
              </p>
              <p className="text-xs text-[#8F7644] mt-4 italic leading-relaxed max-w-xs">
                &quot;Preserving place. Preserving memory. Preserving stories.&quot;
              </p>
            </Reveal>
          </div>

          {/* Nav links */}
          <div>
            <Reveal delay={150}>
              <h3 className="text-xs tracking-[0.2em] text-[#8F7644] uppercase font-medium mb-4">
                Navigate
              </h3>
              <ul className="flex flex-col gap-2 stagger-children">
                {footerNavLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#D8C49D] hover:text-[#B89A5A] hover:translate-x-0.5 transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Sources */}
          <div>
            <Reveal delay={200}>
              <h3 className="text-xs tracking-[0.2em] text-[#8F7644] uppercase font-medium mb-4">
                Sources & Credits
              </h3>
              <ul className="flex flex-col gap-2 stagger-children">
                {sourceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#D8C49D] hover:text-[#B89A5A] transition-colors group/link"
                    >
                      {link.label}
                      <svg className="w-3 h-3 inline-flex transition-transform duration-200 group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Bottom bar */}
        <Reveal delay={300}>
          <div className="border-t border-[#594A3A] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#8F7644]">
              A Digital Heritage Archive · Elephanta Island, Mumbai, India · UNESCO World Heritage Site (1987)
            </p>
            <p className="text-xs text-[#8F7644]">
              <span className="italic">Project documentation compiled through archival research and field recording, 2024.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
