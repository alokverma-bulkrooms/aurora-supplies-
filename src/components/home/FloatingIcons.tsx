
import { useEffect, useState } from "react";

interface FloatingIcon {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  icon: string;
  dx: number;
  dy: number;
  rotation: number;
  rotationSpeed: number;
}

const FloatingIcons = () => {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    const iconElements = [
      "🚢", "📦", "🛫", "🚛", "🌍", "⚓", "🗺️", "📊", 
      "🔄", "⚡", "🎯", "💼", "🚀", "🔗", "📈", "🌐"
    ];

    const newIcons: FloatingIcon[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * (window.innerWidth || 1200),
      y: Math.random() * (window.innerHeight || 800),
      opacity: Math.random() * 0.4 + 0.1,
      scale: Math.random() * 0.6 + 0.4,
      icon: iconElements[Math.floor(Math.random() * iconElements.length)],
      dx: (Math.random() - 0.5) * 0.8,
      dy: (Math.random() - 0.5) * 0.8,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
    }));

    setIcons(newIcons);

    const animateIcons = () => {
      setIcons(prevIcons =>
        prevIcons.map(icon => {
          const newX = (icon.x + icon.dx + (window.innerWidth || 1200)) % (window.innerWidth || 1200);
          const newY = (icon.y + icon.dy + (window.innerHeight || 800)) % (window.innerHeight || 800);
          const newOpacity = Math.sin(Date.now() * 0.001 + icon.id) * 0.3 + 0.4;
          const newRotation = icon.rotation + icon.rotationSpeed;
          
          return {
            ...icon,
            x: newX,
            y: newY,
            opacity: Math.max(0.1, Math.min(0.6, newOpacity)),
            rotation: newRotation,
          };
        })
      );
    };

    const interval = setInterval(animateIcons, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute text-3xl transition-all duration-500 ease-in-out filter drop-shadow-lg"
          style={{
            left: `${icon.x}px`,
            top: `${icon.y}px`,
            opacity: icon.opacity,
            transform: `scale(${icon.scale}) rotate(${icon.rotation}deg)`,
            textShadow: '0 0 10px rgba(59, 130, 246, 0.3)',
          }}
        >
          {icon.icon}
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
