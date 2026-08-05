import type { Startup, FeedGroup } from "@/types";

export const ALL_STARTUPS: Startup[] = [
  // Fintech
  {
    id: "krediq",
    name: "KrediQ",
    description:
      "AI-powered credit scoring for gig workers and freelancers underserved by traditional banks. Uses UPI transaction history, rental records, and social signals to build an alternative credit profile.",
    logo: "💳",
    category: "Fintech",
    accessType: "Early access",
    boosted: false,
    tagline: "Credit for the uncredited.",
  },
  {
    id: "nestiq",
    name: "NestIQ",
    description:
      "AI co-pilot for first-time home buyers — property valuation, loan eligibility, legal title checks, and negotiation coaching in one dashboard.",
    logo: "🏠",
    category: "Fintech",
    accessType: "Early access",
    boosted: false,
    tagline: "Your smartest move starts here.",
  },
  {
    id: "savvybill",
    name: "SavvyBill",
    description:
      "GST-compliant invoicing, expense tracking, and TDS management for Indian freelancers and independent consultants. Auto-reconciles with bank statements.",
    logo: "🧾",
    category: "Personal Finance",
    accessType: "Live",
    boosted: false,
    tagline: "Finances sorted, so you can focus.",
  },
  // AI Tools
  {
    id: "axiom-ai",
    name: "Axiom AI",
    description:
      "Build internal tools, dashboards, and automations using plain English. Connects to your existing databases and APIs — no code required. Deployed in minutes.",
    logo: "⚡",
    category: "AI Tools",
    accessType: "Early access",
    boosted: false,
    tagline: "Describe it. Build it. Ship it.",
  },
  {
    id: "cognify",
    name: "Cognify",
    description:
      "AI research assistant trained on Indian regulatory filings, SEBI circulars, RBI guidelines, and court judgements. Answers complex compliance questions instantly.",
    logo: "🧠",
    category: "AI Tools",
    accessType: "Beta",
    boosted: true,
    tagline: "India's regulatory brain in a box.",
  },
  // EdTech
  {
    id: "fluentdesi",
    name: "FluentDesi",
    description:
      "Learn any Indian language through AI-generated conversations with regional cultural context. Supports Hindi, Tamil, Telugu, Kannada, Bengali, Marathi and more.",
    logo: "🗣️",
    category: "EdTech",
    accessType: "Beta",
    boosted: true,
    tagline: "Speak like a local, wherever you go.",
  },
  {
    id: "campus42",
    name: "Campus42",
    description:
      "Peer-to-peer skill exchange platform for Indian college students. Trade your expertise in coding for design, or finance for marketing — no money changes hands.",
    logo: "🎓",
    category: "EdTech",
    accessType: "Early access",
    boosted: false,
    tagline: "Your skills are your currency.",
  },
  // HealthTech
  {
    id: "pharmato",
    name: "PharmATo",
    description:
      "Real-time medicine availability and price comparison across 50,000+ pharmacies in India. Alerts you when out-of-stock drugs are available nearby.",
    logo: "💊",
    category: "HealthTech",
    accessType: "Beta",
    boosted: false,
    tagline: "Never hunt for medicine again.",
  },
  {
    id: "vayu-health",
    name: "Vayu Health",
    description:
      "Personalised air quality health alerts based on your location, AQI data, and your own health profile. Recommends protective actions before symptoms hit.",
    logo: "🌬️",
    category: "HealthTech",
    accessType: "Early access",
    boosted: false,
    tagline: "Breathe informed.",
  },
  // SaaS
  {
    id: "carbonpath",
    name: "CarbonPath",
    description:
      "Sustainability reporting and carbon tracking platform built for Indian SMEs navigating BRSR and ESG compliance mandates. Audit-ready reports in one click.",
    logo: "🌿",
    category: "SaaS",
    accessType: "Early access",
    boosted: false,
    tagline: "Go green, stay compliant.",
  },
  // Developer Tools
  {
    id: "shrinkfast",
    name: "ShrinkFast",
    description:
      "Developer-first URL shortener with real-time analytics, webhook triggers, branded domains, and a generous free tier built for Indian projects and scale.",
    logo: "🔗",
    category: "Developer Tools",
    accessType: "Live",
    boosted: false,
    tagline: "Short URLs. Long on features.",
  },
  {
    id: "deploykar",
    name: "DeployKar",
    description:
      "One-command deployment platform optimised for low-latency serving across Indian cloud regions. Supports Node, Python, Go, and Docker out of the box.",
    logo: "🚀",
    category: "Developer Tools",
    accessType: "Early access",
    boosted: true,
    tagline: "Ship to India in one command.",
  },
  // E-Commerce
  {
    id: "gramseva",
    name: "GramSeva",
    description:
      "Connecting rural artisans directly to urban buyers — zero middlemen, fair prices, and verified quality. Each purchase funds digital literacy for the maker's village.",
    logo: "🏺",
    category: "E-Commerce",
    accessType: "Beta",
    boosted: false,
    tagline: "Handmade. Fair-priced. Verified.",
  },
  {
    id: "shopwave",
    name: "ShopWave",
    description:
      "WhatsApp-first storefront builder for D2C brands targeting tier-2 and tier-3 Indian cities. Works on 2G, supports regional languages, integrates Razorpay natively.",
    logo: "🛒",
    category: "E-Commerce",
    accessType: "Beta",
    boosted: true,
    tagline: "Sell to Bharat on WhatsApp.",
  },
  // Productivity / Workflow
  {
    id: "docvault",
    name: "DocVault",
    description:
      "Secure digital locker for Indian personal and business documents. DigiLocker-compatible, Aadhaar-verified, with one-tap sharing for KYC and loan applications.",
    logo: "🗄️",
    category: "Productivity",
    accessType: "Early access",
    boosted: true,
    tagline: "Every document. Always ready.",
  },
  {
    id: "gridflow",
    name: "GridFlow",
    description:
      "Visual workflow builder for Indian ops teams. Connect Zoho, Razorpay, Tally, and WhatsApp Business into automated pipelines — no developer needed.",
    logo: "🔀",
    category: "Workflow Automation",
    accessType: "Early access",
    boosted: false,
    tagline: "Automate the India stack.",
  },
  // Legal
  {
    id: "legaldraft",
    name: "LegalDraft",
    description:
      "Generate India-compliant legal agreements in under 5 minutes. Covers NDAs, founder agreements, employment contracts, and rental deeds — reviewed by Indian lawyers.",
    logo: "⚖️",
    category: "Legal",
    accessType: "Early access",
    boosted: false,
    tagline: "Legal docs. Not legal bills.",
  },
  // Analytics
  {
    id: "datasutra",
    name: "DataSutra",
    description:
      "Business intelligence platform built for Indian retail and D2C brands. Pre-built dashboards for Flipkart, Meesho, and Amazon India seller analytics.",
    logo: "📊",
    category: "Analytics",
    accessType: "Early access",
    boosted: false,
    tagline: "Data that speaks your market.",
  },
];

