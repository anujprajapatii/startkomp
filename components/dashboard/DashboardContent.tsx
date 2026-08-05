"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const myStartups = [
  {
    id:"krediq", name:"KrediQ", logo:"💳", category:"Fintech",
    status:"Live", accessType:"Early access", boosted:true,
    views:3214, upvotes:324, saves:67, listed:"Aug 5, 2026",
  },
  {
    id:"savvybill", name:"SavvyBill", logo:"🧾", category:"Personal Finance",
    status:"Live", accessType:"Live", boosted:false,
    views:1607, upvotes:187, saves:22, listed:"Jan 12, 2026",
  },
];

const notifications = [
  { icon:"▲",  text:"KrediQ got 24 new upvotes today", time:"2h ago",  green:true  },
  { icon:"👁️", text:"Your profile was viewed 41 times", time:"5h ago",  green:false },
  { icon:"📧", text:"Featured in Weekly Digest #34",    time:"1d ago",  green:true  },
  { icon:"🔖", text:"12 people saved KrediQ this week", time:"2d ago",  green:false },
  { icon:"💬", text:"New comment on KrediQ listing",    time:"3d ago",  green:false },
];

const quickActions = [
  { label:"Submit new startup", icon:"➕", href:"/submit",          green:true  },
  { label:"Boost KrediQ",       icon:"⚡", href:"/advertise",       green:false },
  { label:"Edit profile",       icon:"✏️", href:"/settings/profile",green:false },
  { label:"View analytics",     icon:"📊", href:"/dashboard/analytics",green:false },
];

