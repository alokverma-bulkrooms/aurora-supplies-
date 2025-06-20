
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
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Global Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering results across continents with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {Math.round(counts.offices)}
              </div>
              <div className="text-blue-100 text-lg font-medium">Offices</div>
              <div className="text-blue-200 text-sm mt-2">Countries</div>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                ${counts.volume.toFixed(1)}B+
              </div>
              <div className="text-green-100 text-lg font-medium">Trade Volume</div>
              <div className="text-green-200 text-sm mt-2">Annual Processing</div>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {Math.round(counts.clients)}+
              </div>
              <div className="text-purple-100 text-lg font-medium">Global Clients</div>
              <div className="text-purple-200 text-sm mt-2">Trusted Partners</div>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {Math.round(counts.countries)}+
              </div>
              <div className="text-orange-100 text-lg font-medium">Countries</div>
              <div className="text-orange-200 text-sm mt-2">Served Globally</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counters;
