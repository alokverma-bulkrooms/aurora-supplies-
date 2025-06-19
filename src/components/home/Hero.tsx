
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-teal-900 overflow-hidden">
      {/* Aurora-inspired background */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full opacity-60"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 30% 40%, rgba(16, 185, 129, 0.4) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 60%, rgba(34, 197, 94, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 80%, rgba(5, 150, 105, 0.2) 0%, transparent 40%)
            `,
            backgroundSize: '100% 100%',
            animation: 'aurora 8s ease-in-out infinite alternate'
          }}
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent font-extrabold tracking-tight">
                  Aurora
                </span>
                <br />
                <span className="text-white font-light">Supplies</span>
              </h1>
              
              <p className="text-2xl lg:text-3xl text-green-200 font-light max-w-4xl mx-auto">
                Global Supply Chain Solutions
              </p>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Connecting markets worldwide with efficient supply chain management 
                and reliable commodity trading solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300">
                <span className="flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for aurora animation */}
      <style>{`
        @keyframes aurora {
          0% { 
            opacity: 0.6;
            transform: translateY(0px) scale(1);
          }
          100% { 
            opacity: 0.8;
            transform: translateY(-10px) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
