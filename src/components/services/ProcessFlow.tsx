
import { FileText, Search, CheckCircle, Truck } from "lucide-react";

const ProcessFlow = () => {
  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Submit Requirements",
      description: "Share your sourcing needs through our platform.",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "AI Matching",
      description: "Our AI connects you with verified suppliers.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Receive Quotes",
      description: "Get optimized quotes within 24-48 hours.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Complete Order",
      description: "Finalize your order with quality assurance.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-teal-800 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-emerald-200 max-w-2xl mx-auto">
            Simple process, powerful results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-emerald-200 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
