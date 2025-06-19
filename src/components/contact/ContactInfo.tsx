
const ContactInfo = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      details: "team@aurora.supplies",
      description: "Send us an email anytime"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: "💬",
      title: "Live Chat",
      details: "Available 24/7",
      description: "Instant support online"
    }
  ];

  const offices = [
    {
      city: "New York",
      country: "USA",
      address: "Manhattan, NY 10001",
      phone: "+1 (555) 123-4567"
    },
    {
      city: "Mumbai",
      country: "India",
      address: "BKC, Mumbai - 400051",
      phone: "+91 22 6666 0000"
    },
    {
      city: "Shanghai",
      country: "China",
      address: "Pudong, Shanghai 200120",
      phone: "+86 21 1234 5678"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-800 to-blue-900 text-white p-8 lg:p-12">
      <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-2xl">{method.icon}</div>
                <div>
                  <h4 className="font-semibold text-blue-200">{method.title}</h4>
                  <p className="text-white font-medium">{method.details}</p>
                  <p className="text-gray-300 text-sm">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Our Offices</h3>
          <div className="space-y-6">
            {offices.map((office, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <h4 className="font-semibold text-blue-200 mb-2">
                  {office.city}, {office.country}
                </h4>
                <p className="text-gray-300 text-sm mb-1">{office.address}</p>
                <p className="text-gray-300 text-sm">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-4">Why Choose Aurora Supplies?</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>AI-powered trading solutions</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>Global market expertise</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>24/7 customer support</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>Secure & transparent processes</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
