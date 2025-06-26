import React from "react";
import Typed from "typed.js";
import ScrollRevealComponent from "../utils/ScrollRevealComponent";

function MainTags() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '<span class="text-white">A</span> <span class="gradient-text">Backend Developer</span>',
        '<span class="text-white">An</span> <span class="gradient-text">Undergraduate</span>',
        '<span class="text-white">A</span> <span class="gradient-text">Self Learner</span>',
        '<span class="text-white">A</span> <span class="gradient-text">Programmer</span>',
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
    <ScrollRevealComponent>
      <div className="flex flex-col items-center justify-center px-4 text-center md:text-left md:items-start md:px-16 lg:px-32 md:py-1">
        <div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-6xl lg:text-6xl">
            I am <br />
            <span
              ref={el}
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-600 via-lime-500 to-lime-400"
            />
          </h1>
        </div>

        <div className="mt-6 text-base text-gray-300 sm:text-lg md:text-xl lg:text-2xl">
          <p>
            Backend Developer from Sri Lanka, specializing in creating powerful,
            scalable systems that drive seamless digital experiences.
          </p>
          <a
            href="https://drive.google.com/file/d/1tl3eyNnM5z8nxoKDNp1tvW0bLPWOjtpy/view?usp=sharing"
            // download
          >
            <button className="px-6 py-2 mt-4 font-bold text-black rounded-full bg-gradient-to-r from-lime-600 via-lime-500 to-lime-400 hover:bg-gradient-to-r hover:from-lime-600 hover:via-lime-500 hover:to-lime-300">
              Download CV
            </button>
          </a>
        </div>

        <div className="mt-10 md:mt-20 sm:mt-4"></div>
      </div>
    </ScrollRevealComponent>
  );
}

export default MainTags;
