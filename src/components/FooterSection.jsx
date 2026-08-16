import React from "react";
import { personalInfo } from "../data/portfolioData";

export const FooterSection = () => {
  return (
    <footer className="relative py-14 px-4 sm:px-6 lg:px-12 bg-[#050814] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand Logo & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            {personalInfo.brandName}
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          {personalInfo.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-400 hover:text-cyan-300 transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
