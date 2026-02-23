import HeroSection from "../components/about/HeroSection";
import EducationSection from "../components/about/EducationSection";
import SkillsSection from "../components/about/SkillsSection";
import ExperienceSection from "../components/about/ExperienceSection";
import ProjectsSection from "../components/about/ProjectsSection";
import CertificationsSection from "../components/about/CertificationsSection";

const About = () => {
  return (
    <div id="top" className="space-y-8 pb-12 max-w-6xl mx-auto">
      <section id="hero" className="scroll-mt-24">
        <HeroSection />
      </section>
      <section id="education" className="scroll-mt-24">
        <EducationSection />
      </section>
      <section id="skills" className="scroll-mt-24">
        <SkillsSection />
      </section>
      <section id="experience" className="scroll-mt-24">
        <ExperienceSection />
      </section>
      <section id="projects" className="scroll-mt-24">
        <ProjectsSection />
      </section>
      <section id="certifications" className="scroll-mt-24">
        <CertificationsSection />
      </section>
    </div>
  );
};

export default About;
