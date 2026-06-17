/**
 * Central site configuration so brand details, navigation and SEO
 * defaults live in a single place.
 */
export const siteConfig = {
  name: "Startkomp",
  description:
    "Startkomp helps startups showcase their ideas and connect with investors looking for promising opportunities.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  nav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
