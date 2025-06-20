
const Mission = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-emerald-700 max-w-2xl mx-auto">
            Connecting global markets through intelligent sourcing solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-200/50 hover:shadow-xl transition-all duration-300">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-emerald-900 mb-3">Our Mission</h3>
            <p className="text-emerald-800 leading-relaxed">
              To democratize global sourcing by providing AI-powered solutions 
              that make international procurement efficient and accessible.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-200/50 hover:shadow-xl transition-all duration-300">
            <div className="text-3xl mb-3">🌟</div>
            <h3 className="text-xl font-bold text-emerald-900 mb-3">Our Vision</h3>
            <p className="text-emerald-800 leading-relaxed">
              To become the world's most trusted sourcing platform, 
              connecting businesses with verified suppliers globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
