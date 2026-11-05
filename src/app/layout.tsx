import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import type { ReactNode } from "react";
import { Providers } from "@/components/layout/Providers";
import { profile } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

const title = `${profile.name} — Software Developer & Web Development Instructor`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: `%s · ${profile.name}`,
  },
  description: profile.metaDescription,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  keywords: [
    "Bikrom Roy",
    "Software Developer",
    "Frontend Developer",
    "Web Development Instructor",
    "Next.js developer",
    "React developer",
    "Laravel developer",
    "PHP developer",
    "Dhaka",
    "Bangladesh",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: `${profile.name} Portfolio`,
    title,
    description: profile.metaDescription,
    locale: "en_US",
    images: [{ url: profile.ogImage, width: 640, height: 640, alt: profile.name }],
  },
  twitter: {
    card: "summary",
    title,
    description: profile.metaDescription,
    images: [profile.ogImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#050a17" },
  ],
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.currentRole.title,
  worksFor: { "@type": "Organization", name: profile.currentRole.company },
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  email: `mailto:${profile.email}`,
  url: profile.siteUrl,
  image: `${profile.siteUrl}${profile.ogImage}`,
  sameAs: [profile.socials.github, profile.socials.linkedin],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} ${jetbrains.variable} max-w-full overflow-x-clip`}
    >
      <body className="min-h-screen max-w-full overflow-x-clip relative" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
