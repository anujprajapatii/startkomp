"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import NewsletterWidget from "./NewsletterWidget";
import { TOP_THIS_WEEK } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity:0, y:20 },
  whileInView: { opacity:1, y:0 },
  viewport: { once:true },
  transition: { duration:0.45, delay },
});

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-[14px]" aria-label="Sidebar">

      <motion.div {...fadeUp(0)}><NewsletterWidget/></motion.div>

      {/* Submit */}
      <motion.div {...fadeUp(0.08)} className="rounded-[14px] border p-[18px]"
        style={{ borderColor:"#1a2d4a", background:"#0b1829" }}>
        <h3 className="font-semibold text-[13px] mb-2" style={{ fontFamily:"Space Grotesk,sans-serif", color:"#f0f4f8" }}>List your startup</h3>
        <p className="text-[11px] leading-[1.65] mb-4" style={{ color:"#7a8fa8" }}>Submit your startup and reach thousands of early adopters and investors across India.</p>
        <Link href="/submit" className="block text-center bg-[#19AB4F] hover:bg-[#19AB4F]/90 text-white text-[12px] font-semibold py-[9px] rounded-[8px] transition-colors">
          Submit your startup
        </Link>
      </motion.div>

      {/* Top this week */}
      <motion.div {...fadeUp(0.12)} className="rounded-[14px] border p-[18px]"
        style={{ borderColor:"#1a2d4a", background:"#0b1829" }}>
        <h3 className="font-semibold text-[13px] mb-4" style={{ fontFamily:"Space Grotesk,sans-serif", color:"#f0f4f8" }}>Top this week</h3>
        <ol className="flex flex-col gap-3">
          {TOP_THIS_WEEK.map((s, i) => (
            <li key={s.id}>
              <Link href={`/startup/${s.id}`} className="flex items-center gap-[9px] group">
                <span className="text-[10px] font-bold w-[13px] text-right tabular-nums flex-shrink-0" style={{ color:"#7a8fa8" }}>{i+1}</span>
                <div className="w-[30px] h-[30px] flex-shrink-0 rounded-[7px] border flex items-center justify-center text-[14px] transition-colors"
                  style={{ background:"#111f35", borderColor:"#1a2d4a" }}>
                  {s.logo}
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold group-hover:text-[#19AB4F] transition-colors truncate"
                    style={{ fontFamily:"Space Grotesk,sans-serif", color:"#f0f4f8" }}>{s.name}</p>
                  <p className="text-[10px] truncate" style={{ color:"#7a8fa8" }}>{s.tagline ?? s.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </motion.div>

      {/* Advertise */}
      <motion.div {...fadeUp(0.16)} className="rounded-[14px] border p-[18px]"
        style={{ borderColor:"rgba(25,171,79,0.3)", background:"rgba(25,171,79,0.05)" }}>
        <p className="text-[9px] font-bold uppercase tracking-[.12em] mb-1.5" style={{ color:"#7a8fa8" }}>Sponsor</p>
        <h3 className="font-semibold text-[13px] mb-2" style={{ fontFamily:"Space Grotesk,sans-serif", color:"#f0f4f8" }}>Reach 10,000+ Indian founders</h3>
        <p className="text-[11px] leading-[1.65] mb-3" style={{ color:"#7a8fa8" }}>Put your product in front of early adopters building India&apos;s next wave.</p>
        <Link href="/advertise" className="text-[#19AB4F] text-[11px] font-semibold hover:underline">
          See advertising options →
        </Link>
      </motion.div>
    </aside>
  );
}
