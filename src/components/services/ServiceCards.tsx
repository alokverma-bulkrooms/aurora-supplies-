
const ServiceCards = () => {
  const services = [
    {
      title: "Global Sourcing",
      description: "Connect with verified suppliers worldwide for competitive pricing.",
      icon: "🌍",
    },
    {
      title: "Quote Optimization",
      description: "AI-powered analysis delivers the best quotes in 24-48 hours.",
      icon: "📊",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous supplier verification and quality control processes.",
      icon: "✅",
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end logistics and supply chain optimization.",
      icon: "🚚",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive sourcing solutions for global businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
