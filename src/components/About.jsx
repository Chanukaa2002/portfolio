import React, { useState } from "react";

const About = () => {
  // Set default active section to "Skills"
  const [activeSection, setActiveSection] = useState("Skills");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  // Lists for each section
  const skillsList = (
    <div className="flex justify-center space-x-10 text-left">
      <ul className="pl-6 text-xl list-disc">
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>SQL</li>
        <li>Postman</li>
        <li>PHP</li>
      </ul>
      <ul className="pl-6 text-xl list-disc">
        <li>.NET</li>
        <li>Docker</li>
        <li>React JS</li>
        <li>API Development</li>
        <li>Git and GitHub</li>
      </ul>
    </div>
  );

  const educationsList = (
    <ul className="pl-6 mx-auto text-xl text-left list-disc">
      <li>
        Higher National Diploma in Software Engineering
        <div className="text-base text-gray-400 ">
          <span>(Reading)</span>
          <br />
          <span>National Institute of Business Management - 2024</span>
        </div>
      </li>
      <li>
        Diploma in Software Engineering
        <div className="text-base text-gray-400 ">
          <span>GPA:4.00</span>
          <br />
          <span>National Institute of Business Management - 2023</span>
        </div>
      </li>
    </ul>
  );

  const certificationsList = (
    <ul className="pl-6 mx-auto text-xl text-left list-disc">
      <li>
        <a
          href="https://open.uom.lk/lms/mod/customcert/verify_certificate.php?contextid=4776&code=kcsp4kXOAk&qrcode=1"
          className="text-blue-500" target="_blank"
        >
          Python for Beginner
        </a>
        <span className="ml-2">by CODL University of Moratuwa</span>
      </li>
      <li>
        <a
          href="https://open.uom.lk/lms/mod/customcert/verify_certificate.php?code=4Qk4sVWQpp"
          className="text-blue-500" target="_blank"
        >
          Frontend Web Development
        </a>
        <span className="ml-2">by CODL University of Moratuwa</span>
      </li>
      <li>
        <a
          href="https://open.uom.lk/lms/mod/customcert/verify_certificate.php?code=ooRriETAC1"
          className="text-blue-500" target="_blank"
        >
          Web Design for Beginner
        </a>
        <span className="ml-2">by CODL University of Moratuwa</span>
      </li>
      <li>
        <a
          href="https://badgr.com/public/assertions/RxZSosLjRKK2jkcPuRJt7g?identity__email=mchanuka72@gmail.com"
          className="text-blue-500"
          target="_blank"
        >
          API Fundamentals Student Expert
        </a>
        <span className="ml-2">by Postman</span>
      </li>
    </ul>
  );

  return (
    <>
      <div className="pt-56 pb-10 text-center text-white">
        <p className="pb-3 text-4xl font-bold">About Me</p>
        <div className="flex items-center justify-center">
          <div className="w-2/3 text-center">
            <p className="text-xl text-justify">
              Hello! I'm a 22-year-old backend developer and a current
              undergraduate at the National Institute of Business Management
              (NIBM). Passionate about building efficient, scalable systems, I
              specialize in backend development and enjoy tackling complex
              challenges in server-side programming. My studies at NIBM have
              equipped me with a solid foundation in software development, and
              my hands-on experience in the field has given me the skills to
              turn concepts into functional, high-performing applications.
              <br />
              <br /> Driven by curiosity and a desire to create seamless digital
              experiences, I’m constantly learning and honing my skills in
              backend technologies, database management, and API design. Whether
              it’s optimizing database queries or designing robust APIs, I am
              focused on building solutions that are both innovative and
              practical.
            </p>
          </div>
        </div>
        <div className="flex justify-center pt-5 space-x-10 text-2xl">
          {["Skills", "Educations", "Certifications"].map((section, index) => (
            <div
              key={index}
              onClick={() => handleSectionClick(section)}
              className="relative overflow-hidden cursor-pointer group"
            >
              {section}
              <span
                className={`absolute bottom-0 left-0 w-full h-1.5 bg-blue-500 origin-left transform transition-transform duration-300 ease-in-out ${
                  activeSection === section ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </div>
          ))}
        </div>

        {/* Conditional Rendering of the Lists */}
        {activeSection === "Skills" && (
          <div className="absolute pt-5 left-1/3 min-h-[200px]">
            {skillsList}
          </div>
        )}
        {activeSection === "Educations" && (
          <div className="absolute pt-5 left-1/3 min-h-[200px]">
            {educationsList}
          </div>
        )}
        {activeSection === "Certifications" && (
          <div className="absolute pt-5 left-1/3 min-h-[200px]">
            {certificationsList}
          </div>
        )}
      </div>
    </>
  );
};

export default About;
