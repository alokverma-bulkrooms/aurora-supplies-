
import { useState } from "react";

const WorldMap = () => {
  const [selectedOffice, setSelectedOffice] = useState<string | null>(null);

  const offices = [
    {
      id: "india",
      name: "Mumbai, India",
      position: { top: "45%", left: "67%" },
      description: "Asia-Pacific Headquarters & Trading Operations",
      established: "2009",
      employees: "150+",
      specialties: ["Commodity Trading", "Market Analysis", "Client Relations"]
    },
    {
      id: "usa",
      name: "New York, USA",
      position: { top: "35%", left: "25%" },
      description: "Americas Headquarters & Technology Hub",
      established: "2015",
      employees: "75+",
      specialties: ["AI Development", "Financial Services", "Risk Management"]
    },
    {
      id: "china",
      name: "Shanghai, China",
      position: { top: "40%", left: "78%" },
      description: "East Asia Operations & Supply Chain",
      established: "2018",
      employees: "100+",
      specialties: ["Supply Chain", "Manufacturing", "Logistics"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Global Presence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic offices across three continents, ensuring 24/7 coverage and local expertise.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="relative">
            {/* World Map SVG */}
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl overflow-hidden">
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full"
                style={{ background: "linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%)" }}
              >
                {/* Simplified world map paths */}
                <path
                  d="M150 200 L200 180 L250 190 L280 210 L250 240 L200 230 L150 220 Z"
                  fill="#64748b"
                  opacity="0.6"
                />
                <path
                  d="M600 180 L700 160 L750 180 L780 200 L750 220 L700 210 L650 200 L600 190 Z"
                  fill="#64748b"
                  opacity="0.6"
                />
                <path
                  d="M750 190 L850 170 L900 180 L920 200 L900 220 L850 210 L800 200 L750 200 Z"
                  fill="#64748b"
                  opacity="0.6"
                />
              </svg>

              {/* Office Markers */}
              {offices.map((office) => (
                <div
                  key={office.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={office.position}
                  onClick={() => setSelectedOffice(office.id)}
                >
                  <div className="relative">
                    <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg animate-pulse ${
                      selectedOffice === office.id 
                        ? "bg-red-500 scale-125" 
                        : "bg-blue-500 hover:bg-blue-600"
                    } transition-all duration-300`}></div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Details */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {offices.map((office) => (
                <div
                  key={office.id}
                  className={`bg-white rounded-xl p-6 shadow-lg border-2 cursor-pointer transition-all duration-300 ${
                    selectedOffice === office.id 
                      ? "border-blue-500 transform scale-105" 
                      : "border-gray-100 hover:border-blue-300"
                  }`}
                  onClick={() => setSelectedOffice(office.id)}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {office.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{office.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Established:</span>
                      <span className="font-medium">{office.established}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Employees:</span>
                      <span className="font-medium">{office.employees}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="text-sm text-gray-500 mb-2">Specialties:</div>
                    <div className="flex flex-wrap gap-1">
                      {office.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
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
