import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center text-lg text-gray-400 pb-7">
      <p className="text-center">
        © {currentYear} Made with ❤️ by Chanuka Dilshan.<br /> All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;