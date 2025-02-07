import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-lg text-gray-400 center text- pb-7">
      <p>
        © {currentYear} Made with ❤️ by Chanuka Dilshan.<br/> All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
