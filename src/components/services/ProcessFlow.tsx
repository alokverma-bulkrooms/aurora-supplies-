
const ProcessFlow = () => {
  const steps = [
    {
      number: "01",
      title: "Market Research",
      description: "AI analyzes global market conditions, identifying opportunities and trends.",
      icon: "🔍"
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Custom trading strategies developed based on your specific requirements.",
      icon: "🎯"
    },
    {
      number: "03",
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and mitigation strategies implementation.",
      icon: "⚡"
    },
    {
      number: "04",
      title: "Trade Execution",
      description: "Automated trade execution with real-time monitoring and optimization.",
      icon: "🚀"
    },
    {
      number: "05",
      title: "Logistics Management",
      description: "End-to-end logistics coordination and supply chain optimization.",
      icon: "📦"
    },
    {
      number: "06",
      title: "Performance Tracking",
      description: "Continuous monitoring and reporting with actionable insights.",
      icon: "📊"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined, AI-powered approach to international commodity trading that delivers results.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 border-gray-100 hover:border-blue-300">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full font-bold text-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
