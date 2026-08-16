import React, { useState } from "react";
import { allProjects } from "../data/portfolioData";

export const ProjectsSection = ({ onOpenAllProjects }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeProject = allProjects[selectedIndex] || allProjects[0];

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-12 bg-[#070b19] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[650px] h-[650px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header (Matching Screenshot 4) */}
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl">
            Check out some of my engineering & machine learning projects, meticulously crafted with passion and dedication.
          </p>
        </div>

        {/* Main Grid: Left Selector & Details + Right Large Showcase (Matching Screenshot 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          
          {/* Left Column: Mini Thumbnails Selector & Selected Project Info */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Horizontal Mini Thumbnail Carousel / Selector */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
              {allProjects.slice(0, 4).map((project, idx) => {
                const isSelected = selectedIndex === idx;
                return (
                  <button
                    key={project.id}
                    onClick={() => setSelectedIndex(idx)}
                    className={`relative flex-shrink-0 w-24 sm:w-28 h-16 sm:h-20 rounded-lg overflow-hidden transition-all duration-300 border ${
                      isSelected
                        ? "border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)] scale-105"
                        : "border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-1">
                      <span className="text-[10px] font-medium text-white truncate w-full text-left">
                        {project.shortTitle || project.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Neon Connecting Circuit Trace (Left to Right Showcase) */}
            <div className="relative hidden lg:block h-12 w-full">
              <svg className="w-full h-full overflow-visible" fill="none">
                <path
                  d="M 50 0 V 25 Q 50 40 70 40 H 500"
                  stroke="#a855f7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="circuit-line"
                  opacity="0.85"
                />
                <circle cx="50" cy="0" r="3.5" fill="#c084fc" />
              </svg>
            </div>

            {/* Selected Project Detailed Information (Matching Screenshot 4) */}
            <div className="space-y-4 pt-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activeProject.title}
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeProject.description}
              </p>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1 text-xs font-medium text-blue-300 bg-blue-950/60 border border-blue-800/60 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Action Links */}
              <div className="flex items-center gap-4 pt-4">
                {activeProject.liveLink && (
                  <a
                    href={activeProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-900/30 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
                {activeProject.githubLink && (
                  <a
                    href={activeProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    Source Code
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Large Rounded Project Showcase Display (Matching Screenshot 4) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-[#0a0f24] border border-purple-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(168,85,247,0.25)] group">
              
              {/* Showcase Image / Media */}
              <div className="w-full aspect-[16/11] overflow-hidden relative">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/20 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
          </div>

        </div>

        {/* Button to View All Projects */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenAllProjects}
            className="px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-900/40 hover:scale-105 transition-all duration-300"
          >
            Explore All Projects ({allProjects.length})
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
