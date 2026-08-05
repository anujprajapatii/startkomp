"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionClientProps {
  items: FaqItem[];
}

function FaqItem({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${index}`;

  return (
    <div className="border-b border-[#1a2d4a] last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-between w-full text-left py-5 gap-4"
      >
        <span
          className="text-[#f0f4f8] text-sm font-medium"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          {item.q}
        </span>
        <span
          className={`flex-shrink-0 text-[#7a8fa8] transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 3v10M3 8h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        id={id}
        role="region"
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-64 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-[#7a8fa8] text-sm leading-relaxed">{item.a}</p>
      </div>
    </div>
  );
}

export default function FaqAccordionClient({ items }: FaqAccordionClientProps) {
  return (
    <div className="rounded-xl border border-[#1a2d4a] bg-[#0b1829] divide-y-0 px-6">
      {items.map((item, i) => (
        <FaqItem key={i} item={item} index={i} />
      ))}
    </div>
  );
}
