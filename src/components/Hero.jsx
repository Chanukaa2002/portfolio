import React, { useState, useEffect } from "react";
import BrainCircuitWatermark from "./BrainCircuitWatermark";
import dp2 from "../assets/dp2.png";
import dp3 from "../assets/dp3.png";
import dp4 from "../assets/dp4.png";
import { personalInfo } from "../data/portfolioData";

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [dp2, dp3, dp4];

  // Auto-switch between dp2, dp3, and dp4 every 4.5 seconds with smooth crossfade
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 bg-[#070b19] overflow-hidden"
    >
      {/* Dynamic ambient gradients */}
      <div className="absolute top-1/4 left-1/10 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/10 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs (Matching Screenshot 3) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b122a] border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>ML / MLOps Engineer • ZenML & MLflow</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-100 tracking-tight">
              Hi, I am
            </h2>
            
            {/* Highlighted Name with Cyan Curly Braces */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              <span className="text-cyan-400 font-mono font-medium">&#123;</span>
              <span className="px-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400">
                {personalInfo.name}
              </span>
              <span className="text-cyan-400 font-mono font-medium">&#125;</span>
            </h1>

            {/* Subtitle description */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {personalInfo.heroSubtitle}
            </p>

            {/* Action Buttons (Matching Screenshot 3) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              {/* Primary Download CV Button */}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-lg shadow-purple-900/30 hover:shadow-purple-700/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Download CV
              </a>

              {/* Secondary Start Project / Contact Button */}
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-xl font-semibold text-slate-200 bg-[#0b1126]/80 hover:bg-[#111a3a] border border-cyan-500/40 hover:border-cyan-400 shadow-sm hover:shadow-glowCyan hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Start Project
              </a>
            </div>
          </div>

          {/* Right Column: Ultra-Sleek Modern Tech Card Portrait with Auto Crossfade */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <div className="relative w-[280px] h-[360px] sm:w-[340px] sm:h-[440px] lg:w-[360px] lg:h-[460px] flex items-center justify-center">
              
              {/* Dynamic Multi-Tone Ambient Aura Glow */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-purple-600/35 via-indigo-600/25 to-cyan-500/25 blur-3xl -z-10 animate-pulse" />
              
              {/* Modern Glassmorphic Tech Frame */}
              <div className="relative z-10 w-full h-full rounded-3xl p-2.5 bg-[#090e21]/80 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(147,51,234,0.2)] transition-all duration-500 group overflow-hidden">
                
                {/* Portrait Images Container with Smooth Crossfade */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  {images.map((imgSrc, idx) => (
                    <img
                      key={idx}
                      src={imgSrc}
                      alt={`${personalInfo.name} - Portrait ${idx + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover object-center transform transition-all duration-1000 ease-in-out ${
                        currentImageIndex === idx
                          ? "opacity-100 scale-100 z-10"
                          : "opacity-0 scale-105 pointer-events-none z-0"
                      }`}
                    />
                  ))}

                  {/* Seamless Bottom Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b19]/90 via-[#070b19]/25 to-transparent pointer-events-none z-20" />

                  {/* Subtle Tech Corner Markers */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400/70 pointer-events-none z-30" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400/70 pointer-events-none z-30" />

                  {/* Top-Right Image Dots Indicator */}
                  <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 z-30 bg-[#070b19]/70 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          currentImageIndex === idx
                            ? "w-4 bg-cyan-400"
                            : "bg-slate-600 hover:bg-slate-400"
                        }`}
                        aria-label={`Switch to portrait ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Sleek Bottom Glass Telemetry Pill */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 px-3.5 py-2 rounded-xl bg-[#070b19]/85 backdrop-blur-md border border-white/10 flex items-center justify-between shadow-lg z-30">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-semibold text-white">ZenML • MLflow • MLOps</span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 font-medium tracking-wider">ENGINEER</span>
                  </div>
                </div>

              </div>

              {/* Subtle Purple Brain Constellation Watermark in Bottom-Right Corner */}
              <div className="absolute -bottom-5 -right-5 sm:-bottom-7 sm:-right-7 z-20 pointer-events-none hidden sm:block">
                <BrainCircuitWatermark className="w-24 h-24 sm:w-28 sm:h-28 opacity-40 filter drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
