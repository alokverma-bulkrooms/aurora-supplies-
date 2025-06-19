
import { MessageCircle } from "lucide-react";

const QRSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-green-100">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* QR Code Container */}
            <div className="relative">
              <div className="bg-white p-6 rounded-xl shadow-md border-2 border-green-200">
                {/* QR Code Placeholder - In a real implementation, you'd use a QR code library */}
                <div className="w-48 h-48 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center relative">
                  {/* QR Code Pattern Simulation */}
                  <div className="grid grid-cols-8 gap-1 w-40 h-40">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-full ${
                          Math.random() > 0.5 ? 'bg-[#25D366]' : 'bg-white'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* WhatsApp Logo in Center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#25D366] p-3 rounded-full shadow-lg">
                      <MessageCircle className="w-8 h-8 text-white fill-current" />
                    </div>
                  </div>
                </div>
                
                {/* Frame Text */}
                <div className="mt-4 text-center">
                  <p className="text-sm font-semibold text-gray-700 bg-green-100 px-3 py-1 rounded-full inline-block">
                    Scan to Request a Quote
                  </p>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="text-left md:max-w-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get Instant Quote via WhatsApp
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Connect with our team instantly through WhatsApp for quick quotes, 
                real-time updates, and personalized commodity trading solutions.
              </p>
              
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Available 24/7 for global support</span>
              </div>
              
              <div className="mt-4">
                <a 
                  href="https://wa.me/1484916-6583" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Caption */}
          <div className="mt-8 pt-6 border-t border-green-200">
            <p className="text-sm text-gray-600">
              <strong>Aurora Supplies</strong> - Your trusted partner in international commodity trading. 
              Scan the QR code above or click the button to start your conversation with our expert team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRSection;
