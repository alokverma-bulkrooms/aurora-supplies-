
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
}

const FloatingIcons = () => {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    const iconElements = [
      "🚢", "✈️", "🚛", "📦", "🌍", "💼", "📊", "🔄"
    ];

    const newIcons: FloatingIcon[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      opacity: Math.random() * 0.3 + 0.1,
      scale: Math.random() * 0.5 + 0.5,
      icon: iconElements[Math.floor(Math.random() * iconElements.length)],
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    }));

    setIcons(newIcons);

    const animateIcons = () => {
      setIcons(prevIcons =>
        prevIcons.map(icon => ({
          ...icon,
          x: (icon.x + icon.dx + window.innerWidth) % window.innerWidth,
          y: (icon.y + icon.dy + window.innerHeight) % window.innerHeight,
          opacity: Math.sin(Date.now() * 0.001 + icon.id) * 0.2 + 0.3,
        }))
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
          className="absolute text-2xl transition-all duration-300 ease-in-out"
          style={{
            left: `${icon.x}px`,
            top: `${icon.y}px`,
            opacity: icon.opacity,
            transform: `scale(${icon.scale})`,
          }}
        >
          {icon.icon}
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
