import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { ALL_STARTUPS } from "@/lib/data";
import StartupsHero from "@/components/startups/StartupsHero";
import StartupsGridClient from "@/components/startups/StartupsGridClient";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: `Browse Startups | ${siteConfig.name}`,
  description: "Discover and filter all early-stage Indian startups on Startkomp.",
};

export default function StartupsPage() {
  return (
    <>
      <StartupsHero/>
      <Container className="py-10">
        <StartupsGridClient startups={ALL_STARTUPS}/>
      </Container>
    </>
  );
}
