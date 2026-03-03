import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    const revealTargets = document.querySelectorAll('[data-reveal]');
    revealTargets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <a href="#hero" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-cyan-300 focus:px-3 focus:py-2 focus:text-slate-950">
        Skip to content
      </a>
      <Navbar name={portfolioData.name} />
      <main>
        <HeroSection data={portfolioData} />
        <AboutSection data={portfolioData} />
        <SkillsSection data={portfolioData} />
        <ProjectsSection projects={portfolioData.projects} />
        <ExperienceSection experience={portfolioData.experience} />
        <ContactSection data={portfolioData} />
      </main>
      <Footer data={portfolioData} />
    </div>
  );
}

export default App;
