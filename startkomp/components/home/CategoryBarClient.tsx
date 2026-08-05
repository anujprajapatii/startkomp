"use client";

import { useState } from "react";

interface CategoryBarClientProps {
  categories: string[];
}

export default function CategoryBarClient({
  categories,
}: CategoryBarClientProps) {
  const [active, setActive] = useState("All");

  return (
    <div
      className="flex gap-2 overflow-x-auto scrollbar-hide pb-1"
      role="tablist"
      aria-label="Filter startups by category"
    >
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            onClick={() => setActive(cat)}
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
  );
}
