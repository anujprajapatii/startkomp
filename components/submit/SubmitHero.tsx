import Container from "@/components/ui/Container";

const perks = [
  { icon:"🚀", title:"Free to list",   desc:"Organic listings are always free. No credit card, no catch." },
  { icon:"👀", title:"Real exposure",  desc:"Get in front of 10,000+ early adopters, investors, and founders." },
  { icon:"⚡", title:"Fast review",    desc:"We review and publish approved startups within 2 business days." },
  { icon:"🇮🇳", title:"India-first",  desc:"Built for Indian founders. We understand the local context." },
];

export default function SubmitHero() {
  return (
    <section className="border-b border-[#1a2d4a] bg-[#0b1829] py-12">
      <Container>
        <h1 className="text-[28px] sm:text-[32px] font-bold text-[#f0f4f8] mb-3" style={{fontFamily:"Space Grotesk,sans-serif"}}>Submit your startup</h1>
        <p className="text-[#7a8fa8] text-[13px] max-w-xl mb-8 leading-relaxed">List your early-stage Indian startup on Startkomp for free. We surface the most promising products to thousands of early adopters every day.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {perks.map(p=>(
            <div key={p.title} className="rounded-[12px] border border-[#1a2d4a] bg-[#111f35] p-4">
              <span className="text-xl block mb-2" aria-hidden="true">{p.icon}</span>
              <p className="text-[#f0f4f8] text-[12px] font-semibold mb-1" style={{fontFamily:"Space Grotesk,sans-serif"}}>{p.title}</p>
              <p className="text-[#7a8fa8] text-[11px] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
