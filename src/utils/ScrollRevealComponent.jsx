import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ScrollRevealComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Use Intersection Observer
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the component is visible
    triggerOnce: false, // Allow animation to reset when scrolling out
  });

  // Update the visibility state when the component enters the viewport
  useEffect(() => {
    if (inView) {
      setIsVisible(true); // Start animation when in view
    } else {
      setIsVisible(false); // Reset animation when out of view
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`transition-transform duration-1000 ease-out ${
        isVisible
          ? "opacity-100 scale-100" // Fully visible and normal size
          : "opacity-0 scale-75" // Hidden and shrunk
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollRevealComponent;
