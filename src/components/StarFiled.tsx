"use client"

import React, { useRef, useEffect } from 'react';

const StarField = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas:any = canvasRef.current;
        const context = canvas.getContext('2d');

        // Set canvas size to match the viewport
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Function to generate random number within a range
        const getRandom = (min:number, max:number) => Math.random() * (max - min) + min;

        // Function to generate stars
        const generateStars = (numStars:any) => {
            return Array.from({ length: numStars }, () => ({
                x: getRandom(0, canvas.width),
                y: getRandom(0, canvas.height),
                size: getRandom(.5, 1.5),
                opacity: getRandom(0, 1),
                speedX: getRandom(-0.1, 0.1),
                speedY: getRandom(-0.1, 0.1),
            }));
        };

        let stars = generateStars(100);

        const drawStars = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                context.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                context.beginPath();
                context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                context.fill();

                // Update star position
                star.x += star.speedX;
                star.y += star.speedY;

                // Wrap around when stars go off-screen
                if (star.x > canvas.width + star.size) star.x = -star.size;
                if (star.x < -star.size) star.x = canvas.width + star.size;
                if (star.y > canvas.height + star.size) star.y = -star.size;
                if (star.y < -star.size) star.y = canvas.height + star.size;
            });

            requestAnimationFrame(drawStars);
        };

        // Initial draw
        drawStars();

        // Function to handle window resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            stars = generateStars(100); // Regenerate stars on resize
        };

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default StarField;

