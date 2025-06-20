
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-green-100 to-slate-800 overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(134, 239, 172, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(167, 243, 208, 0.3) 0%, transparent 50%)
            `,
            backgroundSize: '100% 100%, 100% 100%'
          }}
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <div className="text-black space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight">
                <span className="text-black font-extrabold tracking-tight">
                  Aurora
                </span>
                <br />
                <span className="text-black font-light">Supplies</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
                AI-powered international commodity trading platform connecting global markets 
                with innovative solutions, delivering results in 24-48 hours with trusted partnerships worldwide.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 sm:pt-6">
              <a 
                href="https://wa.me/1484916-6583" 
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-green-400 to-green-300 hover:from-green-300 hover:to-green-200 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-2xl hover:shadow-green-300/50 transform hover:scale-105 transition-all duration-300"
              >
                Get Instant Quote
              </a>
              <button className="group border-2 border-green-300 text-green-300 hover:bg-green-300 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-black animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs sm:text-sm text-gray-800">Scroll to explore</span>
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
