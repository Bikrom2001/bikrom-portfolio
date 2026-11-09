import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AllProjectsClient } from "@/components/sections/AllProjectsClient";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "All Projects & Production Work",
  description: `Explore all web applications, university portals, LMS platforms, and software projects developed by ${profile.name}.`,
  openGraph: {
    title: `All Projects & Production Work · ${profile.name}`,
    description: `Explore all web applications, university portals, LMS platforms, and software projects developed by ${profile.name}.`,
    url: "/projects",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="max-w-full overflow-x-clip">
        <AllProjectsClient />
      </main>
      <Footer />
    </>
  );
}

