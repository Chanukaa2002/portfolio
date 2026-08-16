import React, { useState, useEffect } from "react";
import BrainCircuitWatermark from "./BrainCircuitWatermark";
import { personalInfo } from "../data/portfolioData";

export const AboutMe = () => {
  const [promptText, setPromptText] = useState("");
  const fullPrompt = "Who is Chanuka Dilshan?";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullPrompt.length) {
        setPromptText(fullPrompt.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-12 bg-[#070b19] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-purple-900/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-12">
          
          {/* Left Column: Heading & Subtle Brain Circuit Watermark (Matching Screenshot 1) */}
          <div className="flex flex-col self-stretch justify-between py-4 lg:col-span-4">
            <div>
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                About me
              </h2>
              <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
                Passionate about fusing scalable backend architectures with cutting-edge artificial intelligence to build transformative software systems.
              </p>
            </div>

            {/* Subtle Purple Brain Watermark (Bottom Left) */}
            <div className="mt-16 lg:mt-32">
              <BrainCircuitWatermark className="w-36 h-36 opacity-35" />
            </div>
          </div>

          {/* Right Column: Mac-Style Terminal Window Mockup (Matching Screenshot 1) */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-[#090e21] border border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(56,189,248,0.06)] overflow-hidden transition-all duration-300 hover:border-slate-700">
              
              {/* Window Top Bar: Mac Dots + Center Domain Pill */}
              <div className="relative flex items-center justify-between px-5 py-3.5 bg-[#0b122a] border-b border-slate-800/60">
                {/* 3 Mac Traffic Light Dots */}
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f] inline-block shadow-sm" />
                </div>

                {/* Center Pill */}
                <div className="absolute left-1/2 -translate-x-1/2 px-6 py-1 rounded-full bg-[#070b19] border border-slate-800/80 text-xs font-mono text-slate-400 tracking-wider">
                  {personalInfo.domain}
                </div>

                <div className="w-12" />
              </div>

              {/* Window Body */}
              <div className="p-6 space-y-6 sm:p-8">
                
                {/* AI Sparkle Prompt Input Bar (Matching Screenshot 1) */}
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#070b19] border border-slate-800 text-slate-200">
                  <span className="text-xl select-none animate-pulse">✨</span>
                  <div className="flex items-center font-mono text-sm sm:text-base text-slate-200">
                    <span>{promptText}</span>
                    <span className="inline-block w-2 h-5 ml-1 bg-cyan-400 animate-pulse" />
                  </div>
                </div>

                {/* Inner Bio Card (Matching Screenshot 1) */}
                <div className="p-6 sm:p-8 rounded-xl bg-[#0c1432]/90 border border-slate-800/90 shadow-inner">
                  <p className="text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
                    {personalInfo.aboutBio}
                  </p>
                  
                  {/* Key Highlights Footer inside Bio Card */}
                  <div className="grid grid-cols-2 gap-4 pt-6 mt-8 border-t sm:grid-cols-4 border-slate-800/60">
                    <div>
                      <span className="block font-mono text-xs tracking-wider uppercase text-slate-400">HND GPA</span>
                      <span className="text-sm font-semibold text-cyan-300">3.75 / 4.0 (NIBM)</span>
                    </div>
                    <div>
                      <span className="block font-mono text-xs tracking-wider uppercase text-slate-400">Diploma GPA</span>
                      <span className="text-sm font-semibold text-purple-300">4.0 (Dean's List)</span>
                    </div>
                    <div>
                      <span className="block font-mono text-xs tracking-wider uppercase text-slate-400">Focus Area</span>
                      <span className="text-sm font-semibold text-cyan-300">ZenML • MLflow • MLOps</span>
                    </div>
                    <div>
                      <span className="block font-mono text-xs tracking-wider uppercase text-slate-400">Experience</span>
                      <span className="text-sm font-semibold text-emerald-400">SE Intern @ Ceylon X</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
