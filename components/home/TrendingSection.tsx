"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TRENDING_STARTUPS } from "@/lib/data";
import type { Startup } from "@/types";

function TrendingCard({ s, index }: { s: Startup; index: number }) {
  return (
    <motion.article
      initial={{ opacity:0, y:24 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, margin:"-40px" }}
      transition={{ duration:0.45, delay:index*0.1 }}
      whileHover={{ y:-4 }}
      className="flex flex-col gap-[10px] rounded-[14px] border p-4 cursor-pointer"
      style={{ borderColor:"#1a2d4a", background:"#0b1829" }}>
      <div className="w-[44px] h-[44px] rounded-[10px] flex items-center justify-center text-[20px] border"
        style={{ background:"#111f35", borderColor:"#1a2d4a" }}>
        {s.logo}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-[13px] mb-1" style={{ fontFamily:"Space Grotesk,sans-serif", color:"#f0f4f8" }}>{s.name}</h3>
        <p className="text-[11px] leading-[1.55] line-clamp-2" style={{ color:"#7a8fa8" }}>{s.description}</p>
      </div>
      <div className="flex items-center justify-between pt-[10px] border-t mt-auto" style={{ borderColor:"#1a2d4a" }}>
        <span className="inline-flex items-center px-2 py-0.5 rounded-[5px] border text-[10px] font-medium"
          style={{ background:"#111f35", borderColor:"#1a2d4a", color:"#7a8fa8" }}>
          {s.category}
        </span>
        <Link href={`/startup/${s.id}`} className="text-[#19AB4F] text-[10px] font-semibold hover:underline">
          {s.accessType} →
        </Link>
      </div>
    </motion.article>
  );
}

export default function TrendingSection() {
  return (
    <section aria-labelledby="trending-heading" className="mb-10">
      <motion.div initial={{ opacity:0, x:-10 }} whileInView={{ opacity:1, x:0 }}
        viewport={{ once:true }} transition={{ duration:0.4 }}
        className="flex items-center gap-2 mb-5">
        <span aria-hidden="true">🔥</span>
        <h2 id="trending-heading" className="font-semibold text-[14px]"
          style={{ fontFamily:"Space Grotesk,sans-serif", color:"#f0f4f8" }}>
          Trending this week
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px]">
        {TRENDING_STARTUPS.map((s, i) => <TrendingCard key={s.id} s={s} index={i}/>)}
      </div>
    </section>
  );
}
