import Link from "next/link";
import { TRENDING_STARTUPS } from "@/lib/data";
import type { Startup } from "@/types";

function TrendingCard({ s }: { s: Startup }) {
  return (
    <article className="flex flex-col gap-[10px] rounded-[14px] border border-[#1a2d4a] bg-[#0b1829] p-4 hover:bg-[#111f35] hover:border-[#7a8fa8]/25 transition-all duration-200 group cursor-pointer">
      <div className="w-[44px] h-[44px] rounded-[10px] bg-[#111f35] border border-[#1a2d4a] flex items-center justify-center text-[20px] group-hover:border-[#7a8fa8]/30 transition-colors">
        {s.logo}
      </div>
      <div className="flex-1">
        <h3 className="text-[#f0f4f8] font-semibold text-[13px] mb-1" style={{fontFamily:"Space Grotesk,sans-serif"}}>{s.name}</h3>
        <p className="text-[#7a8fa8] text-[11px] leading-[1.55] line-clamp-2">{s.description}</p>
      </div>
      <div className="flex items-center justify-between pt-[10px] border-t border-[#1a2d4a] mt-auto">
        <span className="inline-flex items-center px-2 py-0.5 rounded-[5px] bg-[#111f35] border border-[#1a2d4a] text-[#7a8fa8] text-[10px] font-medium">
          {s.category}
        </span>
        <Link href={`/startup/${s.id}`} className="text-[#19AB4F] text-[10px] font-semibold hover:underline">
          {s.accessType} →
        </Link>
      </div>
    </article>
  );
}

export default function TrendingSection() {
  return (
    <section aria-labelledby="trending-heading" className="mb-9">
      <div className="flex items-center gap-2 mb-4">
        <span aria-hidden="true">🔥</span>
        <h2 id="trending-heading" className="text-[#f0f4f8] font-semibold text-[14px]" style={{fontFamily:"Space Grotesk,sans-serif"}}>
          Trending this week
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[14px]">
        {TRENDING_STARTUPS.map(s => <TrendingCard key={s.id} s={s}/>)}
      </div>
    </section>
  );
}
