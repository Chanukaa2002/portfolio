import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProfilePicture from "./components/ProfilePicture";
import MainTags from "./components/MainTags";
import About from "./components/About";
import Project from "./components/projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Certificates from "./components/certificate";
import "../src/styles/background.css";

// Create a separate component to handle route-based rendering
function AppContent() {
  const location = useLocation();
  const isCertificatesPage = location.pathname === "/certificates";

  return (
    <>
      <div className="absolute inset-0 stars -z-10" />
      
      {/* Conditionally render NavBar */}
      {!isCertificatesPage && <NavBar />}

      <Routes>
        <Route path="/certificates" element={<Certificates />} />
        <Route
          path="/"
          element={
            <div className="p-6 glass-effect">
              <div className="flex flex-col items-center md:flex-row md:space-x-8 md:items-start md:mt-20">
                <div className="pr-28 md:mt-20">
                  <ProfilePicture />
                </div>
                <div className="-mt-0 md:mt-32">
                  <MainTags />
                </div>
              </div>
              <div className="-mt-20 md:mt-32"></div>
              <About />
              <Project />
              <Contact />
              <Footer />
            </div>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  useEffect(() => {
    // Generate moving stars effect
    createStars();
  }, []);

  const createStars = () => {
    const starContainer = document.querySelector(".stars");
    if (starContainer) {
      const numberOfStars = 25;

      // Create star elements
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 99}vw`;
        star.style.animationDuration = `${Math.random() * 10 + 2}s`;
        star.style.animationDelay = `${Math.random() * 10}s`;

        starContainer.appendChild(star);
      }
    }
  };

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;