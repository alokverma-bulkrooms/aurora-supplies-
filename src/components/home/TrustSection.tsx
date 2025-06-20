
const TrustSection = () => {
  const features = [
    {
      title: "AI-Powered Analytics",
      description: "Machine learning algorithms optimize trade routes and predict market trends.",
      icon: "🤖",
    },
    {
      title: "Global Network",
      description: "Partnerships across 50+ countries ensure seamless international operations.",
      icon: "🌐",
    },
    {
      title: "Secure Transactions",
      description: "Bank-grade security and blockchain technology protect every transaction.",
      icon: "🔒",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support across all time zones.",
      icon: "🕒",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Global Leaders Trust Aurora Supplies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cutting-edge technology and proven expertise for international commodity trading.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
