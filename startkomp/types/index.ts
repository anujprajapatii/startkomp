export interface Startup {
  id: string;
  name: string;
  description: string;
  logo: string;
  category: string;
  boosted?: boolean;
  accessType?: "Early access" | "Beta" | "Live";
  tagline?: string;
}

export interface FeedGroup {
  date: string;
  label: string;
  startups: Startup[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}
