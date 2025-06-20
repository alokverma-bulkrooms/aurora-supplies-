import { MessageCircle, ArrowRight, Smartphone, FileText, Clock } from "lucide-react";

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
                  Instant Quotes, One Scan Away
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
              
              {/* Chat Button */}
              <a 
                href="https://wa.me/14849166583" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white px-6 py-3 rounded-full font-semibold inline-flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/50 relative z-10"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
            
            {/* Right side - Content - Full width on mobile/tablet */}
            <div className="p-10 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50/50 lg:col-span-1 col-span-1">
              
              <div className="mb-8">
                {/* Aurora Supplies with enhanced design */}
                <div className="mb-8 relative">
                  <div className="absolute -top-2 -left-2 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-400/10 rounded-full blur-2xl"></div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 relative z-10">
                    <span className="text-black font-extrabold tracking-tight bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      Aurora
                    </span>
                    <br />
                    <span className="text-gray-800 font-light">Supplies</span>
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-4"></div>
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
                  AI-powered global sourcing platform delivering optimized quotes in 24–48 hours through trusted international supplier networks.
                </p>
                
                {/* Steps to get quotes */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">How to Get Your Quote:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-700">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <span>Scan QR code or click the WhatsApp button</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center">
                        <FileText className="w-4 h-4" />
                      </div>
                      <span>Share your commodity requirements</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span>Receive your personalized quote within 24-48 hours</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/14849166583" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/50 w-full sm:w-auto group"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Start Your Quote Request</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <div className="text-sm text-gray-600 text-center sm:text-left font-medium">
                  <strong className="text-green-700">Aurora Supplies</strong> - Revolutionizing Global Trade with Intelligence for Seamless Supply
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
