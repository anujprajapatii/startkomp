import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import Container from "@/components/ui/Container";
import SearchClient from "@/components/search/SearchClient";

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: q ? `"${q}" — Search | ${siteConfig.name}` : `Search Startups | ${siteConfig.name}`,
    description: "Search and filter 1,200+ early-stage Indian startups on Startkomp.",
  };
}

export default async function SearchPage({ searchParams }: PageProps) {
  const { q } = await searchParams;

  return (
    <>
      {/* Header */}
      <div className="border-b border-[#1a2d4a] bg-[#0b1829] py-8">
        <Container>
          <h1 className="text-[#f0f4f8] text-[24px] sm:text-[28px] font-bold mb-2"
            style={{ fontFamily:"Space Grotesk,sans-serif" }}>
            {q ? <>Results for <span className="text-[#19AB4F]">&ldquo;{q}&rdquo;</span></> : "Search startups"}
          </h1>
          <p className="text-[#7a8fa8] text-[13px]">
            Search across 1,200+ early-stage Indian startups — filter by category, access type, and more.
          </p>
        </Container>
      </div>

      <Container className="py-8">
        <SearchClient initialQuery={q ?? ""}/>
      </Container>
    </>
  );
}
