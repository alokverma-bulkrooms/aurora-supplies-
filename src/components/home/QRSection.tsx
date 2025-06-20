
import { MessageCircle, Smartphone, FileText, Clock } from "lucide-react";

const QRSection = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-green-50/30 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl border border-green-100/50 overflow-hidden backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left side - QR Code - Hidden on mobile/tablet */}
            <div className="hidden lg:flex bg-gradient-to-br from-green-50/80 to-emerald-50/60 p-10 flex-col items-center justify-center relative">
              {/* Decorative elements */}
              <div className="absolute top-6 left-6 w-16 h-16 bg-green-200/30 rounded-full blur-xl"></div>
              <div className="absolute bottom-6 right-6 w-20 h-20 bg-emerald-200/20 rounded-full blur-2xl"></div>
              
              <div className="text-center mb-6 relative z-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Scan to Connect Instantly
                </h2>
              </div>
              
              {/* QR Code */}
              <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-green-200/50 mb-6 relative z-10 hover:shadow-2xl transition-all duration-300">
                <img 
                  src="/lovable-uploads/94c87f1c-bbd6-4dd8-8a19-325238fb12d1.png" 
                  alt="WhatsApp QR Code" 
                  className="w-40 h-40 object-contain"
                />
              </div>
            </div>
            
            {/* Right side - Content - Full width on mobile/tablet */}
            <div className="p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50/50 lg:col-span-1 col-span-1">
              
              <div className="mb-6 lg:mb-8">
                <p className="text-black text-xl lg:text-2xl leading-relaxed lg:mb-8 mb-6 font-semibold">
                  Revolutionizing global trade with intelligence through an AI-powered platform.
                </p>
                
                {/* Steps to get quotes */}
                <div className="space-y-4 mb-6 lg:mb-8">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-3 lg:mb-4">How to Get Your Quote:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-700">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <span className="text-sm lg:text-base">Scan QR code or click the WhatsApp button</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center">
                        <FileText className="w-4 h-4" />
                      </div>
                      <span className="text-sm lg:text-base">Share your requirements</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span className="text-sm lg:text-base">Receive your personalized quote within 24-48 hours</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button - Only visible on mobile/tablet */}
                <div className="lg:hidden">
                  <a 
                    href="https://wa.me/14849166583" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white px-6 py-3 rounded-full font-semibold inline-flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/50 w-full justify-center"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRSection;
