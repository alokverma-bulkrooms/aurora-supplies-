
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Thompson",
      position: "Procurement Head",
      company: "GlobalTech Inc.",
      image: "/lovable-uploads/82289c16-e710-408d-b353-313a72066c19.png",
      rating: 5,
      testimonial: "We saved over 30% on our procurement costs and cut quoting time down from two weeks to two days. Incredible platform!"
    },
    {
      id: 2,
      name: "Rahul Mehta",
      position: "CEO", 
      company: "ImportDirect Ltd.",
      image: "/lovable-uploads/efc4b5ef-fc60-4271-b758-45afc17a506c.png",
      rating: 5,
      testimonial: "A seamless experience with great results every time. The negotiation handling is outstanding."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Supply Chain Manager",
      company: "TechVentures Corp.",
      image: "/lovable-uploads/82289c16-e710-408d-b353-313a72066c19.png",
      rating: 5,
      testimonial: "Aurora Supplies transformed our sourcing process. The AI-powered quotes are incredibly accurate and fast."
    },
    {
      id: 4,
      name: "David Chen",
      position: "Operations Director",
      company: "Global Manufacturing",
      image: "/lovable-uploads/efc4b5ef-fc60-4271-b758-45afc17a506c.png",
      rating: 5,
      testimonial: "Outstanding service and remarkable cost savings. Their global network is truly impressive."
    },
    {
      id: 5,
      name: "Lisa Johnson",
      position: "Purchasing Manager",
      company: "Industrial Solutions",
      image: "/lovable-uploads/82289c16-e710-408d-b353-313a72066c19.png",
      rating: 5,
      testimonial: "The platform's efficiency and reliability have exceeded our expectations. Highly recommended!"
    },
    {
      id: 6,
      name: "Michael Park",
      position: "Trade Manager",
      company: "International Goods Ltd.",
      image: "/lovable-uploads/efc4b5ef-fc60-4271-b758-45afc17a506c.png",
      rating: 5,
      testimonial: "Excellent results and professional service. Aurora Supplies is our go-to sourcing partner."
    },
    {
      id: 7,
      name: "Anna Williams",
      position: "Procurement Specialist",
      company: "Smart Industries",
      image: "/lovable-uploads/82289c16-e710-408d-b353-313a72066c19.png",
      rating: 5,
      testimonial: "The AI technology behind their platform is revolutionary. We've streamlined our entire procurement process."
    },
    {
      id: 8,
      name: "James Kumar",
      position: "Business Development Head",
      company: "Global Trade Inc.",
      image: "/lovable-uploads/efc4b5ef-fc60-4271-b758-45afc17a506c.png",
      rating: 5,
      testimonial: "Incredible platform with world-class service. The results speak for themselves."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Client <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our clients say about their experience with Aurora Supplies
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/50 h-full">
                    {/* Rating Stars */}
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-gray-700 mb-6 leading-relaxed text-base italic">
                      "{testimonial.testimonial}"
                    </p>
                    
                    {/* Client Info */}
                    <div className="flex items-center space-x-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-green-200"
                      />
                      <div>
                        <h4 className="font-semibold text-black text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {testimonial.position}
                        </p>
                        <p className="text-green-600 text-sm font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-green-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
