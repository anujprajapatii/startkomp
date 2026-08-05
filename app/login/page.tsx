import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import AuthFormClient from "@/components/auth/AuthFormClient";

export const metadata: Metadata = {
  title: `Log in | ${siteConfig.name}`,
  description: "Log in to your Startkomp account.",
};

const features = [
  { icon: "🚀", title: "List startups for free",    desc: "No credit card needed. Go live in minutes." },
  { icon: "👥", title: "10,000+ early adopters",    desc: "Reach real users who love discovering products." },
  { icon: "📊", title: "Real-time analytics",       desc: "Track views, upvotes, and profile visits." },
  { icon: "🇮🇳", title: "Built for India",          desc: "Vernacular support, INR pricing, local context." },
];

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-66px)]">

      {/* ── LEFT PANEL ── */}
      <div className="hidden lg:flex flex-col w-[44%] max-w-[520px] flex-shrink-0 relative overflow-hidden">

        {/* Backgrounds */}
        <div className="absolute inset-0" style={{ background:"linear-gradient(160deg,#0d1f38 0%,#060F1E 70%)" }}/>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage:"linear-gradient(rgba(255,255,255,.032) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.032) 1px,transparent 1px)",
          backgroundSize:"44px 44px",
        }}/>
        {/* Glow top-right */}
        <div className="absolute top-0 right-0 w-[360px] h-[360px] pointer-events-none" style={{
          background:"radial-gradient(circle,rgba(25,171,79,0.13) 0%,transparent 65%)",
          transform:"translate(20%,-20%)",
        }}/>
        {/* Glow bottom-left */}
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none" style={{
          background:"radial-gradient(circle,rgba(99,102,241,0.10) 0%,transparent 65%)",
          transform:"translate(-20%,20%)",
        }}/>
        {/* Right border */}
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-[#1a2d4a] to-transparent"/>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full p-10 xl:p-14">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 mb-12">
            <div className="w-9 h-9 rounded-[10px] bg-[#19AB4F] flex items-center justify-center text-white text-[13px] font-bold overflow-hidden relative" style={{ fontFamily:"Space Grotesk,sans-serif" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"/>
              <span className="relative">SK</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[#f0f4f8] font-semibold text-[15px]" style={{ fontFamily:"Space Grotesk,sans-serif" }}>Startkomp</span>
              <span className="text-[#7a8fa8] text-[10px] uppercase tracking-[.06em]">For Indian Founders</span>
            </div>
          </Link>

          {/* Headline */}
          <div className="mb-10">
            <h2 className="text-[#f0f4f8] text-[28px] xl:text-[32px] font-bold leading-tight mb-3" style={{ fontFamily:"Space Grotesk,sans-serif" }}>
              India&apos;s launchpad for{" "}
              <span className="text-[#19AB4F]">early-stage</span>{" "}
              startups
            </h2>
            <p className="text-[#7a8fa8] text-[14px] leading-relaxed">
              Join 500+ founders who use Startkomp to get discovered, grow their user base, and connect with investors.
            </p>
          </div>

          {/* Feature list */}
          <div className="flex flex-col gap-5 mb-10">
            {features.map(f => (
              <div key={f.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[18px] flex-shrink-0"
                  style={{ background:"rgba(25,171,79,0.10)", border:"1px solid rgba(25,171,79,0.20)" }}>
                  {f.icon}
                </div>
                <div>
                  <p className="text-[#f0f4f8] text-[13px] font-semibold mb-0.5" style={{ fontFamily:"Space Grotesk,sans-serif" }}>{f.title}</p>
                  <p className="text-[#7a8fa8] text-[12px] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-auto rounded-[16px] p-5" style={{
            background:"rgba(25,171,79,0.06)",
            border:"1px solid rgba(25,171,79,0.18)",
          }}>
            <div className="text-[#f59e0b] text-[15px] tracking-[2px] mb-3">★★★★★</div>
            <blockquote className="text-[#f0f4f8] text-[14px] leading-[1.7] font-medium mb-4" style={{ fontFamily:"Space Grotesk,sans-serif" }}>
              &ldquo;Startkomp got us our first 500 users in two weeks. Nothing else comes close for Indian startups.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#a78bfa,#ec4899)" }}>P</div>
              <div>
                <p className="text-[#f0f4f8] text-[12px] font-semibold">Priya Sharma</p>
                <p className="text-[#7a8fa8] text-[11px]">Co-founder, KrediQ</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── RIGHT — FORM ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-10"
        style={{ background:"#060F1E" }}>
        <div className="w-full max-w-[420px]">

          {/* Mobile logo */}
          <Link href="/" className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-8 h-8 rounded-[8px] bg-[#19AB4F] flex items-center justify-center text-white text-[12px] font-bold">SK</div>
            <span className="text-[#f0f4f8] font-semibold text-[14px]" style={{ fontFamily:"Space Grotesk,sans-serif" }}>Startkomp</span>
          </Link>

          <div className="mb-7">
            <h1 className="text-[#f0f4f8] text-[26px] font-bold mb-1.5" style={{ fontFamily:"Space Grotesk,sans-serif" }}>
              Welcome back
            </h1>
            <p className="text-[#7a8fa8] text-[13px]">
              Log in to manage your startups and discover what&apos;s new.
            </p>
          </div>

          <AuthFormClient defaultTab="login"/>

          {/* Bottom note */}
          <p className="text-center text-[#7a8fa8] text-[11px] mt-8 leading-relaxed">
            Protected by reCAPTCHA ·{" "}
            <Link href="/privacy" className="hover:text-[#f0f4f8] transition-colors">Privacy</Link>
            {" "}·{" "}
            <Link href="/terms" className="hover:text-[#f0f4f8] transition-colors">Terms</Link>
          </p>
        </div>
      </div>

    </div>
  );
}
export const dynamic = 'force-dynamic';
