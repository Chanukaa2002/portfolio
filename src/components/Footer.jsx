import React, { useRef, useEffect } from 'react';

export const BackgroundStars = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        
        const setCanvasDimensions = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.body.scrollHeight;
        };
        
        setCanvasDimensions();

        const stars = [];
        const numStars = 300;

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.2,
                vx: (Math.random() - 0.5) / 4,
                vy: (Math.random() - 0.5) / 4,
                opacity: Math.random() * 0.5 + 0.2
            });
        }

        const animate = () => {
            ctx.fillStyle = '#0b1120';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                star.x += star.vx;
                star.y += star.vy;

                if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx;
                if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy;

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            setCanvasDimensions();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 -z-20"></canvas>;
};
