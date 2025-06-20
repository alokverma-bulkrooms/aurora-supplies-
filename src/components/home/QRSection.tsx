
import { MessageCircle } from "lucide-react";

const QRSection = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left side - QR Code */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-12 flex flex-col items-center justify-center">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Connect Instantly
                </h2>
                <p className="text-gray-600 text-lg">
                  Scan to get your quote on WhatsApp
                </p>
              </div>
              
              {/* QR Code */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-green-200 mb-6">
                <img 
                  src="/lovable-uploads/82289c16-e710-408d-b353-313a72066c19.png" 
                  alt="WhatsApp QR Code" 
                  className="w-48 h-48 object-contain"
                />
              </div>
              
              {/* Chat Button */}
              <a 
                href="https://wa.me/14849166583" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-full font-semibold inline-flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
            
            {/* Right side - Content */}
            <div className="p-12 flex flex-col justify-center">
              <div className="mb-8">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  <span className="text-black font-extrabold tracking-tight">Aurora</span>
                  <br />
                  <span className="text-black font-light">Supplies</span>
                </h1>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  AI-powered international commodity trading platform connecting global markets with innovative solutions, delivering results in 24-48 hours with trusted partnerships worldwide.
                </p>
                
                <div className="flex items-center space-x-3 text-gray-600 mb-8">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span className="font-medium">Available 24/7 for global support</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/14849166583" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-green-400 to-green-300 hover:from-green-300 hover:to-green-200 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-300/50 w-full sm:w-auto"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Get Instant Quote</span>
                </a>
                
                <div className="text-sm text-gray-500 text-center sm:text-left">
                  <strong>Aurora Supplies</strong> - Your trusted partner in international commodity trading
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
