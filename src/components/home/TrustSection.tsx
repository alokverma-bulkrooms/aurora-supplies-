
const TrustSection = () => {
  const features = [
    {
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms optimize trade routes and predict market trends.",
      icon: "🤖",
    },
    {
      title: "Global Network",
      description: "Extensive partnerships across 50+ countries ensure seamless international operations.",
      icon: "🌐",
    },
    {
      title: "Secure Transactions",
      description: "Bank-grade security and blockchain technology protect every transaction.",
      icon: "🔒",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support across all time zones for uninterrupted service.",
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our cutting-edge technology and proven expertise make us the preferred choice 
            for international commodity trading.
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

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">ISO 9001</div>
                <div className="text-gray-600">Certified Quality</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">A+ Rating</div>
                <div className="text-gray-600">Financial Stability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
