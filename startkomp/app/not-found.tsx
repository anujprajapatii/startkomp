import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page not found | Startkomp" };

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] px-4 text-center relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div style={{width:"500px",height:"350px",background:"radial-gradient(ellipse at center,rgba(25,171,79,0.10) 0%,transparent 70%)"}}/>
      </div>
      <div className="relative z-10">
        <p className="text-[80px] font-bold text-[#1a2d4a] mb-4 select-none" style={{fontFamily:"Space Grotesk,sans-serif"}} aria-hidden="true">404</p>
        <h1 className="text-[22px] sm:text-[26px] font-bold text-[#f0f4f8] mb-3" style={{fontFamily:"Space Grotesk,sans-serif"}}>This page doesn&apos;t exist</h1>
        <p className="text-[#7a8fa8] text-[13px] max-w-sm mb-8 leading-relaxed mx-auto">The startup or page you&apos;re looking for may have moved or never existed.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="bg-[#19AB4F] hover:bg-[#19AB4F]/90 text-white font-semibold px-6 py-3 rounded-[12px] text-[13px] transition-all hover:shadow-lg hover:shadow-[#19AB4F]/20">Back to home</Link>
          <Link href="/startups" className="border border-[#1a2d4a] hover:border-[#7a8fa8] text-[#f0f4f8] font-medium px-6 py-3 rounded-[12px] text-[13px] transition-colors hover:bg-[#111f35]">Browse all startups</Link>
        </div>
      </div>
    </div>
  );
}
