import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import FaqSections from "@/components/faq/FaqSections";
import Container from "@/components/ui/Container";
import Link from "next/link";

export const metadata: Metadata = {
  title: `FAQ | ${siteConfig.name}`,
  description: "Answers to common questions about Startkomp.",
};

export default function FaqPage() {
  return (
    <Container className="py-14">
      <header className="mb-12 max-w-2xl">
        <h1 className="text-[28px] sm:text-[32px] font-bold text-[#f0f4f8] mb-3" style={{fontFamily:"Space Grotesk,sans-serif"}}>Frequently asked questions</h1>
        <p className="text-[#7a8fa8] text-[13px] leading-relaxed">
          Can&apos;t find what you&apos;re looking for?{" "}
          <Link href="/support" className="text-[#19AB4F] hover:underline font-medium">Contact support →</Link>
        </p>
      </header>
      <div className="max-w-3xl"><FaqSections/></div>
    </Container>
  );
}
