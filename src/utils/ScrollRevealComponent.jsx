import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ScrollRevealComponent = ({ children }) => {
  const [shouldTransition, setShouldTransition] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);

  // Use Intersection Observer
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setScrollingDown(true);
      } else {
        // Scrolling up
        setScrollingDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Handle transition re-triggering
  useEffect(() => {
    if (inView && scrollingDown) {
      setShouldTransition(true); // Trigger transition when scrolling down and in view
    }

    if (!inView) {
      setShouldTransition(false); // Reset transition when out of view
    }
  }, [inView, scrollingDown]);

  return (
    <div
      ref={ref}
      className={`transition-transform duration-1000 ease-out ${
        shouldTransition
          ? "opacity-100 scale-100" // Fully visible and animated
          : "opacity-100 scale-100" // Stay visible without transition
      } ${!inView && !shouldTransition ? "opacity-0 scale-75" : ""}`} // Hidden when out of view
    >
      {children}
    </div>
  );
};

export default ScrollRevealComponent;
