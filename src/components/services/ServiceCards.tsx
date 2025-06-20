
const ServiceCards = () => {
  const services = [
    {
      icon: "🤖",
      title: "AI-Powered Sourcing",
      description: "Advanced algorithms match your requirements with verified suppliers globally.",
      features: ["Smart supplier matching", "Price optimization", "Quality assurance"]
    },
    {
      icon: "🌐",
      title: "Global Network",
      description: "Access to thousands of verified suppliers across multiple countries.",
      features: ["Verified suppliers", "Multi-country coverage", "24/7 support"]
    },
    {
      icon: "⚡",
      title: "Rapid Quotes",
      description: "Get competitive quotes delivered within 24-48 hours.",
      features: ["Fast turnaround", "Competitive pricing", "Detailed comparisons"]
    },
    {
      icon: "🔒",
      title: "Secure Transactions",
      description: "End-to-end security with transparent payment processes.",
      features: ["Secure payments", "Transaction tracking", "Dispute resolution"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-indigo-700 max-w-2xl mx-auto">
            Comprehensive solutions for all your sourcing needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-indigo-200/50 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">
                {service.title}
              </h3>
              <p className="text-indigo-700 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-indigo-600">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
