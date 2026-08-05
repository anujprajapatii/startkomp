import Link from "next/link";

const values = [
  {
    icon: "🇮🇳",
    title: "India-first",
    desc: "Every editorial decision is made with the Indian founder's context in mind — regulatory, cultural, and linguistic.",
  },
  {
    icon: "⚖️",
    title: "Editorially independent",
    desc: "We take no equity. We have no investment relationships that influence what appears on the platform.",
  },
  {
    icon: "🔍",
    title: "Curated, not crowdsourced",
    desc: "Every listing is reviewed by a human. We'd rather surface 10 great startups than 100 mediocre ones.",
  },
  {
    icon: "🤝",
    title: "Founder-friendly",
    desc: "Organic listings are free. We exist to help founders get discovered — not to charge them for the privilege.",
  },
];

const timeline = [
  {
    year: "2024",
    event: "Idea & research — surveying 50+ Indian founders about discoverability",
  },
  {
    year: "Early 2025",
    event: "Private beta — 100 startups listed, 500 early testers onboarded",
  },
  {
    year: "Mid 2025",
    event: "Public launch — newsletter hits 2,000 subscribers in week one",
  },
  {
    year: "2026",
    event: "1,200+ startups listed, 10,000+ monthly visitors, daily editorial team",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl">
      {/* Mission */}
      <header className="mb-14">
        <h1
          className="text-2xl sm:text-3xl font-bold text-[#f0f4f8] mb-5"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          About Startkomp
        </h1>
        <p className="text-[#7a8fa8] text-sm leading-loose mb-4">
          India produces thousands of startups every year. Most of them never
          get discovered — not because they&apos;re not good, but because the
          infrastructure for discovery doesn&apos;t exist at the right time.
        </p>
        <p className="text-[#7a8fa8] text-sm leading-loose mb-4">
          Startkomp is our answer to that gap. We built the platform we wished
          had existed when we were building our first products: a place where
          Indian founders can get genuine early traction, and where curious
          people can find what&apos;s being built before the press picks it up.
        </p>
        <p className="text-[#7a8fa8] text-sm leading-loose">
          We&apos;re a small, independent team based in Bengaluru. We have no
          VC backing and no agenda beyond building the best startup discovery
          platform for India.
        </p>
      </header>

      {/* Values */}
      <section aria-labelledby="values-heading" className="mb-14">
        <h2
          id="values-heading"
          className="text-[#f0f4f8] font-bold text-lg mb-6"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          What we stand for
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-[#1a2d4a] bg-[#0b1829] p-5"
            >
              <span className="text-2xl block mb-3" aria-hidden="true">
                {v.icon}
              </span>
              <h3
                className="text-[#f0f4f8] font-semibold text-sm mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {v.title}
              </h3>
              <p className="text-[#7a8fa8] text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section aria-labelledby="timeline-heading" className="mb-14">
        <h2
          id="timeline-heading"
          className="text-[#f0f4f8] font-bold text-lg mb-6"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Our story
        </h2>
        <ol className="flex flex-col gap-0">
          {timeline.map((item, i) => (
            <li key={i} className="flex gap-5 relative">
              {/* Line */}
              {i < timeline.length - 1 && (
                <div
                  className="absolute left-[47px] top-8 bottom-0 w-px bg-[#1a2d4a]"
                  aria-hidden="true"
                />
              )}
              <div className="flex-shrink-0 pt-1">
                <span
                  className="block text-[#19AB4F] text-xs font-bold w-[38px] text-right"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {item.year}
                </span>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center pt-1.5">
                <div className="h-3 w-3 rounded-full border-2 border-[#19AB4F] bg-[#060F1E] z-10" />
              </div>
              <p className="text-[#7a8fa8] text-sm leading-relaxed pb-8">
                {item.event}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <div className="rounded-2xl border border-[rgba(25,171,79,0.30)] bg-[rgba(25,171,79,0.06)] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p
            className="text-[#f0f4f8] font-semibold text-sm mb-1"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Ready to list your startup?
          </p>
          <p className="text-[#7a8fa8] text-xs">
            It&apos;s free, fast, and reaches the right people.
          </p>
        </div>
        <Link
          href="/submit"
          className="flex-shrink-0 bg-[#19AB4F] hover:bg-[#19AB4F]/90 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-[#19AB4F]/20"
        >
          Submit your startup
        </Link>
      </div>
    </div>
  );
}
