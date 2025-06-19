
import { useEffect, useRef } from "react";

const AnimatedGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 500;
    canvas.height = 500;

    let rotation = 0;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 180;

    // Enhanced trade routes data with more routes
    const routes = [
      { from: { x: 120, y: 180 }, to: { x: 350, y: 220 }, color: "34, 211, 238" },
      { from: { x: 180, y: 120 }, to: { x: 280, y: 320 }, color: "59, 130, 246" },
      { from: { x: 100, y: 280 }, to: { x: 380, y: 140 }, color: "16, 185, 129" },
      { from: { x: 320, y: 100 }, to: { x: 150, y: 350 }, color: "245, 101, 101" },
      { from: { x: 80, y: 200 }, to: { x: 400, y: 280 }, color: "168, 85, 247" },
    ];

    // Particle system for AI effect
    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        particle.x += particle.speed;
        if (particle.x > canvas.width) particle.x = 0;
        
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = "rgba(59, 130, 246, 0.6)";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      ctx.globalAlpha = 1;
      
      // Draw globe outline with glow effect
      ctx.shadowColor = "rgba(59, 130, 246, 0.8)";
      ctx.shadowBlur = 20;
      ctx.strokeStyle = "rgba(59, 130, 246, 0.8)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Draw longitude lines with enhanced effect
      for (let i = 0; i < 12; i++) {
        const angle = (i * Math.PI) / 6 + rotation;
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.4 + Math.sin(rotation + i) * 0.2})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radius * Math.abs(Math.cos(angle)), radius, angle, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw latitude lines - Fixed calculation
      for (let i = 1; i < 5; i++) {
        const yOffset = (radius * (i - 2.5)) / 2.5;
        const y = centerY + yOffset;
        
        const discriminant = radius * radius - yOffset * yOffset;
        if (discriminant >= 0) {
          const ellipseRadius = Math.sqrt(discriminant);
          
          ctx.strokeStyle = `rgba(59, 130, 246, ${0.3 + Math.sin(rotation * 2 + i) * 0.1})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.ellipse(centerX, y, ellipseRadius, ellipseRadius * 0.25, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // Draw animated trade routes with enhanced effects
      routes.forEach((route, index) => {
        const progress = (rotation * 2 + index * 1.2) % (Math.PI * 4);
        const animProgress = (Math.sin(progress) + 1) / 2;
        
        // Draw route path
        ctx.strokeStyle = `rgba(${route.color}, ${0.6 * animProgress + 0.2})`;
        ctx.lineWidth = 3;
        ctx.shadowColor = `rgba(${route.color}, 0.8)`;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.moveTo(route.from.x, route.from.y);
        
        // Create curved path with dynamic control points
        const controlX = (route.from.x + route.to.x) / 2 + Math.sin(rotation * 3 + index) * 40;
        const controlY = (route.from.y + route.to.y) / 2 - 60 + Math.cos(rotation * 2 + index) * 20;
        ctx.quadraticCurveTo(controlX, controlY, route.to.x, route.to.y);
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Draw moving dots with trails
        for (let j = 0; j < 3; j++) {
          const dotProgress = (animProgress + j * 0.3) % 1;
          const dotX = route.from.x + (route.to.x - route.from.x) * dotProgress;
          const dotY = route.from.y + (route.to.y - route.from.y) * dotProgress;
          
          const size = 6 - j * 1.5;
          const opacity = 1 - j * 0.3;
          
          ctx.fillStyle = `rgba(${route.color}, ${opacity})`;
          ctx.shadowColor = `rgba(${route.color}, 0.8)`;
          ctx.shadowBlur = 15;
          ctx.beginPath();
          ctx.arc(dotX, dotY, size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.shadowBlur = 0;
      });

      // Draw continents with enhanced styling
      ctx.fillStyle = "rgba(59, 130, 246, 0.6)";
      ctx.shadowColor = "rgba(59, 130, 246, 0.8)";
      ctx.shadowBlur = 15;
      
      // North America
      ctx.beginPath();
      ctx.ellipse(centerX - 60, centerY - 40, 35, 25, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Europe/Africa
      ctx.beginPath();
      ctx.ellipse(centerX + 20, centerY - 10, 30, 40, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Asia
      ctx.beginPath();
      ctx.ellipse(centerX + 60, centerY + 10, 45, 30, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.shadowBlur = 0;

      // Add connection nodes
      const nodes = [
        { x: centerX - 60, y: centerY - 40 },
        { x: centerX + 20, y: centerY - 10 },
        { x: centerX + 60, y: centerY + 10 },
      ];
      
      nodes.forEach((node, index) => {
        const pulse = Math.sin(rotation * 4 + index * 2) * 0.5 + 0.5;
        ctx.fillStyle = `rgba(34, 211, 238, ${0.8 + pulse * 0.2})`;
        ctx.shadowColor = "rgba(34, 211, 238, 1)";
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 8 + pulse * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      rotation += 0.008;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="drop-shadow-2xl"
        style={{ 
          filter: "drop-shadow(0 0 40px rgba(59, 130, 246, 0.4))",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)"
        }}
      />
    </div>
  );
};

export default AnimatedGlobe;
