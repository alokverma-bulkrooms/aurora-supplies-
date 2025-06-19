
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-green-300 via-green-200 to-green-100 bg-clip-text text-transparent font-extrabold tracking-tight">
                  Aurora
                </span>
                <br />
                <span className="text-white font-light">Supplies</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                AI-powered international commodity trading platform connecting global markets 
                with innovative solutions, delivering results in 24-48 hours with trusted partnerships worldwide.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/1484916-6583" 
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-green-400 to-green-300 hover:from-green-300 hover:to-green-200 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-green-300/50 transform hover:scale-105 transition-all duration-300"
              >
                Get Instant Quote
              </a>
              <button className="group border-2 border-green-300 text-green-300 hover:bg-green-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Watch Demo
              </button>
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
    </div>
  );
};

export default Hero;
