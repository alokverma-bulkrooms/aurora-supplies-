
import { useState, useEffect } from "react";
import { ChevronDown, ArrowRight, Globe2, Clock, Users } from "lucide-react";
import AnimatedGlobe from "./AnimatedGlobe";
import FloatingIcons from "./FloatingIcons";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const texts = [
    "AI-Powered Global Trade in 24–48 Hours",
    "Seamless Commodity Trading Worldwide",
    "Intelligent Supply Chain Solutions",
    "Global Trade Network Optimization"
  ];

  // Typewriter effect
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
        }, 3000);
      }
    }, 80);

    return () => clearInterval(typewriter);
  }, [currentIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Animated Background with Neural Mesh */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(34, 211, 238, 0.3) 0%, transparent 50%),
              linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)
            `,
            backgroundSize: '100% 100%, 100% 100%, 60px 60px',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
      </div>
      
      {/* Floating Icons */}
      <FloatingIcons />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm">
                  <Globe2 className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-sm text-blue-200">Global AI Trading Platform</span>
                </div>
                
                <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent font-extrabold tracking-tight">
                    Aurora
                  </span>
                  <br />
                  <span className="text-white font-light">Global</span>
                </h1>
              </div>
              
              <div className="h-20 flex items-center">
                <h2 className="text-2xl lg:text-3xl text-blue-200 font-medium">
                  {currentText}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
                </h2>
              </div>
              
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Transform your commodity trading with AI-powered insights. 
                Connect to global markets instantly with our intelligent platform 
                delivering results in record time.
              </p>
            </div>
            
            {/* Animated Counters */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center mb-2">
                  <Globe2 className="w-6 h-6 text-blue-400 mr-2" />
                  <div className="text-3xl font-bold text-blue-400">3</div>
                </div>
                <div className="text-gray-300 text-sm">Countries</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-cyan-400 mr-2" />
                  <div className="text-3xl font-bold text-cyan-400">24-48</div>
                </div>
                <div className="text-gray-300 text-sm">Hrs Quote</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-green-400 mr-2" />
                  <div className="text-3xl font-bold text-green-400">500+</div>
                </div>
                <div className="text-gray-300 text-sm">Clients</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center">
                  Get Instant Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button className="group border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 relative overflow-hidden">
                <span className="relative">Watch Demo</span>
              </button>
            </div>
          </div>
          
          {/* Right Content - Enhanced Animated Globe */}
          <div className="relative flex justify-center">
            <div className="relative">
              <AnimatedGlobe />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-300">Scroll to explore</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
