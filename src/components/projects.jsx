import React from "react";

const Project = () => {
  return (
    <>
      <div className="pt-56 pb-10 text-center text-white">
        <p className="pb-10 text-4xl font-bold">Projects</p>
        <div className="flex items-center justify-center">
          <div className="w-3/4">
            <div className="grid grid-cols-3 gap-4 text-center">
              {/* first project */}
              <div className="p-4 bg-gray-800 rounded-lg">
                <p className="relative inline-block text-xl font-bold">
                  Twitter Backend clone
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700"></div>
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
                    className="p-3 transition-transform transform rounded-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 hover:scale-90"
                  >
                    <i className="text-2xl text-white fas fa-code"></i>
                  </a>
                </div>
              </div>

              {/* second project */}
              <div className="p-4 bg-gray-800 rounded-lg">
                <p className="relative inline-block text-xl font-bold">
                  FullStack E-Commerce Webapp
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700"></div>
                </p>
                <br />
                <p className="pt-5">
                  this is simple e-commerce webapp that can create,update and
                  delete products.
                </p>
                <br />
                <span className="pt-10 font-semibold">
                  Technologies: Node.js, Express, MongoDB, React js, Postman.
                </span>
                <br />
                <div className="flex justify-center pt-4">
                  <a
                    href="https://github.com/Chanukaa2002/e-comz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 mr-5 transition-transform transform rounded-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 hover:scale-90"
                  >
                    <i className="text-2xl text-white fas fa-code"></i>
                  </a>
                  <a
                    href="https://e-com-p2zo.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 px-4 transition-transform transform rounded-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 hover:scale-90"
                  >
                    <i className="text-2xl text-white fa-solid fa-globe"></i>
                  </a>
                </div>
              </div>

              {/* third project */}
              <div className="p-4 bg-gray-800 rounded-lg">
                <p className="relative inline-block text-xl font-bold">
                  Weather API
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700"></div>
                </p>
                <br />
                <p className="pt-5">
                  This is a Simple Weather API that can be check current weather
                  by city
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
                    className="p-3 mr-5 transition-transform transform rounded-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 hover:scale-90"
                  >
                    <i className="text-2xl text-white fas fa-code"></i>
                  </a>
                  <a
                    href="https://checkweather-pzv3.onrender.com/api/weather/galle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 px-4 transition-transform transform rounded-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 hover:scale-90"
                  >
                    <i className="text-2xl text-white fa-solid fa-globe"></i>
                  </a>
                </div>
              </div>

              {/* fouth project */}
              <div className="p-4 bg-gray-800 rounded-lg">
                <p className="relative inline-block text-xl font-bold">
                  Rock and Mine Sonar Prediction
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700"></div>
                </p>
                <br />
                <p className="pt-5">
                  This is a Simple Machine Learning model to predict rock and
                  mines in the deep sea
                </p>
                <br />
                <span className="pt-10 font-semibold">
                  Technologies: Python, Numpy, Pandas, Seaborn,Jupiter notebook.
                </span>
                <br />
                <div className="flex justify-center pt-4">
                  <a
                    href="https://github.com/Chanukaa2002/Rock-vs-Mine-Prediction-using-Machine-Learning"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 mr-5 transition-transform transform rounded-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 hover:scale-90"
                  >
                    <i className="text-2xl text-white fas fa-code"></i>
                  </a>
                </div>
              </div>

              {/* fifth project */}
              <div className="p-4 bg-gray-800 rounded-lg">
                <p className="relative inline-block text-xl font-bold">
                  SoundWave (Music app)
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700"></div>
                </p>
                <br />
                <p className="pt-5">
                  This is a Music listen and uploading application , create for
                  University project
                </p>
                <br />
                <span className="pt-10 font-semibold">
                  Technologies: Java,Java Swing, mysql.
                </span>
                <br />
                <div className="flex justify-center pt-4">
                  <a
                    href="https://github.com/Chanukaa2002/SoundWave-ead-cw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 mr-5 transition-transform transform rounded-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 hover:scale-90"
                  >
                    <i className="text-2xl text-white fas fa-code"></i>
                  </a>
                </div>
              </div>

              {/* fifth project */}
              <div className="p-4 bg-gray-800 rounded-lg">
                <p className="relative inline-block text-xl font-bold">
                  StudentBots
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700"></div>
                </p>
                <br />
                <p className="pt-5">
                  This is a School Managment system, create for University
                  project
                </p>
                <br />
                <span className="pt-10 font-semibold">
                  Technologies: C#,.Net, mysql.
                </span>
                <br />
                <div className="flex justify-center pt-4">
                  <a
                    href="https://github.com/Chanukaa2002/Student_Bots"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 mr-5 transition-transform transform rounded-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 hover:scale-90"
                  >
                    <i className="text-2xl text-white fas fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
