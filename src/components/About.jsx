import React, { useState } from "react";
import ScrollRevealComponent from "../utils/ScrollRevealComponent";

const About = () => {
  // Set default active section to "Educations"
  const [activeSection, setActiveSection] = useState("Educations");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const skills = [
    { name: "Node.js", icon: "nodejs" },
    { name: "Express", icon: "express" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "PHP", icon: "php" },
    { name: "MySQL", icon: "mysql" },
    { name: ".NET", icon: "dotnet" },
    { name: "REST API", icon: "htmx" },
    { name: "Jest", icon: "jest" },
    { name: "Postman", icon: "postman" },
    { name: "Docker", icon: "docker" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "JavaScript", icon: "javascript" },
    { name: "HTML5", icon: "html" },
    { name: "CSS3", icon: "css" },
    { name: "React", icon: "react" },
  ];
  // Lists for each section
  const skillsList = (
    <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center p-2 space-x-1 text-sm border rounded-lg shadow-lg backdrop-blur-md bg-white/5 border-white/20"
        >
          <img
            src={`https://skillicons.dev/icons?i=${skill.icon}`}
            alt={skill.name}
            className="w-4 h-4"
          />
          <span className="pl-4 font-bold text-white">{skill.name}</span>
        </div>
      ))}
    </div>
  );

  const educationsList = (
    <div className="flex justify-center">
      <ul className="text-base text-left list-disc sm:text-xl">
        <li>
          Higher National Diploma in Software Engineering
          <div className="text-sm text-gray-400 sm:text-base">
            <span>(Reading)</span>
            <br />
            <span>National Institute of Business Management - 2024</span>
          </div>
        </li>
        <li>
          Diploma in Software Engineering
          <div className="text-sm text-gray-400 sm:text-base">
            <span>GPA: 4.00</span>
            <br />
            <span>National Institute of Business Management - 2023</span>
          </div>
        </li>
      </ul>
    </div>
  );

  const certificationsList = (
    <div className="flex justify-center">
      <ul className="text-base text-left list-disc sm:text-xl">
        <li>
          <a
            href="https://open.uom.lk/lms/mod/customcert/verify_certificate.php?contextid=4776&code=kcsp4kXOAk&qrcode=1"
            className="text-transparent bg-gradient-to-r from-lime-400 via-lime-300 to-lime-200 bg-clip-text"
            target="_blank"
          >
            Python for Beginner
          </a>
          <span className="ml-2">by CODL University of Moratuwa</span>
        </li>
        <li>
          <a
            href="https://open.uom.lk/lms/mod/customcert/verify_certificate.php?code=4Qk4sVWQpp"
            className="text-transparent bg-gradient-to-r from-lime-400 via-lime-300 to-lime-200 bg-clip-text"
            target="_blank"
          >
            Frontend Web Development
          </a>
          <span className="ml-2">by CODL University of Moratuwa</span>
        </li>
        <li>
          <a
            href="https://open.uom.lk/lms/mod/customcert/verify_certificate.php?code=ooRriETAC1"
            className="text-transparent bg-gradient-to-r from-lime-400 via-lime-300 to-lime-200 bg-clip-text"
            target="_blank"
          >
            Web Design for Beginner
          </a>
          <span className="ml-2">by CODL University of Moratuwa</span>
        </li>
        <li>
          <a
            href="https://badgr.com/public/assertions/RxZSosLjRKK2jkcPuRJt7g?identity__email=mchanuka72@gmail.com"
            className="text-transparent bg-gradient-to-r from-lime-400 via-lime-300 to-lime-200 bg-clip-text"
            target="_blank"
          >
            API Fundamentals Student Expert
          </a>
          <span className="ml-2">by Postman</span>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <section id="about" className="h-screen">
        <div className="pb-10 text-center text-white pt-28 ">
          <p className="pb-3 text-3xl font-bold sm:text-4xl">About Me</p>
          <div className="flex items-center justify-center ">
            <div className="w-11/12 text-center sm:w-2/3">
              <p className="text-base text-justify sm:text-xl">
                Hello! I'm a 22-year-old backend developer, a current
                undergraduate at the National Institute of Business Management
                (NIBM) and Postman Student Expert. Passionate about building
                efficient, scalable systems, I specialize in backend development
                and enjoy tackling complex challenges in server-side
                programming. My studies at NIBM have equipped me with a solid
                foundation in software development, and my hands-on experience
                in the field has given me the skills to turn concepts into
                functional, high-performing applications.
                <br />
                <br /> Driven by curiosity and a desire to create seamless
                digital experiences, I’m constantly learning and honing my
                skills in backend technologies, database management, and API
                design. Whether it’s optimizing database queries or designing
                robust APIs, I am focused on building solutions that are both
                innovative and practical.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full px-4 pt-10 md:w-1/2">
              <div className="p-2 border rounded-lg shadow-lg backdrop-blur-sm bg-white/5 border-white/20">
                <div className="flex justify-center pt-5 space-x-6 text-lg sm:space-x-10 sm:text-2xl">
                  {["Educations", "Skills", "Certifications"].map(
                    (section, index) => (
                      <div
                        key={index}
                        onClick={() => handleSectionClick(section)}
                        className={`relative overflow-hidden cursor-pointer font-bold group px-4 py-2 rounded-lg transition-colors duration-300 ${
                          activeSection === section
                            ? "bg-lime-400 text-black"
                            : "text-white"
                        }`}
                      >
                        {section}
                      </div>
                    )
                  )}
                </div>

                {/* Conditional Rendering of the Lists */}
                {activeSection === "Skills" && (
                  <div className="pt-5 sm:left-1/3 min-h-[200px]">
                    {skillsList}
                  </div>
                )}
                {activeSection === "Educations" && (
                  <div className="pt-5 sm:left-1/3 min-h-[200px]">
                    {educationsList}
                  </div>
                )}
                {activeSection === "Certifications" && (
                  <div className="pt-5 sm:left-1/3 min-h-[200px]">
                    {certificationsList}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;