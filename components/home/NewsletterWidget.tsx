"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="rounded-[14px] border p-[18px]" style={{ borderColor:"#1a2d4a", background:"#0b1829" }}>
      <div className="flex items-center gap-1.5 mb-1">
        <span aria-hidden="true" className="text-[15px]">🔥</span>
        <h3 className="font-semibold text-[13px]" style={{ fontFamily:"Space Grotesk,sans-serif", color:"#f0f4f8" }}>Weekly startup digest</h3>
      </div>
      <p className="text-[11px] leading-[1.65] mb-4" style={{ color:"#7a8fa8" }}>Top 5 Indian startups of the week, straight to your inbox.</p>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div key="success"
            initial={{ opacity:0, scale:.95 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0 }}
            transition={{ duration:.3 }}
            className="flex items-center gap-2 rounded-[8px] px-3 py-2.5"
            style={{ background:"rgba(25,171,79,0.1)", border:"1px solid rgba(25,171,79,0.25)" }}>
            <motion.span initial={{ scale:0 }} animate={{ scale:1 }} transition={{ type:"spring", stiffness:300, delay:.1 }}
              className="text-[#19AB4F] text-sm">✓</motion.span>
            <p className="text-[#19AB4F] text-[11px] font-medium">You&apos;re in! Check your inbox.</p>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={handleSubmit} className="flex flex-col gap-2"
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)}
              placeholder="you@example.com" required
              className="w-full rounded-[8px] px-3 py-[8px] text-[11px] outline-none border transition-colors"
              style={{ background:"#111f35", borderColor:"#1a2d4a", color:"#f0f4f8" }}/>
            <motion.button type="submit" disabled={status==="loading" || !email.trim()}
              whileTap={{ scale:.97 }}
              className="w-full bg-[#19AB4F] hover:bg-[#19AB4F]/90 disabled:opacity-60 text-white text-[12px] font-semibold py-[9px] rounded-[8px] transition-colors">
              {status==="loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.span animate={{ rotate:360 }} transition={{ repeat:Infinity, duration:.7, ease:"linear" }}
                    className="inline-block w-3 h-3 border-2 border-white/30 border-t-white rounded-full"/>
                  Joining…
                </span>
              ) : "Join — it's free"}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
