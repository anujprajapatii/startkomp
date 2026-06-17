import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const forStartups = [
  "Create a startup profile",
  "Showcase your business idea",
  "Reach potential investors",
  "Receive direct inquiries",
];

const forInvestors = [
  "Discover promising startups",
  "Explore investment opportunities",
  "Contact founders directly",
  "Build your investment portfolio",
];

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-light text-brand">
                <Check className="h-3 w-3" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function Audience() {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="container grid gap-6 md:grid-cols-2">
        <List title="For Startups" items={forStartups} />
        <List title="For Investors" items={forInvestors} />
      </div>
    </section>
  );
}
