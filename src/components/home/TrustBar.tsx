
const TrustBar = () => {
  const partners = [
    { name: "ISO 9001", type: "certification" },
    { name: "Bloomberg", type: "partner" },
    { name: "Reuters", type: "partner" },
    { name: "SWIFT", type: "certification" },
    { name: "ICE", type: "partner" },
    { name: "CME Group", type: "partner" },
  ];

  return (
    <section className="py-16 bg-white/5 backdrop-blur-sm border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-lg font-medium text-gray-300 mb-4">
            Trusted by Global Leaders & Certified by Industry Standards
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-2 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <span className="text-blue-400 font-bold text-sm">{partner.name}</span>
                </div>
                <span className="text-xs text-gray-400 capitalize">{partner.type}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>Real-time Trading</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span>24/7 Operations</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span>AI-Powered Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
