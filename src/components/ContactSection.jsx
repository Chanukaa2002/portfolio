import React from "react";
import { personalInfo } from "../data/portfolioData";

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-12 bg-[#070b19] overflow-hidden">
      {/* Glow aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/15 via-blue-600/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">great</span> together.
        </h2>
        
        <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
          Feel free to reach out if you're looking for a machine learning or backend engineer, have a project in mind, or just want to connect.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-5">
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-9 py-4 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-lg shadow-purple-900/40 hover:shadow-purple-700/60 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Get In Touch
          </a>
          
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-9 py-4 rounded-xl text-lg font-semibold text-slate-200 bg-[#0b1126] hover:bg-[#111a3a] border border-slate-700 hover:border-cyan-400 hover:text-white transition-all duration-300"
          >
            View GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
