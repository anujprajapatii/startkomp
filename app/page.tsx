import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import Hero from "@/components/home/Hero";
import CategoryBar from "@/components/home/CategoryBar";
import TrendingSection from "@/components/home/TrendingSection";
import FeedSection from "@/components/home/FeedSection";
import Sidebar from "@/components/home/Sidebar";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Discover India's Next Big Startups`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <Hero/>
      <CategoryBar/>
      <Container className="py-8 sm:py-10">
        {/* 
          Mobile:  single column (feed full width, sidebar below)
          Tablet:  single column
          Desktop: 2 columns [feed | sidebar]
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_285px] gap-8 lg:gap-10 xl:gap-12">
          <div className="min-w-0">
            <TrendingSection/>
            <FeedSection/>
          </div>
          <Sidebar/>
        </div>
      </Container>
    </>
  );
}
