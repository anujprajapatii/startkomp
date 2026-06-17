import { SectionHeading } from "./section-heading";

const steps = [
  {
    title: "Submit Details",
    desc: "Startup submits business details, funding requirements, and contact information.",
  },
  {
    title: "Review & Publish",
    desc: "Our team reviews the startup profile and publishes it on Startkomp.",
  },
  {
    title: "Investors Browse",
    desc: "Interested investors browse startup listings and contact founders directly.",
  },
  {
    title: "Connect",
    desc: "Founders and investors connect independently to discuss funding opportunities.",
  },
];

export function HowItWorks() {
  return (
    <section className="container py-20">
      <SectionHeading
        eyebrow="How It Works"
        title="Four simple steps"
        description="From submission to connection, Startkomp keeps the process clear."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="relative rounded-xl border border-border bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
              {i + 1}
            </div>
            <h3 className="font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
