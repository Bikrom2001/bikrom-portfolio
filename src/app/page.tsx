import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { StudentGallery } from "@/components/sections/StudentGallery";
import { Teaching } from "@/components/sections/Teaching";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="max-w-full overflow-x-clip">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Teaching />
        <StudentGallery />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
