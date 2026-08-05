import Link from "next/link";
import Container from "@/components/ui/Container";

interface ProfileHeaderProps {
  username: string;
}

// Mock founder data
function getFounder(username: string) {
  return {
    name: "Priya Sharma",
    username,
    avatar: "P",
    avatarBg: "linear-gradient(135deg,#a78bfa,#ec4899)",
    bio: "Building KrediQ — AI credit scoring for India's gig economy. Previously at Razorpay. IIT Bombay '18. Passionate about financial inclusion.",
    location: "Bengaluru, India 🇮🇳",
    website: "https://krediq.in",
    twitter: "@priyasharma",
    joined: "March 2025",
    followers: 248,
    following: 91,
    startups: 2,
    verified: true,
  };
}

export default function ProfileHeader({ username }: ProfileHeaderProps) {
  const f = getFounder(username);
  return (
    <div className="border-b border-[#1a2d4a]" style={{ background:"#0b1829" }}>
      {/* Cover */}
      <div className="h-[160px] sm:h-[200px] relative overflow-hidden"
        style={{
          background:"linear-gradient(135deg,#0b1829 0%,#111f35 50%,#0b1829 100%)",
          backgroundImage:"linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
          backgroundSize:"40px 40px",
        }}>
        <div className="absolute inset-0" style={{ background:"radial-gradient(ellipse at 30% 50%,rgba(25,171,79,0.12) 0%,transparent 60%)" }}/>
      </div>

      <Container className="pb-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-12 sm:-mt-14">

          {/* Avatar */}
          <div className="flex items-end gap-4">
            <div className="relative">
              <div className="w-[80px] h-[80px] sm:w-[96px] sm:h-[96px] rounded-[20px] border-4 border-[#0b1829] flex items-center justify-center text-white text-[32px] font-bold flex-shrink-0"
                style={{ background:f.avatarBg, fontFamily:"Space Grotesk,sans-serif" }}>
                {f.avatar}
              </div>
              {f.verified && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#19AB4F] border-2 border-[#0b1829] flex items-center justify-center">
                  <span className="text-white text-[10px]">✓</span>
                </div>
              )}
            </div>
            <div className="pb-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-[#f0f4f8] text-[20px] font-bold" style={{ fontFamily:"Space Grotesk,sans-serif" }}>{f.name}</h1>
                {f.verified && <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#19AB4F]/15 border border-[#19AB4F]/30 text-[#19AB4F]">Verified Founder</span>}
              </div>
              <p className="text-[#7a8fa8] text-[13px]">@{f.username}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:pb-1">
            <Link href={`/messages/${f.username}`}
              className="px-4 py-2 rounded-[9px] border border-[#1a2d4a] text-[#f0f4f8] text-[13px] font-medium hover:bg-[#111f35] transition-colors">
              Message
            </Link>
            <button className="px-5 py-2 rounded-[9px] text-white text-[13px] font-semibold transition-all hover:shadow-lg hover:shadow-[#19AB4F]/25"
              style={{ background:"linear-gradient(135deg,#19AB4F,#16a047)" }}>
              Follow
            </button>
          </div>
        </div>

        {/* Bio & meta */}
        <div className="mt-5 max-w-2xl">
          <p className="text-[#f0f4f8] text-[14px] leading-relaxed mb-4">{f.bio}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span className="flex items-center gap-1.5 text-[#7a8fa8] text-[12px]">
              <span>📍</span>{f.location}
            </span>
            <a href={f.website} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#19AB4F] text-[12px] hover:underline">
              <span>🔗</span>{f.website.replace("https://","")}
            </a>
            <span className="flex items-center gap-1.5 text-[#7a8fa8] text-[12px]">
              <span>🐦</span>{f.twitter}
            </span>
            <span className="flex items-center gap-1.5 text-[#7a8fa8] text-[12px]">
              <span>📅</span>Joined {f.joined}
            </span>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex gap-6 mt-5">
          {[
            { value:f.startups,  label:"Startups" },
            { value:f.followers, label:"Followers" },
            { value:f.following, label:"Following" },
          ].map(s => (
            <button key={s.label} className="text-left hover:opacity-80 transition-opacity">
              <span className="text-[#f0f4f8] font-bold text-[15px]" style={{ fontFamily:"Space Grotesk,sans-serif" }}>{s.value}</span>
              <span className="text-[#7a8fa8] text-[13px] ml-1.5">{s.label}</span>
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
}
