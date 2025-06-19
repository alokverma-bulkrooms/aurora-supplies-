
import { useEffect, useRef } from "react";

const AnimatedGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 400;

    let rotation = 0;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 150;

    // Trade routes data
    const routes = [
      { from: { x: 100, y: 150 }, to: { x: 300, y: 200 } },
      { from: { x: 150, y: 100 }, to: { x: 250, y: 300 } },
      { from: { x: 80, y: 250 }, to: { x: 320, y: 120 } },
    ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw globe outline
      ctx.strokeStyle = "rgba(59, 130, 246, 0.6)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw longitude lines
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4 + rotation;
        ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radius * Math.cos(angle), radius, angle, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw latitude lines
      for (let i = 1; i < 4; i++) {
        const y = centerY + (radius * (i - 2)) / 2;
        const ellipseRadius = Math.sqrt(radius * radius - Math.pow((i - 2) * radius / 2, 2));
        
        ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(centerX, y, ellipseRadius, ellipseRadius * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw animated trade routes
      routes.forEach((route, index) => {
        const progress = (rotation + index * 0.5) % (Math.PI * 2);
        const animProgress = Math.sin(progress) * 0.5 + 0.5;
        
        ctx.strokeStyle = `rgba(34, 211, 238, ${0.8 * animProgress})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(route.from.x, route.from.y);
        
        // Create curved path
        const controlX = (route.from.x + route.to.x) / 2 + Math.sin(rotation) * 30;
        const controlY = (route.from.y + route.to.y) / 2 - 50;
        ctx.quadraticCurveTo(controlX, controlY, route.to.x, route.to.y);
        ctx.stroke();

        // Draw moving dots
        const dotX = route.from.x + (route.to.x - route.from.x) * animProgress;
        const dotY = route.from.y + (route.to.y - route.from.y) * animProgress;
        
        ctx.fillStyle = "rgba(34, 211, 238, 1)";
        ctx.beginPath();
        ctx.arc(dotX, dotY, 4, 0, Math.PI * 2);
        ctx.fill();
        
        // Glow effect
        ctx.shadowColor = "rgba(34, 211, 238, 0.8)";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw continents (simplified)
      ctx.fillStyle = "rgba(59, 130, 246, 0.4)";
      ctx.beginPath();
      ctx.ellipse(centerX - 40, centerY - 30, 30, 20, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.beginPath();
      ctx.ellipse(centerX + 30, centerY + 20, 40, 25, 0, 0, Math.PI * 2);
      ctx.fill();

      rotation += 0.005;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="drop-shadow-2xl"
        style={{ filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.3))" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse rounded-full"></div>
    </div>
  );
};

export default AnimatedGlobe;
