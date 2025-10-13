import { AboutSection } from "../components/AboutSection";
import { ContactsSection } from "../components/ContactsSection";
import { FloatingActionButton } from "../components/FloatingActionButton";
import { FooterSection } from "../components/FooterSection";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <StarBackground />
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactsSection />
      </main>
      <FooterSection />
      <FloatingActionButton />
    </div>
  );
};
