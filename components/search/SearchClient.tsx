"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ALL_STARTUPS } from "@/lib/data";
import { CATEGORIES } from "@/lib/data";
import type { Startup } from "@/types";

type SortOption = "trending" | "newest" | "upvotes" | "az";
type AccessFilter = "all" | "Early access" | "Beta" | "Live";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value:"trending", label:"🔥 Trending" },
  { value:"newest",   label:"🆕 Newest"   },
  { value:"upvotes",  label:"▲ Most voted" },
  { value:"az",       label:"🔤 A–Z"       },
];

const ACCESS_FILTERS: AccessFilter[] = ["all","Early access","Beta","Live"];

function StartupCard({ s, i }: { s: Startup; i: number }) {
  return (
    <motion.div
      initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
      transition={{ duration:0.3, delay:i < 12 ? i * 0.04 : 0 }}
      layout>
      <Link href={`/startup/${s.id}`}
        className="flex gap-4 p-4 sm:p-5 rounded-[14px] border border-[#1a2d4a] bg-[#0b1829] hover:bg-[#111f35] hover:border-[#7a8fa8]/20 transition-all group block">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[12px] bg-[#111f35] border border-[#1a2d4a] flex items-center justify-center text-[22px] sm:text-[26px] flex-shrink-0 group-hover:border-[#7a8fa8]/30 transition-colors">
          {s.logo}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-[#f0f4f8] font-semibold text-[14px] group-hover:text-[#19AB4F] transition-colors truncate"
              style={{ fontFamily:"Space Grotesk,sans-serif" }}>
              {s.name}
            </h3>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {s.boosted && (
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#19AB4F]/10 border border-[#19AB4F]/20 text-[#19AB4F] uppercase tracking-wide">
                  Boosted
                </span>
              )}
              {s.accessType && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#111f35] border border-[#1a2d4a] text-[#7a8fa8]">
                  {s.accessType}
                </span>
              )}
            </div>
          </div>
          <p className="text-[#7a8fa8] text-[12px] leading-relaxed line-clamp-1 sm:line-clamp-2 mb-2">
            {s.description}
          </p>
          <span className="inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-[5px] bg-[#111f35] border border-[#1a2d4a] text-[#7a8fa8]">
            {s.category}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function SearchClient({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery]   = useState(initialQuery);
  const [sort, setSort]     = useState<SortOption>("trending");
  const [cat, setCat]       = useState("All");
  const [access, setAccess] = useState<AccessFilter>("all");
  const [boosted, setBoosted] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const results = useMemo(() => {
    let r = [...ALL_STARTUPS];
    if (query.trim()) {
      const q = query.toLowerCase();
      r = r.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        (s.tagline ?? "").toLowerCase().includes(q)
      );
    }
    if (cat !== "All") r = r.filter(s => s.category === cat);
    if (access !== "all") r = r.filter(s => s.accessType === access);
    if (boosted) r = r.filter(s => s.boosted);
    if (sort === "az") r.sort((a,b) => a.name.localeCompare(b.name));
    if (sort === "upvotes") r.sort((a,b) => (b.boosted?1:0)-(a.boosted?1:0));
    return r;
  }, [query, sort, cat, access, boosted]);

  const activeFilters = [
    cat !== "All" && cat,
    access !== "all" && access,
    boosted && "Boosted only",
  ].filter(Boolean);

  return (
    <div>
      {/* Search input */}
      <div className="relative mb-6">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7a8fa8] text-[18px] pointer-events-none">🔍</div>
        <input
          type="search" value={query} onChange={e => setQuery(e.target.value)}
          placeholder="Search startups, categories, founders…"
          className="w-full rounded-[14px] pl-12 pr-4 py-4 text-[14px] border border-[#1a2d4a] bg-[#0b1829] text-[#f0f4f8] placeholder:text-[#7a8fa8]/50 outline-none focus:border-[#19AB4F]/50 transition-colors"
          autoFocus
        />
        {query && (
          <button onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7a8fa8] hover:text-[#f0f4f8] text-[13px] transition-colors">
            ✕
          </button>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-6">

        {/* Sidebar filters — desktop always visible, mobile toggle */}
        <div className="lg:w-[220px] flex-shrink-0">

          {/* Mobile toggle */}
          <button onClick={() => setFiltersOpen(p=>!p)}
            className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-[10px] border border-[#1a2d4a] bg-[#0b1829] text-[#f0f4f8] text-[13px] font-medium mb-4 w-full justify-between">
            <span>🎛️ Filters {activeFilters.length > 0 && `(${activeFilters.length})`}</span>
            <span className="text-[#7a8fa8]">{filtersOpen ? "▲" : "▼"}</span>
          </button>

          <AnimatePresence>
            {(filtersOpen || true) && (
              <motion.div
                className={`lg:block ${filtersOpen ? "block" : "hidden lg:block"}`}
                initial={false}>
                <div className="rounded-[14px] border border-[#1a2d4a] bg-[#0b1829] p-5 lg:sticky lg:top-[100px]">

                  {/* Sort */}
                  <div className="mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-[.1em] text-[#7a8fa8] mb-3">Sort by</p>
                    <div className="flex flex-col gap-1">
                      {SORT_OPTIONS.map(opt => (
                        <button key={opt.value} onClick={() => setSort(opt.value)}
                          className="flex items-center gap-2 px-3 py-2 rounded-[8px] text-[12px] font-medium text-left transition-colors"
                          style={{
                            background: sort===opt.value ? "rgba(25,171,79,0.1)" : "transparent",
                            color:      sort===opt.value ? "#19AB4F"              : "#7a8fa8",
                          }}>
                          {sort===opt.value && <span className="w-1 h-1 rounded-full bg-[#19AB4F] inline-block flex-shrink-0"/>}
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Category */}
                  <div className="mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-[.1em] text-[#7a8fa8] mb-3">Category</p>
                    <div className="flex flex-col gap-1 max-h-[240px] overflow-y-auto scrollbar-hide">
                      {CATEGORIES.map(c => (
                        <button key={c} onClick={() => setCat(c)}
                          className="flex items-center justify-between px-3 py-1.5 rounded-[8px] text-[12px] font-medium text-left transition-colors"
                          style={{
                            background: cat===c ? "rgba(25,171,79,0.1)" : "transparent",
                            color:      cat===c ? "#19AB4F"              : "#7a8fa8",
                          }}>
                          <span>{c}</span>
                          {cat===c && <span className="text-[10px]">✓</span>}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Access type */}
                  <div className="mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-[.1em] text-[#7a8fa8] mb-3">Access type</p>
                    <div className="flex flex-col gap-1">
                      {ACCESS_FILTERS.map(a => (
                        <button key={a} onClick={() => setAccess(a)}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-[8px] text-[12px] font-medium text-left transition-colors capitalize"
                          style={{
                            background: access===a ? "rgba(25,171,79,0.1)" : "transparent",
                            color:      access===a ? "#19AB4F"              : "#7a8fa8",
                          }}>
                          {a === "all" ? "All types" : a}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Boosted only */}
                  <label className="flex items-center gap-2.5 cursor-pointer px-1">
                    <div onClick={() => setBoosted(p=>!p)}
                      className="w-10 h-5 rounded-full flex items-center px-0.5 transition-colors cursor-pointer"
                      style={{ background: boosted ? "#19AB4F" : "#1a2d4a" }}>
                      <motion.div animate={{ x: boosted ? 20 : 0 }}
                        transition={{ type:"spring", stiffness:500, damping:35 }}
                        className="w-4 h-4 rounded-full bg-white shadow"/>
                    </div>
                    <span className="text-[12px] font-medium text-[#7a8fa8]">Boosted only</span>
                  </label>

                  {/* Clear */}
                  {(cat !== "All" || access !== "all" || boosted) && (
                    <button onClick={() => { setCat("All"); setAccess("all"); setBoosted(false); }}
                      className="w-full mt-4 py-2 rounded-[8px] text-[11px] font-medium text-[#7a8fa8] hover:text-[#f0f4f8] border border-[#1a2d4a] hover:bg-[#111f35] transition-colors">
                      Clear filters
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results */}
        <div className="flex-1 min-w-0">
          {/* Active filters + result count */}
          <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
            <p className="text-[#7a8fa8] text-[13px]">
              <span className="text-[#f0f4f8] font-semibold">{results.length}</span>
              {" "}startup{results.length !== 1 ? "s" : ""}
              {query && <> matching <em className="text-[#19AB4F] not-italic">&ldquo;{query}&rdquo;</em></>}
            </p>
            {activeFilters.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {activeFilters.map(f => (
                  <span key={f as string} className="text-[11px] px-2.5 py-1 rounded-full border border-[#19AB4F]/30 text-[#19AB4F] bg-[#19AB4F]/8"
                    style={{ background:"rgba(25,171,79,0.08)" }}>
                    {f as string}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Grid */}
          <AnimatePresence mode="popLayout">
            {results.length === 0 ? (
              <motion.div key="empty"
                initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
                className="text-center py-20">
                <p className="text-5xl mb-4">🔭</p>
                <h3 className="text-[#f0f4f8] font-semibold text-[16px] mb-2" style={{ fontFamily:"Space Grotesk,sans-serif" }}>
                  No startups found
                </h3>
                <p className="text-[#7a8fa8] text-[13px]">Try adjusting your search or filters.</p>
              </motion.div>
            ) : (
              <motion.div layout className="flex flex-col gap-3">
                {results.map((s, i) => (
                  <StartupCard key={s.id} s={s} i={i}/>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
