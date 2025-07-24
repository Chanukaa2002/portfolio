import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const About = () => {
  const [activeSection, setActiveSection] = useState("Educations");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skillsList = isMobile ? (
    <Swiper
      slidesPerView={1}
      spaceBetween={9}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {[...Array(Math.ceil(skills.length / 6))].map((_, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 gap-4 p-4">
            {skills
              .slice(slideIndex * 6, (slideIndex + 1) * 6)
              .map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center p-2 space-x-1 text-sm border rounded-lg shadow-lg backdrop-blur-md bg-white/5 border-white/20"
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${skill.icon}`}
                    alt={skill.name}
                    className="w-4 h-4"
                  />
                  <span className="pl-4 font-bold text-white">
                    {skill.name}
                  </span>
                </div>
              ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <div className="grid grid-cols-4 gap-4 p-4">
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
    <div className="flex flex-col items-center space-y-6">
      <ul className="mb-6 text-base text-left list-disc sm:text-xl">
        {/* <li>
          <a
            href="https://www.coursera.org/account/accomplishments/verify/BFMDYIRJC63F"
            className="text-transparent bg-gradient-to-r from-lime-400 via-lime-300 to-lime-200 bg-clip-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Supervised Machine Learning
          </a>
          <span className="ml-2">by DeepLearning.AI</span>
        </li>
        <li>
          <a
            href="https://www.coursera.org/account/accomplishments/verify/E0BM75OUC2LY"
            className="text-transparent bg-gradient-to-r from-lime-400 via-lime-300 to-lime-200 bg-clip-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linear Algebra for ML
          </a>
          <span className="ml-2">by DeepLearning.AI</span>
        </li>
        <li>
          <a
            href="https://open.uom.lk/lms/mod/customcert/verify_certificate.php?contextid=4776&code=kcsp4kXOAk&qrcode=1"
            className="text-transparent bg-gradient-to-r from-lime-400 via-lime-300 to-lime-200 bg-clip-text"
            target="_blank"
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
          >
            API Fundamentals Student Expert
          </a>
          <span className="ml-2">by Postman</span>
        </li>
        <li>
          <a
            href="https://www.credly.com/badges/c40e216b-918d-4feb-b9e4-db33c9175cca/linked_in?t=szw33z"
            className="text-transparent bg-gradient-to-r from-lime-400 via-lime-300 to-lime-200 bg-clip-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Emerging Talent Community Member
          </a>
          <span className="ml-2">by AWS Educte</span>
        </li>
        <li>
          <a
            href="https://www.credly.com/badges/c40e216b-918d-4feb-b9e4-db33c9175cca/linked_in?t=szw33z"
            className="text-transparent bg-gradient-to-r from-lime-400 via-lime-300 to-lime-200 bg-clip-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Machine Learning Foundations
          </a>
          <span className="ml-2">by AWS Educate</span>
        </li>
        <li>
          <a
            href="https://badgr.com/public/assertions/67b04377157e9b171a2b1617?identity__email=mchanuka72@gmail.com"
            className="text-transparent bg-gradient-to-r from-lime-400 via-lime-300 to-lime-200 bg-clip-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            GenAI 101 with Pieces
          </a>
          <span className="ml-2">by Pieces</span>
        </li> */}
      </ul>

      {/* View More Button */}
      <Link
        to="/certificates"
        className="inline-flex items-center px-6 py-3 text-sm font-medium text-black transition-colors duration-300 rounded-lg shadow-lg bg-lime-400 hover:bg-lime-300"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        View All Certificates
      </Link>
      <Link
        to="/badges"
        className="inline-flex items-center px-6 py-3 text-sm font-medium text-black transition-colors duration-300 rounded-lg shadow-lg bg-lime-400 hover:bg-lime-300"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
        View All Badges
      </Link>
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
                digital experiences, I'm constantly learning and honing my
                skills in backend technologies, database management, and API
                design. Whether it's optimizing database queries or designing
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
