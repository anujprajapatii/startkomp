import FaqAccordionClient from "./FaqAccordionClient";

const sections = [
  {
    heading: "General",
    items: [
      {
        q: "What is Startkomp?",
        a: "Startkomp is a discovery platform for early-stage Indian startups. We surface new products to thousands of early adopters, investors, and fellow founders daily — think BetaList, but built specifically for India's startup ecosystem.",
      },
      {
        q: "Who is Startkomp for?",
        a: "Startkomp is for two groups: founders who want to get their early-stage startup discovered, and curious people — early adopters, investors, enthusiasts — who want to follow what's being built across India before it hits mainstream news.",
      },
      {
        q: "Is Startkomp free to use?",
        a: "Yes. Browsing and following startups is completely free, always. Submitting your startup for an organic listing is also free. We offer optional paid boosts and advertising slots for founders who want additional visibility.",
      },
      {
        q: "Is Startkomp affiliated with any accelerator or VC?",
        a: "No. Startkomp is editorially independent. Our listings are not influenced by investment relationships — every startup is reviewed on the same criteria.",
      },
    ],
  },
  {
    heading: "Submitting a startup",
    items: [
      {
        q: "How do I submit my startup?",
        a: "Head to the Submit page, fill out the short form with your startup's name, URL, tagline, description, and category, and hit submit. Our team reviews every submission manually.",
      },
      {
        q: "How long does the review take?",
        a: "We review and publish approved startups within 2 business days. If your startup is rejected, we'll email you with the reason. Common reasons include incomplete info, non-Indian focus, or the product not being ready for early users yet.",
      },
      {
        q: "What qualifies as an 'Indian startup'?",
        a: "We define an Indian startup as any venture that is founded by Indian founders, incorporated in India, or primarily building for Indian users — regardless of where it's headquartered.",
      },
      {
        q: "My startup was rejected. Can I resubmit?",
        a: "Yes, once you've addressed the reason given in the rejection email, you're welcome to resubmit. Please wait at least 30 days before resubmitting the same product.",
      },
    ],
  },
  {
    heading: "Advertising & boosting",
    items: [
      {
        q: "What's the difference between a boost and an ad?",
        a: "A boost elevates your organic listing in the feed with a 'Boosted' badge — it's the same listing, just more visible. An ad is a dedicated placement in the sidebar or newsletter, with custom copy and your branding.",
      },
      {
        q: "How do I advertise on Startkomp?",
        a: "Visit the Advertise page to see current packages and pricing. We offer newsletter sponsorships, sidebar placements, and homepage feature slots. All ad content is clearly labelled.",
      },
    ],
  },
];

export default function FaqSections() {
  return (
    <div className="flex flex-col gap-10">
      {sections.map((section) => (
        <section key={section.heading} aria-labelledby={`faq-${section.heading.toLowerCase()}`}>
          <h2
            id={`faq-${section.heading.toLowerCase()}`}
            className="text-[#19AB4F] text-xs font-semibold uppercase tracking-widest mb-4"
          >
            {section.heading}
          </h2>
          <FaqAccordionClient items={section.items} />
        </section>
      ))}
    </div>
  );
}
