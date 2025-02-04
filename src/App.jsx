import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import ProfilePicture from "./components/ProfilePicture";
import MainTags from "./components/MainTags";
import About from "./components/About";
import Project from "./components/projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import "../src/styles/background.css";
import BLogContaint from "./blog/BLogContaint";
import { Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    // Generate moving stars effect
    createStars();
  }, []);

  const createStars = () => {
    const starContainer = document.querySelector(".stars");
    const numberOfStars = 25;

    // Create star elements
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 99}vw`; // Limit max width slightly to avoid overflow
      star.style.animationDuration = `${Math.random() * 10 + 2}s`;
      star.style.animationDelay = `${Math.random() * 10}s`;

      starContainer.appendChild(star);
    }
  };

  return (
    <>
      <div className="absolute inset-0 stars -z-10 " />
      <NavBar />
      {/* Flex container for ProfilePicture and MainTags */}


      {/* Apply glass effect to About, Project, and Contact sections */}

      <div className="p-6 glass-effect">
      <div className="flex flex-col items-center md:flex-row md:space-x-8 md:items-start md:mt-20">
        <div className="pr-28 md:mt-20">
          <ProfilePicture />
        </div>
        <div className="-mt-0 md:mt-32">
          {" "}
          {/* Added negative margin-top */}
          <MainTags />
        </div>
      </div>
      <div className="-mt-20 md:mt-32"> </div>
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
