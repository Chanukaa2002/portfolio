import React, { useState } from "react";

// Import images
import twitterImage from "../assets/commingSoonImage.png";
import ecommerceImage from "../assets/ecommerceImage.png";
import portfolioImage from "../assets/portfolioImage.png";
import weatherImage from "../assets/weatherImage.png";
import mlImage from "../assets/commingSoonImage.png";
import soundwaveImage from "../assets/soundwaveImage.png";
import studentbotsImage from "../assets/studentbotImage.png";
import NIBMEvexImage from "../assets/commingSoonImage.png";
import BlogImage from "../assets/commingSoonImage.png"

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Twitter Backend Clone",
      image: twitterImage,
      description: "This is a backend clone of the Twitter app.",
      tags: ["Node.js", "Express", "MongoDB", "JSON Web Token", "Postman"],
      github: "https://github.com/Chanukaa2002/twitter_clone",
      type: ["Web"],
    },
    {
      id: 2,
      title: "FullStack E-Commerce Webapp",
      image: ecommerceImage,
      description:
        "This is a simple e-commerce webapp that can create, update, and delete products.",
      tags: [
        "Node.js",
        "Express",
        "MongoDB",
        "React JS",
        "Tailwind CSS",
        "Postman",
      ],
      github: "https://github.com/Chanukaa2002/e-comz",
      demo: "https://e-com-p2zo.onrender.com/",
      type: ["Web"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      image: portfolioImage,
      description:
        "This is my portfolio website showcasing my skills and projects.",
      tags: ["React JS", "Tailwind CSS"],
      github: "https://github.com/Chanukaa2002/portfolio",
      demo: "https://www.chanukadilshan.live",
      type: ["Web"],
    },
    {
      id: 4,
      title: "Weather API",
      image: weatherImage,
      description:
        "This is a Simple Weather API that can check the current weather by city.",
      tags: ["Node.js", "Express", "MongoDB", "Postman", "Redis"],
      github: "https://github.com/Chanukaa2002/wether_api",
      demo: "https://weather-check-pearl-xi.vercel.app/",
      type: ["Web"],
    },
    {
      id: 5,
      title: "Rock and Mine Sonar Prediction",
      image: mlImage,
      description:
        "This is a Simple Machine Learning model to predict rock and mines in the deep sea.",
      tags: ["Python", "Numpy", "Pandas", "Seaborn", "Jupyter Notebook"],
      github:
        "https://github.com/Chanukaa2002/Rock-vs-Mine-Prediction-using-Machine-Learning",
      type: ["Web"],
    },
    {
      id: 6,
      title: "SoundWave (Music app)",
      image: soundwaveImage,
      description:
        "This is a Music listening and uploading application created for a University project.",
      tags: ["Java", "Java Swing", "MySQL"],
      github: "https://github.com/Chanukaa2002/SoundWave-ead-cw",
      type: ["Windows"],
    },
    {
      id: 7,
      title: "StudentBots",
      image: studentbotsImage,
      description:
        "This is a School Management system, created for a University project.",
      tags: ["C#", ".NET", "MySQL"],
      github: "https://github.com/Chanukaa2002/Student_Bots",
      type: ["Windows"],
    },
    {
      id: 8,
      title: "NIBMEvex",
      image: NIBMEvexImage,
      description:
        "This is a Event managment system, Contributed for a University project",
      tags: [
        "Java",
        "Springboot",
        "MySQL",
        "AWS",
        "BCrypt",
        "Swagger",
        "Github Actions",
      ],
      github: "https://github.com/Chanukaa2002/EAD2-Backend",
      type: ["Web", "Contribution"],
    },
    {
      id: 9,
      title: "Blog site",
      image: BlogImage,
      description: "This is my personal bloging site's ",
      tags: ["React JS", "Tailwind CSS","Node JS","mongoDB","Express JS"],
      github: "https://github.com/Chanukaa2002/personal_blog_frontend",
      demo: "https://www.blog.chanukadilshan.live",
      type: ["Web"],
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.type.includes(activeFilter));

  return (
    <>
      <section id="project">
        <div className="pt-56 pb-10 text-center text-white">
          <p className="pb-10 text-4xl font-bold">Projects</p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["All", "Web", "Windows", "Contribution"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-lg shadow-lg backdrop-blur-md border font-bold border-white/20 transition-colors ${
                  activeFilter === filter
                    ? "bg-lime-400 text-black"
                    : "bg-white/5 text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full px-4 md:w-3/4">
              <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="p-2 border rounded-lg shadow-lg backdrop-blur-sm bg-white/5 border-white/20"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-48 rounded-t-lg"
                    />
                    <p className="inline-block mt-4 text-xl font-bold">
                      {project.title}
                    </p>
                    <br />
                    <p className="pt-5 text-lg text-gray-400">
                      {project.description}
                    </p>
                    <br />
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-sm font-semibold rounded-full text-lime-400 me-2 px-2.5 py-0.5 border-solid border border-lime-400 shadow-lg backdrop-blur-sm bg-white/5 border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-center pt-4 space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white transition-colors hover:text-lime-100"
                      >
                        <i className="mr-2 text-xl fab fa-github"></i>
                        <span>View Code</span>
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-white transition-colors hover:text-lime-100"
                        >
                          <i className="mr-2 text-xl fas fa-external-link-alt"></i>
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
