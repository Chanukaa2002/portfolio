import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar with Glass Effect */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full px-4 mx-auto mt-2 border rounded-full shadow-lg backdrop-blur-md bg-white/5 border-white/20 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
        <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
          {/* Mobile Menu Toggle (Hamburger) */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:flex-1 sm:justify-center">
            <div className="flex space-x-4">
              <Link
                to="about"
                smooth={true}
                duration={1250}
                className="px-3 py-2 text-sm font-bold text-gray-300 rounded-md cursor-pointer hover:bg-lime-400 hover:text-black "
              >
                About
              </Link>
              <Link
                to="project"
                smooth={true}
                duration={1250}
                className="px-3 py-2 text-sm font-bold text-gray-300 rounded-md cursor-pointer hover:bg-lime-400 hover:text-black"
              >
                Project
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={1250}
                className="px-3 py-2 text-sm font-bold text-gray-300 rounded-md cursor-pointer hover:bg-lime-400 hover:text-black"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Glass Effect */}
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-screen space-y-4 border shadow-lg backdrop-blur-md bg-white/5 border-white/20 sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute text-xl text-gray-300 focus:outline-none top-4 right-4"
            >
              X
            </button>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-lg font-bold text-gray-300 rounded-md hover:bg-lime-400 hover:text-black"
            >
              About
            </Link>
            <Link
              to="project"
              smooth={true}
              duration={500}
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-lg font-bold text-gray-300 rounded-md hover:bg-lime-400 hover:text-black"
            >
              Project
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-lg font-bold text-gray-300 rounded-md hover:bg-lime-400 hover:text-black"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;