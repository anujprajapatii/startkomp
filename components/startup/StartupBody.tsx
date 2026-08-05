import Link from "next/link";
import type { Startup } from "@/types";
import { ALL_STARTUPS } from "@/lib/data";
import Container from "@/components/ui/Container";

export default function StartupBody({ startup }: { startup: Startup }) {
  const related = ALL_STARTUPS.filter(s => s.category === startup.category && s.id !== startup.id).slice(0, 3);
  return (
    <Container className="py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
        <div>
          <section className="mb-10">
            <h2 className="text-[#f0f4f8] font-semibold text-[15px] mb-4" style={{fontFamily:"Space Grotesk,sans-serif"}}>About {startup.name}</h2>
            <p className="text-[#7a8fa8] text-[13px] leading-relaxed">{startup.description}</p>
          </section>
          <section className="mb-10">
            <h2 className="text-[#f0f4f8] font-semibold text-[15px] mb-4" style={{fontFamily:"Space Grotesk,sans-serif"}}>Details</h2>
            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[{label:"Category",value:startup.category},{label:"Stage",value:startup.accessType??"—"},{label:"Market",value:"India"},{label:"Type",value:"Early-stage"},{label:"Listed",value:"August 2026"},{label:"Status",value:startup.boosted?"Boosted":"Organic"}].map(({label,value})=>(
                <div key={label} className="rounded-[12px] border border-[#1a2d4a] bg-[#0b1829] p-4">
                  <dt className="text-[#7a8fa8] text-[10px] uppercase tracking-widest mb-1">{label}</dt>
                  <dd className="text-[#f0f4f8] text-[13px] font-semibold" style={{fontFamily:"Space Grotesk,sans-serif"}}>{value}</dd>
                </div>
              ))}
            </dl>
          </section>
          <div className="flex flex-wrap gap-3 p-4 rounded-[12px] border border-[#1a2d4a] bg-[#0b1829]">
            {["▲ Upvote","🔗 Share","🔖 Save"].map(label=>(
              <button key={label} className="flex items-center gap-2 px-4 py-2 rounded-[8px] border border-[#1a2d4a] hover:border-[#19AB4F]/40 text-[#7a8fa8] hover:text-[#f0f4f8] text-[12px] font-medium transition-colors">{label}</button>
            ))}
          </div>
        </div>
        <aside>
          {related.length > 0 && (
            <div className="rounded-[14px] border border-[#1a2d4a] bg-[#0b1829] p-5 mb-4">
              <h3 className="text-[#f0f4f8] font-semibold text-[13px] mb-4" style={{fontFamily:"Space Grotesk,sans-serif"}}>More in {startup.category}</h3>
              <div className="flex flex-col gap-3">
                {related.map(s=>(
                  <Link key={s.id} href={`/startup/${s.id}`} className="flex items-center gap-3 p-3 rounded-[10px] border border-[#1a2d4a] hover:bg-[#111f35] transition-all group">
                    <div className="w-10 h-10 flex-shrink-0 rounded-[9px] bg-[#111f35] border border-[#1a2d4a] flex items-center justify-center text-[18px]">{s.logo}</div>
                    <div className="min-w-0">
                      <p className="text-[#f0f4f8] text-[12px] font-semibold group-hover:text-[#19AB4F] transition-colors truncate" style={{fontFamily:"Space Grotesk,sans-serif"}}>{s.name}</p>
                      <p className="text-[#7a8fa8] text-[10px] truncate">{s.tagline??s.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          <div className="rounded-[14px] border border-[rgba(25,171,79,0.3)] bg-[rgba(25,171,79,0.05)] p-5">
            <p className="text-[#7a8fa8] text-[9px] uppercase tracking-[.12em] font-semibold mb-2">Founders</p>
            <h3 className="text-[#f0f4f8] font-semibold text-[13px] mb-2" style={{fontFamily:"Space Grotesk,sans-serif"}}>Building something?</h3>
            <p className="text-[#7a8fa8] text-[11px] leading-relaxed mb-4">Submit your startup and get in front of 10,000+ early adopters across India.</p>
            <Link href="/submit" className="block text-center bg-[#19AB4F] hover:bg-[#19AB4F]/90 text-white text-[12px] font-semibold py-2.5 rounded-[8px] transition-colors">Submit your startup</Link>
          </div>
        </aside>
      </div>
    </Container>
  );
}
