import Link from "next/link";
import Container from "@/components/ui/Container";
import NavbarClient from "./NavbarClient";

const navLinks = [
  { label: "Startups",  href: "/startups"  },
  { label: "Advertise", href: "/advertise" },
  { label: "FAQ",       href: "/faq"       },
];

export default function Navbar() {
  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      width: "100%",
      background: "rgba(6,15,30,0.92)",
      backdropFilter: "saturate(200%) blur(20px)",
      WebkitBackdropFilter: "saturate(200%) blur(20px)",
      borderBottom: "1px solid rgba(26,45,74,0.8)",
      boxShadow: "0 1px 0 rgba(25,171,79,0.06), 0 4px 24px rgba(0,0,0,0.3)",
    }}>
      <Container className="flex h-[68px] items-center justify-between gap-6">

        {/* ── LOGO ── */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group" aria-label="Startkomp">
          {/* SK Mark */}
          <div className="relative flex-shrink-0">
            <div className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center overflow-hidden relative"
              style={{
                background: "linear-gradient(135deg,#19AB4F 0%,#16a047 100%)",
                boxShadow: "0 2px 12px rgba(25,171,79,0.40)",
              }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent"/>
              <span className="relative text-white text-[14px] font-bold tracking-tight"
                style={{ fontFamily:"Space Grotesk,sans-serif" }}>SK</span>
            </div>
            {/* Live dot */}
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#19AB4F] border-2 border-[#060F1E]"/>
          </div>

          {/* Name + tagline */}
          <div className="hidden sm:block">
            <div className="flex items-center gap-2">
              <span className="text-[#f0f4f8] text-[16px] font-bold tracking-tight leading-none"
                style={{ fontFamily:"Space Grotesk,sans-serif" }}>Startkomp</span>
              <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-[.08em] text-[#19AB4F]"
                style={{ background:"rgba(25,171,79,0.12)", border:"1px solid rgba(25,171,79,0.25)" }}>
                Beta
              </span>
            </div>
            <span className="text-[#7a8fa8] text-[10px] font-medium tracking-[.05em] uppercase leading-none mt-0.5 block">
              Indian Startup Discovery
            </span>
          </div>
        </Link>

        {/* ── CENTER NAV ── */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary navigation">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              className="relative px-4 py-2 text-[13px] font-medium text-[#7a8fa8] hover:text-[#f0f4f8] rounded-[8px] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-150 group">
              {link.label}
              <span className="absolute inset-x-3 bottom-0 h-[1.5px] bg-[#19AB4F] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"/>
            </Link>
          ))}
        </nav>

        {/* ── RIGHT SIDE ── */}
        <div className="flex items-center gap-2 flex-shrink-0">

          {/* Search */}
          <Link href="/search" aria-label="Search"
            className="flex items-center gap-2 h-[36px] px-3 rounded-[9px] border text-[#7a8fa8] hover:text-[#f0f4f8] transition-all duration-200 group"
            style={{ borderColor:"rgba(26,45,74,0.8)", background:"rgba(11,24,41,0.5)" }}>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <circle cx="8.5" cy="8.5" r="5.5"/>
              <path d="m13 13 3.5 3.5"/>
            </svg>
            <span className="hidden xl:block text-[12px] font-medium">Search</span>
            <kbd className="hidden xl:inline-flex items-center text-[9px] font-semibold px-1.5 py-0.5 rounded-[4px] text-[#7a8fa8]"
              style={{ background:"rgba(26,45,74,0.6)", border:"1px solid rgba(26,45,74,1)" }}>
              ⌘K
            </kbd>
          </Link>

          {/* Divider */}
          <div className="hidden lg:block w-px h-5 bg-[#1a2d4a]"/>

          {/* Log in */}
          <Link href="/login"
            className="hidden lg:inline-flex items-center h-[36px] px-4 rounded-[9px] text-[#f0f4f8] text-[13px] font-medium transition-all duration-200 hover:bg-[rgba(255,255,255,0.05)]"
            style={{ border:"1px solid rgba(26,45,74,0.8)" }}>
            Log in
          </Link>

          {/* Submit CTA */}
          <Link href="/submit"
            className="hidden sm:inline-flex items-center gap-1.5 h-[36px] px-4 rounded-[9px] text-white text-[13px] font-semibold transition-all duration-200 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg,#19AB4F 0%,#16a047 100%)",
              boxShadow: "0 2px 12px rgba(25,171,79,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}>
            <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"/>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="6" y1="1" x2="6" y2="11"/>
              <line x1="1" y1="6" x2="11" y2="6"/>
            </svg>
            <span className="relative">Submit startup</span>
          </Link>

          {/* Mobile hamburger */}
          <NavbarClient/>
        </div>

      </Container>

      {/* Bottom green accent line */}
      <div className="absolute inset-x-0 bottom-0 h-[1px]"
        style={{ background:"linear-gradient(90deg,transparent,rgba(25,171,79,0.3) 30%,rgba(25,171,79,0.3) 70%,transparent)" }}/>
    </header>
  );
}
