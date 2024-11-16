import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full px-4 mx-auto mt-2 bg-transparent rounded-full sm:bg-gray-700 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">

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

          {/* Desktop Menu (hidden on small screens) */}
          <div className="hidden sm:flex sm:flex-1 sm:justify-center">
            <div className="flex space-x-4">
              <Link
                to="about"
                smooth={true}
                duration={1250}
                className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md cursor-pointer hover:bg-gray-600 hover:text-white"
              >
                About
              </Link>
              <Link
                to="project"
                smooth={true}
                duration={1250}
                className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md cursor-pointer hover:bg-gray-600 hover:text-white"
              >
                Project
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={1250}
                className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md cursor-pointer hover:bg-gray-600 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-screen space-y-4 bg-gray-800 sm:hidden">
            {/* Close Button */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl text-gray-300 focus:outline-none"
              >
                X
              </button>
            </div>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-lg font-medium text-gray-300 rounded-md hover:bg-gray-600 hover:text-white"
            >
              About
            </Link>
            <Link
              to="project"
              smooth={true}
              duration={500}
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-lg font-medium text-gray-300 rounded-md hover:bg-gray-600 hover:text-white"
            >
              Project
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-lg font-medium text-gray-300 rounded-md hover:bg-gray-600 hover:text-white"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* Padding to prevent content being hidden by fixed navbar */}
      <div className="pt-20">{/* Main content goes here */}</div>
    </div>
  );
};

export default NavBar;
