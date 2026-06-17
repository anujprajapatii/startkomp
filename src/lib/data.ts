/**
 * Static sample content for the marketing site. No database is used
 * because the platform is landing-page only (no accounts/auth).
 */

export type Startup = {
  name: string;
  industry: string;
  funding: string;
  initials: string;
};

export type Investor = {
  name: string;
  focus: string;
  industry: string;
  initials: string;
};

export const featuredStartups: Startup[] = [
  { name: "NovaPay", industry: "Fintech", funding: "$500K", initials: "NP" },
  { name: "GreenGrid", industry: "CleanTech", funding: "$1.2M", initials: "GG" },
  { name: "MediTrack", industry: "HealthTech", funding: "$750K", initials: "MT" },
  { name: "EduSpark", industry: "EdTech", funding: "$300K", initials: "ES" },
  { name: "CartlyAI", industry: "E-commerce", funding: "$900K", initials: "CA" },
  { name: "AgriFlow", industry: "AgriTech", funding: "$650K", initials: "AF" },
];

export const featuredInvestors: Investor[] = [
  { name: "Aria Capital", focus: "Seed & Series A", industry: "Fintech", initials: "AC" },
  { name: "Helix Ventures", focus: "Early Stage", industry: "HealthTech", initials: "HV" },
  { name: "Summit Angels", focus: "Pre-seed", industry: "SaaS", initials: "SA" },
  { name: "GreenLeaf Fund", focus: "Growth", industry: "CleanTech", initials: "GL" },
];

export const faqs = [
  {
    q: "Is Startkomp an investment company?",
    a: "No. Startkomp only connects startups and investors.",
  },
  {
    q: "Does Startkomp guarantee funding?",
    a: "No. Funding decisions are made directly between startups and investors.",
  },
  {
    q: "How can investors contact startups?",
    a: "Through the contact details provided on startup profiles.",
  },
];
