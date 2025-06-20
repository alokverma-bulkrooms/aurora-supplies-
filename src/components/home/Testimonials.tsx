
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "We saved over 30% on our procurement costs and cut quoting time down from two weeks to two days. Incredible platform!",
      author: "Sarah Thompson",
      position: "Procurement Head",
      company: "GlobalTech Inc."
    },
    {
      text: "A seamless experience with great results every time. The negotiation handling is outstanding.",
      author: "Rahul Mehta",
      position: "CEO",
      company: "ImportDirect Ltd."
    },
    {
      text: "Their AI-powered sourcing has transformed our supply chain efficiency beyond expectations.",
      author: "Michael Chen",
      position: "Supply Chain Director",  
      company: "TechFlow Solutions"
    },
    {
      text: "Outstanding service quality and reliable delivery timelines. Highly recommend for global sourcing.",
      author: "Elena Rodriguez",
      position: "Operations Manager",
      company: "MegaCorp Industries"
    },
    {
      text: "The platform's intelligence and speed have given us a competitive edge in our market.",
      author: "David Park",
      position: "Procurement Manager",
      company: "InnovateTech Co."
    },
    {
      text: "Professional team, innovative solutions, and exceptional results. A game-changer for our business.",
      author: "Amanda Foster",
      position: "Head of Purchasing",
      company: "GlobalTrade Networks"
    },
    {
      text: "Fast, reliable, and cost-effective. Aurora Supplies has exceeded our expectations consistently.",
      author: "James Wilson",
      position: "CEO",
      company: "ProSource Ltd."
    },
    {
      text: "Their global network and expertise have opened new opportunities for our international expansion.",
      author: "Maria Santos",
      position: "International Trade Manager",
      company: "WorldWide Ventures"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by businesses worldwide for exceptional sourcing solutions.
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-green-500/20" />
                <div className="relative z-10">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-6">
                    <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
                    <p className="text-green-600 font-medium">{testimonial.position}</p>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="bg-white hover:bg-green-50 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-green-600" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-green-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white hover:bg-green-50 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-green-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
