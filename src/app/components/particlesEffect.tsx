"use client";
import React, { useRef, useEffect, useState } from "react";

class Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  density: number;
  size: number;
  triggered: boolean;

  constructor(x: number, y: number, size: number) {
    this.x = x;
    this.y = y;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 100 + 1;
    this.size = size;
    this.triggered = false;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(mouse: { x: number; y: number; radius: number }, divisor: number) {
    if (this.triggered) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const maxDistance = mouse.radius;
      const force = (maxDistance - distance) / maxDistance;
      const directionX = forceDirectionX * force * this.density;
      const directionY = forceDirectionY * force * this.density;

      if (distance < mouse.radius) {
        this.x -= directionX;
        this.y -= directionY;
      } else {
        if (this.x !== this.baseX) {
          const dx = this.x - this.baseX;
          this.x -= dx / divisor;
        }
        if (this.y !== this.baseY) {
          const dy = this.y - this.baseY;
          this.y -= dy / divisor;
        }
      }
    }
  }

  reset() {
    this.x = this.baseX;
    this.y = this.baseY;
    this.triggered = false;
  }
}

function ParticlesEffect() {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const [screenHeight, setScreenHeight] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesArrayRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, radius: 10 });
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setScreenWidth(window?.innerWidth);
        setScreenHeight(window?.innerHeight);
      };

      handleResize(); // Initial setting
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && screenWidth && screenHeight) {
      const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
      
      const isTabletPortrait =
        screenWidth < screenHeight && screenWidth >= 768 && screenWidth <= 1024;

      if (isTabletPortrait) {
        // Tablet in portrait mode: use width-based height
        canvas.width = screenWidth;
        canvas.height = 920;
      } else {
        // Phone or other devices: use both width and height
        canvas.width = screenWidth;
        canvas.height = 500;
      }

      const drawTextAndParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const calculatedFontSize = Math.max(
          Math.min(screenWidth / 10, 80),
          16
        );
        const particleSize = screenWidth > 768 ? 3 : 2;
        const lineSpacing = screenWidth > 768 ? 0.14 : 0.08;

        ctx.fillStyle = "white";
        ctx.font = `${calculatedFontSize}px sans-serif`;

        const positions = [
          { text: "Elevating Digital", x: screenWidth * 0.12, y: canvas.height * 0.2 },
          { text: "Experiences", x: screenWidth * 0.4, y: canvas.height * (0.2 + lineSpacing) },
          { text: "Skillfully Crafted", x: screenWidth * 0.03, y: canvas.height * (0.2 + 2 * lineSpacing) },
          { text: "by a Creative", x: screenWidth * 0.3, y: canvas.height * (0.2 + 3 * lineSpacing) },
          { text: "Web Developer", x: screenWidth * 0.1, y: canvas.height * (0.2 + 4 * lineSpacing) },
          { text: "Web Designer", x: screenWidth * 0.32, y: canvas.height * (0.2 + 5 * lineSpacing) },
        ];

        positions.forEach(({ text, x, y }) => {
          ctx.fillText(text, x, y);
        });

        const textCords = ctx.getImageData(0, 0, canvas.width, canvas.height);

        const init = (): void => {
          particlesArrayRef.current = [];
          const densityAdjustment = screenWidth > 768 ? 3 : 1;

          for (let y = 0, y2 = textCords.height; y < y2; y += densityAdjustment) {
            for (let x = 0, x2 = textCords.width; x < x2; x += densityAdjustment) {
              if (textCords.data[(y * textCords.width + x) * 4 + 3] > 128) {
                const positionX = x;
                const positionY = y;
                particlesArrayRef.current.push(
                  new Particle(positionX, positionY, particleSize)
                );
              }
            }
          }
        };

        init();
      };

      const animate = () => {
        const divisor = screenWidth < 768 ? 60 : 20;
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          particlesArrayRef.current.forEach((particle) => {
            particle.draw(ctx);
            particle.update(mouseRef.current, divisor);
          });
          requestAnimationFrame(animate);
        }
      };

      drawTextAndParticles();
      animate();

    }
  }, [screenWidth, screenHeight]);

  const handleInteraction = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (screenWidth && screenWidth < 768) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          radius: 40,
        };
      }
      particlesArrayRef.current.forEach((p) => (p.triggered = true));

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        particlesArrayRef.current.forEach((p) => p.reset());
      }, 4000);
    }
  };

  const handleMouseMovement = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (screenWidth && screenWidth >= 768) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          radius: 60,
        };
      }
      particlesArrayRef.current.forEach((p) => (p.triggered = true));
    }
  };

  return (
    <canvas
      className="canvas overflow-hidden w-full absolute top-8 md:top-10 left-0 z-0"
      onMouseDown={handleInteraction}
      onMouseMove={handleMouseMovement}
      ref={canvasRef}
      id="canvas"
    ></canvas>
  );
}

export default ParticlesEffect;
