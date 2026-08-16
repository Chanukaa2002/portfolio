import React from "react";

export const BrainCircuitWatermark = ({ className = "w-32 h-32 opacity-25" }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
  >
    {/* Interconnected Neural Brain Constellation */}
    <g stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1.5">
      {/* Outer Contour */}
      <path d="M40 90 C40 60, 60 40, 90 40 C110 40, 120 50, 130 50 C145 50, 160 65, 160 85 C160 100, 150 115, 155 130 C160 145, 145 160, 130 160 C115 160, 110 150, 95 155 C80 160, 65 155, 55 140 C45 125, 40 110, 40 90 Z" fill="none" />
      
      {/* Internal Connections */}
      <line x1="40" y1="90" x2="70" y2="75" />
      <line x1="70" y1="75" x2="90" y2="40" />
      <line x1="70" y1="75" x2="105" y2="80" />
      <line x1="90" y1="40" x2="130" y2="50" />
      <line x1="130" y1="50" x2="105" y2="80" />
      <line x1="130" y1="50" x2="160" y2="85" />
      <line x1="105" y1="80" x2="140" y2="100" />
      <line x1="160" y1="85" x2="140" y2="100" />
      <line x1="140" y1="100" x2="155" y2="130" />
      <line x1="105" y1="80" x2="95" y2="115" />
      <line x1="70" y1="75" x2="55" y2="110" />
      <line x1="55" y1="110" x2="40" y2="90" />
      <line x1="55" y1="110" x2="95" y2="115" />
      <line x1="55" y1="110" x2="55" y2="140" />
      <line x1="95" y1="115" x2="80" y2="145" />
      <line x1="55" y1="140" x2="80" y2="145" />
      <line x1="80" y1="145" x2="115" y2="140" />
      <line x1="95" y1="115" x2="115" y2="140" />
      <line x1="140" y1="100" x2="125" y2="120" />
      <line x1="125" y1="120" x2="155" y2="130" />
      <line x1="125" y1="120" x2="130" y2="160" />
      <line x1="115" y1="140" x2="130" y2="160" />
    </g>

    {/* Downward Stem Connectors */}
    <g stroke="rgba(147, 51, 234, 0.4)" strokeWidth="1.5">
      <path d="M80 145 V175 H70" />
      <path d="M95 155 V185" />
      <path d="M115 140 V175 H125" />
    </g>

    {/* Neural Nodes */}
    <g fill="rgba(168, 85, 247, 0.9)">
      <circle cx="40" cy="90" r="3.5" />
      <circle cx="70" cy="75" r="4" />
      <circle cx="90" cy="40" r="3.5" />
      <circle cx="130" cy="50" r="4" />
      <circle cx="160" cy="85" r="4.5" />
      <circle cx="105" cy="80" r="5" fill="#c084fc" />
      <circle cx="140" cy="100" r="4" />
      <circle cx="155" cy="130" r="3.5" />
      <circle cx="130" cy="160" r="4" />
      <circle cx="125" cy="120" r="3.5" />
      <circle cx="115" cy="140" r="4" />
      <circle cx="95" cy="115" r="4.5" />
      <circle cx="80" cy="145" r="3.5" />
      <circle cx="55" cy="140" r="4" />
      <circle cx="55" cy="110" r="3.5" />
      <circle cx="70" cy="175" r="2.5" />
      <circle cx="95" cy="185" r="3" />
      <circle cx="125" cy="175" r="2.5" />
    </g>
  </svg>
);

export default BrainCircuitWatermark;
