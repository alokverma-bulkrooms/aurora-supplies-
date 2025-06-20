
const Offices = () => {
  const officeDetails = [
    {
      city: "Bangalore",
      country: "India",
      flag: "🇮🇳"
    },
    {
      city: "New York",
      country: "USA",
      flag: "🇺🇸"
    },
    {
      city: "Shanghai",
      country: "China",
      flag: "🇨🇳"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Office Locations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Global presence, local expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {officeDetails.map((office, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 text-center p-8"
            >
              <div className="text-6xl mb-4">{office.flag}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {office.city}
              </h3>
              <p className="text-gray-600">
                {office.country}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offices;
