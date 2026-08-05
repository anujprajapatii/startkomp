import Link from "next/link";
import Container from "@/components/ui/Container";
import NavbarClient from "./NavbarClient";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Glass border line at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#1a2d4a] to-transparent" />

      <div style={{
        background: "rgba(6,15,30,0.88)",
        backdropFilter: "saturate(180%) blur(16px)",
        WebkitBackdropFilter: "saturate(180%) blur(16px)",
      }}>
        <Container className="flex h-[66px] items-center justify-between gap-4">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group" aria-label="Startkomp home">
            {/* SK mark */}
            <div className="relative flex h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#19AB4F] flex-shrink-0 overflow-hidden">
              {/* subtle shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"/>
              <span className="relative text-white text-[13px] font-bold tracking-tight" style={{fontFamily:"Space Grotesk,sans-serif"}}>SK</span>
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-[#f0f4f8] text-[15px] font-semibold tracking-tight" style={{fontFamily:"Space Grotesk,sans-serif"}}>Startkomp</span>
              <span className="text-[#7a8fa8] text-[10px] font-medium tracking-[.06em] uppercase">For Indian Founders</span>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center" aria-label="Primary navigation">
            {/* Pill container */}
            <div className="flex items-center gap-0.5 px-1 py-1 rounded-full border border-[#1a2d4a] bg-[#0b1829]/60">
              {(["FAQ","Advertise","Support"] as const).map(l => (
                <Link key={l} href={`/${l.toLowerCase()}`}
                  className="px-4 py-1.5 rounded-full text-[#7a8fa8] hover:text-[#f0f4f8] hover:bg-[#1a2d4a] text-[13px] font-medium transition-all duration-200">
                  {l}
                </Link>
              ))}
            </div>
          </nav>

          {/* ── Right CTAs ── */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <Link href="/login"
              className="hidden lg:inline-flex items-center px-4 py-[7px] rounded-[9px] border border-[#1a2d4a] text-[#f0f4f8] text-[13px] font-medium hover:border-[#7a8fa8] hover:bg-[#0b1829] transition-all duration-200">
              Log in
            </Link>
            <Link href="/submit"
              className="relative hidden sm:inline-flex items-center gap-1.5 px-4 py-[7px] rounded-[9px] text-white text-[13px] font-semibold overflow-hidden transition-all duration-200 hover:shadow-lg hover:shadow-[#19AB4F]/30 hover:-translate-y-px"
              style={{background:"linear-gradient(135deg,#19AB4F 0%,#16a047 100%)"}}>
              {/* shine overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none"/>
              <span className="relative">Submit startup</span>
              <span className="relative text-white/80">→</span>
            </Link>
            <NavbarClient/>
          </div>

        </Container>
      </div>
    </header>
  );
}
