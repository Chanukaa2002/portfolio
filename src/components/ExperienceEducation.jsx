import React from "react";
import { experienceData, educationData } from "../data/portfolioData";

export const ExperienceEducation = () => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-12 bg-[#070b19] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                Experience
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Professional engineering milestones and industry involvement.
              </p>
            </div>

            <div className="relative pl-8 space-y-8 border-l-2 border-slate-800">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#070b19] border-2 border-cyan-400 flex items-center justify-center group-hover:border-cyan-300 group-hover:shadow-[0_0_12px_#38bdf8] transition-all">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>

                  <div className="p-6 sm:p-7 rounded-2xl bg-[#090e21] border border-slate-800/80 hover:border-slate-700 transition-all duration-300 shadow-lg">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-800/50 rounded-full inline-block">
                        {exp.timePeriod}
                      </span>
                      <span className="text-xs font-mono text-slate-400">Internship • Remote</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-sm font-semibold text-purple-300 mb-4">
                      {exp.position}
                    </p>
                    
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Bullet Highlights */}
                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="space-y-2 pt-2 border-t border-slate-800/60">
                        {exp.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <span className="text-cyan-400 text-base leading-none select-none">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                Education
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Academic foundations in software engineering and scientific research.
              </p>
            </div>

            <div className="relative pl-8 space-y-8 border-l-2 border-slate-800">
              {educationData.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#070b19] border-2 border-purple-400 flex items-center justify-center group-hover:border-purple-300 group-hover:shadow-[0_0_12px_#c084fc] transition-all">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                  </div>

                  <div className="p-6 sm:p-7 rounded-2xl bg-[#090e21] border border-slate-800/80 hover:border-slate-700 transition-all duration-300 shadow-lg">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-mono font-medium text-purple-300 bg-purple-950/60 border border-purple-800/50 rounded-full inline-block">
                        {edu.period}
                      </span>
                      {edu.grade && (
                        <span className="px-2.5 py-0.5 text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 rounded-md">
                          {edu.grade}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-300 mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    {/* Associated Skills */}
                    {edu.skills && edu.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                        {edu.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 text-[11px] font-mono text-slate-300 bg-[#0c1432] border border-slate-800 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
