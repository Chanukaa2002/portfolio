import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import ProfilePicture from "./components/ProfilePicture";
import MainTags from "./components/MainTags";
import About from "./components/About";
import Project from "./components/projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import "../src/styles/background.css";

function App() {
  useEffect(() => {
    // Generate moving stars effect
    createStars();
  }, []);

  const createStars = () => {
    const starContainer = document.querySelector(".stars");
    const numberOfStars = 150;

    // Create star elements
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 99}vw`; // Limit max width slightly to avoid overflow
      star.style.animationDuration = `${Math.random() * 5 + 2}s`;
      star.style.animationDelay = `${Math.random() * 5}s`;

      starContainer.appendChild(star);
    }
  };

  return (
    <>
      <div className="absolute inset-0 stars -z-10" />
      <NavBar />
      {/* Flex container for ProfilePicture and MainTags */}
      <div className="flex flex-col items-center justify-center space-y-1 md:flex-row md:space-y-0 md:space-x-8">
        <div className="pr-28">
          <ProfilePicture />
        </div>
        <div>
          <MainTags />
        </div>
      </div>

      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
