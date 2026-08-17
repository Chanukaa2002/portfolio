import React, { useEffect, useRef } from "react";

export const NeuralNetworkBackground = () => {
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

    // Mouse coordinates for interactive neural connections
    let mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      isActive: false,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // Neural network color palette (AI / Deep Learning neon theme)
    const nodeColors = [
      "56, 189, 248",  // Cyan 400
      "168, 85, 247",  // Purple 500
      "99, 102, 241",  // Indigo 500
      "255, 255, 255", // Crisp White
      "59, 130, 246",  // Blue 500
    ];

    let nodes = [];
    const maxConnectionDist = 145; // Connection radius
    const mouseConnectionDist = 180; // Cursor interaction radius

    const initNodes = () => {
      // Density calculated for optimal balance of tech aesthetics & readability
      const count = Math.min(Math.max(Math.floor((width * height) / 16000), 45), 85);
      nodes = [];

      for (let i = 0; i < count; i++) {
        const color = nodeColors[Math.floor(Math.random() * nodeColors.length)];
        const isCoreNeuron = Math.random() < 0.2; // 20% are slightly larger core neurons

        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: isCoreNeuron ? Math.random() * 0.8 + 2.0 : Math.random() * 0.6 + 1.2, // 1.2px to 2.8px
          baseAlpha: isCoreNeuron ? 0.75 : 0.45,
          pulseAlpha: 0,
          color: color,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          isCore: isCoreNeuron,
        });
      }
    };

    initNodes();

    const handleResize = () => {
      setCanvasDimensions();
      initNodes();
    };

    window.addEventListener("resize", handleResize);

    // Active Synaptic Signals / Data Packets traveling along connections
    let signalPulses = [];
    let lastPulseTime = performance.now();

    const spawnSignalPulse = () => {
      if (nodes.length < 2) return;

      // Pick a random source node
      const fromIdx = Math.floor(Math.random() * nodes.length);
      const fromNode = nodes[fromIdx];

      // Find all neighbors within connection distance
      const neighbors = [];
      for (let i = 0; i < nodes.length; i++) {
        if (i === fromIdx) continue;
        const dx = nodes[i].x - fromNode.x;
        const dy = nodes[i].y - fromNode.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxConnectionDist) {
          neighbors.push(nodes[i]);
        }
      }

      if (neighbors.length > 0) {
        const toNode = neighbors[Math.floor(Math.random() * neighbors.length)];
        signalPulses.push({
          fromX: fromNode.x,
          fromY: fromNode.y,
          toX: toNode.x,
          toY: toNode.y,
          targetNode: toNode,
          progress: 0,
          speed: Math.random() * 0.018 + 0.014, // Travel speed
          color: Math.random() > 0.4 ? "56, 189, 248" : "168, 85, 247",
        });
      }
    };

    let tick = 0;

    // Animation Loop
    const render = (time) => {
      // Smooth mouse lerp
      if (mouse.isActive) {
        mouse.x += (mouse.targetX - mouse.x) * 0.1;
        mouse.y += (mouse.targetY - mouse.y) * 0.1;
      }

      ctx.clearRect(0, 0, width, height);
      tick += 1;

      // 1. Update & Move Neurons
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        // Bounce gently off borders
        if (node.x <= 5 || node.x >= width - 5) node.vx *= -1;
        if (node.y <= 5 || node.y >= height - 5) node.vy *= -1;

        // Keep inside bounds
        node.x = Math.max(5, Math.min(width - 5, node.x));
        node.y = Math.max(5, Math.min(height - 5, node.y));

        // Decay activation flash
        if (node.pulseAlpha > 0) {
          node.pulseAlpha -= 0.02;
        }

        // Mouse gentle gravitational pull
        if (mouse.isActive) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseConnectionDist && dist > 10) {
            const force = (1 - dist / mouseConnectionDist) * 0.2;
            node.x += (dx / dist) * force;
            node.y += (dy / dist) * force;
          }
        }
      }

      // 2. Draw Synaptic Connections (Lines between nearby nodes)
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeB.x - nodeA.x;
          const dy = nodeB.y - nodeA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectionDist) {
            // Opacity scales with proximity
            const alpha = (1 - dist / maxConnectionDist) * 0.22;

            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);

            const gradient = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
            gradient.addColorStop(0, `rgba(${nodeA.color}, ${alpha})`);
            gradient.addColorStop(1, `rgba(${nodeB.color}, ${alpha})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }

        // Cursor interactive synapse connection
        if (mouse.isActive) {
          const mdx = mouse.x - nodeA.x;
          const mdy = mouse.y - nodeA.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < mouseConnectionDist) {
            const mAlpha = (1 - mdist / mouseConnectionDist) * 0.45;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${mAlpha})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }

      // 3. Spawn & Draw Traveling Synaptic Signal Pulses (Activations)
      if (time - lastPulseTime > 400 && signalPulses.length < 12) {
        spawnSignalPulse();
        lastPulseTime = time;
      }

      for (let p = signalPulses.length - 1; p >= 0; p--) {
        const pulse = signalPulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          // Trigger activation ripple on target neuron
          if (pulse.targetNode) {
            pulse.targetNode.pulseAlpha = 0.8;
          }
          signalPulses.splice(p, 1);
          continue;
        }

        // Interpolated position along synapse
        const currX = pulse.fromX + (pulse.toX - pulse.fromX) * pulse.progress;
        const currY = pulse.fromY + (pulse.toY - pulse.fromY) * pulse.progress;

        // Draw glowing data packet
        ctx.beginPath();
        ctx.arc(currX, currY, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pulse.color}, 0.9)`;
        ctx.shadowColor = `rgba(${pulse.color}, 0.8)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // 4. Draw Neurons (Nodes)
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const pulseSin = Math.sin(tick * node.pulseSpeed + node.pulsePhase);
        const currentAlpha = Math.min(1, node.baseAlpha + pulseSin * 0.15 + node.pulseAlpha);

        // Core neuron halo / glow
        if (node.isCore || node.pulseAlpha > 0.2) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${node.color}, ${(currentAlpha * 0.25).toFixed(2)})`;
          ctx.fill();
        }

        // Neuron center dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${node.color}, ${currentAlpha.toFixed(2)})`;
        ctx.fill();
      }

      // 5. Draw Active Cursor Neuron
      if (mouse.isActive && mouse.x > 0 && mouse.y > 0) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56, 189, 248, 0.85)";
        ctx.shadowColor = "rgba(56, 189, 248, 0.9)";
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56, 189, 248, 0.2)";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
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

export default NeuralNetworkBackground;
