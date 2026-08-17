import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
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

// ============================================================================
// RESPONSIVE AI BACKGROUNDS:
// - Mobile (< 768px): Interactive Neural Network & Synaptic Flow
// - PC / Desktop (>= 768px): Holographic 3D World Globe & Orbiting Satellites
// ============================================================================
import NeuralNetworkBackground from "./components/NeuralNetworkBackground";
import LossLandscapeBackground from "./components/LossLandscapeBackground";

export default function App() {
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);
  
  // Responsive device check (Mobile < 768px)
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#070b19] text-slate-100 font-sans selection:bg-purple-600/40 selection:text-cyan-300 relative overflow-x-hidden">
      {/* Responsive Background Animation: Neural Network on Mobile, 3D Globe on PC */}
      {isMobile ? <NeuralNetworkBackground /> : <LossLandscapeBackground />}

      {/* Ambient Gradient Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
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
