import { Spotlight } from "@/components/Spotlight";
import { Sidebar } from "@/components/Sidebar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen lg:grid lg:grid-cols-[260px_1fr]">
      <Spotlight />
      <Sidebar />
      <main
        id="main-content"
        className="relative z-10 px-6 py-12 lg:px-16 lg:py-16"
      >
        <div className="mx-auto flex max-w-2xl flex-col space-y-24">
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
        </div>
      </main>
    </div>
  );
}
