import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import AuthFormClient from "@/components/auth/AuthFormClient";

export const metadata: Metadata = {
  title: `Sign up | ${siteConfig.name}`,
  description: "Create your free Startkomp account.",
};

const perks = [
  { icon:"🚀", title:"Free forever",          desc:"Organic listings never cost a thing." },
  { icon:"📈", title:"Real traction",          desc:"Get in front of 10K+ early adopters fast." },
  { icon:"⚡", title:"Live in 48 hours",       desc:"Our team reviews and publishes quickly." },
  { icon:"📊", title:"Founder dashboard",      desc:"Track views, upvotes, and growth." },
];

const avatarBgs = [
  "linear-gradient(135deg,#a78bfa,#ec4899)",
  "linear-gradient(135deg,#f472b6,#fb7185)",
  "linear-gradient(135deg,#38bdf8,#818cf8)",
  "linear-gradient(135deg,#34d399,#10b981)",
  "linear-gradient(135deg,#fb923c,#f59e0b)",
];

export default function SignupPage() {
  return (
    <div className="flex min-h-[calc(100vh-66px)]">

      {/* ── LEFT PANEL ── */}
      <div className="hidden lg:flex flex-col w-[44%] max-w-[520px] flex-shrink-0 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background:"linear-gradient(160deg,#0d1f38 0%,#060F1E 70%)" }}/>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage:"linear-gradient(rgba(255,255,255,.032) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.032) 1px,transparent 1px)",
          backgroundSize:"44px 44px",
        }}/>
        <div className="absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none" style={{
          background:"radial-gradient(circle,rgba(25,171,79,0.12) 0%,transparent 65%)",
          transform:"translate(-20%,-20%)",
        }}/>
        <div className="absolute bottom-0 right-0 w-[320px] h-[320px] pointer-events-none" style={{
          background:"radial-gradient(circle,rgba(99,102,241,0.09) 0%,transparent 65%)",
          transform:"translate(20%,20%)",
        }}/>
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-[#1a2d4a] to-transparent"/>

        <div className="relative z-10 flex flex-col h-full p-10 xl:p-14">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 mb-10">
            <div className="w-9 h-9 rounded-[10px] bg-[#19AB4F] flex items-center justify-center text-white text-[13px] font-bold relative overflow-hidden" style={{ fontFamily:"Space Grotesk,sans-serif" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"/>
              <span className="relative">SK</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[#f0f4f8] font-semibold text-[15px]" style={{ fontFamily:"Space Grotesk,sans-serif" }}>Startkomp</span>
              <span className="text-[#7a8fa8] text-[10px] uppercase tracking-[.06em]">For Indian Founders</span>
            </div>
          </Link>

          {/* Headline */}
          <div className="mb-8">
            <h2 className="text-[#f0f4f8] text-[28px] xl:text-[32px] font-bold leading-tight mb-3" style={{ fontFamily:"Space Grotesk,sans-serif" }}>
              Get your startup{" "}
              <span className="text-[#19AB4F]">discovered</span>{" "}
              by thousands
            </h2>
            <p className="text-[#7a8fa8] text-[14px] leading-relaxed">
              Free to list. No credit card. Join 500+ Indian founders already growing on Startkomp.
            </p>
          </div>

          {/* Perks */}
          <div className="flex flex-col gap-4 mb-10">
            {perks.map(p => (
              <div key={p.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[18px] flex-shrink-0"
                  style={{ background:"rgba(25,171,79,0.10)", border:"1px solid rgba(25,171,79,0.20)" }}>
                  {p.icon}
                </div>
                <div>
                  <p className="text-[#f0f4f8] text-[13px] font-semibold mb-0.5" style={{ fontFamily:"Space Grotesk,sans-serif" }}>{p.title}</p>
                  <p className="text-[#7a8fa8] text-[12px] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div className="mt-auto p-5 rounded-[16px] border border-[#1a2d4a] bg-[#0b1829]/60">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center">
                {avatarBgs.map((bg,i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#060F1E]"
                    style={{ background:bg, marginLeft:i===0?"0":"-8px" }}/>
                ))}
              </div>
              <div>
                <p className="text-[#f0f4f8] text-[13px] font-semibold" style={{ fontFamily:"Space Grotesk,sans-serif" }}>500+ founders</p>
                <p className="text-[#7a8fa8] text-[11px]">joined this month</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#1a2d4a]">
              {[["1,200+","Startups"],["10K+","Adopters"],["Free","Always"]].map(([v,l]) => (
                <div key={l} className="text-center">
                  <div className="text-[#19AB4F] text-[17px] font-bold" style={{ fontFamily:"Space Grotesk,sans-serif" }}>{v}</div>
                  <div className="text-[#7a8fa8] text-[10px]">{l}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── RIGHT — FORM ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-10" style={{ background:"#060F1E" }}>
        <div className="w-full max-w-[420px]">

          <Link href="/" className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-8 h-8 rounded-[8px] bg-[#19AB4F] flex items-center justify-center text-white text-[12px] font-bold">SK</div>
            <span className="text-[#f0f4f8] font-semibold text-[14px]" style={{ fontFamily:"Space Grotesk,sans-serif" }}>Startkomp</span>
          </Link>

          <div className="mb-7">
            <h1 className="text-[#f0f4f8] text-[26px] font-bold mb-1.5" style={{ fontFamily:"Space Grotesk,sans-serif" }}>
              Create your account
            </h1>
            <p className="text-[#7a8fa8] text-[13px]">Free forever. No credit card required.</p>
          </div>

          <AuthFormClient defaultTab="signup"/>

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
