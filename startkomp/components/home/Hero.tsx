import Link from "next/link";
import Container from "@/components/ui/Container";

const stats = [
  { value: "1,200+", label: "Startups Listed" },
  { value: "10K+",   label: "Early Adopters"  },
  { value: "Daily",  label: "New Additions"   },
  { value: "Free",   label: "To List & Access"},
];

const avatars = [
  { initials: "P", bg: "linear-gradient(135deg,#a78bfa,#ec4899)" },
  { initials: "R", bg: "linear-gradient(135deg,#f472b6,#fb7185)" },
  { initials: "A", bg: "linear-gradient(135deg,#38bdf8,#818cf8)" },
  { initials: "S", bg: "linear-gradient(135deg,#34d399,#10b981)" },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-[72px] pb-[64px] text-center" aria-labelledby="hero-heading">

      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{
        backgroundImage:"linear-gradient(rgba(255,255,255,.028) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.028) 1px,transparent 1px)",
        backgroundSize:"60px 60px"
      }}/>
      {/* Glow */}
      <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[800px] h-[500px]" style={{
        background:"radial-gradient(ellipse,rgba(25,171,79,.14) 0%,transparent 65%)"
      }} aria-hidden="true"/>

      <Container className="relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#19AB4F]/35 bg-[rgba(25,171,79,0.09)] px-4 py-1.5 mb-7">
          <span className="w-[7px] h-[7px] rounded-full bg-[#19AB4F] animate-pulse inline-block"/>
          <span className="text-[#19AB4F] text-[12px] font-medium tracking-[.03em]">For Indian Founders</span>
        </div>

        {/* H1 */}
        <h1 id="hero-heading" className="text-[52px] sm:text-[64px] font-bold leading-[1.1] text-[#f0f4f8] mb-5 tracking-[-0.03em]" style={{fontFamily:"Space Grotesk,sans-serif"}}>
          Discover India&apos;s next<br/>
          <span className="text-[#19AB4F]">big startups</span>, today.
        </h1>

        {/* Sub */}
        <p className="text-[#7a8fa8] text-[15px] sm:text-[16px] leading-[1.75] max-w-[580px] mx-auto mb-8">
          Startkomp surfaces the most promising early-stage Indian startups before they go mainstream. Get early access, follow founders, and never miss a launch.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-11">
          <Link href="/submit" className="w-full sm:w-auto bg-[#19AB4F] hover:bg-[#19AB4F]/90 text-white font-semibold px-7 py-[13px] rounded-[12px] text-[14px] transition-all hover:shadow-lg hover:shadow-[#19AB4F]/20">
            🎉 Submit your startup
          </Link>
          <Link href="/startups" className="w-full sm:w-auto border border-[#1a2d4a] hover:border-[#7a8fa8] hover:bg-[#111f35] text-[#f0f4f8] font-medium px-7 py-[13px] rounded-[12px] text-[14px] transition-all">
            Browse startups ↓
          </Link>
        </div>

        {/* Trust row */}
        <div className="flex items-center justify-center gap-4 mb-11 flex-wrap">
          <div className="flex items-center">
            {avatars.map((av, i) => (
              <div key={i} className="w-[34px] h-[34px] rounded-full border-[2.5px] border-[#060F1E] flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0"
                style={{background:av.bg, marginLeft: i===0?"0":"-10px", fontFamily:"Space Grotesk,sans-serif"}}>
                {av.initials}
              </div>
            ))}
          </div>
          <div className="w-px h-8 bg-[#1a2d4a]"/>
          <div className="text-left">
            <div className="text-[#f59e0b] text-[15px] tracking-[2px] mb-[3px]">★★★★★</div>
            <div className="text-[#7a8fa8] text-[12px]"><strong className="text-[#f0f4f8] font-semibold">4.9</strong> — Trusted by Indian founders</div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border border-[rgba(25,171,79,0.22)] rounded-[18px] bg-[rgba(25,171,79,0.04)] overflow-hidden max-w-[680px] mx-auto">
          {stats.map((s, i) => (
            <div key={s.label} className={`py-6 px-4 text-center ${i < stats.length-1 ? "border-r border-[rgba(25,171,79,0.15)]" : ""}`}>
              <span className="block text-[28px] sm:text-[30px] font-bold text-[#19AB4F] mb-1.5" style={{fontFamily:"Space Grotesk,sans-serif"}}>{s.value}</span>
              <span className="text-[10px] font-semibold text-[#7a8fa8] uppercase tracking-[.1em]">{s.label}</span>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
