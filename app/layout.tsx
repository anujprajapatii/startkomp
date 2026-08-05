import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: { default:`${siteConfig.name} — ${siteConfig.tagline}`, template:`%s | ${siteConfig.name}` },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.baseUrl),
  openGraph: { title:siteConfig.name, description:siteConfig.description, url:siteConfig.baseUrl, siteName:siteConfig.name, locale:siteConfig.locale, type:"website" },
  twitter: { card:"summary_large_image", title:siteConfig.name, description:siteConfig.description, creator:siteConfig.twitterHandle },
  robots: { index:true, follow:true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet"/>
      </head>
      <body className="min-h-screen antialiased overflow-x-hidden bg-[#060F1E] text-[#f0f4f8]">
        <Navbar/>
        <main id="main-content">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
