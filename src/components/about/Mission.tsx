
const Mission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving the future of international trade through innovation, integrity, and intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To democratize global trade by providing AI-powered solutions that make 
              international commodity trading more efficient, transparent, and accessible 
              to businesses of all sizes across the world.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become the world's most trusted and innovative commodity trading platform, 
              connecting global markets through cutting-edge technology and fostering 
              sustainable economic growth worldwide.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Integrity</h4>
            <p className="text-gray-600">
              Building trust through transparent and ethical business practices.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Innovation</h4>
            <p className="text-gray-600">
              Continuously advancing through cutting-edge technology and AI.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌍</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Global Impact</h4>
            <p className="text-gray-600">
              Creating positive change in markets and communities worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
