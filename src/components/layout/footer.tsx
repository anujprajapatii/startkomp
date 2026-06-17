import Link from "next/link";
import { Rocket } from "lucide-react";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms & Conditions", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white">
            <Rocket className="h-4 w-4" />
          </span>
          Start<span className="text-brand">komp</span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-brand"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-border py-4">
        <p className="container text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. Startkomp only
          connects startups and investors and does not provide funding.
        </p>
      </div>
    </footer>
  );
}
