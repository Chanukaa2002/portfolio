import React, { useEffect, useRef } from "react";

export const LossLandscapeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;

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

    let mouse = {
      x: width * 0.5,
      y: height * 0.5,
      targetX: width * 0.5,
      targetY: height * 0.5,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", () => {
      setCanvasDimensions();
      initBackgroundStars();
    });

    // 1. Ambient Background Dotted Field (Spanning full screen)
    let ambientStars = [];
    const starColors = [
      "56, 189, 248",  // Cyan
      "168, 85, 247",  // Soft purple
      "224, 231, 255", // Soft indigo
      "255, 255, 255", // Crisp white
    ];

    const initBackgroundStars = () => {
      ambientStars = [];
      const count = Math.min(Math.max(Math.floor((width * height) / 12000), 60), 130);

      for (let i = 0; i < count; i++) {
        ambientStars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.75 + 0.4, // 0.4px to 1.15px
          baseAlpha: Math.random() * 0.28 + 0.14,
          pulseSpeed: Math.random() * 0.015 + 0.006,
          pulsePhase: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.12,
          vy: -(Math.random() * 0.16 + 0.04),
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }
    };

    initBackgroundStars();

    // 2. Global Hub Coordinates (Lat, Lon in radians, Name)
    const hubs = [
      { name: "Colombo", lat: (6.9 * Math.PI) / 180, lon: (79.8 * Math.PI) / 180 },
      { name: "Singapore", lat: (1.3 * Math.PI) / 180, lon: (103.8 * Math.PI) / 180 },
      { name: "Tokyo", lat: (35.6 * Math.PI) / 180, lon: (139.6 * Math.PI) / 180 },
      { name: "London", lat: (51.5 * Math.PI) / 180, lon: (-0.1 * Math.PI) / 180 },
      { name: "San Francisco", lat: (37.7 * Math.PI) / 180, lon: (-122.4 * Math.PI) / 180 },
      { name: "New York", lat: (40.7 * Math.PI) / 180, lon: (-74.0 * Math.PI) / 180 },
      { name: "Frankfurt", lat: (50.1 * Math.PI) / 180, lon: (8.6 * Math.PI) / 180 },
      { name: "Sydney", lat: (-33.8 * Math.PI) / 180, lon: (151.2 * Math.PI) / 180 },
    ];

    const arcPairs = [
      [0, 1], // Colombo -> Singapore
      [1, 2], // Singapore -> Tokyo
      [2, 4], // Tokyo -> San Francisco
      [4, 5], // San Francisco -> New York
      [5, 3], // New York -> London
      [3, 6], // London -> Frankfurt
      [6, 0], // Frankfurt -> Colombo
      [1, 7], // Singapore -> Sydney
    ];

    // 3. Orbiting Satellites Configuration
    const satellites = [
      {
        id: "SAT-ML-01",
        orbitRadiusMul: 1.28,
        speed: 0.009,
        angle: 0.5,
        tiltX: 0.55,
        tiltY: 0.35,
        color: "56, 189, 248",
      },
      {
        id: "RELAY-GEO-2",
        orbitRadiusMul: 1.42,
        speed: -0.006,
        angle: 2.8,
        tiltX: -0.42,
        tiltY: 0.65,
        color: "192, 132, 252",
      },
      {
        id: "ORBIT-NODE-3",
        orbitRadiusMul: 1.34,
        speed: 0.0075,
        angle: 4.2,
        tiltX: 0.85,
        tiltY: -0.25,
        color: "52, 211, 153",
      },
    ];

    // 4. Globe Dotted Points
    let globePoints = [];

    const initGlobePoints = () => {
      globePoints = [];

      // Grid Rings
      for (let latDeg = -75; latDeg <= 75; latDeg += 25) {
        const lat = (latDeg * Math.PI) / 180;
        const numLon = 48;
        for (let j = 0; j < numLon; j++) {
          const lon = (j / numLon) * Math.PI * 2 - Math.PI;
          globePoints.push({ lat, lon, isLand: false });
        }
      }

      for (let lonDeg = -180; lonDeg < 180; lonDeg += 30) {
        const lon = (lonDeg * Math.PI) / 180;
        const numLat = 30;
        for (let j = 0; j < numLat; j++) {
          const lat = (j / (numLat - 1)) * Math.PI - Math.PI / 2;
          globePoints.push({ lat, lon, isLand: false });
        }
      }

      // Continents
      const continents = [
        { minLat: 15, maxLat: 65, minLon: -140, maxLon: -60, density: 160 }, // North America
        { minLat: -50, maxLat: 10, minLon: -80, maxLon: -35, density: 100 },  // South America
        { minLat: 36, maxLat: 68, minLon: -10, maxLon: 40, density: 130 },    // Europe
        { minLat: -34, maxLat: 36, minLon: -15, maxLon: 50, density: 150 },   // Africa
        { minLat: 10, maxLat: 70, minLon: 40, maxLon: 145, density: 280 },   // Asia
        { minLat: -42, maxLat: -12, minLon: 115, maxLon: 155, density: 85 },  // Australia
      ];

      continents.forEach((cont) => {
        for (let i = 0; i < cont.density; i++) {
          const latDeg = cont.minLat + Math.random() * (cont.maxLat - cont.minLat);
          const lonDeg = cont.minLon + Math.random() * (cont.maxLon - cont.minLon);
          globePoints.push({
            lat: (latDeg * Math.PI) / 180,
            lon: (lonDeg * Math.PI) / 180,
            isLand: true,
          });
        }
      });
    };

    initGlobePoints();

    // Data Arc Pulses
    let arcPulses = arcPairs.map((pair, idx) => ({
      pairIndex: idx,
      progress: Math.random(),
      speed: Math.random() * 0.005 + 0.003,
    }));

    let rotationAngle = 0;
    let tick = 0;

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.03;
      mouse.y += (mouse.targetY - mouse.y) * 0.03;

      const mouseTiltX = ((mouse.y - height * 0.5) / height) * 0.35;
      const mouseTiltY = ((mouse.x - width * 0.5) / width) * 0.45;

      ctx.clearRect(0, 0, width, height);

      rotationAngle += 0.0028; // Smooth, slow rotation
      tick += 1;

      // ======================================================================
      // 1. AMBIENT BACKGROUND PARTICLES (REST OF THE WEBPAGE)
      // ======================================================================
      for (let i = 0; i < ambientStars.length; i++) {
        const s = ambientStars[i];

        s.x += s.vx;
        s.y += s.vy;

        if (s.y < -10) s.y = height + 10;
        if (s.y > height + 10) s.y = -10;
        if (s.x < -10) s.x = width + 10;
        if (s.x > width + 10) s.x = -10;

        const pulse = Math.sin(tick * s.pulseSpeed + s.pulsePhase);
        const alpha = Math.max(0.08, Math.min(0.5, s.baseAlpha + pulse * 0.12));

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${alpha})`;
        ctx.fill();
      }

      // ======================================================================
      // 2. 3D HOLOGRAPHIC GLOBE (REDUCED RADIUS BY ~12% & CENTER-BALANCED)
      // ======================================================================
      // Slightly smaller diameter for breathing room
      const globeRadius = Math.min(width, height) * (width < 1024 ? 0.36 : 0.34);
      const centerX = width * 0.52;
      const centerY = height * 0.48;
      const fov = 900;

      const projectPoint = (lat, lon, r = globeRadius) => {
        const currentLon = lon + rotationAngle + mouseTiltY;
        const currentLat = lat + mouseTiltX;

        const x = r * Math.cos(currentLat) * Math.sin(currentLon);
        const y = -r * Math.sin(currentLat);
        const z = r * Math.cos(currentLat) * Math.cos(currentLon);

        const scale = fov / (fov - z);
        const scrX = centerX + x * scale;
        const scrY = centerY + y * scale;

        const isFront = z > -globeRadius * 0.15;
        const alpha = isFront ? Math.max(0.14, (z + globeRadius) / (globeRadius * 2.2)) : 0.05;

        return { x: scrX, y: scrY, z, scale, alpha, isFront };
      };

      // Soft Atmospheric Aura
      const atmoGrad = ctx.createRadialGradient(centerX, centerY, globeRadius * 0.65, centerX, centerY, globeRadius * 1.28);
      atmoGrad.addColorStop(0, "rgba(56, 189, 248, 0.06)");
      atmoGrad.addColorStop(0.65, "rgba(168, 85, 247, 0.03)");
      atmoGrad.addColorStop(1, "rgba(7, 11, 25, 0)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 1.28, 0, Math.PI * 2);
      ctx.fillStyle = atmoGrad;
      ctx.fill();

      // Outer Sphere Border Rim
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(56, 189, 248, 0.14)";
      ctx.lineWidth = 1.0;
      ctx.stroke();

      // 3. Globe Dotted Surface Points
      for (let i = 0; i < globePoints.length; i++) {
        const pt = globePoints[i];
        const proj = projectPoint(pt.lat, pt.lon);

        if (proj.isFront) {
          const dotRadius = pt.isLand ? 1.25 * proj.scale : 0.65 * proj.scale;
          const color = pt.isLand ? "56, 189, 248" : "99, 102, 241";

          ctx.beginPath();
          ctx.arc(proj.x, proj.y, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, ${proj.alpha * (pt.isLand ? 0.65 : 0.24)})`;
          ctx.fill();
        } else if (i % 4 === 0) {
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, 0.55, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(56, 189, 248, 0.05)";
          ctx.fill();
        }
      }

      // 4. 3D Curved Data Arcs between Hubs
      arcPairs.forEach((pair) => {
        const hubA = hubs[pair[0]];
        const hubB = hubs[pair[1]];

        const arcSegments = 22;
        ctx.beginPath();

        for (let s = 0; s <= arcSegments; s++) {
          const t = s / arcSegments;
          const lat = hubA.lat + (hubB.lat - hubA.lat) * t;
          const lon = hubA.lon + (hubB.lon - hubA.lon) * t;

          const arcAltitude = Math.sin(t * Math.PI) * (globeRadius * 0.22);
          const r = globeRadius + arcAltitude;

          const proj = projectPoint(lat, lon, r);

          if (s === 0) {
            ctx.moveTo(proj.x, proj.y);
          } else {
            ctx.lineTo(proj.x, proj.y);
          }
        }

        const pA = projectPoint(hubA.lat, hubA.lon);
        const pB = projectPoint(hubB.lat, hubB.lon);
        const arcAlpha = Math.max(0.08, (pA.alpha + pB.alpha) * 0.28);

        ctx.strokeStyle = `rgba(56, 189, 248, ${arcAlpha})`;
        ctx.lineWidth = 1.0;
        ctx.setLineDash([2, 3]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // 5. Data Packet Pulses
      arcPulses.forEach((pulse) => {
        pulse.progress += pulse.speed;
        if (pulse.progress > 1) pulse.progress = 0;

        const pair = arcPairs[pulse.pairIndex];
        const hubA = hubs[pair[0]];
        const hubB = hubs[pair[1]];

        const t = pulse.progress;
        const lat = hubA.lat + (hubB.lat - hubA.lat) * t;
        const lon = hubA.lon + (hubB.lon - hubA.lon) * t;

        const arcAltitude = Math.sin(t * Math.PI) * (globeRadius * 0.22);
        const r = globeRadius + arcAltitude;

        const proj = projectPoint(lat, lon, r);

        if (proj.isFront) {
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, 2.6, 0, Math.PI * 2);
          ctx.fillStyle = "#38bdf8";
          ctx.shadowColor = "#38bdf8";
          ctx.shadowBlur = 9;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // 6. Global Hub Beacons & City Text Labels
      hubs.forEach((hub) => {
        const proj = projectPoint(hub.lat, hub.lon);

        if (proj.isFront) {
          // Pulsing Beacon Ring
          const pulseSize = (Math.sin(tick * 0.08 + hub.lat * 5) + 1) * 2.5 + 2.5;
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, pulseSize * proj.scale, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(56, 189, 248, ${proj.alpha * 0.55})`;
          ctx.lineWidth = 0.95;
          ctx.stroke();

          // Hub Core Dot
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, 2.4 * proj.scale, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#38bdf8";
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;

          // City Text Label with Leader Line (Clean Monospace Tag)
          if (proj.alpha > 0.4) {
            const labelX = proj.x + 10;
            const labelY = proj.y - 4;

            // Small Pointer Line
            ctx.beginPath();
            ctx.moveTo(proj.x + 3, proj.y);
            ctx.lineTo(proj.x + 8, labelY);
            ctx.strokeStyle = `rgba(56, 189, 248, ${proj.alpha * 0.4})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // City Name Tag
            ctx.font = "9px 'JetBrains Mono', monospace";
            ctx.fillStyle = `rgba(226, 232, 240, ${Math.min(1, proj.alpha * 0.95)})`;
            ctx.textAlign = "left";
            ctx.fillText(hub.name, labelX, labelY + 3);
          }
        }
      });

      // ======================================================================
      // 7. ORBITING HOLOGRAPHIC SATELLITES
      // ======================================================================
      satellites.forEach((sat) => {
        sat.angle += sat.speed;

        const orbR = globeRadius * sat.orbitRadiusMul;
        const rawX = Math.cos(sat.angle) * orbR;
        const rawY = Math.sin(sat.angle) * orbR * Math.cos(sat.tiltX);
        const rawZ = Math.sin(sat.angle) * orbR * Math.sin(sat.tiltX);

        // Apply mouse camera tilt
        const currentLon = Math.atan2(rawX, rawZ) + rotationAngle * 0.5 + mouseTiltY;
        const rHoriz = Math.sqrt(rawX * rawX + rawZ * rawZ);
        const x3d = rHoriz * Math.sin(currentLon);
        const z3d = rHoriz * Math.cos(currentLon);
        const y3d = rawY + mouseTiltX * 40;

        const scale = fov / (fov - z3d);
        const satScrX = centerX + x3d * scale;
        const satScrY = centerY + y3d * scale;

        const isFront = z3d > -globeRadius * 0.1;
        const satAlpha = isFront ? Math.max(0.3, (z3d + globeRadius) / (globeRadius * 2)) : 0.1;

        if (isFront) {
          // Draw Satellite Body & Solar Panels [— ⬡ —]
          ctx.save();
          ctx.translate(satScrX, satScrY);
          ctx.rotate(sat.angle + Math.PI / 4);

          // Solar Wing Left
          ctx.fillStyle = `rgba(${sat.color}, ${satAlpha * 0.85})`;
          ctx.fillRect(-7, -1.2, 4.5, 2.4);

          // Solar Wing Right
          ctx.fillRect(2.5, -1.2, 4.5, 2.4);

          // Core Satellite Hub
          ctx.beginPath();
          ctx.arc(0, 0, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = `rgb(${sat.color})`;
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;

          ctx.restore();

          // Satellite Label
          ctx.font = "7.5px monospace";
          ctx.fillStyle = `rgba(${sat.color}, ${satAlpha * 0.75})`;
          ctx.textAlign = "left";
          ctx.fillText(`[${sat.id}]`, satScrX + 8, satScrY - 4);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
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
        opacity: 0.86,
      }}
      aria-hidden="true"
    />
  );
};

export default LossLandscapeBackground;
