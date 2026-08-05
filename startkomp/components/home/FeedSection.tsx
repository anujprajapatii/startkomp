import Link from "next/link";
import { FEED_GROUPS } from "@/lib/data";
import type { Startup } from "@/types";

function FeedItem({ s }: { s: Startup }) {
  return (
    <article className="flex items-center gap-3 py-[11px] px-[9px] -mx-[9px] border-b border-[#1a2d4a] last:border-b-0 hover:bg-[#0b1829] rounded-[8px] transition-colors group cursor-pointer">
      <div className="flex-shrink-0 w-10 h-10 rounded-[10px] bg-[#111f35] border border-[#1a2d4a] flex items-center justify-center text-[17px] group-hover:border-[#7a8fa8]/30 transition-colors" aria-hidden="true">
        {s.logo}
      </div>
      <div className="flex-1 min-w-0">
        <Link href={`/startup/${s.id}`}>
          <h3 className="text-[#f0f4f8] font-semibold text-[12px] mb-[2px] hover:text-[#19AB4F] transition-colors" style={{fontFamily:"Space Grotesk,sans-serif"}}>
            {s.name}
          </h3>
        </Link>
        <p className="text-[#7a8fa8] text-[11px] truncate leading-relaxed">{s.description}</p>
      </div>
      <div className="flex-shrink-0">
        {s.boosted
          ? <span className="inline-flex items-center px-2 py-0.5 rounded-[5px] bg-[rgba(25,171,79,0.1)] border border-[rgba(25,171,79,0.25)] text-[#19AB4F] text-[10px] font-bold tracking-wider uppercase">Boosted</span>
          : <span className="inline-flex items-center px-2 py-0.5 rounded-[5px] bg-[#111f35] border border-[#1a2d4a] text-[#7a8fa8] text-[10px] font-medium">{s.category}</span>
        }
      </div>
    </article>
  );
}

export default function FeedSection() {
  return (
    <section aria-labelledby="feed-heading" id="startups">
      <div className="flex items-center gap-2 mb-4">
        <h2 id="feed-heading" className="text-[#f0f4f8] font-semibold text-[14px]" style={{fontFamily:"Space Grotesk,sans-serif"}}>
          Latest startups
        </h2>
      </div>
      <div className="flex flex-col gap-7">
        {FEED_GROUPS.map(group => (
          <div key={group.date}>
            <div className="flex items-center gap-3 mb-1">
              <time dateTime={group.date} className="text-[#7a8fa8] text-[10px] font-medium whitespace-nowrap">{group.label}</time>
              <div className="flex-1 h-px bg-[#1a2d4a]" aria-hidden="true"/>
            </div>
            {group.startups.map(s => <FeedItem key={s.id} s={s}/>)}
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/startups" className="text-[#7a8fa8] hover:text-[#19AB4F] text-[12px] font-medium transition-colors inline-flex items-center gap-1.5">
          Load more startups →
        </Link>
      </div>
    </section>
  );
}
