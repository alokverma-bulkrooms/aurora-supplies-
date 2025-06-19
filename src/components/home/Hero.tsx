
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedGlobe from "./AnimatedGlobe";
import FloatingIcons from "./FloatingIcons";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    "AI-Powered Trading Solutions",
    "Global Commodity Markets",
    "Intelligent Supply Chains",
    "International Trade Networks"
  ];

  useEffect(() => {
    const text = texts[currentIndex];
    let charIndex = 0;
    
    const typewriter = setInterval(() => {
      if (charIndex <= text.length) {
        setCurrentText(text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typewriter);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typewriter);
  }, [currentIndex]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      
      {/* Floating Icons */}
      <FloatingIcons />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Aurora
                </span>
                <br />
                <span>Supplies</span>
              </h1>
              
              <div className="h-16 flex items-center">
                <h2 className="text-xl lg:text-2xl text-blue-200 font-medium">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </h2>
              </div>
              
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Revolutionizing international commodity trading through artificial intelligence, 
                connecting global markets with unprecedented efficiency and transparency.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Explore Solutions
              </button>
              <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-gray-300">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">$2B+</div>
                <div className="text-gray-300">Trade Volume</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Animated Globe */}
          <div className="relative">
            <AnimatedGlobe />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Hero;