export const TRENDING_STARTUPS = ALL_STARTUPS.filter((s) =>
  ["krediq", "gramseva", "axiom-ai"].includes(s.id)
);

export const TOP_THIS_WEEK = ALL_STARTUPS.filter((s) =>
  ["krediq", "axiom-ai", "fluentdesi", "nestiq", "gridflow"].includes(s.id)
);

export const FEED_GROUPS: FeedGroup[] = [
  {
    date: "2026-08-05",
    label: "Today — August 5th",
    startups: ALL_STARTUPS.filter((s) =>
      ["nestiq", "fluentdesi", "carbonpath"].includes(s.id)
    ),
  },
  {
    date: "2026-08-04",
    label: "Yesterday — August 4th",
    startups: ALL_STARTUPS.filter((s) =>
      ["shrinkfast", "docvault", "pharmato", "legaldraft"].includes(s.id)
    ),
  },
  {
    date: "2026-08-03",
    label: "August 3rd",
    startups: ALL_STARTUPS.filter((s) =>
      ["savvybill", "gridflow", "shopwave"].includes(s.id)
    ),
  },
  {
    date: "2026-08-02",
    label: "August 2nd",
    startups: ALL_STARTUPS.filter((s) =>
      ["cognify", "deploykar", "datasutra", "vayu-health"].includes(s.id)
    ),
  },
  {
    date: "2026-08-01",
    label: "August 1st",
    startups: ALL_STARTUPS.filter((s) =>
      ["gramseva", "campus42", "krediq", "axiom-ai"].includes(s.id)
    ),
  },
];

export function getStartupById(id: string): Startup | undefined {
  return ALL_STARTUPS.find((s) => s.id === id);
}

export const CATEGORIES = [
  "All",
  "SaaS",
  "AI Tools",
  "Fintech",
  "Analytics",
  "Developer Tools",
  "E-Commerce",
  "EdTech",
  "HealthTech",
  "Workflow Automation",
  "Productivity",
  "Legal",
  "Personal Finance",
] as const;

export type Category = (typeof CATEGORIES)[number];