export default function DashboardContent() {
  const [tab, setTab] = useState<"startups"|"activity">("startups");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">

      {/* Left */}
      <div>
        {/* Tabs */}
        <div className="flex items-center gap-1 p-1 rounded-[10px] border border-[#1a2d4a] bg-[#0b1829] mb-6 w-fit">
          {(["startups","activity"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className="relative px-5 py-1.5 text-[13px] font-medium rounded-[7px] transition-all capitalize"
              style={{ color: tab===t ? "#f0f4f8" : "#7a8fa8" }}>
              {tab===t && (
                <motion.div layoutId="dash-tab"
                  className="absolute inset-0 rounded-[7px] bg-[#1a2d4a]"
                  transition={{ type:"spring", stiffness:400, damping:35 }}/>
              )}
              <span className="relative z-10">{t}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tab === "startups" ? (
            <motion.div key="startups"
              initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
              transition={{ duration:.2 }}>

              {/* Table header */}
              <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr_80px] gap-4 px-4 mb-2">
                {["Startup","Views","Upvotes","Status",""].map(h => (
                  <span key={h} className="text-[#7a8fa8] text-[11px] font-semibold uppercase tracking-[.06em]">{h}</span>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                {myStartups.map(s => (
                  <motion.div key={s.id}
                    whileHover={{ x:3 }}
                    transition={{ type:"spring", stiffness:400, damping:30 }}
                    className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_1fr_80px] gap-4 items-center p-4 rounded-[12px] border border-[#1a2d4a] bg-[#0b1829] hover:bg-[#111f35] transition-colors">

                    {/* Name */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-[9px] bg-[#111f35] border border-[#1a2d4a] flex items-center justify-center text-[18px] flex-shrink-0">
                        {s.logo}
                      </div>
                      <div>
                        <p className="text-[#f0f4f8] font-semibold text-[13px]" style={{ fontFamily:"Space Grotesk,sans-serif" }}>{s.name}</p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-[#7a8fa8] text-[10px]">{s.category}</span>
                          {s.boosted && <span className="text-[#19AB4F] text-[9px] font-bold px-1.5 py-px rounded bg-[#19AB4F]/10 border border-[#19AB4F]/20 uppercase tracking-wide">Boosted</span>}
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:flex-col gap-4 sm:gap-0">
                      <span className="text-[#f0f4f8] font-semibold text-[14px]" style={{ fontFamily:"Space Grotesk,sans-serif" }}>{s.views.toLocaleString()}</span>
                      <span className="text-[#7a8fa8] text-[10px] sm:block hidden">views</span>
                    </div>

                    <div>
                      <span className="text-[#f0f4f8] font-semibold text-[14px]" style={{ fontFamily:"Space Grotesk,sans-serif" }}>{s.upvotes}</span>
                    </div>

                    <div>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-[6px] text-[10px] font-semibold"
                        style={{
                          background: s.status==="Live" ? "rgba(25,171,79,0.1)" : "rgba(251,191,36,0.1)",
                          color:       s.status==="Live" ? "#19AB4F"             : "#fbbf24",
                          border:     `1px solid ${s.status==="Live" ? "rgba(25,171,79,0.25)" : "rgba(251,191,36,0.25)"}`,
                        }}>
                        <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background:"currentColor" }}/>
                        {s.status}
                      </span>
                    </div>

                    <div className="flex gap-1.5">
                      <Link href={`/startup/${s.id}`}
                        className="flex-1 text-center text-[11px] font-medium py-1.5 rounded-[7px] border border-[#1a2d4a] text-[#7a8fa8] hover:text-[#f0f4f8] hover:bg-[#1a2d4a] transition-colors">
                        View
                      </Link>
                      <Link href={`/startup/${s.id}/edit`}
                        className="flex-1 text-center text-[11px] font-medium py-1.5 rounded-[7px] border border-[#1a2d4a] text-[#7a8fa8] hover:text-[#f0f4f8] hover:bg-[#1a2d4a] transition-colors">
                        Edit
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link href="/submit"
                className="flex items-center justify-center gap-2 w-full mt-4 py-3 rounded-[12px] border border-dashed border-[#1a2d4a] text-[#7a8fa8] hover:text-[#19AB4F] hover:border-[#19AB4F]/40 text-[13px] font-medium transition-all">
                <span className="text-[18px]">➕</span> Submit another startup
              </Link>
            </motion.div>

          ) : (
            <motion.div key="activity"
              initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
              transition={{ duration:.2 }}
              className="flex flex-col gap-3">
              {notifications.map((n, i) => (
                <motion.div key={i}
                  initial={{ opacity:0, x:-12 }} animate={{ opacity:1, x:0 }}
                  transition={{ delay:i*0.05 }}
                  className="flex items-start gap-3 p-4 rounded-[12px] border border-[#1a2d4a] bg-[#0b1829]">
                  <div className="w-9 h-9 rounded-[9px] border border-[#1a2d4a] flex items-center justify-center text-[14px] flex-shrink-0"
                    style={{ background: n.green ? "rgba(25,171,79,0.1)" : "#111f35" }}>
                    {n.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-[#f0f4f8] text-[13px]">{n.text}</p>
                    <p className="text-[#7a8fa8] text-[11px] mt-0.5">{n.time}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right sidebar */}
      <aside className="flex flex-col gap-4">

        {/* Quick actions */}
        <div className="rounded-[14px] border border-[#1a2d4a] bg-[#0b1829] p-5">
          <h3 className="text-[#f0f4f8] font-semibold text-[13px] mb-4" style={{ fontFamily:"Space Grotesk,sans-serif" }}>Quick actions</h3>
          <div className="flex flex-col gap-2">
            {quickActions.map(a => (
              <Link key={a.label} href={a.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-[9px] text-[13px] font-medium transition-all border"
                style={{
                  color: a.green ? "#19AB4F" : "#f0f4f8",
                  borderColor: a.green ? "rgba(25,171,79,0.25)" : "#1a2d4a",
                  background: a.green ? "rgba(25,171,79,0.06)" : "transparent",
                }}>
                <span className="text-[16px]">{a.icon}</span>
                {a.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Boost CTA */}
        <div className="rounded-[14px] border border-[rgba(25,171,79,0.3)] p-5"
          style={{ background:"linear-gradient(135deg,rgba(25,171,79,0.08),rgba(25,171,79,0.03))" }}>
          <p className="text-[9px] font-bold uppercase tracking-[.12em] text-[#7a8fa8] mb-2">Grow faster</p>
          <h3 className="text-[#f0f4f8] font-semibold text-[14px] mb-2" style={{ fontFamily:"Space Grotesk,sans-serif" }}>Boost your startup</h3>
          <p className="text-[#7a8fa8] text-[11px] leading-relaxed mb-4">Get a Boosted badge and 3× more visibility in the feed. Starting at ₹8,000/week.</p>
          <Link href="/advertise"
            className="block text-center text-white text-[12px] font-semibold py-2.5 rounded-[9px] transition-all hover:shadow-lg hover:shadow-[#19AB4F]/25"
            style={{ background:"linear-gradient(135deg,#19AB4F,#16a047)" }}>
            View boost options
          </Link>
        </div>

        {/* Profile completion */}
        <div className="rounded-[14px] border border-[#1a2d4a] bg-[#0b1829] p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[#f0f4f8] font-semibold text-[13px]" style={{ fontFamily:"Space Grotesk,sans-serif" }}>Profile completion</h3>
            <span className="text-[#19AB4F] text-[13px] font-bold">72%</span>
          </div>
          <div className="h-2 rounded-full bg-[#111f35] overflow-hidden mb-3">
            <motion.div initial={{ width:0 }} animate={{ width:"72%" }} transition={{ delay:.5, duration:.8 }}
              className="h-full rounded-full bg-[#19AB4F]"/>
          </div>
          <p className="text-[#7a8fa8] text-[11px]">Add your Twitter handle to reach 100%</p>
        </div>
      </aside>
    </div>
  );
}
