
const Offices = () => {
  const officeDetails = [
    {
      city: "Mumbai",
      country: "India",
      address: "BKC, Mumbai - 400051",
      phone: "+91 22 6666 0000",
      email: "mumbai@aurora.supplies",
      timezone: "UTC+5:30",
      image: "🏢",
      color: "from-orange-500 to-red-600"
    },
    {
      city: "New York",
      country: "USA",
      address: "Manhattan, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "newyork@aurora.supplies",
      timezone: "UTC-5:00",
      image: "🏙️",
      color: "from-blue-500 to-indigo-600"
    },
    {
      city: "Shanghai",
      country: "China",
      address: "Pudong, Shanghai 200120",
      phone: "+86 21 1234 5678",
      email: "shanghai@aurora.supplies",
      timezone: "UTC+8:00",
      image: "🌆",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Office Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our teams across the globe for localized support and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {officeDetails.map((office, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`h-32 bg-gradient-to-r ${office.color} flex items-center justify-center`}>
                <span className="text-6xl">{office.image}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {office.city}
                </h3>
                <p className="text-gray-600 mb-4">{office.country}</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="text-gray-400">📍</span>
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">📞</span>
                    <a href={`tel:${office.phone}`} className="text-blue-600 hover:text-blue-800">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">✉️</span>
                    <a href={`mailto:${office.email}`} className="text-blue-600 hover:text-blue-800">
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">🕒</span>
                    <span className="text-gray-600">{office.timezone}</span>
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                  Contact Office
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offices;
