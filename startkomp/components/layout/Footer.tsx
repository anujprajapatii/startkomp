import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/seo-config";

const links = {
  Product: [
    { label: "Browse startups", href: "/startups" },
    { label: "Submit a startup", href: "/submit" },
    { label: "Advertise", href: "/advertise" },
    { label: "Boost listing", href: "/advertise" },
    { label: "Newsletter", href: "/#newsletter" },
  ],
  Company: [
    { label: "About us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Press kit", href: "/press" },
    { label: "Contact", href: "/support" },
  ],
  Support: [
    { label: "FAQ", href: "/faq" },
    { label: "Help center", href: "/support" },
    { label: "Privacy policy", href: "/privacy" },
    { label: "Terms of service", href: "/terms" },
    { label: "Cookie policy", href: "/cookies" },
  ],
};

const socials = [
  { label: "X", icon: "𝕏", href: "#" },
  { label: "LinkedIn", icon: "in", href: "#" },
  { label: "Instagram", icon: "◎", href: "#" },
  { label: "YouTube", icon: "▶", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060F1E] border-t border-[#1a2d4a] mt-20">

      {/* Main grid */}
      <Container className="py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[8px] bg-[#19AB4F] text-white text-[12px] font-bold select-none">SK</span>
              <span className="text-[#f0f4f8] font-semibold text-[15px]" style={{fontFamily:"Space Grotesk,sans-serif"}}>Startkomp</span>
            </Link>
            <p className="text-[#7a8fa8] text-[12.5px] leading-[1.8] mb-6 max-w-[250px]">
              The launchpad for early-stage Indian startups. Discover new products, get early access, and follow India's most exciting founders — before anyone else.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {socials.map(s => (
                <a key={s.label} href={s.href} title={s.label}
                  className="w-9 h-9 rounded-[9px] border border-[#1a2d4a] flex items-center justify-center text-[#7a8fa8] text-[13px] hover:border-[#19AB4F] hover:text-[#19AB4F] hover:bg-[rgba(25,171,79,0.06)] transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <p className="text-[11px] font-bold text-[#f0f4f8] uppercase tracking-[.1em] mb-5" style={{fontFamily:"Space Grotesk,sans-serif"}}>
                {heading}
              </p>
              <ul className="flex flex-col gap-[11px]">
                {items.map(item => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-[#7a8fa8] hover:text-[#f0f4f8] text-[13px] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-[#1a2d4a]">
        <Container className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#4a5e75] text-[11.5px]">
            © {new Date().getFullYear()} {siteConfig.name} · <span className="text-[#7a8fa8]">Made with ❤️ in India 🇮🇳</span>
          </p>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-[5px] text-[#7a8fa8] text-[11px]">
              <span className="w-[6px] h-[6px] rounded-full bg-[#19AB4F] inline-block" />
              All systems operational
            </div>
            {["Privacy","Terms","Cookies"].map(l => (
              <Link key={l} href={`/${l.toLowerCase()}`} className="text-[#4a5e75] hover:text-[#7a8fa8] text-[11px] transition-colors">{l}</Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
