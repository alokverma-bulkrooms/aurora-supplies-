
import { useState } from "react";
import { ChevronDown, Upload, Download, MessageCircle } from "lucide-react";

const QRSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Upload,
      title: "Upload Requirements",
      description: "Share your requirements via our simple form"
    },
    {
      icon: MessageCircle,
      title: "AI Processing",
      description: "Our AI matches you with verified suppliers"
    },
    {
      icon: Download,
      title: "Get Quotes",
      description: "Receive optimized quotes in 24-48 hours"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
                Revolutionizing global trade with intelligence through an AI-powered platform and trusted supplier networks.
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/1484916-6583" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center"
                >
                  Get Quote Now
                </a>
                <button className="border-2 border-gray-300 hover:border-green-500 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Process Steps */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-black mb-6">How it works:</h3>
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeStep === index 
                        ? "bg-green-50 border border-green-200" 
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className={`p-3 rounded-lg ${
                      activeStep === index 
                        ? "bg-green-600 text-white" 
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - QR Code */}
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 max-w-md">
              <div className="text-center space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-black">Quick Access</h3>
                  <p className="text-gray-600">Scan to start your sourcing journey</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <img 
                    src="/lovable-uploads/82289c16-e710-408d-b353-313a72066c19.png" 
                    alt="QR Code for Aurora Supplies"
                    className="w-48 h-48 mx-auto"
                  />
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm text-gray-500">
                    Connect instantly via WhatsApp
                  </p>
                  <a 
                    href="https://wa.me/1484916-6583" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300"
                  >
                    Start Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRSection;
