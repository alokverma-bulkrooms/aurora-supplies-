
const Mission = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Connecting global markets through intelligent sourcing solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
            <p className="text-slate-700 leading-relaxed">
              To democratize global sourcing by providing AI-powered solutions 
              that make international procurement efficient and accessible.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
            <div className="text-3xl mb-3">🌟</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
            <p className="text-slate-700 leading-relaxed">
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
