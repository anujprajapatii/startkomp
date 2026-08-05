"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = ["FAQ","Advertise","Support"];

export default function NavbarClient() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Hamburger */}
      <button onClick={() => setOpen(p => !p)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="lg:hidden relative flex flex-col justify-center items-center w-9 h-9 rounded-[9px] border border-[#1a2d4a] bg-[#0b1829]/60 hover:border-[#7a8fa8] transition-all duration-200">
        <motion.span animate={open ? {rotate:45,y:5} : {rotate:0,y:0}} transition={{duration:.22}}
          className="block absolute w-[18px] h-[1.5px] bg-[#f0f4f8] rounded-full"/>
        <motion.span animate={open ? {opacity:0} : {opacity:1}} transition={{duration:.15}}
          className="block w-[18px] h-[1.5px] bg-[#f0f4f8] rounded-full"/>
        <motion.span animate={open ? {rotate:-45,y:-5} : {rotate:0,y:0}} transition={{duration:.22}}
          className="block absolute w-[18px] h-[1.5px] bg-[#f0f4f8] rounded-full"/>
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div key="bd"
            initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.2}}
            className="lg:hidden fixed inset-0 top-[66px] z-40 bg-[#060F1E]/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}/>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav key="menu"
            initial={{opacity:0,y:-6}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}}
            transition={{duration:.22,ease:"easeOut"}}
            className="lg:hidden fixed inset-x-0 top-[66px] z-50 border-b border-[#1a2d4a] shadow-2xl"
            style={{background:"rgba(6,15,30,0.97)", backdropFilter:"blur(20px)"}}>
            <div className="px-4 pt-4 pb-5 flex flex-col gap-1">
              {navLinks.map((l, i) => (
                <motion.div key={l}
                  initial={{opacity:0,x:-12}} animate={{opacity:1,x:0}}
                  transition={{delay:i*0.05+0.04, duration:.2}}>
                  <Link href={`/${l.toLowerCase()}`} onClick={() => setOpen(false)}
                    className="flex items-center px-4 py-3 rounded-[10px] text-[#7a8fa8] hover:text-[#f0f4f8] hover:bg-[#0b1829] text-[14px] font-medium transition-all">
                    {l}
                  </Link>
                </motion.div>
              ))}
              <div className="border-t border-[#1a2d4a] mt-3 pt-4 flex flex-col gap-2">
                <Link href="/login" onClick={() => setOpen(false)}
                  className="text-center py-2.5 px-4 rounded-[10px] border border-[#1a2d4a] text-[#f0f4f8] text-[14px] font-medium hover:bg-[#0b1829] transition-all">
                  Log in
                </Link>
                <Link href="/submit" onClick={() => setOpen(false)}
                  className="text-center py-2.5 px-4 rounded-[10px] text-white text-[14px] font-semibold transition-all"
                  style={{background:"linear-gradient(135deg,#19AB4F,#16a047)"}}>
                  Submit startup →
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
