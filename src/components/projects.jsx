import React from "react";

const Project = () => {
  return (
    <>
      <section id="project">
        <div className="pt-56 pb-10 text-center text-white">
          <p className="pb-10 text-4xl font-bold">Projects</p>
          <div className="flex items-center justify-center">
            <div className="w-full px-4 md:w-3/4">
              {/* Use responsive grid classes */}
              <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-3">
                {/* Twitter project */}
                <div className="p-4 bg-gray-800 rounded-lg">
                  <p className="relative inline-block text-xl font-bold">
                    Twitter Backend clone
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 "></div>
                  </p>
                  <br />
                  <p className="pt-5">
                    This is a backend clone of the Twitter app.
                  </p>
                  <br />
                  <span className="pt-10 font-semibold">
                    Technologies: Node.js, Express, MongoDB, JSON Web Token,
                    Postman.
                  </span>
                  <br />
                  <div className="flex justify-center pt-4">
                    <a
                      href="https://github.com/Chanukaa2002/twitter_clone"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 transition-transform transform rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:scale-90"
                    >
                      <i className="text-2xl text-white fas fa-code"></i>
                    </a>
                  </div>
                </div>

                {/* E-commerce project */}
                <div className="p-4 bg-gray-800 rounded-lg">
                  <p className="relative inline-block text-xl font-bold">
                    FullStack E-Commerce Webapp
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 "></div>
                  </p>
                  <br />
                  <p className="pt-5">
                    This is a simple e-commerce webapp that can create, update,
                    and delete products.
                  </p>
                  <br />
                  <span className="pt-10 font-semibold">
                    Technologies: Node.js, Express, MongoDB, React js, Tailwind
                    CSS, Postman.
                  </span>
                  <br />
                  <div className="flex justify-center pt-4">
                    <a
                      href="https://github.com/Chanukaa2002/e-comz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 mr-5 transition-transform transform rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:scale-90"
                    >
                      <i className="text-2xl text-white fas fa-code"></i>
                    </a>
                    <a
                      href="https://e-com-p2zo.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 px-4 transition-transform transform rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:scale-90"
                    >
                      <i className="text-2xl text-white fa-solid fa-globe"></i>
                    </a>
                  </div>
                </div>

                {/* Portfolio project */}
                <div className="p-4 bg-gray-800 rounded-lg">
                  <p className="relative inline-block text-xl font-bold">
                    Portfolio Website
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 "></div>
                  </p>
                  <br />
                  <p className="pt-5">
                    This is my portfolio website showcasing my skills and
                    projects.
                  </p>
                  <br />
                  <span className="pt-10 font-semibold">
                    Technologies: React JS, Tailwind CSS.
                  </span>
                  <br />
                  <div className="flex justify-center pt-4">
                    <a
                      href="https://github.com/Chanukaa2002/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 mr-5 transition-transform transform rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:scale-90"
                    >
                      <i className="text-2xl text-white fas fa-code"></i>
                    </a>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 px-4 transition-transform transform rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:scale-90"
                    >
                      <i className="text-2xl text-white fa-solid fa-globe"></i>
                    </a>
                  </div>
                </div>

                {/* Weather project */}
                <div className="p-4 bg-gray-800 rounded-lg">
                  <p className="relative inline-block text-xl font-bold">
                    Weather API
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 "></div>
                  </p>
                  <br />
                  <p className="pt-5">
                    This is a Simple Weather API that can check the current
                    weather by city.
                  </p>
                  <br />
                  <span className="pt-10 font-semibold">
                    Technologies: Node.js, Express, MongoDB, Postman, Redis.
                  </span>
                  <br />
                  <div className="flex justify-center pt-4">
                    <a
                      href="https://github.com/Chanukaa2002/wether_api"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 mr-5 transition-transform transform rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:scale-90"
                    >
                      <i className="text-2xl text-white fas fa-code"></i>
                    </a>
                    <a
                      href="https://checkweather-pzv3.onrender.com/api/weather/galle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 px-4 transition-transform transform rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:scale-90"
                    >
                      <i className="text-2xl text-white fa-solid fa-globe"></i>
                    </a>
                  </div>
                </div>

                {/* ML project */}
                <div className="p-4 bg-gray-800 rounded-lg">
                  <p className="relative inline-block text-xl font-bold">
                    Rock and Mine Sonar Prediction
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 "></div>
                  </p>
                  <br />
                  <p className="pt-5">
                    This is a Simple Machine Learning model to predict rock and
                    mines in the deep sea.
                  </p>
                  <br />
                  <span className="pt-10 font-semibold">
                    Technologies: Python, Numpy, Pandas, Seaborn, Jupyter
                    Notebook.
                  </span>
                  <br />
                  <div className="flex justify-center pt-4">
                    <a
                      href="https://github.com/Chanukaa2002/Rock-vs-Mine-Prediction-using-Machine-Learning"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 mr-5 transition-transform transform rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:scale-90"
                    >
                      <i className="text-2xl text-white fas fa-code"></i>
                    </a>
                  </div>
                </div>

                {/* Soundwave project */}
                <div className="p-4 bg-gray-800 rounded-lg">
                  <p className="relative inline-block text-xl font-bold">
                    SoundWave (Music app)
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 "></div>
                  </p>
                  <br />
                  <p className="pt-5">
                    This is a Music listening and uploading application created
                    for a University project.
                  </p>
                  <br />
                  <span className="pt-10 font-semibold">
                    Technologies: Java, Java Swing, MySQL.
                  </span>
                  <br />
                  <div className="flex justify-center pt-4">
                    <a
                      href="https://github.com/Chanukaa2002/SoundWave-ead-cw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 mr-5 transition-transform transform rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:scale-90"
                    >
                      <i className="text-2xl text-white fas fa-code"></i>
                    </a>
                  </div>
                </div>

                {/* StudentBot project */}
                <div className="p-4 bg-gray-800 rounded-lg">
                  <p className="relative inline-block text-xl font-bold">
                    StudentBots
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500"></div>
                  </p>
                  <br />
                  <p className="pt-5">
                    This is a School Management system, created for a University
                    project.
                  </p>
                  <br />
                  <span className="pt-10 font-semibold">
                    Technologies: C#, .NET, MySQL.
                  </span>
                  <br />
                  <div className="flex justify-center pt-4">
                    <a
                      href="https://github.com/Chanukaa2002/Student_Bots"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 mr-5 transition-transform transform rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:scale-90"
                    >
                      <i className="text-2xl text-white fas fa-code"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
