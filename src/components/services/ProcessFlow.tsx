
const ProcessFlow = () => {
  const steps = [
    {
      step: "1",
      title: "Submit Requirements",
      description: "Share your sourcing needs through our platform.",
    },
    {
      step: "2",
      title: "AI Matching",
      description: "Our AI connects you with verified suppliers.",
    },
    {
      step: "3",
      title: "Receive Quotes",
      description: "Get optimized quotes within 24-48 hours.",
    },
    {
      step: "4",
      title: "Complete Order",
      description: "Finalize your order with quality assurance.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Simple process, powerful results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-slate-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
