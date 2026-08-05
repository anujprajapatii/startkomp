"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Startup } from "@/types";
import { CATEGORIES } from "@/lib/data";

interface StartupsGridClientProps {
  startups: Startup[];
}

export default function StartupsGridClient({
  startups,
}: StartupsGridClientProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    return startups.filter((s) => {
      const matchesCategory =
        activeCategory === "All" || s.category === activeCategory;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [startups, search, activeCategory]);

  return (
    <div>
      {/* Search + filter bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7a8fa8] text-sm select-none">
            🔍
          </span>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search startups…"
            aria-label="Search startups"
            className="w-full bg-[#0b1829] border border-[#1a2d4a] focus:border-[#19AB4F]/50 focus:outline-none rounded-xl pl-9 pr-4 py-2.5 text-[#f0f4f8] text-sm placeholder:text-[#7a8fa8]/60 transition-colors"
          />
        </div>
      </div>

      {/* Category pills */}
      <div
        className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 mb-8"
        role="tablist"
        aria-label="Filter by category"
      >
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 whitespace-nowrap ${
                isActive
                  ? "bg-[rgba(25,171,79,0.10)] text-[#19AB4F] border-[rgba(25,171,79,0.30)]"
                  : "text-[#7a8fa8] border-[#1a2d4a] hover:border-[#7a8fa8] hover:text-[#f0f4f8] bg-transparent"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Results count */}
      <p className="text-[#7a8fa8] text-xs mb-4">
        {filtered.length} startup{filtered.length !== 1 ? "s" : ""}
        {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        {search ? ` matching "${search}"` : ""}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-4xl mb-4">🔭</p>
          <p
            className="text-[#f0f4f8] font-semibold mb-2"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            No startups found
          </p>
          <p className="text-[#7a8fa8] text-sm">
            Try a different category or search term.
          </p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((startup) => (
            <li key={startup.id}>
              <Link
                href={`/startup/${startup.id}`}
                className="flex flex-col gap-3 rounded-xl border border-[#1a2d4a] bg-[#0b1829] p-5 hover:bg-[#111f35] hover:border-[#7a8fa8]/30 transition-all duration-200 group h-full"
              >
                {/* Logo + badge row */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#111f35] text-2xl border border-[#1a2d4a] group-hover:border-[#7a8fa8]/30 transition-colors flex-shrink-0">
                    {startup.logo}
                  </div>
                  {startup.boosted && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[rgba(25,171,79,0.10)] border border-[rgba(25,171,79,0.25)] text-[#19AB4F] text-[10px] font-bold tracking-wider uppercase">
                      Boosted
                    </span>
                  )}
                </div>

                {/* Name + desc */}
                <div className="flex-1">
                  <h2
                    className="text-[#f0f4f8] font-semibold text-sm mb-1 group-hover:text-[#19AB4F] transition-colors"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {startup.name}
                  </h2>
                  <p className="text-[#7a8fa8] text-xs leading-relaxed line-clamp-2">
                    {startup.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-[#1a2d4a] mt-auto">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#111f35] border border-[#1a2d4a] text-[#7a8fa8] text-[10px] font-medium">
                    {startup.category}
                  </span>
                  {startup.accessType && (
                    <span className="text-[#19AB4F] text-[10px] font-semibold">
                      {startup.accessType}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
