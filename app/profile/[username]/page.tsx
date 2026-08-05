import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileContent from "@/components/profile/ProfileContent";

interface PageProps { params: Promise<{ username: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { username } = await params;
  return {
    title: `@${username} | ${siteConfig.name}`,
    description: `View ${username}'s founder profile and startups on Startkomp.`,
  };
}

export default async function ProfilePage({ params }: PageProps) {
  const { username } = await params;
  return (
    <>
      <ProfileHeader username={username}/>
      <ProfileContent/>
    </>
  );
}
