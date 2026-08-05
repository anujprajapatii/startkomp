import Link from "next/link";
import NewsletterWidget from "./NewsletterWidget";
import { TOP_THIS_WEEK } from "@/lib/data";

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-[14px]" aria-label="Sidebar">

      <NewsletterWidget/>

      {/* Submit */}
      <div className="rounded-[14px] border border-[#1a2d4a] bg-[#0b1829] p-[18px]">
        <h3 className="text-[#f0f4f8] font-semibold text-[13px] mb-2" style={{fontFamily:"Space Grotesk,sans-serif"}}>List your startup</h3>
        <p className="text-[#7a8fa8] text-[11px] leading-[1.65] mb-4">Submit your startup and reach thousands of early adopters and investors across India.</p>
        <Link href="/submit" className="block text-center bg-[#19AB4F] hover:bg-[#19AB4F]/90 text-white text-[12px] font-semibold py-[9px] rounded-[8px] transition-colors">
          Submit your startup
        </Link>
      </div>

      {/* Top this week */}
      <div className="rounded-[14px] border border-[#1a2d4a] bg-[#0b1829] p-[18px]">
        <h3 className="text-[#f0f4f8] font-semibold text-[13px] mb-4" style={{fontFamily:"Space Grotesk,sans-serif"}}>Top this week</h3>
        <ol className="flex flex-col gap-3">
          {TOP_THIS_WEEK.map((s, i) => (
            <li key={s.id}>
              <Link href={`/startup/${s.id}`} className="flex items-center gap-[9px] group">
                <span className="text-[#7a8fa8] text-[10px] font-bold w-[13px] text-right tabular-nums flex-shrink-0">{i+1}</span>
                <div className="w-[30px] h-[30px] flex-shrink-0 rounded-[7px] bg-[#111f35] border border-[#1a2d4a] flex items-center justify-center text-[14px] group-hover:border-[#7a8fa8]/30 transition-colors">
                  {s.logo}
                </div>
                <div className="min-w-0">
                  <p className="text-[#f0f4f8] text-[11px] font-semibold group-hover:text-[#19AB4F] transition-colors truncate" style={{fontFamily:"Space Grotesk,sans-serif"}}>{s.name}</p>
                  <p className="text-[#7a8fa8] text-[10px] truncate">{s.tagline ?? s.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      {/* Advertise */}
      <div className="rounded-[14px] border border-[rgba(25,171,79,0.3)] bg-[rgba(25,171,79,0.05)] p-[18px]">
        <p className="text-[#7a8fa8] text-[9px] font-bold uppercase tracking-[.12em] mb-1.5">Sponsor</p>
        <h3 className="text-[#f0f4f8] font-semibold text-[13px] mb-2" style={{fontFamily:"Space Grotesk,sans-serif"}}>Reach 10,000+ Indian founders</h3>
        <p className="text-[#7a8fa8] text-[11px] leading-[1.65] mb-3">Put your product in front of early adopters building India&apos;s next wave.</p>
        <Link href="/advertise" className="text-[#19AB4F] text-[11px] font-semibold hover:underline">
          See advertising options →
        </Link>
      </div>
    </aside>
  );
}
