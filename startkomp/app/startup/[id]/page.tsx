import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getStartupById, ALL_STARTUPS } from "@/lib/data";
import { siteConfig } from "@/lib/seo-config";
import StartupHeader from "@/components/startup/StartupHeader";
import StartupBody from "@/components/startup/StartupBody";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return ALL_STARTUPS.map((startup) => ({ id: startup.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const startup = getStartupById(id);

  if (!startup) {
    return { title: `Startup not found | ${siteConfig.name}` };
  }

  return {
    title: `${startup.name} — ${startup.tagline ?? startup.category} | ${siteConfig.name}`,
    description: startup.description,
    openGraph: {
      title: startup.name,
      description: startup.description,
      url: `${siteConfig.baseUrl}/startup/${startup.id}`,
      siteName: siteConfig.name,
    },
  };
}

export default async function StartupDetailPage({ params }: PageProps) {
  const { id } = await params;
  const startup = getStartupById(id);

  if (!startup) {
    notFound();
  }

  return (
    <>
      <StartupHeader startup={startup} />
      <StartupBody startup={startup} />
    </>
  );
}
