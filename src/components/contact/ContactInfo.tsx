
const ContactInfo = () => {
  const services = [
    "Global Sourcing",
    "Quote Optimization", 
    "Quality Assurance",
    "Supply Chain Management",
    "AI-Powered Analytics",
    "Supplier Verification"
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
              <h4 className="font-medium text-green-600 text-lg">+1 (484) 789-6941</h4>
              <p className="text-gray-900 font-medium">Available 24/7</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl">💬</div>
            <div>
              <h4 className="font-medium text-green-600 text-lg">Live Chat</h4>
              <p className="text-gray-900 font-medium">
                <a 
                  href="https://wa.me/+14847896941" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-700 transition-colors duration-200 underline"
                >
                  Available 24/7
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section - Enhanced Design */}
      <div>
        <h3 className="text-xl font-bold mb-6 text-gray-900">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-r from-white to-green-50/50 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-green-100/50 group hover:border-green-200">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-green-700 transition-colors duration-300">{service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
