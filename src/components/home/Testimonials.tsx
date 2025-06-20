
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Thompson",
    role: "Procurement Head",
    company: "GlobalTech Inc.",
    content: "We saved over 30% on our procurement costs and cut quoting time down from two weeks to two days. Incredible platform!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "CEO",
    company: "ImportDirect Ltd.",
    content: "A seamless experience with great results every time. The negotiation handling is outstanding.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Supply Chain Director",
    company: "TechFlow Solutions",
    content: "Aurora Supplies transformed our sourcing process. The AI-powered recommendations are spot-on every time.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    role: "Operations Manager",
    company: "Global Manufacturing Co.",
    content: "The speed and reliability of their platform is unmatched. We've reduced our procurement cycle by 70%.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Purchasing Director",
    company: "InnovateNow Inc.",
    content: "Outstanding service quality and exceptional customer support. Highly recommended for global sourcing.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 6,
    name: "James Patterson",
    role: "VP of Procurement",
    company: "NextGen Industries",
    content: "The platform's intelligence and automation capabilities have revolutionized how we approach supplier relationships.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 7,
    name: "Maria Santos",
    role: "Head of Sourcing",
    company: "EliteTrade Corp",
    content: "From quote to delivery, everything is seamless. Aurora Supplies has become our go-to partner for international trade.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 8,
    name: "David Kim",
    role: "Purchasing Manager",
    company: "ElectroTech Industries",
    content: "Outstanding service quality and exceptional customer support. Highly recommended for global sourcing.",
    image: "/lovable-uploads/39716ebf-df99-4b84-a8b8-7a8560c4a915.png"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const testimonialsList = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      testimonialsList.push(testimonials[index]);
    }
    
    return testimonialsList;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-green-50/20 relative overflow-hidden">
      {/* Background smooth gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our clients say about their experience with Aurora Supplies
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial) => (
              <div key={testimonial.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-green-200 hover:bg-white/90">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-green-100"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-black">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-green-600 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed italic text-lg">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
