import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import SubmitHero from "@/components/submit/SubmitHero";
import SubmitFormClient from "@/components/submit/SubmitFormClient";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: `Submit Your Startup | ${siteConfig.name}`,
  description: "List your early-stage Indian startup on Startkomp for free.",
};

export default function SubmitPage() {
  return (
    <>
      <SubmitHero/>
      <Container className="py-12">
        <div className="max-w-2xl">
          <h2 className="text-[#f0f4f8] font-semibold text-[15px] mb-6" style={{fontFamily:"Space Grotesk,sans-serif"}}>Startup details</h2>
          <SubmitFormClient/>
        </div>
      </Container>
    </>
  );
}
