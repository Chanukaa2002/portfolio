import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="text-xl text-center text-gray-400 pb-7">
      <p>
        © {currentYear} Made with ❤️ by Chanuka Dilshan.<br/> All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
