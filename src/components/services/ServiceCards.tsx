
const ServiceCards = () => {
  const services = [
    {
      title: "AI Market Analysis",
      description: "Advanced algorithms analyze global market trends, price fluctuations, and supply-demand dynamics to provide actionable insights.",
      icon: "📊",
      features: ["Real-time data processing", "Predictive analytics", "Risk assessment", "Market forecasting"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Commodity Trading",
      description: "Direct access to global commodity markets with optimized trading strategies powered by machine learning.",
      icon: "📈",
      features: ["Global market access", "Automated trading", "Portfolio optimization", "Trade execution"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Supply Chain Optimization",
      description: "End-to-end supply chain management with AI-driven logistics optimization and route planning.",
      icon: "🚛",
      features: ["Route optimization", "Inventory management", "Logistics coordination", "Cost reduction"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies using advanced analytics and market intelligence.",
      icon: "🛡️",
      features: ["Risk assessment", "Hedging strategies", "Compliance monitoring", "Insurance solutions"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Trade Finance",
      description: "Flexible financing solutions for international trade including letters of credit and trade guarantees.",
      icon: "💰",
      features: ["Letters of credit", "Trade guarantees", "Working capital", "Currency hedging"],
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Digital Platform",
      description: "User-friendly digital platform providing real-time access to markets, analytics, and trading tools.",
      icon: "💻",
      features: ["Real-time dashboard", "Mobile access", "API integration", "24/7 monitoring"],
      color: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Trading Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From market analysis to trade execution, our AI-powered platform covers every aspect of international commodity trading.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              
              <div className="p-8">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-300`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
