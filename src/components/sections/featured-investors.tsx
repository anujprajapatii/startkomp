import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";
import { featuredInvestors } from "@/lib/data";

export function FeaturedInvestors() {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="container">
        <SectionHeading eyebrow="Featured Investors" title="Active investors on Startkomp" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredInvestors.map((inv) => (
            <Card key={inv.name}>
              <CardContent className="p-6 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-emerald text-sm font-bold text-white">
                  {inv.initials}
                </span>
                <h3 className="mt-4 font-semibold">{inv.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{inv.focus}</p>
                <Badge className="mt-3">{inv.industry}</Badge>
                <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                  <Link href="/contact">Contact</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
