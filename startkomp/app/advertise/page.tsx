import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import AdvertisePage from "@/components/advertise/AdvertisePage";

export const metadata: Metadata = {
  title: `Advertise | ${siteConfig.name}`,
  description: "Reach 10,000+ Indian founders and early adopters on Startkomp.",
};

export default function Advertise() { return <AdvertisePage/>; }
