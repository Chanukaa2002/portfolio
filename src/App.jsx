import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import BrainSkills from "./components/BrainSkills";
import ProjectsSection from "./components/ProjectsSection";
import CertificatesSection from "./components/CertificatesSection";
import ExperienceEducation from "./components/ExperienceEducation";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import AllProjectsModal from "./components/AllProjectsModal";
import ChatbotWidget from "./components/ChatbotWidget";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070b19] text-slate-100 font-sans selection:bg-purple-600/40 selection:text-cyan-300 relative overflow-x-hidden">
      
      {/* Background Starfield Canvas / Ambient Gradient Blobs */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[150px]" />
        <div className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-purple-900/15 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-indigo-900/10 blur-[150px]" />
      </div>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections Flow */}
      <main className="relative z-10">
        <Hero />
        <AboutMe />
        <BrainSkills />
        <ProjectsSection onOpenAllProjects={() => setIsAllProjectsOpen(true)} />
        <CertificatesSection />
        <ExperienceEducation />
        <ContactSection />
      </main>

      {/* Footer */}
      <FooterSection />

      {/* All Projects Full Modal */}
      <AllProjectsModal
        isOpen={isAllProjectsOpen}
        onClose={() => setIsAllProjectsOpen(false)}
      />

      {/* Floating Utilities */}
      <ChatbotWidget />
      <ScrollToTop />

    </div>
  );
}
