import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll

const NavBar = () => {
  return (
    <div className="pt-7 pb-28">
      <nav className="fixed top-0 left-0 right-0 z-50 w-4/12 mx-auto mt-2 bg-gray-700 rounded-full">
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex items-center justify-center flex-1 sm:items-stretch">
              <div className="flex items-center flex-shrink-0"></div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    to="about" // Match the target section id
                    smooth={true}
                    duration={1250} // Adjust scroll duration
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md cursor-pointer hover:bg-gray-700 hover:text-white"
                  >
                    About
                  </Link>
                  <Link
                    to="project"
                    smooth={true}
                    duration={1250}
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md cursor-pointer hover:bg-gray-700 hover:text-white"
                  >
                    Project
                  </Link>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={1250}
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md cursor-pointer hover:bg-gray-700 hover:text-white"
                  >
                    Contact
                  </Link>
                  <a
                    href="https://medium.com/@Chanuka72"
                    target="_blank"
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="about"
              smooth={true}
              duration={50}
              className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md"
            >
              Dashboard
            </Link>
            <Link
              to="team"
              smooth={true}
              duration={50}
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Team
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Projects
            </Link>
            <Link
              to="calendar"
              smooth={true}
              duration={50}
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </Link>
          </div>
        </div>
      </nav>

      {/* Additional padding to prevent content being hidden by fixed navbar */}
      <div className="pt-20">{/* Main content goes here */}</div>
    </div>
  );
};

export default NavBar;
