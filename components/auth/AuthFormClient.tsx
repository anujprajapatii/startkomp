"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "@/lib/supabase/client";

type Tab = "login" | "signup";

const SOCIAL = [
  { name:"Google",   icon:"G",  provider:"google"   as const },
  { name:"GitHub",   icon:"GH", provider:"github"   as const },
  { name:"LinkedIn", icon:"in", provider:"linkedin" as const },
] as const;

type Provider = "google" | "github" | "linkedin";

export default function AuthFormClient({ defaultTab = "login" }: { defaultTab?: Tab }) {
  const [tab,     setTab]     = useState<Tab>(defaultTab);
  const [loading, setLoading] = useState(false);
  const [done,    setDone]    = useState(false);
  const [error,   setError]   = useState<string | null>(null);
  const [form,    setForm]    = useState({ name:"", email:"", password:"", confirm:"" });
  const [show,    setShow]    = useState(false);

  const supabase = createClient();

  function set(k: string, v: string) {
    setForm(p => ({ ...p, [k]: v }));
    setError(null);
  }

  // ── Social OAuth ──
  async function handleSocial(provider: Provider) {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`,
      },
    });
    if (error) { setError(error.message); setLoading(false); }
  }

  // ── Email submit ──
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (tab === "signup" && form.password !== form.confirm) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (tab === "login") {
      const { error } = await supabase.auth.signInWithPassword({
        email:    form.email,
        password: form.password,
      });
      if (error) { setError(error.message); setLoading(false); return; }
      window.location.href = "/dashboard";
    } else {
      const { error } = await supabase.auth.signUp({
        email:    form.email,
        password: form.password,
        options:  { data: { full_name: form.name } },
      });
      if (error) { setError(error.message); setLoading(false); return; }
      setDone(true);
    }
    setLoading(false);
  }

  const inp = "w-full bg-[#111f35] border border-[#1a2d4a] focus:border-[#19AB4F]/60 focus:outline-none rounded-[10px] px-4 py-3 text-[#f0f4f8] text-[13px] placeholder:text-[#7a8fa8]/50 transition-colors";
  const lbl = "block text-[#7a8fa8] text-[12px] font-medium mb-1.5";

  return (
    <div className="w-full">

      {/* Tab switcher */}
      <div className="flex p-1 rounded-[12px] border border-[#1a2d4a] bg-[#0b1829] mb-6">
        {(["login","signup"] as Tab[]).map(t => (
          <button key={t} onClick={() => { setTab(t); setDone(false); setError(null); }}
            className="relative flex-1 py-2 text-[13px] font-semibold rounded-[9px] transition-all duration-200"
            style={{ color: tab===t ? "#f0f4f8" : "#7a8fa8" }}>
            {tab===t && (
              <motion.div layoutId="auth-tab"
                className="absolute inset-0 rounded-[9px] bg-[#1a2d4a]"
                transition={{ type:"spring", stiffness:400, damping:35 }}/>
            )}
            <span className="relative z-10">{t==="login" ? "Log in" : "Sign up"}</span>
          </button>
        ))}
      </div>

      {/* Social buttons */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        {SOCIAL.map(s => (
          <motion.button key={s.name}
            onClick={() => handleSocial(s.provider)}
            disabled={loading}
            whileHover={{ y:-2 }} whileTap={{ scale:.97 }}
            className="flex items-center justify-center gap-1.5 py-2.5 rounded-[10px] border text-[12px] font-semibold transition-all disabled:opacity-50"
            style={{
              background:   s.name==="Google" ? "#fff" : s.name==="GitHub" ? "#24292e" : "#0077B5",
              color:        s.name==="Google" ? "#1f2937" : "#fff",
              borderColor:  s.name==="Google" ? "#e5e7eb" : "transparent",
            }}>
            <span className="font-bold text-[13px]">{s.icon}</span>
            <span className="hidden sm:block">{s.name}</span>
          </motion.button>
        ))}
      </div>

      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-px bg-[#1a2d4a]"/>
        <span className="text-[#7a8fa8] text-[11px] font-medium whitespace-nowrap">or continue with email</span>
        <div className="flex-1 h-px bg-[#1a2d4a]"/>
      </div>

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.div initial={{ opacity:0, y:-8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
            className="mb-4 px-4 py-3 rounded-[10px] text-[12px] text-red-400"
            style={{ background:"rgba(239,68,68,0.08)", border:"1px solid rgba(239,68,68,0.2)" }}>
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form */}
      <AnimatePresence mode="wait">
        {done ? (
          <motion.div key="done"
            initial={{ opacity:0, scale:.95 }} animate={{ opacity:1, scale:1 }}
            className="text-center py-8">
            <motion.div initial={{ scale:0 }} animate={{ scale:1 }}
              transition={{ type:"spring", stiffness:260, delay:.1 }}
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
              style={{ background:"rgba(25,171,79,0.12)", border:"1px solid rgba(25,171,79,0.3)" }}>
              ✓
            </motion.div>
            <h3 className="text-[#f0f4f8] font-semibold text-[16px] mb-2" style={{ fontFamily:"Space Grotesk,sans-serif" }}>
              Check your email!
            </h3>
            <p className="text-[#7a8fa8] text-[13px]">
              We&apos;ve sent a confirmation link to <strong className="text-[#f0f4f8]">{form.email}</strong>
            </p>
          </motion.div>
        ) : (
          <motion.form key={tab}
            initial={{ opacity:0, x: tab==="signup" ? 20 : -20 }}
            animate={{ opacity:1, x:0 }} exit={{ opacity:0 }}
            transition={{ duration:.2 }}
            onSubmit={handleSubmit} className="flex flex-col gap-4">

            {tab==="signup" && (
              <div>
                <label className={lbl}>Full name</label>
                <input type="text" placeholder="Priya Sharma" value={form.name}
                  onChange={e=>set("name",e.target.value)} required className={inp}/>
              </div>
            )}

            <div>
              <label className={lbl}>Email address</label>
              <input type="email" placeholder="you@example.com" value={form.email}
                onChange={e=>set("email",e.target.value)} required className={inp}/>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className={lbl.replace("mb-1.5","")}>Password</label>
                {tab==="login" && (
                  <Link href="/forgot-password" className="text-[#19AB4F] text-[11px] hover:underline">Forgot?</Link>
                )}
              </div>
              <div className="relative">
                <input type={show?"text":"password"} placeholder="Min. 8 characters" value={form.password}
                  onChange={e=>set("password",e.target.value)} required minLength={8} className={inp}/>
                <button type="button" onClick={()=>setShow(p=>!p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7a8fa8] hover:text-[#f0f4f8] text-[11px] transition-colors">
                  {show?"Hide":"Show"}
                </button>
              </div>
            </div>

            {tab==="signup" && (
              <>
                <div>
                  <label className={lbl}>Confirm password</label>
                  <input type="password" placeholder="••••••••" value={form.confirm}
                    onChange={e=>set("confirm",e.target.value)} required className={inp}/>
                </div>
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input type="checkbox" required className="mt-0.5 accent-[#19AB4F]"/>
                  <span className="text-[#7a8fa8] text-[12px] leading-relaxed">
                    I agree to the{" "}
                    <Link href="/terms" className="text-[#19AB4F] hover:underline">Terms</Link>
                    {" "}and{" "}
                    <Link href="/privacy" className="text-[#19AB4F] hover:underline">Privacy Policy</Link>
                  </span>
                </label>
              </>
            )}

            <motion.button type="submit" disabled={loading}
              whileHover={{ scale:1.02, y:-1 }} whileTap={{ scale:.98 }}
              className="w-full text-white font-semibold py-3 rounded-[10px] text-[14px] mt-1 flex items-center justify-center gap-2 transition-all"
              style={{ background:"linear-gradient(135deg,#19AB4F,#16a047)", boxShadow:"0 4px 20px rgba(25,171,79,0.3)" }}>
              {loading ? (
                <>
                  <motion.span animate={{ rotate:360 }} transition={{ repeat:Infinity, duration:.7, ease:"linear" }}
                    className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"/>
                  {tab==="login" ? "Logging in…" : "Creating account…"}
                </>
              ) : tab==="login" ? "Log in to Startkomp" : "Create free account"}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>

      <p className="text-center text-[#7a8fa8] text-[12px] mt-5">
        {tab==="login" ? "Don't have an account? " : "Already have an account? "}
        <button onClick={() => { setTab(tab==="login"?"signup":"login"); setDone(false); setError(null); }}
          className="text-[#19AB4F] hover:underline font-medium">
          {tab==="login" ? "Sign up free" : "Log in"}
        </button>
      </p>
    </div>
  );
}
