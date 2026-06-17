import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Audience } from "@/components/sections/audience";
import { FeaturedStartups } from "@/components/sections/featured-startups";
import { FeaturedInvestors } from "@/components/sections/featured-investors";
import { Stats } from "@/components/sections/stats";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { siteConfig } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <HowItWorks />
      <Audience />
      <FeaturedStartups />
      <FeaturedInvestors />
      <Stats />
      <Faq />
      <Cta />
    </>
  );
}
