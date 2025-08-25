import React, { useState, useEffect, useRef } from "react";
import dp from "./assets/dp.jpg";

const GithubIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const ExternalLinkIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const BackIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const EducationIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c0 1.66 4 3 10 0v-5"></path>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const MailIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const MediumIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.92 12A3.7 3.7 0 0117.25 15.7V8.3a3.7 3.7 0 013.67 3.7zM24 12a1.15 1.15 0 01-1.15 1.15v-2.3A1.15 1.15 0 0124 12z"></path>
  </svg>
);

// --- UPDATED SCROLL TO TOP ICON ---
const ScrollToTopIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

// --- DATA ---
const allProjects = [
  {
    title: "Laptop Price Prediction",
    description:
      "A Machine Learning based web application, that create for the predict the Laptop price with Regrasion Algorithm ",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1753446974/pred_yk4tyq.png",
    liveLink:
      "https://laptop-price-prediction-c3hs.onrender.comhttps://laptop-price-prediction-c3hs.onrender.com/",
    githubLink: "https://github.com/Chanukaa2002/Laptop-price-prediction",
    tags: ["Python", "Flash", "Jupiter Noteboo"],
  },
  {
    title: "EATRO - Mobile App",
    description:
      "A mobile Application created for the IOT with connect with Hardware components, to users can track and plan the meals they eat",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1753447492/mil_ofrj4m.png",
    githubLink: "https://github.com/Chanukaa2002/IOT-Mobile",
    tags: ["Flutter", "Firebase", "Gemini API"],
  },
  {
    title: "Twitter Backend Clone",
    description: "A Backend API for the Twitter application with MVP",
    image: "https://placehold.co/600x400/1F2937/10B981?text=Twitter Backend",
    githubLink: "https://github.com/Chanukaa2002/twitter_clone",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Postman"],
  },
  {
    title: "Update soon",
    description: ";)",
    image: "https://placehold.co/600x400/1F2937/F59E0B?text=UPDATE_SOON!",
    tags: [";)"],
  },
];

// --- HOOKS ---

// Custom hook for scroll-triggered animations
const useScrollAnimation = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animationClasses = `transition-all duration-1000 ease-in-out ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`;

  return [ref, animationClasses];
};

// Typewriter Effect Hook
const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);
    return () => clearInterval(typingInterval);
  }, [text, speed]);
  return displayText;
};

// --- COMPONENTS ---

const BackgroundStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();

    const stars = [];
    const numStars = 500;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2,
        vx: (Math.random() - 0.5) / 4,
        vy: (Math.random() - 0.5) / 4,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.fillStyle = "#0b1120";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx;
        if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setCanvasDimensions();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 -z-20"></canvas>;
};

const CodeWindow = ({ children }) => (
  <div className="overflow-hidden border rounded-lg shadow-xl bg-gray-800/50 backdrop-blur-sm border-blue-500/30">
    <div className="flex items-center px-4 py-2 bg-gray-900/80">
      <div className="w-3 h-3 mr-2 bg-red-500 rounded-full"></div>
      <div className="w-3 h-3 mr-2 bg-yellow-500 rounded-full"></div>
      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
    </div>
    <div className="p-6 text-gray-300 md:p-8">{children}</div>
  </div>
);

// --- UPDATED SCROLL TO TOP BUTTON ---
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Show button when user scrolls down more than 300px
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ScrollToTopIcon className="w-6 h-6" />
    </button>
  );
};

// --- SECTIONS / PAGES ---

