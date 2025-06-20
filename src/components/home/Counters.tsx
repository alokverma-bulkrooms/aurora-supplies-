
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Counters = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [counts, setCounts] = useState({
    offices: 0,
    volume: 0,
    clients: 0,
    countries: 0,
  });

  const targets = {
    offices: 3,
    volume: 1.5, // in billions
    clients: 500,
    countries: 27,
  };

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;

      const intervals = Object.keys(targets).map((key) => {
        const target = targets[key as keyof typeof targets];
        const increment = target / steps;
        let current = 0;

        const intervalId = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(intervalId);
          }
          setCounts(prev => ({
            ...prev,
            [key]: current
          }));
        }, stepTime);

        return intervalId;
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Global Impact in Numbers
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our platform connects global markets with trusted supplier networks.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center group">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-slate-200">
              <div className="text-3xl lg:text-4xl font-bold text-slate-700 mb-2">
                {Math.round(counts.offices)}
              </div>
              <div className="text-slate-600 text-sm font-medium">Offices</div>
              <div className="text-slate-500 text-xs mt-1">Global Presence</div>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-slate-200">
              <div className="text-3xl lg:text-4xl font-bold text-slate-700 mb-2">
                ${counts.volume.toFixed(1)}B+
              </div>
              <div className="text-slate-600 text-sm font-medium">Trade Volume</div>
              <div className="text-slate-500 text-xs mt-1">Annual Processing</div>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-slate-200">
              <div className="text-3xl lg:text-4xl font-bold text-slate-700 mb-2">
                {Math.round(counts.clients)}+
              </div>
              <div className="text-slate-600 text-sm font-medium">Global Clients</div>
              <div className="text-slate-500 text-xs mt-1">Trusted Partners</div>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-slate-200">
              <div className="text-3xl lg:text-4xl font-bold text-slate-700 mb-2">
                {Math.round(counts.countries)}+
              </div>
              <div className="text-slate-600 text-sm font-medium">Countries Served</div>
              <div className="text-slate-500 text-xs mt-1">Worldwide Reach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counters;
