import { ALL_STARTUPS } from "@/lib/data";
import Container from "@/components/ui/Container";

export default function StartupsHero() {
  return (
    <section className="border-b border-[#1a2d4a] bg-[#0b1829] py-10">
      <Container>
        <h1 className="text-[28px] sm:text-[32px] font-bold text-[#f0f4f8] mb-2" style={{fontFamily:"Space Grotesk,sans-serif"}}>All startups</h1>
        <p className="text-[#7a8fa8] text-[13px]">{ALL_STARTUPS.length} early-stage Indian startups — filter by category or search below.</p>
      </Container>
    </section>
  );
}
