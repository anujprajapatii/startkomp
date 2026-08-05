import Link from "next/link";
import NavbarClient from "./NavbarClient";
import Container from "@/components/ui/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1a2d4a] bg-[#060F1E]/95 backdrop-blur-md">
      <Container className="flex h-[64px] items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="Startkomp">
          <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[8px] bg-[#19AB4F] text-white text-[12px] font-bold select-none" style={{fontFamily:"Space Grotesk,sans-serif"}}>
            SK
          </span>
          <span className="text-[#f0f4f8] font-semibold text-[15px] hidden sm:block" style={{fontFamily:"Space Grotesk,sans-serif"}}>
            Startkomp
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {(["FAQ","Advertise","Support"] as const).map(l => (
            <Link key={l} href={`/${l.toLowerCase()}`}
              className="text-[#7a8fa8] hover:text-[#f0f4f8] px-3 py-1.5 rounded-[7px] hover:bg-[#111f35] transition-colors text-[13px] font-medium">
              {l}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          <Link href="/login"
            className="text-[#f0f4f8] px-4 py-2 rounded-[9px] border border-[#1a2d4a] hover:border-[#7a8fa8] hover:bg-[#111f35] transition-colors text-[13px] font-medium">
            Log in
          </Link>
          <Link href="/submit"
            className="bg-[#19AB4F] hover:bg-[#19AB4F]/90 text-white px-4 py-2 rounded-[9px] text-[13px] font-semibold whitespace-nowrap transition-colors">
            Submit startup
          </Link>
        </div>

        <NavbarClient />
      </Container>
    </header>
  );
}
