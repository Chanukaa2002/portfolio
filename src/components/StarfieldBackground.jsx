import React, { useEffect, useRef } from "react";

export const StarfieldBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Retina & HiDPI scale setup
    const setCanvasDimensions = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    setCanvasDimensions();

    // Mouse coordinates for gentle parallax
    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Starlight palette: Crisp white, celestial cyan, soft violet
    const colors = [
      "255, 255, 255", // Pure white (60%)
      "255, 255, 255",
      "255, 255, 255",
      "186, 230, 253", // Soft cyan
      "224, 231, 255", // Soft indigo
      "233, 213, 255", // Soft lilac
    ];

    let stars = [];

    const initStars = () => {
      // Increased star density (160 to 320 stars)
      const starCount = Math.min(Math.max(Math.floor((width * height) / 4800), 160), 320);
      stars = [];

      for (let i = 0; i < starCount; i++) {
        const depth = Math.random() * 0.8 + 0.2; // 0.2 to 1.0
        const isBright = Math.random() < 0.12;

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: depth,
          radius: isBright ? depth * 1.1 + 0.8 : depth * 0.75 + 0.4, // 0.5px to 1.9px
          baseAlpha: isBright ? Math.random() * 0.25 + 0.6 : Math.random() * 0.3 + 0.25,
          twinkleSpeed: Math.random() * 0.02 + 0.008,
          twinklePhase: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.12 * depth,
          vy: -(Math.random() * 0.22 + 0.08) * depth, // Gentle upward drift
          color: colors[Math.floor(Math.random() * colors.length)],
          hasGlow: isBright,
        });
      }
    };

    initStars();

    const handleResize = () => {
      setCanvasDimensions();
      initStars();
    };

    window.addEventListener("resize", handleResize);

    let tick = 0;

    // Animation Loop
    const render = () => {
      // Smooth subtle mouse parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.03;
      mouse.y += (mouse.targetY - mouse.y) * 0.03;

      const mouseOffsetX = (mouse.x - width / 2) * 0.015;
      const mouseOffsetY = (mouse.y - height / 2) * 0.015;

      ctx.clearRect(0, 0, width, height);
      tick += 1;

      // Draw all stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Move star
        star.x += star.vx;
        star.y += star.vy;

        // Wrap edges smoothly
        if (star.y < -10) star.y = height + 10;
        if (star.y > height + 10) star.y = -10;
        if (star.x < -10) star.x = width + 10;
        if (star.x > width + 10) star.x = -10;

        // Twinkle calculation
        const twinkle = Math.sin(tick * star.twinkleSpeed + star.twinklePhase);
        const alpha = Math.max(0.12, Math.min(0.9, star.baseAlpha + twinkle * 0.2));

        // Parallax position
        const posX = star.x - mouseOffsetX * star.z;
        const posY = star.y - mouseOffsetY * star.z;

        // Soft aura for prominent stars
        if (star.hasGlow && alpha > 0.45) {
          ctx.beginPath();
          ctx.arc(posX, posY, star.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${star.color}, ${alpha * 0.2})`;
          ctx.fill();
        }

        // Star core
        ctx.beginPath();
        ctx.arc(posX, posY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color}, ${alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] w-full h-full"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 1,
        opacity: 0.85,
      }}
      aria-hidden="true"
    />
  );
};

export default StarfieldBackground;
