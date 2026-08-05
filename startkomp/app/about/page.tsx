import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import AboutPage from "@/components/about/AboutPage";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: "Learn about Startkomp — the independent discovery platform for early-stage Indian startups.",
};

export default function About() {
  return <Container className="py-14"><AboutPage/></Container>;
}
