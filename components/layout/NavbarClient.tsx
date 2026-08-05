"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const mobileLinks = [
  { label:"Startups",  href:"/startups",  icon:"🚀" },
  { label:"Advertise", href:"/advertise", icon:"📣" },
  { label:"FAQ",       href:"/faq",       icon:"💬" },
  { label:"Search",    href:"/search",    icon:"🔍" },
  { label:"Dashboard", href:"/dashboard", icon:"📊" },
];

export default function NavbarClient() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Hamburger Button ── */}
      <button
        onClick={() => setOpen(p => !p)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="lg:hidden relative w-[38px] h-[38px] rounded-[9px] flex items-center justify-center transition-all duration-200"
        style={{
          border: "1px solid rgba(26,45,74,0.8)",
          background: open ? "rgba(25,171,79,0.08)" : "rgba(11,24,41,0.5)",
          borderColor: open ? "rgba(25,171,79,0.3)" : "rgba(26,45,74,0.8)",
        }}>
        <div className="flex flex-col gap-[5px] items-center justify-center w-4">
          <motion.span
            animate={ open ? { rotate: 45, y: 7.5, width:"100%" } : { rotate: 0, y: 0, width:"100%" }}
            transition={{ duration: .22, ease:"easeInOut" }}
            className="block h-[1.5px] rounded-full bg-[#f0f4f8]"
          />
          <motion.span
            animate={ open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: .15 }}
            className="block h-[1.5px] w-3/4 rounded-full bg-[#f0f4f8]"
          />
          <motion.span
            animate={ open ? { rotate: -45, y: -7.5, width:"100%" } : { rotate: 0, y: 0, width:"75%" }}
            transition={{ duration: .22, ease:"easeInOut" }}
            className="block h-[1.5px] rounded-full bg-[#f0f4f8]"
          />
        </div>
      </button>

      {/* ── Backdrop ── */}
      <AnimatePresence>
        {open && (
          <motion.div key="backdrop"
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            transition={{ duration:.2 }}
            className="lg:hidden fixed inset-0 top-[68px] z-40"
            style={{ background:"rgba(6,15,30,0.7)", backdropFilter:"blur(4px)" }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div key="drawer"
            initial={{ opacity:0, y:-8 }} animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-8 }}
            transition={{ duration:.22, ease:"easeOut" }}
            className="lg:hidden fixed inset-x-0 top-[68px] z-50"
            style={{
              background:"rgba(6,15,30,0.98)",
              backdropFilter:"blur(24px)",
              borderBottom:"1px solid rgba(26,45,74,0.8)",
              boxShadow:"0 16px 48px rgba(0,0,0,0.4)",
            }}>

            <div className="px-4 pt-3 pb-5">

              {/* Nav links */}
              <div className="flex flex-col gap-0.5 mb-4">
                {mobileLinks.map((link, i) => (
                  <motion.div key={link.href}
                    initial={{ opacity:0, x:-10 }} animate={{ opacity:1, x:0 }}
                    transition={{ delay: i * 0.04 + 0.04 }}>
                    <Link href={link.href} onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-3 py-3 rounded-[10px] transition-all duration-150 group"
                      style={{ color:"#7a8fa8" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.color = "#f0f4f8"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#7a8fa8"; }}>
                      <span className="text-[16px] w-6 text-center">{link.icon}</span>
                      <span className="text-[14px] font-medium">{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-[#1a2d4a] mb-4"/>

              {/* Auth buttons */}
              <div className="grid grid-cols-2 gap-2">
                <Link href="/login" onClick={() => setOpen(false)}
                  className="flex items-center justify-center h-[42px] rounded-[10px] text-[13px] font-semibold text-[#f0f4f8] transition-all"
                  style={{ border:"1px solid rgba(26,45,74,0.8)", background:"rgba(11,24,41,0.5)" }}>
                  Log in
                </Link>
                <Link href="/submit" onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-1.5 h-[42px] rounded-[10px] text-[13px] font-semibold text-white transition-all relative overflow-hidden"
                  style={{
                    background:"linear-gradient(135deg,#19AB4F,#16a047)",
                    boxShadow:"0 2px 12px rgba(25,171,79,0.3)",
                  }}>
                  <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"/>
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <line x1="6" y1="1" x2="6" y2="11"/><line x1="1" y1="6" x2="11" y2="6"/>
                  </svg>
                  <span className="relative">Submit startup</span>
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
