import React, { useState } from "react";
import BrainCircuitWatermark from "./BrainCircuitWatermark";

export const BrainSkills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Grouped skills for the clean left side list
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      dotColor: "bg-cyan-400",
      skills: [
        { id: "python", name: "Python", slug: "python" },
        { id: "tensorflow", name: "TensorFlow", slug: "tensorflow" },
        { id: "pytorch", name: "PyTorch", slug: "pytorch" },
        { id: "sklearn", name: "Scikit-Learn", slug: "sklearn" },
      ],
    },
    {
      title: "MLOps & Cloud DevOps",
      dotColor: "bg-emerald-400",
      skills: [
        { id: "docker", name: "Docker", slug: "docker" },
        { id: "aws", name: "AWS Cloud", slug: "aws" },
        { id: "git", name: "Git / GitHub", slug: "git" },
        { id: "postman", name: "Postman", slug: "postman" },
      ],
    },
    {
      title: "Full-Stack & Mobile Development",
      dotColor: "bg-purple-400",
      skills: [
        { id: "flutter", name: "Flutter", slug: "flutter" },
        { id: "nodejs", name: "Node.js", slug: "nodejs" },
        { id: "react", name: "React.js", slug: "react" },
        { id: "dotnet", name: ".NET / C#", slug: "dotnet" },
      ],
    },
    {
      title: "Databases & Interfaces",
      dotColor: "bg-sky-400",
      skills: [
        { id: "postgres", name: "PostgreSQL", slug: "postgres" },
        { id: "mongodb", name: "MongoDB", slug: "mongodb" },
        { id: "html5", name: "HTML5 / CSS3", slug: "html" },
      ],
    },
  ];

  // 15 skill nodes precisely mapped inside the anatomical brain contour (viewBox 0 0 920 620)
  const brainNodes = [
    // 1. Frontal Lobe (AI & ML)
    { id: "python", name: "Python", slug: "python", cx: 220, cy: 280, r: 22 },
    { id: "tensorflow", name: "TensorFlow", slug: "tensorflow", cx: 260, cy: 165, r: 22 },
    { id: "pytorch", name: "PyTorch", slug: "pytorch", cx: 370, cy: 105, r: 22 },
    { id: "sklearn", name: "Scikit-Learn", slug: "sklearn", cx: 365, cy: 220, r: 22 },

    // 2. Parietal & Central Core (MLOps & Cloud Infrastructure)
    { id: "docker", name: "Docker", slug: "docker", cx: 490, cy: 90, r: 22 },
    { id: "aws", name: "AWS Cloud", slug: "aws", cx: 620, cy: 105, r: 22 },
    { id: "git", name: "Git / GitHub", slug: "git", cx: 490, cy: 220, r: 22 },
    { id: "postman", name: "Postman", slug: "postman", cx: 620, cy: 220, r: 22 },

    // 3. Occipital & Posterior (Full-Stack & APIs)
    { id: "nodejs", name: "Node.js", slug: "nodejs", cx: 730, cy: 175, r: 22 },
    { id: "react", name: "React.js", slug: "react", cx: 760, cy: 295, r: 22 },
    { id: "flutter", name: "Flutter", slug: "flutter", cx: 700, cy: 395, r: 22 },

    // 4. Temporal Lobe & Cerebellum (Databases & Frameworks)
    { id: "postgres", name: "PostgreSQL", slug: "postgres", cx: 270, cy: 375, r: 22 },
    { id: "mongodb", name: "MongoDB", slug: "mongodb", cx: 390, cy: 365, r: 22 },
    { id: "dotnet", name: ".NET / C#", slug: "dotnet", cx: 510, cy: 365, r: 22 },
    { id: "html5", name: "HTML5 / CSS3", slug: "html", cx: 630, cy: 480, r: 22 },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-transparent"
    >
      {/* Dynamic ambient gradient glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-purple-900/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-cyan-900/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Clean Categorized Skills List */}
          <div className="lg:col-span-5 flex flex-col justify-between self-stretch py-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>NEURAL ARCHITECTURE</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
                My Skills
              </h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
                An interconnected neural architecture of machine learning frameworks, MLOps orchestration, backend systems, and mobile toolsets.
              </p>

              {/* Categorized Skills Section */}
              <div className="space-y-6">
                {skillCategories.map((category) => (
                  <div key={category.title} className="space-y-2.5">
                    {/* Category Title */}
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                      <span
                        className={`w-2 h-2 rounded-full ${category.dotColor}`}
                      />
                      <span>{category.title}</span>
                    </div>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill) => {
                        const isHovered = hoveredSkill === skill.id;
                        return (
                          <div
                            key={skill.id}
                            onMouseEnter={() => setHoveredSkill(skill.id)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer border ${
                              isHovered
                                ? "bg-cyan-500/15 border-cyan-400 text-white shadow-lg shadow-cyan-950/50 scale-105"
                                : "bg-[#0b122a]/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-[#0f1738]"
                            }`}
                          >
                            <img
                              src={`https://skillicons.dev/icons?i=${skill.slug}`}
                              alt={skill.name}
                              className="w-4 h-4 object-contain"
                            />
                            <span>{skill.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle Watermark at bottom left */}
            <div className="mt-10 lg:mt-14 hidden sm:block">
              <BrainCircuitWatermark className="w-28 h-28 opacity-25" />
            </div>
          </div>

          {/* Right Column: Perfectly Aligned Anatomical Cyber-Brain */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[480px] sm:min-h-[580px]">
            <svg
              viewBox="0 0 920 620"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto max-h-[620px] select-none"
            >
              <defs>
                {/* Neon Glow Filter */}
                <filter
                  id="brainGlow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Anatomical Brain Silhouette Background Fill & Contour */}
              <path
                d="M 160 280 C 140 190, 200 110, 300 70 C 390 30, 560 30, 670 65 C 770 100, 835 180, 835 290 C 835 380, 775 450, 715 500 C 645 550, 565 520, 535 460 L 535 590 H 465 L 465 460 C 395 450, 325 430, 255 380 C 190 345, 155 325, 160 280 Z"
                fill="rgba(147, 51, 234, 0.05)"
                stroke="rgba(168, 85, 247, 0.28)"
                strokeWidth="1.8"
                strokeDasharray="4 6"
              />

              {/* Cerebellar & Brainstem Contour Folds */}
              <path
                d="M 535 460 C 585 470, 665 490, 715 450 C 765 400, 785 340, 835 290"
                stroke="rgba(168, 85, 247, 0.16)"
                strokeWidth="1.2"
                strokeDasharray="3 5"
              />
              <path
                d="M 465 460 C 415 460, 355 430, 305 400 C 255 375, 235 330, 220 280"
                stroke="rgba(168, 85, 247, 0.16)"
                strokeWidth="1.2"
                strokeDasharray="3 5"
              />

              {/* Base Static Neural Synaptic Pathways (Directly connecting all node vertices) */}
              <g
                stroke="#334155"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.55"
              >
                {/* 1. Cranial Outer Contour Track */}
                <line x1="220" y1="280" x2="260" y2="165" />
                <line x1="260" y1="165" x2="370" y2="105" />
                <line x1="370" y1="105" x2="490" y2="90" />
                <line x1="490" y1="90" x2="620" y2="105" />
                <line x1="620" y1="105" x2="730" y2="175" />
                <line x1="730" y1="175" x2="760" y2="295" />
                <line x1="760" y1="295" x2="700" y2="395" />
                <line x1="700" y1="395" x2="630" y2="480" />

                {/* 2. Inner Cortex Neural Mesh */}
                <line x1="260" y1="165" x2="365" y2="220" />
                <line x1="370" y1="105" x2="365" y2="220" />
                <line x1="220" y1="280" x2="365" y2="220" />
                <line x1="490" y1="90" x2="490" y2="220" />
                <line x1="365" y1="220" x2="490" y2="220" />
                <line x1="490" y1="220" x2="620" y2="220" />
                <line x1="620" y1="105" x2="620" y2="220" />
                <line x1="620" y1="220" x2="730" y2="175" />
                <line x1="620" y1="220" x2="760" y2="295" />
                <line x1="620" y1="220" x2="700" y2="395" />

                {/* 3. Temporal Lobe & Memory Hub */}
                <line x1="220" y1="280" x2="270" y2="375" />
                <line x1="365" y1="220" x2="270" y2="375" />
                <line x1="270" y1="375" x2="390" y2="365" />
                <line x1="365" y1="220" x2="390" y2="365" />
                <line x1="490" y1="220" x2="390" y2="365" />
                <line x1="390" y1="365" x2="510" y2="365" />
                <line x1="490" y1="220" x2="510" y2="365" />
                <line x1="620" y1="220" x2="510" y2="365" />
                <line x1="510" y1="365" x2="700" y2="395" />
                <line x1="510" y1="365" x2="630" y2="480" />

                {/* 4. Descending Brainstem Lines */}
                <path d="M 390 365 L 465 450 L 465 570" />
                <path d="M 510 365 L 535 450 L 535 570" />
              </g>

              {/* Smooth Decent Synaptic Laser Pulses */}
              {/* Primary Electric Cyan Pathway (Cranial flow) */}
              <path
                d="M 220 280 L 260 165 L 370 105 L 490 90 L 620 105 L 730 175 L 760 295 L 700 395 L 630 480"
                stroke="#00d2ff"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="subtle-pulse-1"
                opacity="0.85"
                filter="url(#brainGlow)"
              />

              {/* Secondary Electric Purple Pathway (Core loop) */}
              <path
                d="M 260 165 L 365 220 L 490 220 L 620 220 L 510 365 L 390 365 L 270 375 L 220 280"
                stroke="#c084fc"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="subtle-pulse-2"
                opacity="0.85"
                filter="url(#brainGlow)"
              />

              {/* 15 Tech Skill Cells on the Brain Constellation */}
              {brainNodes.map((node) => {
                const isHovered = hoveredSkill === node.id;

                return (
                  <g
                    key={node.id}
                    className="cursor-pointer transition-transform duration-300"
                    onMouseEnter={() => setHoveredSkill(node.id)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Active Hover Glow Ring */}
                    {isHovered && (
                      <circle
                        cx={node.cx}
                        cy={node.cy}
                        r={node.r + 7}
                        fill="rgba(0, 210, 255, 0.25)"
                        stroke="#00d2ff"
                        strokeWidth="1.5"
                      />
                    )}

                    {/* Main Neuron Cell Body */}
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r={node.r}
                      fill="#090e21"
                      stroke={isHovered ? "#00d2ff" : "#a855f7"}
                      strokeWidth={isHovered ? "2.5" : "1.8"}
                      className="transition-colors duration-200"
                    />

                    {/* Skill Tech Icon Inside Cell */}
                    <image
                      href={`https://skillicons.dev/icons?i=${node.slug}`}
                      x={node.cx - (node.r - 5)}
                      y={node.cy - (node.r - 5)}
                      width={(node.r - 5) * 2}
                      height={(node.r - 5) * 2}
                      className="pointer-events-none rounded-lg"
                    />

                    {/* Clean Tooltip on Hover */}
                    {isHovered && (
                      <g className="pointer-events-none">
                        <rect
                          x={node.cx - (node.name.length * 4 + 14)}
                          y={node.cy - (node.r + 32)}
                          width={node.name.length * 8 + 28}
                          height="24"
                          rx="6"
                          fill="#090e21"
                          stroke="#00d2ff"
                          strokeWidth="1.2"
                          filter="drop-shadow(0 4px 12px rgba(0, 210, 255, 0.3))"
                        />
                        <text
                          x={node.cx}
                          y={node.cy - (node.r + 16)}
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize="11"
                          fontWeight="600"
                          className="font-mono"
                        >
                          {node.name}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrainSkills;
