import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black selection:bg-indigo-500/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
