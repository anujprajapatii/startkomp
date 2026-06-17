import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";
import { featuredStartups } from "@/lib/data";

export function FeaturedStartups() {
  return (
    <section className="container py-20">
      <SectionHeading eyebrow="Featured Startups" title="Promising startups raising now" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredStartups.map((s) => (
          <Card key={s.name}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white">
                  {s.initials}
                </span>
                <div>
                  <h3 className="font-semibold">{s.name}</h3>
                  <Badge className="mt-1">{s.industry}</Badge>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Funding requirement
              </p>
              <p className="text-lg font-bold text-brand">{s.funding}</p>
              <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                <Link href="/contact">Contact</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
