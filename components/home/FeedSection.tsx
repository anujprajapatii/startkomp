"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FEED_GROUPS } from "@/lib/data";
import type { Startup } from "@/types";

function FeedItem({ s, index }: { s: Startup; index: number }) {
  return (
    <motion.article
      initial={{ opacity:0, x:-16 }} whileInView={{ opacity:1, x:0 }}
      viewport={{ once:true, margin:"-20px" }}
      transition={{ duration:0.4, delay:index*0.05 }}
      whileHover={{ x: 4 }}
      className="flex items-center gap-3 py-[11px] px-[9px] -mx-[9px] border-b last:border-b-0 rounded-[8px] cursor-pointer group"
      style={{ borderColor:"#1a2d4a" }}>
      <div className="flex-shrink-0 w-10 h-10 rounded-[10px] flex items-center justify-center text-[17px] border transition-colors"
        style={{ background:"#111f35", borderColor:"#1a2d4a" }} aria-hidden="true">
        {s.logo}
      </div>
      <div className="flex-1 min-w-0">
        <Link href={`/startup/${s.id}`}>
          <h3 className="font-semibold text-[12px] mb-[2px] hover:text-[#19AB4F] transition-colors"
            style={{ fontFamily:"Space Grotesk,sans-serif", color:"#f0f4f8" }}>
            {s.name}
          </h3>
        </Link>
        <p className="text-[11px] truncate" style={{ color:"#7a8fa8" }}>{s.description}</p>
      </div>
      <div className="flex-shrink-0">
        {s.boosted
          ? <span className="inline-flex items-center px-2 py-0.5 rounded-[5px] border text-[10px] font-bold tracking-wider uppercase"
              style={{ background:"rgba(25,171,79,0.1)", borderColor:"rgba(25,171,79,0.25)", color:"#19AB4F" }}>Boosted</span>
          : <span className="inline-flex items-center px-2 py-0.5 rounded-[5px] border text-[10px] font-medium"
              style={{ background:"#111f35", borderColor:"#1a2d4a", color:"#7a8fa8" }}>{s.category}</span>
        }
      </div>
    </motion.article>
  );
}

export default function FeedSection() {
  return (
    <section aria-labelledby="feed-heading" id="startups">
      <motion.div initial={{ opacity:0, x:-10 }} whileInView={{ opacity:1, x:0 }}
        viewport={{ once:true }} transition={{ duration:0.4 }}
        className="flex items-center gap-2 mb-5">
        <h2 id="feed-heading" className="font-semibold text-[14px]"
          style={{ fontFamily:"Space Grotesk,sans-serif", color:"#f0f4f8" }}>
          Latest startups
        </h2>
      </motion.div>

      <div className="flex flex-col gap-8">
        {FEED_GROUPS.map(group => (
          <div key={group.date}>
            <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }}
              viewport={{ once:true }} transition={{ duration:0.4 }}
              className="flex items-center gap-3 mb-2">
              <time dateTime={group.date} className="text-[10px] font-medium whitespace-nowrap"
                style={{ color:"#7a8fa8" }}>{group.label}</time>
              <div className="flex-1 h-px" style={{ background:"#1a2d4a" }} aria-hidden="true"/>
            </motion.div>
            {group.startups.map((s, i) => <FeedItem key={s.id} s={s} index={i}/>)}
          </div>
        ))}
      </div>

      <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }}
        viewport={{ once:true }} className="mt-8 text-center">
        <Link href="/startups" className="text-[12px] font-medium transition-colors hover:text-[#19AB4F] inline-flex items-center gap-1.5"
          style={{ color:"#7a8fa8" }}>
          Load more startups →
        </Link>
      </motion.div>
    </section>
  );
}
