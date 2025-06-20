
const ContactInfo = () =>  {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      details: "team@aurora.supplies"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "+1 (555) 123-4567"
    },
    {
      icon: "💬",
      title: "Live Chat",
      details: "Available 24/7"
    }
  ];

  return (
    <div className="bg-white p-8 lg:p-12 border border-gray-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">Contact Information</h2>
      
      <div className="space-y-6">
        {contactMethods.map((method, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="text-2xl">{method.icon}</div>
            <div>
              <h4 className="font-medium text-green-600 text-lg">{method.title}</h4>
              <p className="text-gray-900 font-medium">{method.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
