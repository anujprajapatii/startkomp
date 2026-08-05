"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/seo-config";

const links = {
  Product: [
    { label:"Browse startups", href:"/startups" },
    { label:"Submit a startup", href:"/submit" },
    { label:"Advertise", href:"/advertise" },
    { label:"Boost listing", href:"/advertise" },
    { label:"Newsletter", href:"/#newsletter" },
  ],
  Company: [
    { label:"About us", href:"/about" },
    { label:"Blog", href:"/blog" },
    { label:"Careers", href:"/careers" },
    { label:"Press kit", href:"/press" },
    { label:"Contact", href:"/support" },
  ],
  Support: [
    { label:"FAQ", href:"/faq" },
    { label:"Help center", href:"/support" },
    { label:"Privacy policy", href:"/privacy" },
    { label:"Terms of service", href:"/terms" },
    { label:"Cookie policy", href:"/cookies" },
  ],
};

const socials = [
  { label:"X", icon:"𝕏", href:"#" },
  { label:"LinkedIn", icon:"in", href:"#" },
  { label:"Instagram", icon:"◎", href:"#" },
  { label:"YouTube", icon:"▶", href:"#" },
];

export default function Footer() {
  return (
    <footer style={{ background:"#060F1E", borderTop:"1px solid #1a2d4a" }} className="mt-20">
      <Container className="py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12">

          {/* Brand */}
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.5 }}>
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[8px] bg-[#19AB4F] text-white text-[12px] font-bold select-none">SK</span>
              <span className="font-semibold text-[15px]" style={{ fontFamily:"Space Grotesk,sans-serif", color:"#f0f4f8" }}>Startkomp</span>
            </Link>
            <p className="text-[12.5px] leading-[1.8] mb-6 max-w-[250px]" style={{ color:"#7a8fa8" }}>
              The launchpad for early-stage Indian startups. Discover new products, get early access, and follow India&apos;s most exciting founders.
            </p>
            <div className="flex gap-2">
              {socials.map(s => (
                <motion.a key={s.label} href={s.href} title={s.label}
                  whileHover={{ scale:1.1, y:-2 }} whileTap={{ scale:0.95 }}
                  className="w-9 h-9 rounded-[9px] border flex items-center justify-center text-[13px] transition-colors"
                  style={{ borderColor:"#1a2d4a", color:"#7a8fa8" }}>
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items], ci) => (
            <motion.div key={heading} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.5, delay:ci*0.08 }}>
              <p className="text-[11px] font-bold uppercase tracking-[.1em] mb-5"
                style={{ fontFamily:"Space Grotesk,sans-serif", color:"#f0f4f8" }}>
                {heading}
              </p>
              <ul className="flex flex-col gap-[11px]">
                {items.map(item => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-[13px] transition-colors hover:text-[#19AB4F]"
                      style={{ color:"#7a8fa8" }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Bottom */}
      <div style={{ borderTop:"1px solid #1a2d4a" }}>
        <Container className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11.5px]" style={{ color:"#7a8fa8" }}>
            © {new Date().getFullYear()} {siteConfig.name} ·{" "}
            <span>Made with ❤️ in India 🇮🇳</span>
          </p>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-[5px] text-[11px]" style={{ color:"#7a8fa8" }}>
              <span className="w-[6px] h-[6px] rounded-full bg-[#19AB4F] inline-block"/>
              All systems operational
            </div>
            {["Privacy","Terms","Cookies"].map(l => (
              <Link key={l} href={`/${l.toLowerCase()}`}
                className="text-[11px] transition-colors hover:text-[#19AB4F]"
                style={{ color:"#7a8fa8" }}>{l}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
