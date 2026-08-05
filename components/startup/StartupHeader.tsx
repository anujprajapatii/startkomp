import type { Startup } from "@/types";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function StartupHeader({ startup }: { startup: Startup }) {
  return (
    <section className="border-b border-[#1a2d4a] bg-[#0b1829] py-12">
      <Container>
        <nav className="flex items-center gap-2 mb-8" aria-label="Breadcrumb">
          <Link href="/startups" className="text-[#7a8fa8] hover:text-[#f0f4f8] text-[12px] transition-colors">Startups</Link>
          <span className="text-[#1a2d4a] text-[12px]">/</span>
          <span className="text-[#f0f4f8] text-[12px]">{startup.name}</span>
        </nav>
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="w-20 h-20 flex-shrink-0 rounded-[18px] bg-[#111f35] text-[40px] border border-[#1a2d4a] flex items-center justify-center">{startup.logo}</div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h1 className="text-[26px] sm:text-[32px] font-bold text-[#f0f4f8]" style={{fontFamily:"Space Grotesk,sans-serif"}}>{startup.name}</h1>
              {startup.boosted && <span className="inline-flex items-center px-2 py-0.5 rounded-[5px] bg-[rgba(25,171,79,0.1)] border border-[rgba(25,171,79,0.25)] text-[#19AB4F] text-[10px] font-bold tracking-wider uppercase">Boosted</span>}
            </div>
            {startup.tagline && <p className="text-[#7a8fa8] text-[15px] mb-3 italic">&ldquo;{startup.tagline}&rdquo;</p>}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-[7px] bg-[#111f35] border border-[#1a2d4a] text-[#7a8fa8] text-[12px]">{startup.category}</span>
              {startup.accessType && <span className="inline-flex items-center px-2.5 py-1 rounded-[7px] bg-[rgba(25,171,79,0.1)] border border-[rgba(25,171,79,0.25)] text-[#19AB4F] text-[12px] font-semibold">{startup.accessType}</span>}
            </div>
          </div>
          <div className="flex-shrink-0">
            <a href="#" className="inline-flex items-center gap-2 bg-[#19AB4F] hover:bg-[#19AB4F]/90 text-white font-semibold px-6 py-3 rounded-[12px] text-[14px] transition-all hover:shadow-lg hover:shadow-[#19AB4F]/20">
              Get {startup.accessType ?? "access"} →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
