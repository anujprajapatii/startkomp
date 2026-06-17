"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";
import { faqs } from "@/lib/data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="container py-20">
      <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
      <div className="mx-auto mt-10 max-w-2xl divide-y divide-border rounded-xl border border-border bg-white">
        {faqs.map((item, i) => (
          <div key={item.q}>
            <button
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-medium"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              {item.q}
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-brand transition-transform",
                  open === i && "rotate-180"
                )}
              />
            </button>
            {open === i && (
              <p className="px-5 pb-5 text-sm text-muted-foreground">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
