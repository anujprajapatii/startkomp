"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

/** Responsive top navigation with a mobile menu toggle. */
export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white">
            <Rocket className="h-4 w-4" />
          </span>
          <span>
            Start<span className="text-brand">komp</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
            >
              {item.title}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="/contact">Submit Startup</Link>
          </Button>
        </nav>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <nav className="container flex flex-col gap-3 py-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1 text-sm font-medium text-muted-foreground hover:text-brand"
              >
                {item.title}
              </Link>
            ))}
            <Button asChild size="sm" className="mt-2 w-full">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Submit Startup
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
