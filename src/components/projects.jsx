import React from "react";
import ScrollRevealComponent from "../utils/ScrollRevealComponent";

// Import images
import twitterImage from "../assets/commingSoonImage.png";
import ecommerceImage from "../assets/ecommerceImage.png";
import portfolioImage from "../assets/portfolioImage.png";
import weatherImage from "../assets/weatherImage.png";
import mlImage from "../assets/commingSoonImage.png";
import soundwaveImage from "../assets/soundwaveImage.png";
import studentbotsImage from "../assets/studentbotImage.png";

const Project = () => {
  return (
    <>
      <>
        <section id="project">
          <div className="pt-56 pb-10 text-center text-white">
            <p className="pb-10 text-4xl font-bold">Projects</p>
            <div className="flex items-center justify-center">
              <div className="w-full px-4 md:w-3/4">
                {/* Use responsive grid classes */}
                <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-3">
                  {/* Twitter project */}
                  <div className="p-2 border rounded-lg shadow-lg backdrop-blur-sm bg-white/5 border-white/20">
                    <img
                      src={twitterImage}
                      alt="Twitter Backend Clone"
                      className="object-cover w-full h-48 rounded-t-lg"
                    />
                    <p className="inline-block mt-4 text-xl font-bold">
                      Twitter Backend clone
                    </p>
                    <br />
                    <p className="pt-5 text-lg text-gray-400" >
                      This is a backend clone of the Twitter app.
                    </p>
                    <br />
                    <div className="flex flex-wrap gap-2 pt-4">
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        Node.js
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        Express
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        MongoDB
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        JSON Web Token
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        Postman
                      </span>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4">
                      <a
                        href="https://github.com/Chanukaa2002/twitter_clone"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white transition-colors hover:text-lime-100"
                      >
                        <i className="mr-2 text-xl fab fa-github"></i>
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>

                  {/* E-commerce project */}
                  <div className="p-2 border rounded-lg shadow-lg backdrop-blur-sm bg-white/5 border-white/20">
                    <img
                      src={ecommerceImage}
                      alt="FullStack E-Commerce Webapp"
                      className="object-cover w-full h-48 rounded-t-lg"
                    />
                    <p className="inline-block mt-4 text-xl font-bold">
                      FullStack E-Commerce Webapp
                    </p>
                    <br />
                    <p className="pt-5 text-lg text-gray-400">
                      This is a simple e-commerce webapp that can create,
                      update, and delete products.
                    </p>
                    <br />
                    <div className="flex flex-wrap gap-2 pt-4">
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        Node.js
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        Express
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        MongoDB
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        React JS
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        Tailwind CSS
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        Postman
                      </span>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4">
                      <a
                        href="https://github.com/Chanukaa2002/e-comz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white transition-colors hover:text-lime-100"
                      >
                        <i className="mr-2 text-xl fab fa-github"></i>
                        <span>View Code</span>
                      </a>
                      <a
                        href="https://e-com-p2zo.onrender.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white transition-colors hover:text-lime-100"
                      >
                        <i className="mr-2 text-xl fas fa-external-link-alt"></i>
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>

                  {/* Portfolio project */}
                  <div className="p-2 border rounded-lg shadow-lg backdrop-blur-sm bg-white/5 border-white/20">
                    <img
                      src={portfolioImage}
                      alt="Portfolio Website"
                      className="object-cover w-full h-48 rounded-t-lg"
                    />
                    <p className="inline-block mt-4 text-xl font-bold">
                      Portfolio Website
                    </p>
                    <br />
                    <p className="pt-5 text-lg text-gray-400">
                      This is my portfolio website showcasing my skills and
                      projects.
                    </p>
                    <br />
                    <div className="flex flex-wrap gap-2 pt-4">
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        React JS
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        Tailwind CSS
                      </span>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4">
                      <a
                        href="https://github.com/Chanukaa2002/portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white transition-colors hover:text-lime-100"
                      >
                        <i className="mr-2 text-xl fab fa-github"></i>
                        <span>View Code</span>
                      </a>
                      <a
                        href="https://www.chanukadilshan.live"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white transition-colors hover:text-lime-100"
                      >
                        <i className="mr-2 text-xl fas fa-external-link-alt"></i>
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>

                  {/* Weather project */}
                  <div className="p-2 border rounded-lg shadow-lg backdrop-blur-sm bg-white/5 border-white/20">
                    <img
                      src={weatherImage}
                      alt="Weather API"
                      className="object-cover w-full h-48 rounded-t-lg"
                    />
                    <p className="inline-block mt-4 text-xl font-bold">
                      Weather API
                    </p>
                    <br />
                    <p className="pt-5 text-lg text-gray-400">
                      This is a Simple Weather API that can check the current
                      weather by city.
                    </p>
                    <br />
                    <div className="flex flex-wrap gap-2 pt-4">
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        Node.js
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        Express
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        MongoDB
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        Postman
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        Redis
                      </span>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4">
                      <a
                        href="https://github.com/Chanukaa2002/wether_api"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white transition-colors hover:text-lime-100"
                      >
                        <i className="mr-2 text-xl fab fa-github"></i>
                        <span>View Code</span>
                      </a>
                      <a
                        href="https://weather-check-pearl-xi.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white transition-colors hover:text-lime-100"
                      >
                        <i className="mr-2 text-xl fas fa-external-link-alt"></i>
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>

                  {/* ML project */}
                  <div className="p-2 border rounded-lg shadow-lg backdrop-blur-sm bg-white/5 border-white/20">
                    <img
                      src={mlImage}
                      alt="Rock and Mine Sonar Prediction"
                      className="object-cover w-full h-48 rounded-t-lg"
                    />
                    <p className="inline-block mt-4 text-xl font-bold">
                      Rock and Mine Sonar Prediction
                    </p>
                    <br />
                    <p className="pt-5 text-lg text-gray-400">
                      This is a Simple Machine Learning model to predict rock
                      and mines in the deep sea.
                    </p>
                    <br />
                    <div className="flex flex-wrap gap-2 pt-4">
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        Python
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        Numpy
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        Pandas
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        Seaborn
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        Jupyter Notebook
                      </span>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4">
                      <a
                        href="https://github.com/Chanukaa2002/Rock-vs-Mine-Prediction-using-Machine-Learning"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white transition-colors hover:text-lime-100"
                      >
                        <i className="mr-2 text-xl fab fa-github"></i>
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>

                  {/* Soundwave project */}
                  <div className="p-2 border rounded-lg shadow-lg backdrop-blur-sm bg-white/5 border-white/20">
                    <img
                      src={soundwaveImage}
                      alt="SoundWave (Music app)"
                      className="object-cover w-full h-48 rounded-t-lg"
                    />
                    <p className="inline-block mt-4 text-xl font-bold">
                      SoundWave (Music app)
                    </p>
                    <br />
                    <p className="pt-5 text-lg text-gray-400">
                      This is a Music listening and uploading application
                      created for a University project.
                    </p>
                    <br />
                    <div className="flex flex-wrap gap-2 pt-4">
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        Java
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        Java Swing
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        MySQL
                      </span>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4">
                      <a
                        href="https://github.com/Chanukaa2002/SoundWave-ead-cw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white transition-colors hover:text-lime-100"
                      >
                        <i className="mr-2 text-xl fab fa-github"></i>
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>

                  {/* StudentBot project */}
                  <div className="p-2 border rounded-lg shadow-lg backdrop-blur-sm bg-white/5 border-white/20">
                    <img
                      src={studentbotsImage}
                      alt="StudentBots"
                      className="object-cover w-full h-48 rounded-t-lg "
                    />
                    <p className="inline-block mt-4 text-xl font-bold">
                      StudentBots
                    </p>
                    <br />
                    <p className="pt-5 text-lg text-gray-400">
                      This is a School Management system, created for a
                      University project.
                    </p>
                    <br />
                    <div className="flex flex-wrap gap-2 pt-4">
                      <span class="  text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20 ">
                        C#
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        .NET
                      </span>
                      <span class=" text-sm font-semibold rounded-full  text-lime-400  me-2 px-2.5 py-0.5   dark:text-lime-400 border-solid border border-lime-400 shadow-lg  backdrop-blur-sm bg-white/5 border-white/20">
                        MySQL
                      </span>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4">
                      <a
                        href="https://github.com/Chanukaa2002/Student_Bots"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white transition-colors hover:text-lime-100"
                      >
                        <i className="mr-2 text-xl fab fa-github"></i>
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Project;

