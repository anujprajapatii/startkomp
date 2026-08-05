"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const stats = [
  { value:"1,200+", label:"Startups" },
  { value:"10K+",   label:"Early Adopters" },
  { value:"Daily",  label:"New Launches" },
  { value:"Free",   label:"Always" },
];

const avatars = [
  { i:"P", bg:"linear-gradient(135deg,#a78bfa,#ec4899)" },
  { i:"R", bg:"linear-gradient(135deg,#f472b6,#fb7185)" },
  { i:"A", bg:"linear-gradient(135deg,#38bdf8,#818cf8)" },
  { i:"S", bg:"linear-gradient(135deg,#34d399,#10b981)" },
  { i:"K", bg:"linear-gradient(135deg,#fb923c,#f59e0b)" },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden text-center" style={{paddingTop:"80px", paddingBottom:"80px"}}
      aria-labelledby="hero-heading">

      {/* ── Background grid ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage:"linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
          backgroundSize:"64px 64px",
        }}/>

      {/* ── Green radial glow — center ── */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center" aria-hidden="true">
        <div style={{
          width:"900px", height:"600px",
          background:"radial-gradient(ellipse 60% 50% at 50% 50%, rgba(25,171,79,0.16) 0%, rgba(25,171,79,0.04) 50%, transparent 70%)",
          filter:"blur(2px)",
        }}/>
      </div>

      {/* ── Side glows ── */}
      <div className="absolute top-0 left-0 pointer-events-none" aria-hidden="true"
        style={{width:"400px",height:"400px",background:"radial-gradient(circle,rgba(25,171,79,0.07) 0%,transparent 70%)",transform:"translate(-30%,-20%)"}}/>
      <div className="absolute bottom-0 right-0 pointer-events-none" aria-hidden="true"
        style={{width:"400px",height:"400px",background:"radial-gradient(circle,rgba(99,102,241,0.06) 0%,transparent 70%)",transform:"translate(30%,20%)"}}/>

      <Container className="relative z-10">

        {/* ── Badge ── */}
        <motion.div
          initial={{opacity:0,y:16}} animate={{opacity:1,y:0}}
          transition={{duration:0.5}}
          className="inline-flex items-center gap-2 mb-8">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#19AB4F]/25 bg-[#19AB4F]/8"
            style={{background:"rgba(25,171,79,0.08)"}}>
            <motion.span
              animate={{scale:[1,1.4,1],opacity:[1,0.5,1]}}
              transition={{repeat:Infinity,duration:2}}
              className="inline-block w-[7px] h-[7px] rounded-full bg-[#19AB4F]"/>
            <span className="text-[#19AB4F] text-[12px] font-semibold tracking-[.04em]">
              India&apos;s #1 Startup Discovery Platform
            </span>
          </div>
        </motion.div>

        {/* ── H1 ── */}
        <motion.h1
          id="hero-heading"
          initial={{opacity:0,y:28}} animate={{opacity:1,y:0}}
          transition={{duration:0.65,delay:0.1}}
          className="font-bold tracking-tight mb-6"
          style={{
            fontFamily:"Space Grotesk,sans-serif",
            fontSize:"clamp(40px, 6vw, 76px)",
            lineHeight:1.06,
            letterSpacing:"-0.035em",
            color:"#f0f4f8",
          }}>
          Discover India&apos;s{" "}
          <span className="relative inline-block">
            <span style={{
              background:"linear-gradient(135deg,#19AB4F 0%,#34d399 100%)",
              WebkitBackgroundClip:"text",
              WebkitTextFillColor:"transparent",
              backgroundClip:"text",
            }}>
              next big
            </span>
          </span>
          {" "}startups,<br className="hidden sm:block"/>
          {" "}before anyone else.
        </motion.h1>

        {/* ── Subtitle ── */}
        <motion.p
          initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
          transition={{duration:0.6,delay:0.2}}
          className="text-[#7a8fa8] leading-[1.8] mx-auto mb-10"
          style={{fontSize:"clamp(14px,1.8vw,18px)", maxWidth:"600px"}}>
          Startkomp surfaces the most promising early-stage Indian startups
          before they go mainstream. Get early access, follow founders, and
          never miss a launch.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
          transition={{duration:0.5,delay:0.3}}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">

          <motion.div whileHover={{scale:1.04,y:-2}} whileTap={{scale:0.97}}>
            <Link href="/submit"
              className="inline-flex items-center gap-2 text-white font-semibold rounded-[12px] px-7 py-[14px] text-[15px] transition-all"
              style={{
                background:"linear-gradient(135deg,#19AB4F 0%,#16a047 100%)",
                boxShadow:"0 4px 24px rgba(25,171,79,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}>
              <span>🚀</span>
              Submit your startup
            </Link>
          </motion.div>

          <motion.div whileHover={{scale:1.04,y:-2}} whileTap={{scale:0.97}}>
            <Link href="/startups"
              className="inline-flex items-center gap-2 text-[#f0f4f8] font-medium rounded-[12px] px-7 py-[14px] text-[15px] border border-[#1a2d4a] hover:border-[#7a8fa8] transition-all"
              style={{background:"rgba(11,24,41,0.6)"}}>
              Browse startups
              <span className="text-[#7a8fa8]">↓</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Trust row ── */}
        <motion.div
          initial={{opacity:0,y:16}} animate={{opacity:1,y:0}}
          transition={{duration:0.5,delay:0.4}}
          className="flex items-center justify-center gap-4 mb-12 flex-wrap">

          {/* Avatars */}
          <div className="flex items-center">
            {avatars.map((av,i) => (
              <motion.div key={i}
                initial={{opacity:0,scale:0.6}} animate={{opacity:1,scale:1}}
                transition={{delay:0.45+i*0.06,type:"spring",stiffness:260}}
                className="w-9 h-9 rounded-full border-[2.5px] border-[#060F1E] flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0"
                style={{background:av.bg, marginLeft:i===0?"0":"-10px", fontFamily:"Space Grotesk,sans-serif"}}>
                {av.i}
              </motion.div>
            ))}
          </div>

          <div className="w-px h-9 bg-[#1a2d4a]"/>

          <div className="text-left">
            <div className="text-[#f59e0b] text-[16px] leading-none mb-1" style={{letterSpacing:"2px"}}>★★★★★</div>
            <div className="text-[12px] text-[#7a8fa8]">
              <strong className="text-[#f0f4f8] font-semibold">4.9 / 5.0</strong>
              {" "}— Loved by 500+ founders
            </div>
          </div>
        </motion.div>

        {/* ── Stats grid ── */}
        <motion.div
          initial={{opacity:0,y:28}} animate={{opacity:1,y:0}}
          transition={{duration:0.6,delay:0.5}}
          className="mx-auto overflow-hidden rounded-[20px]"
          style={{
            maxWidth:"680px",
            border:"1px solid rgba(25,171,79,0.2)",
            background:"linear-gradient(135deg,rgba(25,171,79,0.06) 0%,rgba(25,171,79,0.02) 100%)",
            backdropFilter:"blur(10px)",
          }}>
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map((s,i) => (
              <motion.div key={s.label}
                initial={{opacity:0,scale:.85}} animate={{opacity:1,scale:1}}
                transition={{delay:0.6+i*0.07,type:"spring",stiffness:200}}
                whileHover={{background:"rgba(25,171,79,0.08)"}}
                className={`py-6 px-4 text-center transition-colors cursor-default ${i<stats.length-1?"border-r border-b sm:border-b-0":""}`}
                style={{borderColor:"rgba(25,171,79,0.15)"}}>
                <div className="text-[#19AB4F] font-bold mb-1.5"
                  style={{fontFamily:"Space Grotesk,sans-serif", fontSize:"clamp(22px,3vw,30px)"}}>
                  {s.value}
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[.12em] text-[#7a8fa8]">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Scroll hint ── */}
        <motion.div
          initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}}
          className="mt-10 flex flex-col items-center gap-2">
          <span className="text-[#7a8fa8] text-[11px] font-medium uppercase tracking-[.1em]">Scroll to explore</span>
          <motion.div animate={{y:[0,5,0]}} transition={{repeat:Infinity,duration:1.6,ease:"easeInOut"}}
            className="w-5 h-5 rounded-full border border-[#1a2d4a] flex items-center justify-center">
            <span className="text-[#7a8fa8] text-[10px]">↓</span>
          </motion.div>
        </motion.div>

      </Container>
    </section>
  );
}