const Hero = () => (
  <section id="home" className="flex items-center justify-center min-h-screen">
    <div className="container px-4 mx-auto">
      <div className="grid items-center gap-16 md:grid-cols-2">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-light text-gray-300 md:text-4xl">
            Hi, I am
          </h2>
          <h1 className="mt-2 mb-4 text-5xl font-bold text-white md:text-7xl">
            Chanuka Dilshan
          </h1>
          <p className="mb-8 text-lg text-blue-300 md:text-xl">
            A passionate Backend and Machine Learning Engineer, dedicated to
            building amazing Backend systems and ML Models.
          </p>
          <div className="flex justify-center gap-4 md:justify-start">
            <a
              href="https://drive.google.com/file/d/1y6y7TEes8a22vZRhfThefzacelFEw4pm/view?usp=drive_link"
              className="px-6 py-3 font-bold text-white transition-transform transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105"
            >
              Download CV
            </a>
            <a
              href="https://github.com/Chanukaa2002"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 font-bold text-white transition-transform transform bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 hover:scale-105"
            >
              GitHub Projects
            </a>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute rounded-full w-72 h-72 md:w-96 md:h-96 bg-purple-600/30 blur-3xl"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 transform rounded-full bg-gradient-to-br from-purple-600 to-blue-500 -rotate-12"></div>
            <img
              src={dp}
              alt="Chanuka Dilshan"
              className="relative object-cover w-full h-full border-4 border-gray-800 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => {
  const [ref, animationClasses] = useScrollAnimation();
  const aboutText = useTypewriter(
    "I'm a 23-year-old aspiring Machine Learning Engineer with a strong background in Backend Development. Currently pursuing my degree at NIBM and certified as a Postman Student Expert, I started my journey building scalable APIs, databases, and server-side systems. Over time, my curiosity led me into Machine Learning, where I now focus on applying ML models to real-world challenges. With hands-on experience in both backend systems and ML workflows, I'm looking for an internship where I can contribute to impactful projects while deepening my skills in machine learning."
  );
  return (
    <section id="about" ref={ref} className={`py-20 ${animationClasses}`}>
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-white">
          About <span className="text-blue-400">Me</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <CodeWindow>
            <p className="font-mono text-base leading-relaxed md:text-lg">
              {aboutText}
              <span className="animate-ping">_</span>
            </p>
          </CodeWindow>
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const [ref, animationClasses] = useScrollAnimation();
  const educationHistory = [
    {
      degree: "Higher National Diploma in Software Engineering",
      institution: "National Institute of Business Managment",
      period: "Reading",
      description:
        " focusing on Machine Learning, cloud computing, and software architecture, Backend development.",
    },
    {
      degree: "Diploma in Software Engineering",
      institution: "National Institute of Business Managment",
      period: "2023-2024",
      description: " Completed my Diploma with Dean's List 4.0/4.0 GPA",
    },
    {
      degree: "Advanced Level",
      institution: "Upananda College, Galle",
      period: "2021-2022",
      description:
        "Completed my GCE A/L in the Biological Science stream with excellent results.",
    },
  ];
  return (
    <section id="education" ref={ref} className={`py-20 ${animationClasses}`}>
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-white">
          My <span className="text-blue-400">Education</span>
        </h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-500/30"></div>
          {educationHistory.map((edu, index) => (
            <div key={index} className="relative pl-12 mb-10">
              <div className="absolute left-0 top-1 w-8 h-8 bg-blue-600 rounded-full border-4 border-[#0b1120] flex items-center justify-center">
                <EducationIcon className="w-4 h-4 text-white" />
              </div>
              <div className="p-6 border rounded-lg shadow-lg bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
                <p className="mb-1 font-semibold text-blue-300">{edu.period}</p>
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="mb-3 text-gray-400">{edu.institution}</p>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const [ref, animationClasses] = useScrollAnimation();
  const skillsByRow = [
    [
      { name: "Python", slug: "python" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "Scikit-learn", slug: "sklearn" },
      { name: "OpenCV", slug: "opencv" },
    ],
    [
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Node.js", slug: "nodejs" },
      { name: "Git", slug: "git" },
      { name: "Docker", slug: "docker" },
      { name: "AWS", slug: "aws" },
      { name: "Google Cloud", slug: "gcp" },
    ],
    [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextjs" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Firebase", slug: "firebase" },
      { name: "Express.js", slug: "express" },
    ],
    [
      { name: "Java", slug: "java" },
      { name: "SpringBoot", slug: "spring" },
      ,
      { name: "PHP", slug: "php" },
      { name: "HTML5", slug: "html" },
      { name: "POSTMAN", slug: "postman" },
    ],
  ];

  return (
    <section id="skills" ref={ref} className={`py-20 ${animationClasses}`}>
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Transforming Ideas into Reality
        </h2>
        <p className="mt-2 mb-16 text-lg text-blue-300">
          with Cutting-edge Tools & Technologies
        </p>
        <div className="relative flex flex-col items-center gap-y-6 md:gap-y-8">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-blue-500/10 rounded-full blur-3xl"></div>

          {skillsByRow.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="z-10 flex flex-wrap justify-center gap-4 md:gap-6"
            >
              {row.map((skill) => (
                <div
                  key={skill.name}
                  className="relative p-2 rounded-full group bg-slate-800/50 backdrop-blur-sm"
                  title={skill.name}
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${skill.slug}`}
                    alt={`${skill.name} icon`}
                    className="w-10 h-10 transition-transform duration-300 md:w-14 md:h-14 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-white/10 blur-xl group-hover:opacity-100"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = ({ onShowMore }) => {
  const [ref, animationClasses] = useScrollAnimation();
  const featuredProjects = allProjects.slice(0, 3);
  return (
    <section id="projects" ref={ref} className={`py-20 ${animationClasses}`}>
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-white">
          My <span className="text-purple-400">Projects</span>
        </h2>
        <div className="grid gap-12 md:grid-cols-1">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="grid items-center gap-8 overflow-hidden border shadow-lg bg-slate-800/50 backdrop-blur-sm rounded-xl md:grid-cols-2 border-slate-700/50"
            >
              <div className={`p-8 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <h3 className="mb-3 text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-semibold text-purple-300 rounded-full bg-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mb-6 text-gray-300">{project.description}</p>
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold text-white transition-colors hover:text-blue-400"
                  >
                    <ExternalLinkIcon className="w-5 h-5" /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold text-white transition-colors hover:text-blue-400"
                  >
                    <GithubIcon className="w-5 h-5" /> Source Code
                  </a>
                </div>
              </div>
              <div className="w-full h-64 md:h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button
            onClick={onShowMore}
            className="px-8 py-3 font-bold text-white transition-transform transform bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105"
          >
            Show More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

const AllProjectsPage = ({ onBack }) => (
  <div className="min-h-screen p-4 text-white sm:p-8">
    <div className="container mx-auto">
      <header className="flex items-center justify-between mb-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-semibold text-gray-300 transition-colors hover:text-white"
        >
          <BackIcon className="w-7 h-7" />
          Back to Home
        </button>
        <h1 className="text-4xl font-bold text-white">All Projects</h1>
      </header>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {allProjects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden border shadow-lg bg-slate-800/50 backdrop-blur-sm rounded-xl border-slate-700/50"
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-48"
            />
            <div className="flex flex-col flex-grow p-6">
              <h3 className="mb-2 text-2xl font-bold text-white">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-semibold text-purple-300 rounded-full bg-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="flex-grow mb-6 text-gray-300">
                {project.description}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-white transition-colors hover:text-blue-400"
                >
                  <ExternalLinkIcon className="w-5 h-5" /> Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-white transition-colors hover:text-blue-400"
                >
                  <GithubIcon className="w-5 h-5" /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Certificates = ({ onShowMore }) => {
  const [ref, animationClasses] = useScrollAnimation();
  return (
    <section
      id="certificates"
      ref={ref}
      className={`py-20 ${animationClasses}`}
    >
      <div className="container px-4 mx-auto text-center">
        <h2 className="mb-4 text-4xl font-bold text-white">
          Achievements & Credentials
        </h2>
        <p className="mb-10 text-lg text-gray-300">
          A showcase of my certified skills and completed courses.
        </p>
        <div className="flex flex-col justify-center gap-6 sm:flex-row">
          <button
            onClick={() => onShowMore("certificates")}
            className="px-8 py-3 font-bold text-white transition-transform transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105"
          >
            View Certificates
          </button>
          <button
            onClick={() => onShowMore("badges")}
            className="px-8 py-3 font-bold text-white transition-transform transform bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105"
          >
            View Badges
          </button>
        </div>
      </div>
    </section>
  );
};

const ShowcaseModal = ({ isOpen, onClose, data }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSelectedItem(null);
      }, 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#0b1120] border border-blue-500/30 rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col" // Increased max-width
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center gap-4">
            {selectedItem && (
              <button
                onClick={() => setSelectedItem(null)}
                className="text-gray-400 transition-colors hover:text-white"
              >
                <BackIcon className="w-7 h-7" />
              </button>
            )}
            <h3 className="text-2xl font-bold text-white">
              {selectedItem ? selectedItem.title : data.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 transition-colors hover:text-white"
          >
            <CloseIcon className="w-8 h-8" />
          </button>
        </header>
        <main className="relative p-6 overflow-y-auto">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-opacity duration-300 ${
              // This line was changed
              selectedItem ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            {data.items.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedItem(item)}
                className="p-3 transition-transform transform rounded-lg shadow-lg cursor-pointer bg-slate-800/50 backdrop-blur-sm hover:-translate-y-1 hover:shadow-blue-500/20"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain w-full h-auto rounded-md aspect-video"
                />
                <p className="mt-2 text-sm font-semibold text-center text-white truncate">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          {selectedItem && (
            <div className="absolute inset-0 p-6 flex flex-col md:flex-row items-center justify-center gap-8 bg-[#0b1120]">
              <div className="flex-1 max-w-lg">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="mb-4 text-3xl font-bold text-white">
                  {selectedItem.title}
                </h3>
                <a
                  href={selectedItem.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 font-bold text-white transition-transform transform bg-green-600 rounded-lg shadow-lg hover:bg-green-700 hover:scale-105"
                >
                  Verify Credential
                </a>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

const Contact = () => {
  const [ref, animationClasses] = useScrollAnimation();
  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 text-center ${animationClasses}`}
    >
      <div className="text-center">
        <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          Let's build something <span className="text-blue-400">great</span>{" "}
          together.
        </h2>
        <p className="mb-8 text-lg text-gray-300">
          Feel free to reach out if you're looking for a developer, have a
          question, or just want to connect.
        </p>
        <a
          href="mailto:chanukadilshan2002@gmail.com"
          className="px-8 py-4 text-xl font-bold text-white transition-transform transform rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: GithubIcon,
      url: "https://github.com/Chanukaa2002",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      url: "https://www.instagram.com/chanuka_dilshann/",
    },
    { name: "Medium", icon: MediumIcon, url: "https://medium.com/@Chanuka72" },
    {
      name: "Email",
      icon: MailIcon,
      url: "mchanuka72@@gmail.com",
    },
  ];

  return (
    <footer className="relative py-12 overflow-hidden text-center border-t border-gray-800">
      <div className="absolute inset-x-0 bottom-0 h-48">
        <img
          src="https://googleusercontent.com/file_content/1"
          alt="Footer decorative wave"
          className="object-contain w-full h-full opacity-20"
        />
      </div>
      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-gray-400 transition-transform transform hover:text-white hover:scale-110"
            >
              <link.icon className="w-7 h-7" />
            </a>
          ))}
        </div>
        <p className="text-gray-500">
          © 2025 Made with ❤️ by Chanuka Dilshan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Main App Component
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: "", items: [] });
  const [showAllProjects, setShowAllProjects] = useState(false);

  const allData = {
    certificates: {
      title: "My Certificates",
      items: [
        {
          title: "Supervised Machine Learning: Regression and Classification ",
          image:
            "https://res.cloudinary.com/dlohr6hrn/image/upload/v1753361007/Capture_sjtqal.png",
          verifyUrl:
            "https://www.coursera.org/account/accomplishments/verify/BFMDYIRJC63F",
        },
        {
          title: "Linear Algebra for Machine Learning and Data Science",
          image:
            "https://res.cloudinary.com/dlohr6hrn/image/upload/v1749288143/C1_ejvdwa.png",
          verifyUrl:
            "https://www.coursera.org/account/accomplishments/verify/E0BM75OUC2LY",
        },
        {
          title: "Python For Beginner",
          image:
            "https://res.cloudinary.com/dlohr6hrn/image/upload/v1749092905/python_1_uom_e2gxud.png",
          verifyUrl:
            "https://open.uom.lk/lms/mod/customcert/verify_certificate.php?contextid=4776&code=kcsp4kXOAk&qrcode=1",
        },
        {
          title: "Front-End Web Development",
          image:
            "https://res.cloudinary.com/dlohr6hrn/image/upload/v1749093664/fe_oiglp2.png",
          verifyUrl:
            "https://open.uom.lk/lms/mod/customcert/verify_certificate.php?code=4Qk4sVWQpp",
        },
        {
          title: "Web Design for Beginner",
          image:
            "https://res.cloudinary.com/dlohr6hrn/image/upload/v1749093809/we_lig8a1.png",
          verifyUrl:
            "https://open.uom.lk/lms/mod/customcert/verify_certificate.php?code=ooRriETAC1",
        },
      ],
    },
    badges: {
      title: "My Badges",
      items: [
        {
          title: "Machine Learning Foundations - AWS",
          image:
            "https://res.cloudinary.com/dlohr6hrn/image/upload/v1753361920/aws-educate-machine-learning-foundations_1_ty3wr8.png",
          verifyUrl:
            "https://www.credly.com/badges/c40e216b-918d-4feb-b9e4-db33c9175cca/linked_in?t=szw33z",
        },
        {
          title: "Postman Student Expert",
          image:
            "https://res.cloudinary.com/dlohr6hrn/image/upload/v1753361935/pstmn_mbyi1x.png",
          verifyUrl:
            "https://badgr.com/public/assertions/RxZSosLjRKK2jkcPuRJt7g?identity__email=mchanuka72@gmail.com",
        },
        {
          title: "GenAI 101 with Pieces - Pieces",
          image:
            "https://res.cloudinary.com/dlohr6hrn/image/upload/v1753361935/assertion-7Adyw2SzTSeP7JjSB0yRAg_ignc2d.png",
          verifyUrl:
            "https://badgr.com/public/assertions/67b04377157e9b171a2b1617?identity__email=mchanuka72@gmail.com",
        },
        {
          title: "Emerging Talent Community- AWS",
          image:
            "https://res.cloudinary.com/dlohr6hrn/image/upload/v1753361920/AWSEBadge_bqkjmw.png",
          verifyUrl:
            "https://www.credly.com/badges/c40e216b-918d-4feb-b9e4-db33c9175cca/linked_in?t=szw33z",
        },
      ],
    },
  };

  const handleShowMoreCerts = (type) => {
    setModalData(allData[type]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleShowAllProjects = () => setShowAllProjects(true);
  const handleBackToHome = () => setShowAllProjects(false);

  if (showAllProjects) {
    return (
      <div className="relative overflow-x-hidden font-sans leading-normal tracking-tight text-white">
        <BackgroundStars />
        <AllProjectsPage onBack={handleBackToHome} />
        <ScrollToTopButton />
      </div>
    );
  }

  return (
    <div className="relative overflow-x-hidden font-sans leading-normal tracking-tight text-white">
      <BackgroundStars />
      <div className="absolute top-0 left-0 rounded-full opacity-50 w-96 h-96 bg-blue-700/30 filter blur-3xl animate-blob -z-10"></div>
      <div className="absolute top-0 right-0 rounded-full opacity-50 w-96 h-96 bg-purple-700/30 filter blur-3xl animate-blob animation-delay-2000 -z-10"></div>
      <div className="absolute bottom-0 rounded-full opacity-50 left-1/4 w-96 h-96 bg-pink-700/30 filter blur-3xl animate-blob animation-delay-4000 -z-10"></div>

      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects onShowMore={handleShowAllProjects} />
        <Certificates onShowMore={handleShowMoreCerts} />
        <Contact />
      </main>

      <ShowcaseModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        data={modalData}
      />

      <Footer />
      <ScrollToTopButton />

      <style jsx global>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </div>
  );
}