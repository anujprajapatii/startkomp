import Link from "next/link";
import Container from "@/components/ui/Container";

const packages = [
  { name:"Newsletter Sponsor", price:"₹12,000", period:"per send", highlight:false, features:["Featured in our weekly digest","Sent to 8,000+ subscribed founders","Your logo, headline, one-liner","Tracked click-through reporting","Booked 2 weeks in advance"] },
  { name:"Homepage Feature",   price:"₹25,000", period:"per week", highlight:true,  features:["Pinned to top of homepage feed","Boosted badge on your listing","Category page pin","Sidebar ad included","Weekly performance report","Priority editorial review"] },
  { name:"Sidebar Ad",         price:"₹8,000",  period:"per week", highlight:false, features:["Right-column placement sitewide","Custom headline and description","Your logo and CTA button","Desktop and mobile placements","Impression and click tracking"] },
];

const stats = [
  {value:"10,000+", label:"Monthly unique visitors"},
  {value:"8,000+",  label:"Newsletter subscribers"},
  {value:"1,200+",  label:"Startups listed"},
  {value:"60%",     label:"Founders & builders"},
];

export default function AdvertisePage() {
  return (
    <Container className="py-14">
      <header className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(25,171,79,0.3)] bg-[rgba(25,171,79,0.08)] px-4 py-1.5 mb-6">
          <span className="text-[#19AB4F] text-[12px] font-medium">Advertising</span>
        </div>
        <h1 className="text-[28px] sm:text-[36px] font-bold text-[#f0f4f8] mb-4" style={{fontFamily:"Space Grotesk,sans-serif"}}>Reach India&apos;s most engaged startup community</h1>
        <p className="text-[#7a8fa8] text-[13px] leading-relaxed">Startkomp readers are founders, early adopters, and investors actively looking for products to try.</p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
        {stats.map(s=>(
          <div key={s.label} className="rounded-[14px] border border-[#1a2d4a] bg-[#0b1829] p-5 text-center">
            <p className="text-[26px] font-bold text-[#19AB4F] mb-1" style={{fontFamily:"Space Grotesk,sans-serif"}}>{s.value}</p>
            <p className="text-[#7a8fa8] text-[12px]">{s.label}</p>
          </div>
        ))}
      </div>

      <h2 className="text-[#f0f4f8] font-bold text-[20px] mb-8 text-center" style={{fontFamily:"Space Grotesk,sans-serif"}}>Advertising packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        {packages.map(pkg=>(
          <div key={pkg.name} className={`rounded-[18px] border p-6 flex flex-col relative ${pkg.highlight?"border-[rgba(25,171,79,0.5)] bg-[rgba(25,171,79,0.06)]":"border-[#1a2d4a] bg-[#0b1829]"}`}>
            {pkg.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="bg-[#19AB4F] text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">Most popular</span></div>}
            <div className="mb-4">
              <h3 className="text-[#f0f4f8] font-semibold text-[15px] mb-1" style={{fontFamily:"Space Grotesk,sans-serif"}}>{pkg.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-[24px] font-bold text-[#f0f4f8]" style={{fontFamily:"Space Grotesk,sans-serif"}}>{pkg.price}</span>
                <span className="text-[#7a8fa8] text-[12px]">{pkg.period}</span>
              </div>
            </div>
            <ul className="flex flex-col gap-2.5 mb-6 flex-1">
              {pkg.features.map(f=>(
                <li key={f} className="flex items-start gap-2">
                  <span className="text-[#19AB4F] text-[12px] flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-[#7a8fa8] text-[12px]">{f}</span>
                </li>
              ))}
            </ul>
            <Link href="mailto:ads@startkomp.in" className={`block text-center py-2.5 rounded-[10px] text-[13px] font-semibold transition-colors ${pkg.highlight?"bg-[#19AB4F] hover:bg-[#19AB4F]/90 text-white":"border border-[#1a2d4a] hover:border-[#7a8fa8] text-[#f0f4f8] hover:bg-[#111f35]"}`}>
              Get started
            </Link>
          </div>
        ))}
      </div>

      <div className="rounded-[18px] border border-[rgba(25,171,79,0.3)] bg-[rgba(25,171,79,0.06)] p-8 text-center">
        <h2 className="text-[#f0f4f8] font-bold text-[18px] mb-2" style={{fontFamily:"Space Grotesk,sans-serif"}}>Custom campaign?</h2>
        <p className="text-[#7a8fa8] text-[13px] mb-6 max-w-md mx-auto leading-relaxed">Need a sponsored article, category takeover, or multi-week campaign? Let&apos;s talk.</p>
        <Link href="mailto:ads@startkomp.in" className="inline-flex items-center gap-2 bg-[#19AB4F] hover:bg-[#19AB4F]/90 text-white font-semibold px-6 py-3 rounded-[12px] text-[13px] transition-all hover:shadow-lg hover:shadow-[#19AB4F]/20">
          Email us at ads@startkomp.in
        </Link>
      </div>
    </Container>
  );
}
