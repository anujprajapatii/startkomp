"use client";
import { useState, type FormEvent } from "react";

export default function NewsletterWidget() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"success">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    await new Promise(r => setTimeout(r, 900));
    setStatus("success");
    setEmail("");
  }

  return (
    <div className="rounded-[14px] border border-[#1a2d4a] bg-[#0b1829] p-[18px]">
      <div className="flex items-center gap-1.5 mb-1">
        <span aria-hidden="true" className="text-[15px]">🔥</span>
        <h3 className="text-[#f0f4f8] font-semibold text-[13px]" style={{fontFamily:"Space Grotesk,sans-serif"}}>Weekly startup digest</h3>
      </div>
      <p className="text-[#7a8fa8] text-[11px] leading-[1.65] mb-4">Top 5 Indian startups of the week, straight to your inbox.</p>
      {status === "success" ? (
        <div className="flex items-center gap-2 bg-[rgba(25,171,79,0.1)] border border-[rgba(25,171,79,0.25)] rounded-[8px] px-3 py-2.5">
          <span className="text-[#19AB4F] text-sm">✓</span>
          <p className="text-[#19AB4F] text-[11px] font-medium">You&apos;re in! Check your inbox.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)}
            placeholder="you@example.com" required
            className="w-full bg-[#111f35] border border-[#1a2d4a] focus:border-[#19AB4F]/50 focus:outline-none rounded-[8px] px-3 py-[8px] text-[#f0f4f8] text-[11px] placeholder:text-[#7a8fa8]/50 transition-colors"/>
          <button type="submit" disabled={status==="loading" || !email.trim()}
            className="w-full bg-[#19AB4F] hover:bg-[#19AB4F]/90 disabled:opacity-60 text-white text-[12px] font-semibold py-[9px] rounded-[8px] transition-colors">
            {status==="loading" ? "Joining…" : "Join — it's free"}
          </button>
        </form>
      )}
    </div>
  );
}
