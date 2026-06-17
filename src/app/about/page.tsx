import type { Metadata } from "next";
import { SectionHeading } from "@/components/sections/section-heading";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Startkomp connects startups and investors. Startkomp is not an investment company and does not provide funding.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container py-20">
        <SectionHeading
          eyebrow="About Startkomp"
          title="A simple bridge between startups and investors"
          description="Startkomp helps startups showcase their ideas and connect with investors looking for promising opportunities."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
          <p>
            Startkomp is a discovery platform inspired by AngelList and
            Crunchbase. Startups create a profile, our team reviews and
            publishes it, and investors browse listings to find opportunities
            that match their focus.
          </p>
          <p>
            We are <strong className="text-foreground">not</strong> an
            investment company. Startkomp does not guarantee funding and is not
            party to any agreement. All funding decisions are made directly
            between startups and investors.
          </p>
          <p>
            Our mission is to make early-stage discovery transparent and
            accessible, so promising founders can reach the right investors
            without unnecessary friction.
          </p>
        </div>
      </section>
      <Cta />
    </>
  );
}
