"use client";

import { motion } from "framer-motion";

const stats = [
  { label:"Total Views",    value:"4,821", change:"+18%", up:true,  icon:"👁️"  },
  { label:"Upvotes",        value:"324",   change:"+32%", up:true,  icon:"▲"   },
  { label:"Saves",          value:"89",    change:"+12%", up:true,  icon:"🔖"  },
  { label:"Profile Clicks", value:"641",   change:"-4%",  up:false, icon:"🔗"  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((s, i) => (
        <motion.div key={s.label}
          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
          transition={{ delay:i*0.08 }}
          className="rounded-[14px] border border-[#1a2d4a] bg-[#0b1829] p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[18px]">{s.icon}</span>
            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${s.up ? "text-[#19AB4F] bg-[#19AB4F]/10" : "text-red-400 bg-red-400/10"}`}>
              {s.change}
            </span>
          </div>
          <div className="text-[#f0f4f8] text-[26px] font-bold mb-1" style={{ fontFamily:"Space Grotesk,sans-serif" }}>{s.value}</div>
          <div className="text-[#7a8fa8] text-[11px]">{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
