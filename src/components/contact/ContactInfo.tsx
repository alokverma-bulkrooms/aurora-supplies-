const ContactInfo = () => {
  const services = [
    "Global Sourcing",
    "Quote Optimization", 
    "Quality Assurance",
    "Supply Chain Management",
    "AI-Powered Analytics",
    "Supplier Verification"
  ];

  const countries = [
    { name: "India", flag: "🇮🇳" },
    { name: "USA", flag: "🇺🇸" },
    { name: "China", flag: "🇨🇳" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "Japan", flag: "🇯🇵" },
    { name: "Brazil", flag: "🇧🇷" }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-8 lg:p-12">
      {/* Contact Methods */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Contact Information</h2>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl">📧</div>
            <div>
              <h4 className="font-medium text-green-600 text-lg">Email Us</h4>
              <p className="text-gray-900 font-medium">team@aurora.supplies</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl">📞</div>
            <div>
              <h4 className="font-medium text-green-600 text-lg">Call Us</h4>
              <p className="text-gray-900 font-medium">+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl">💬</div>
            <div>
              <h4 className="font-medium text-green-600 text-lg">Live Chat</h4>
              <p className="text-gray-900 font-medium">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div>
        <h3 className="text-xl font-bold mb-6 text-gray-900">Our Services</h3>
        <div className="grid grid-cols-2 gap-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-3 rounded-lg shadow-sm text-center">
              <span className="text-sm font-medium text-gray-700">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
