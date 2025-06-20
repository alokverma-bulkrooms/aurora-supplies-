
const Offices = () => {
  const officeDetails = [
    {
      city: "Mumbai",
      country: "India",
      address: "BKC, Mumbai - 400051",
      phone: "+91 22 6666 0000",
      email: "mumbai@aurora.supplies"
    },
    {
      city: "New York",
      country: "USA",
      address: "Manhattan, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "newyork@aurora.supplies"
    },
    {
      city: "Shanghai",
      country: "China",
      address: "Pudong, Shanghai 200120",
      phone: "+86 21 1234 5678",
      email: "shanghai@aurora.supplies"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">
            Office Locations
          </h2>
          <p className="text-lg text-emerald-700 max-w-2xl mx-auto">
            Connect with our teams for localized support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {officeDetails.map((office, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-emerald-200/50"
            >
              <div className="h-20 bg-gradient-to-r from-emerald-600 to-green-600 flex items-center justify-center">
                <span className="text-3xl">🏢</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-900 mb-2">
                  {office.city}, {office.country}
                </h3>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="text-emerald-500">📍</span>
                    <span className="text-emerald-800">{office.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-emerald-500">📞</span>
                    <a href={`tel:${office.phone}`} className="text-emerald-800 hover:text-emerald-900">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-emerald-500">✉️</span>
                    <a href={`mailto:${office.email}`} className="text-emerald-800 hover:text-emerald-900">
                      {office.email}
                    </a>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white py-2 px-4 rounded-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-300">
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
