import React, { useState } from "react";
import { allProjects } from "../data/portfolioData";

export const AllProjectsModal = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  if (!isOpen) return null;

  const categories = [
    "All",
    "Production ML",
    "ML Fundamentals",
    "Full-Stack",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[90vh] h-auto flex flex-col rounded-3xl bg-[#090e21] border border-purple-500/40 shadow-2xl shadow-purple-950/80 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0b122a] shrink-0">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              All Projects ({allProjects.length})
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Explore machine learning architectures, backend systems, and full-stack projects
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 transition-colors rounded-full text-slate-400 hover:text-white hover:bg-slate-800"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 px-6 py-2.5 border-b border-slate-800/80 bg-[#070b19] overflow-x-auto shrink-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-purple-600 text-white shadow-glow"
                  : "bg-slate-800/60 text-slate-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Height Scrollable Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 sm:p-6 overflow-y-auto min-h-0 auto-rows-max scrollbar-thin">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col h-full rounded-2xl overflow-hidden bg-[#0c1432]/90 border border-slate-800/90 hover:border-purple-500/60 shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Image Container */}
              <div className="relative w-full h-56 shrink-0 bg-[#050814] overflow-hidden flex items-center justify-center p-3 border-b border-slate-800/60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain w-full h-full transition-transform duration-500 rounded-lg group-hover:scale-105"
                />

                {/* Category Tag */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-black/80 text-cyan-300 backdrop-blur-md border border-slate-700 shadow-md">
                  {project.category}
                </div>
              </div>

              {/* Card Details & Actions */}
              <div className="p-5 bg-[#0a0f26] flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <h4 className="text-lg font-bold leading-snug text-white transition-colors line-clamp-1 group-hover:text-cyan-300">
                    {project.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-300 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges & Action Links */}
                <div className="pt-3 space-y-3 border-t border-slate-800/70">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[10px] font-medium text-purple-300 bg-purple-950/60 border border-purple-800/40 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                      >
                        Live Demo &rarr;
                      </a>
                    ) : (
                      <span className="text-xs text-slate-500">Demo N/A</span>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-white"
                      >
                        GitHub &rarr;
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjectsModal;
