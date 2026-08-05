import Link from "next/link";
import Container from "@/components/ui/Container";

const myStartups = [
  {
    id: "krediq", name:"KrediQ", logo:"💳", category:"Fintech", accessType:"Early access",
    description:"AI credit scoring for gig workers underserved by traditional banks.",
    upvotes:324, launched:"Aug 2026", boosted:true,
  },
  {
    id: "savvybill", name:"SavvyBill", logo:"🧾", category:"Personal Finance", accessType:"Live",
    description:"GST-compliant invoicing and expense tracking for Indian freelancers.",
    upvotes:187, launched:"Jan 2026", boosted:false,
  },
];

const activity = [
  { type:"launched", text:"Launched KrediQ on Startkomp", time:"2 days ago", icon:"🚀" },
  { type:"upvote",   text:"KrediQ received 50 upvotes this week", time:"3 days ago", icon:"▲" },
  { type:"comment",  text:"Got featured in Weekly Digest #34", time:"1 week ago", icon:"📧" },
  { type:"follow",   text:"48 new followers this month", time:"1 week ago", icon:"👥" },
  { type:"launched", text:"Launched SavvyBill on Startkomp", time:"7 months ago", icon:"🚀" },
];

export default function ProfileContent() {
  return (
    <Container className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">

        {/* Left — startups */}
        <div>
          <h2 className="text-[#f0f4f8] font-semibold text-[15px] mb-5" style={{ fontFamily:"Space Grotesk,sans-serif" }}>
            Startups
          </h2>
          <div className="flex flex-col gap-4">
            {myStartups.map(s => (
              <Link key={s.id} href={`/startup/${s.id}`}
                className="flex gap-4 p-5 rounded-[14px] border border-[#1a2d4a] bg-[#0b1829] hover:bg-[#111f35] hover:border-[#7a8fa8]/20 transition-all group">
                <div className="w-14 h-14 rounded-[12px] bg-[#111f35] border border-[#1a2d4a] flex items-center justify-center text-[26px] flex-shrink-0">
                  {s.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-[#f0f4f8] font-semibold text-[15px] group-hover:text-[#19AB4F] transition-colors"
                      style={{ fontFamily:"Space Grotesk,sans-serif" }}>{s.name}</h3>
                    {s.boosted && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#19AB4F]/10 border border-[#19AB4F]/25 text-[#19AB4F] uppercase tracking-wide">Boosted</span>}
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#111f35] border border-[#1a2d4a] text-[#7a8fa8]">{s.accessType}</span>
                  </div>
                  <p className="text-[#7a8fa8] text-[12px] leading-relaxed mb-3 line-clamp-1">{s.description}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-[#7a8fa8] text-[11px]">▲ {s.upvotes} upvotes</span>
                    <span className="text-[#7a8fa8] text-[11px]">📅 {s.launched}</span>
                    <span className="text-[#19AB4F] text-[11px] font-medium">{s.category}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right — activity */}
        <aside>
          <h2 className="text-[#f0f4f8] font-semibold text-[15px] mb-5" style={{ fontFamily:"Space Grotesk,sans-serif" }}>
            Recent activity
          </h2>
          <div className="rounded-[14px] border border-[#1a2d4a] bg-[#0b1829] p-5">
            <div className="flex flex-col gap-0">
              {activity.map((a, i) => (
                <div key={i} className="flex gap-3 pb-4 mb-4 border-b border-[#1a2d4a] last:border-0 last:mb-0 last:pb-0">
                  <div className="w-8 h-8 rounded-[8px] bg-[#111f35] border border-[#1a2d4a] flex items-center justify-center text-[13px] flex-shrink-0 mt-0.5">
                    {a.icon}
                  </div>
                  <div>
                    <p className="text-[#f0f4f8] text-[12px] leading-relaxed">{a.text}</p>
                    <p className="text-[#7a8fa8] text-[10px] mt-0.5">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </Container>
  );
}
