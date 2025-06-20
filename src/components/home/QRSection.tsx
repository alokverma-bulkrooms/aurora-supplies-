
import { MessageSquare, Clock, CheckCircle } from "lucide-react";

const QRSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Revolutionizing Global Trade with{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Intelligence
                </span>{" "}
                for Seamless Supply
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Sourcing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    AI-powered global sourcing platform delivering optimized quotes in 24–48 hours through trusted international supplier networks.
                  </p>
                </div>
              </div>
              
              {/* Steps to get quotes */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Get Your Quote</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:from-green-100 hover:to-emerald-100 transition-all duration-300">
                    <MessageSquare className="w-8 h-8 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Send Requirements</p>
                      <p className="text-gray-600 text-sm">Share your product specifications via WhatsApp</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg hover:from-blue-100 hover:to-cyan-100 transition-all duration-300">
                    <Clock className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">AI Processing</p>
                      <p className="text-gray-600 text-sm">Our AI analyzes and sources optimal suppliers</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg hover:from-purple-100 hover:to-indigo-100 transition-all duration-300">
                    <CheckCircle className="w-8 h-8 text-purple-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Receive Quote</p>
                      <p className="text-gray-600 text-sm">Get competitive quotes within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - QR Code (Hidden on mobile/tablet) */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">Quick Quote</h3>
                  <p className="text-gray-600">Scan to start your sourcing journey</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-2xl">
                  <img 
                    src="/lovable-uploads/efc4b5ef-fc60-4271-b758-45afc17a506c.png" 
                    alt="QR Code for WhatsApp" 
                    className="w-48 h-48 mx-auto rounded-lg shadow-md"
                  />
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">Or message us directly:</p>
                  <a 
                    href="https://wa.me/14849166583" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRSection;
