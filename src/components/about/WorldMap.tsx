
import { useState } from "react";

const WorldMap = () => {
  const [selectedOffice, setSelectedOffice] = useState<string | null>(null);

  const offices = [
    {
      id: "india",
      name: "Bangalore, India",
      position: { top: "45%", left: "67%" },
      description: "Founding Office & Headquarters",
      employees: "150+"
    },
    {
      id: "usa",
      name: "New York, USA",
      position: { top: "35%", left: "25%" },
      description: "Americas Operations",
      employees: "75+"
    },
    {
      id: "china",
      name: "Shanghai, China",
      position: { top: "40%", left: "78%" },
      description: "East Asia Operations",
      employees: "100+"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-900 mb-4">
            Global Presence
          </h2>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto">
            Strategic offices ensuring 24/7 coverage and local expertise.
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-purple-200/50">
          <div className="relative">
            <div className="relative w-full h-80 bg-purple-100/50 rounded-lg overflow-hidden">
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full"
              >
                <path
                  d="M150 200 L200 180 L250 190 L280 210 L250 240 L200 230 L150 220 Z"
                  fill="#8b5cf6"
                  opacity="0.6"
                />
                <path
                  d="M600 180 L700 160 L750 180 L780 200 L750 220 L700 210 L650 200 L600 190 Z"
                  fill="#8b5cf6"
                  opacity="0.6"
                />
                <path
                  d="M750 190 L850 170 L900 180 L920 200 L900 220 L850 210 L800 200 L750 200 Z"
                  fill="#8b5cf6"
                  opacity="0.6"
                />
              </svg>

              {offices.map((office) => (
                <div
                  key={office.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={office.position}
                  onClick={() => setSelectedOffice(office.id)}
                >
                  <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${
                    selectedOffice === office.id 
                      ? "bg-purple-500 scale-125" 
                      : "bg-purple-600 hover:bg-purple-500"
                  } transition-all duration-300`}></div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {offices.map((office) => (
                <div
                  key={office.id}
                  className={`bg-white/40 backdrop-blur-sm rounded-lg p-4 shadow border cursor-pointer transition-all duration-300 ${
                    selectedOffice === office.id 
                      ? "border-purple-400 transform scale-105" 
                      : "border-purple-200/50 hover:border-purple-400"
                  }`}
                  onClick={() => setSelectedOffice(office.id)}
                >
                  <h3 className="text-lg font-bold text-purple-900 mb-1">
                    {office.name}
                  </h3>
                  <p className="text-purple-700 text-sm mb-2">{office.description}</p>
                  <div className="text-xs text-purple-600">
                    {office.employees} employees
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
