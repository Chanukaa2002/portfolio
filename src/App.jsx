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
    <path
      d="M13.54 12a6.8
    6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8
    6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.92 12A3.7 3.7 0 0117.25 15.7V8.3a3.7 3.7 0 013.67 3.7zM24 12a1.15 1.15 0 01-1.15 1.15v-2.3A1.15 1.15 0 0124 12z"
    ></path>
  </svg>
);

const ArrowUpIcon = ({ className }) => (
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
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
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
    title: "Weather App",
    description:
      "A simple weather application that fetches and displays weather data from a third-party API.",
    image: "https://placehold.co/600x400/1F2937/F59E0B?text=Weather+App",
    liveLink: "#",
    githubLink: "#",
    tags: ["React", "API"],
  },
  {
    title: "Todo List App",
    description:
      "A classic todo list application with features to add, remove, and mark tasks as complete.",
    image: "https://placehold.co/600x400/1F2937/EC4899?text=Todo+App",
    liveLink: "#",
    githubLink: "#",
    tags: ["JavaScript", "HTML", "CSS"],
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
      canvas.height = document.body.scrollHeight;
    };

    setCanvasDimensions();

    const stars = [];
    const numStars = 300;

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
  <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/30 rounded-lg shadow-xl overflow-hidden">
    <div className="bg-gray-900/80 px-4 py-2 flex items-center">
      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
    </div>
    <div className="p-6 md:p-8 text-gray-300">{children}</div>
  </div>
);

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
      className={`fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Go to top"
    >
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  );
};

// --- SECTIONS / PAGES ---

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center justify-center">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-light text-gray-300">
            Hi, I am
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-2 mb-4">
            Chanuka Dilshan
          </h1>
          <p className="text-lg md:text-xl text-blue-300 mb-8">
            A passionate Backend and Machine Learning Engineer, dedicated to
            building amazing Backend systems and ML Models.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://drive.google.com/file/d/1y6y7TEes8a22vZRhfThefzacelFEw4pm/view?usp=drive_link"
              className="bg-blue-600 hover:bg-blue-700 
                        font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg text-white"
            >
              Download CV
            </a>
            <a
              href="https://github.com/Chanukaa2002"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg"
            >
              GitHub Projects
            </a>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full transform -rotate-12"></div>
            <img
              src={dp}
              alt="Chanuka Dilshan"
              className="relative w-full h-full object-cover rounded-full border-4 border-gray-800"
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
    "Hello! I'm a 23-year-old Machine Learning  and backend developer, a current undergraduate at the National Institute of Business Management (NIBM) and Postman Student Expert. Passionate about building efficient, scalable systems, I specialize in backend development and enjoy tackling complex challenges in server-side programming and ML modeling. My studies at NIBM have equipped me with a solid foundation in software development, and my hands-on experience in the field has given me the skills to turn concepts into functional, high-performing applications. Driven by curiosity and a desire to create seamless digital experiences, I'm constantly learning and honing my skills in backend technologies, database management, and API design. Whether it's optimizing database queries or designing robust APIs, I am focused on building solutions that are both innovative and practical."
  );
  return (
    <section id="about" ref={ref} className={`py-20 ${animationClasses}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          About <span className="text-blue-400">Me</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <CodeWindow>
            <p className="font-mono text-base md:text-lg leading-relaxed">
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
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My <span className="text-blue-400">Education</span>
        </h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-500/30"></div>
          {educationHistory.map((edu, index) => (
            <div key={index} className="relative pl-12 mb-10">
              <div className="absolute left-0 top-1 w-8 h-8 bg-blue-600 rounded-full border-4 border-[#0b1120] flex items-center justify-center">
                <EducationIcon className="w-4 h-4 text-white" />
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-slate-700/50">
                <p className="text-blue-300 font-semibold mb-1">{edu.period}</p>
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-gray-400 mb-3">{edu.institution}</p>
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
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl text-white">
          Transforming Ideas into Reality
        </h2>
        <p className="text-lg text-blue-300 mt-2 mb-16">
          with Cutting-edge Tools & Technologies
        </p>
        <div className="relative flex flex-col items-center gap-y-6 md:gap-y-8">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-blue-500/10 rounded-full blur-3xl"></div>

          {skillsByRow.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex justify-center flex-wrap gap-4 md:gap-6 z-10"
            >
              {row.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative p-2 bg-slate-800/50 backdrop-blur-sm rounded-full"
                  title={skill.name}
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${skill.slug}`}
                    alt={`${skill.name} icon`}
                    className="w-10 h-10 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My <span className="text-purple-400">Projects</span>
        </h2>
        <div className="grid md:grid-cols-1 gap-12">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg grid md:grid-cols-2 items-center gap-8 border border-slate-700/50"
            >
              <div className={`p-8 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold bg-purple-500/20 text-purple-300 py-1 px-3 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-blue-400 font-semibold transition-colors"
                  >
                    <ExternalLinkIcon className="w-5 h-5" /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-blue-400 font-semibold transition-colors"
                  >
                    <GithubIcon className="w-5 h-5" /> Source Code
                  </a>
                </div>
              </div>
              <div className="w-full h-64 md:h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <button
            onClick={onShowMore}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 shadow-lg"
          >
            Show More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

const AllProjectsPage = ({ onBack }) => (
  <div className="min-h-screen text-white p-4 sm:p-8">
    <div className="container mx-auto">
      <header className="flex items-center justify-between mb-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-300 hover:text-white font-semibold transition-colors"
        >
          <BackIcon className="w-7 h-7" />
          Back to Home
        </button>
        <h1 className="text-4xl font-bold text-white">All Projects</h1>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-slate-700/50 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold bg-purple-500/20 text-purple-300 py-1 px-3 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-blue-400 font-semibold transition-colors"
                >
                  <ExternalLinkIcon className="w-5 h-5" /> Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-blue-400 font-semibold transition-colors"
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
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Achievements & Credentials
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          A showcase of my certified skills and completed courses.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button
            onClick={() => onShowMore("certificates")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 shadow-lg"
          >
            View Certificates
          </button>
          <button
            onClick={() => onShowMore("badges")}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 shadow-lg"
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
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-[#0b1120] border border-blue-500/30 rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col" // Increased max-width
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center p-4 border-b border-gray-800">
          <div className="flex items-center gap-4">
            {selectedItem && (
              <button
                onClick={() => setSelectedItem(null)}
                className="text-gray-400 hover:text-white transition-colors"
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
            className="text-gray-400 hover:text-white transition-colors"
          >
            <CloseIcon className="w-8 h-8" />
          </button>
        </header>
        <main className="p-6 overflow-y-auto relative">
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
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-blue-500/20 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-md w-full h-auto aspect-video object-contain"
                />
                <p className="text-white text-center mt-2 text-sm font-semibold truncate">
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
                  className="rounded-lg w-full h-auto shadow-2xl"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {selectedItem.title}
                </h3>
                <a
                  href={selectedItem.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg"
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

const Chatbot = () => {
  const [ref, animationClasses] = useScrollAnimation();
  return (
    <section id="chatbot" ref={ref} className={`py-20 ${animationClasses}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-white mb-4">Ask my Bot</h2>
            <p className="text-gray-300 mb-6">
              Have a question? Ask my AI assistant! It's trained on my skills,
              projects, and experience. (UI demonstration)
            </p>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-2 flex gap-2">
              <input
                type="text"
                placeholder="Under Developing"
                className="bg-transparent w-full text-white placeholder-gray-500 focus:outline-none px-3 py-2"
                readOnly
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                Send
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <svg
              width="150"
              height="150"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 25C141.421 25 175 58.5786 175 100V150C175 163.807 163.807 175 150 175H50C36.1929 175 25 163.807 25 150V100C25 58.5786 58.5786 25 100 25Z"
                fill="url(#paint0_linear_1_2)"
              />
              <rect
                x="50"
                y="140"
                width="100"
                height="20"
                rx="10"
                fill="#1D4ED8"
              />
              <circle cx="70" cy="100" r="15" fill="#1F2937" />
              <circle cx="130" cy="100" r="15" fill="#1F2937" />
              <circle cx="70" cy="100" r="5" fill="#60A5FA" />
              <circle cx="130" cy="100" r="5" fill="#60A5FA" />
              <path
                d="M80 50L70 35"
                stroke="#93C5FD"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_2"
                  x1="100"
                  y1="25"
                  x2="100"
                  y2="175"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3B82F6" />
                  <stop offset="1" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
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
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Let's build something <span className="text-blue-400">great</span>{" "}
          together.
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Feel free to reach out if you're looking for a developer, have a
          question, or just want to connect.
        </p>
        <a
          href="mailto:chanukadilshan2002@gmail.com"
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-transform transform hover:scale-105 shadow-lg text-xl"
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
    <footer className="relative text-center py-12 border-t border-gray-800 overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-48">
        <img
          src="https://googleusercontent.com/file_content/1"
          alt="Footer decorative wave"
          className="w-full h-full object-contain opacity-20"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
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
      <div className="text-white font-sans leading-normal tracking-tight relative overflow-x-hidden">
        <BackgroundStars />
        <AllProjectsPage onBack={handleBackToHome} />
      </div>
    );
  }

  return (
    <div className="text-white font-sans leading-normal tracking-tight relative overflow-x-hidden">
      <BackgroundStars />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-700/30 rounded-full filter blur-3xl opacity-50 animate-blob -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-700/30 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000 -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-700/30 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000 -z-10"></div>

      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects onShowMore={handleShowAllProjects} />
        <Certificates onShowMore={handleShowMoreCerts} />
        <Chatbot />
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
