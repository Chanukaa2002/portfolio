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
      ], // Dynamic text
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
    <>
      <div className="absolute mt-48 left-96 top-48 ml-60">
        <span className="font-bold text-white text-7xl">
          I am a <br />
          <span
            ref={el}
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500"
          />
        </span>
      </div>
      <div className="absolute mt-48 text-xl text-gray-300 left-96 top-96 ml-60">
        <p>
          Backend Developer from Sri Lanka, specializing in creating powerful,
          scalable systems that drive seamless digital experiences.
        </p>
        <a
          href="https://drive.google.com/uc?export=download&id=1vtz_WGXxR0VC-IrxCrpUKjJBZpENJ2n9"
          download
        >
          <button className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
            Download CV
          </button>
        </a>
      </div>
    </>
  );
}

export default MainTags;
