import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import AIWorkflowSection from '../components/AIWorkflowSection';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <div className="bg-black">
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <AIWorkflowSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
}
