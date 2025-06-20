
const ContactInfo = () =>  {
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
      city: "Bangalore",
      country: "India",
      address: "Koramangala, Bangalore - 560034",
      phone: "+91 80 6666 0000"
    },
    {
      city: "New York",
      country: "USA",
      address: "Manhattan, NY 10001",
      phone: "+1 (555) 123-4567"
    },
    {
      city: "Shanghai",
      country: "China",
      address: "Pudong, Shanghai 200120",
      phone: "+86 21 1234 5678"
    }
  ];

  return (
    <div className="bg-white p-8 lg:p-12 border border-gray-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">Contact Information</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-600">Get in Touch</h3>
          <div className="space-y-3">
            {contactMethods.map((method, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="text-xl">{method.icon}</div>
                <div>
                  <h4 className="font-medium text-green-600">{method.title}</h4>
                  <p className="text-gray-900 font-medium">{method.details}</p>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-600">Our Offices</h3>
          <div className="space-y-4">
            {offices.map((office, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-medium text-green-600 mb-1">
                  {office.city}, {office.country}
                </h4>
                <p className="text-gray-600 text-sm mb-1">{office.address}</p>
                <p className="text-gray-600 text-sm">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
