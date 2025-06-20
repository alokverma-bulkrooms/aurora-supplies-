
const ProcessFlow = () => {
  const steps = [
    {
      number: "01",
      title: "Submit Requirements",
      description: "Share your product specifications and requirements through our platform.",
      icon: "📝"
    },
    {
      number: "02", 
      title: "AI Matching",
      description: "Our AI system analyzes and matches you with the best suppliers.",
      icon: "🤖"
    },
    {
      number: "03",
      title: "Supplier Verification",
      description: "We verify and validate potential suppliers for quality and reliability.",
      icon: "✅"
    },
    {
      number: "04",
      title: "Quote Generation",
      description: "Receive competitive quotes from multiple verified suppliers.",
      icon: "💰"
    },
    {
      number: "05",
      title: "Negotiation Support",
      description: "Our experts help negotiate the best terms and pricing.",
      icon: "🤝"
    },
    {
      number: "06",
      title: "Order Fulfillment",
      description: "Seamless order processing and delivery tracking.",
      icon: "📦"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-pink-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-pink-700 max-w-2xl mx-auto">
            Our streamlined process ensures efficient sourcing from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-pink-200/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
                  {step.number}
                </div>
                <div className="text-3xl">{step.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-pink-900 mb-3">
                {step.title}
              </h3>
              <p className="text-pink-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
