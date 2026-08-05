"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Startup } from "@/types";
import { CATEGORIES } from "@/lib/data";

export default function StartupsGridClient({ startups }: { startups: Startup[] }) {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => startups.filter(s => {
    const matchCat = active === "All" || s.category === active;
    const q = search.toLowerCase();
    const matchSearch = !q || s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.category.toLowerCase().includes(q);
    return matchCat && matchSearch;
  }), [startups, search, active]);

  return (
    <div>
      {/* Search */}
      <div className="relative mb-5">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[13px]" style={{ color:"#7a8fa8" }}>🔍</span>
        <input type="search" value={search} onChange={e=>setSearch(e.target.value)}
          placeholder="Search startups…" aria-label="Search startups"
          className="w-full rounded-[12px] pl-9 pr-4 py-3 text-[13px] border outline-none transition-colors"
          style={{ background:"#0b1829", borderColor:"#1a2d4a", color:"#f0f4f8" }}/>
      </div>

      {/* Pills */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 mb-7" role="tablist">
        {CATEGORIES.map(cat => {
          const isActive = active === cat;
          return (
            <button key={cat} role="tab" aria-selected={isActive} onClick={() => setActive(cat)}
              className="relative flex-shrink-0 px-3.5 py-1.5 rounded-full text-[11px] font-medium border whitespace-nowrap transition-colors"
              style={{
                color: isActive ? "#19AB4F" : "#7a8fa8",
                borderColor: isActive ? "rgba(25,171,79,0.3)" : "#1a2d4a",
                background: isActive ? "rgba(25,171,79,0.10)" : "transparent",
              }}>
              {cat}
            </button>
          );
        })}
      </div>

      <p className="text-[12px] mb-5" style={{ color:"#7a8fa8" }}>
        {filtered.length} startup{filtered.length !== 1 ? "s" : ""}
        {active !== "All" ? ` in ${active}` : ""}
        {search ? ` matching "${search}"` : ""}
      </p>

      {/* Grid */}
      <AnimatePresence mode="popLayout">
        {filtered.length === 0 ? (
          <motion.div key="empty" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            className="text-center py-20">
            <p className="text-4xl mb-4">🔭</p>
            <p className="font-semibold mb-2" style={{ fontFamily:"Space Grotesk,sans-serif", color:"#f0f4f8" }}>No startups found</p>
            <p className="text-[13px]" style={{ color:"#7a8fa8" }}>Try a different search or category.</p>
          </motion.div>
        ) : (
          <motion.ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
            layout>
            {filtered.map((s, i) => (
              <motion.li key={s.id} layout
                initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
                exit={{ opacity:0, scale:.95 }}
                transition={{ duration:0.35, delay:i<9?i*0.04:0 }}>
                <motion.div whileHover={{ y:-3 }} transition={{ type:"spring", stiffness:400, damping:25 }}>
                  <Link href={`/startup/${s.id}`}
                    className="flex flex-col gap-3 rounded-[14px] border p-5 transition-colors h-full block"
                    style={{ borderColor:"#1a2d4a", background:"#0b1829" }}>
                    <div className="flex items-start justify-between gap-2">
                      <div className="w-12 h-12 rounded-[11px] border flex items-center justify-center text-[22px] flex-shrink-0"
                        style={{ background:"#111f35", borderColor:"#1a2d4a" }}>
                        {s.logo}
                      </div>
                      {s.boosted && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-[5px] border text-[10px] font-bold tracking-wider uppercase"
                          style={{ background:"rgba(25,171,79,0.1)", borderColor:"rgba(25,171,79,0.25)", color:"#19AB4F" }}>Boosted</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h2 className="font-semibold text-[13px] mb-1 hover:text-[#19AB4F] transition-colors"
                        style={{ fontFamily:"Space Grotesk,sans-serif", color:"#f0f4f8" }}>{s.name}</h2>
                      <p className="text-[11px] leading-relaxed line-clamp-2" style={{ color:"#7a8fa8" }}>{s.description}</p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t mt-auto"
                      style={{ borderColor:"#1a2d4a" }}>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-[5px] border text-[10px] font-medium"
                        style={{ background:"#111f35", borderColor:"#1a2d4a", color:"#7a8fa8" }}>{s.category}</span>
                      {s.accessType && <span className="text-[#19AB4F] text-[10px] font-semibold">{s.accessType}</span>}
                    </div>
                  </Link>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
