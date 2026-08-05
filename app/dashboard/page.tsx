import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import Container from "@/components/ui/Container";
import DashboardStats from "@/components/dashboard/DashboardStats";
import DashboardContent from "@/components/dashboard/DashboardContent";

export const metadata: Metadata = {
  title: `Dashboard | ${siteConfig.name}`,
  description: "Manage your startups and track performance.",
};

// Mock user
const user = { name:"Priya Sharma", username:"priyasharma", avatar:"P", avatarBg:"linear-gradient(135deg,#a78bfa,#ec4899)" };

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#060F1E]">

      {/* Dashboard header */}
      <div className="border-b border-[#1a2d4a] bg-[#0b1829]">
        <Container className="py-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold flex-shrink-0"
                style={{ background:user.avatarBg, fontFamily:"Space Grotesk,sans-serif" }}>
                {user.avatar}
              </div>
              <div>
                <h1 className="text-[#f0f4f8] text-[18px] font-bold" style={{ fontFamily:"Space Grotesk,sans-serif" }}>
                  Good morning, {user.name.split(" ")[0]} 👋
                </h1>
                <p className="text-[#7a8fa8] text-[12px]">
                  @{user.username} · Last updated just now
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link href={`/profile/${user.username}`}
                className="px-4 py-2 rounded-[9px] border border-[#1a2d4a] text-[#f0f4f8] text-[13px] font-medium hover:bg-[#111f35] transition-colors">
                View profile
              </Link>
              <Link href="/submit"
                className="px-4 py-2 rounded-[9px] text-white text-[13px] font-semibold transition-all hover:shadow-lg hover:shadow-[#19AB4F]/25"
                style={{ background:"linear-gradient(135deg,#19AB4F,#16a047)" }}>
                + New startup
              </Link>
            </div>
          </div>

          {/* Dashboard nav tabs */}
          <div className="flex items-center gap-1 mt-5 border-b border-[#1a2d4a] -mb-6 overflow-x-auto scrollbar-hide">
            {[
              { label:"Overview",   href:"/dashboard",            active:true  },
              { label:"Analytics",  href:"/dashboard/analytics",  active:false },
              { label:"Startups",   href:"/dashboard/startups",   active:false },
              { label:"Settings",   href:"/settings",             active:false },
            ].map(tab => (
              <Link key={tab.label} href={tab.href}
                className="relative flex-shrink-0 px-4 py-2.5 text-[13px] font-medium transition-colors pb-[22px]"
                style={{ color: tab.active ? "#f0f4f8" : "#7a8fa8" }}>
                {tab.label}
                {tab.active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#19AB4F] rounded-full"/>
                )}
              </Link>
            ))}
          </div>
        </Container>
      </div>

      {/* Content */}
      <Container className="py-8">
        <DashboardStats/>
        <DashboardContent/>
      </Container>
    </div>
  );
}
export const dynamic = 'force-dynamic';
