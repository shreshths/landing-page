"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import DevelopmentStages from "@/components/DevelopmentStages";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <DevelopmentStages />
      <Team />
      <FAQ />
    </main>
  );
}
