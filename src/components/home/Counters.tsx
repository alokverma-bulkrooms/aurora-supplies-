
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
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Numbers That Define Global Reach
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We connect markets worldwide with speed, trust, and scale.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/50 hover:border-green-200/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-emerald-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                  {Math.round(counts.offices)}
                </div>
                <div className="text-slate-700 text-base font-semibold mb-1">Offices</div>
                <div className="text-slate-500 text-sm">Global Presence</div>
              </div>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/50 hover:border-green-200/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-emerald-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                  ${counts.volume.toFixed(1)}B+
                </div>
                <div className="text-slate-700 text-base font-semibold mb-1">Trade Volume</div>
                <div className="text-slate-500 text-sm">Annual Processing</div>
              </div>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/50 hover:border-green-200/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-emerald-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                  {Math.round(counts.clients)}+
                </div>
                <div className="text-slate-700 text-base font-semibold mb-1">Global Clients</div>
                <div className="text-slate-500 text-sm">Trusted Partners</div>
              </div>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/50 hover:border-green-200/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-emerald-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                  {Math.round(counts.countries)}+
                </div>
                <div className="text-slate-700 text-base font-semibold mb-1">Countries Served</div>
                <div className="text-slate-500 text-sm">Worldwide Reach</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counters;
