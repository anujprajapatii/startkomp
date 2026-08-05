"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CategoryBarClient({ categories }: { categories: string[] }) {
  const [active, setActive] = useState("All");

  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-0.5" role="tablist" aria-label="Filter by category">
      {categories.map(cat => {
        const isActive = active === cat;
        return (
          <button key={cat} role="tab" aria-selected={isActive}
            onClick={() => setActive(cat)}
            className="relative flex-shrink-0 px-3.5 py-1.5 rounded-full text-[12px] font-medium border transition-colors duration-150 whitespace-nowrap"
            style={{
              color: isActive ? "#19AB4F" : "#7a8fa8",
              borderColor: isActive ? "rgba(25,171,79,0.3)" : "#1a2d4a",
              background: isActive ? "rgba(25,171,79,0.10)" : "transparent",
            }}>
            {isActive && (
              <motion.div layoutId="cat-pill"
                className="absolute inset-0 rounded-full"
                style={{ background:"rgba(25,171,79,0.10)", border:"1px solid rgba(25,171,79,0.3)" }}
                transition={{ type:"spring", stiffness:400, damping:35 }}/>
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        );
      })}
    </div>
  );
}
