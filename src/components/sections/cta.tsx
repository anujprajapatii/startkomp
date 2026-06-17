import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="bg-gradient-to-r from-brand to-brand-emerald py-20 text-white">
      <div className="container text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Ready to Grow Your Startup?</h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact?type=startup">Submit Startup</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="border border-white bg-transparent text-white hover:bg-white/10"
          >
            <Link href="/contact?type=investor">Become Investor</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
