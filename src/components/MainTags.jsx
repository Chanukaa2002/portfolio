import React from "react";
import Typed from "typed.js";

function MainTags() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Backend Developer",
        "Undergraduate",
        "Freelancer",
        "Programmer",
      ],
      typeSpeed: 70,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center md:text-left md:items-start md:px-16 lg:px-32 md:py-1">
      {/* Dynamic Text */}
      <div>
        <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-6xl lg:text-7xl">
          I am a <br />
          <span
            ref={el}
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500"
          />
        </h1>
      </div>

      {/* Description and Button */}
      <div className="mt-6 text-base text-gray-300 sm:text-lg md:text-xl lg:text-2xl">
        <p>
          Backend Developer from Sri Lanka, specializing in creating powerful,
          scalable systems that drive seamless digital experiences.
        </p>
        <a
          href="https://drive.google.com/uc?export=download&id=1vtz_WGXxR0VC-IrxCrpUKjJBZpENJ2n9"
          download
        >
          <button className="px-6 py-2 mt-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
            Download CV
          </button>
        </a>
      </div>

      {/* Reduce margin-top on small screens */}
      <div className="mt-10 md:mt-20">
        {" "}
        {/* Adjust margin here */}
        {/* Main Tags section content */}
      </div>
    </div>
  );
}

export default MainTags;
