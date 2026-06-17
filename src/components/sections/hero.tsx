import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-light/60 to-white">
      <div className="container py-20 text-center md:py-28">
        <Badge className="mb-6">Inspired by AngelList &amp; Crunchbase</Badge>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          Connect Startups with the{" "}
          <span className="text-brand">Right Investors</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Startkomp helps startups showcase their ideas and connect with
          investors looking for promising opportunities.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact?type=startup">Submit Startup</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact?type=investor">Become an Investor</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
