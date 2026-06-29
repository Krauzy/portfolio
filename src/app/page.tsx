import { AboutSection } from "@/components/sections/AboutSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TechStrip } from "@/components/sections/TechStrip";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TechStrip />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ArchitectureSection />
      <ContactSection />
    </main>
  );
}
