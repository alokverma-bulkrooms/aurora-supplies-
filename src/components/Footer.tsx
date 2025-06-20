
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <img 
                src="/lovable-uploads/f24ce586-8d11-4595-9c26-db9d6e121c8e.png" 
                alt="Aurora Supplies" 
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg shadow-lg"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent">
                  Aurora
                </span>
                <span className="text-slate-300 text-xs sm:text-sm font-light -mt-1">Supplies</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base max-w-sm mx-auto sm:mx-0">
              An AI-powered global sourcing platform transforming international trade by connecting markets worldwide.
            </p>
            
            {/* Social Media */}
            <div className="flex justify-center sm:justify-start space-x-3">
              <a 
                href="#" 
                className="group bg-green-600/20 hover:bg-green-600 p-2 sm:p-3 rounded-lg transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="group bg-emerald-600/20 hover:bg-emerald-600 p-2 sm:p-3 rounded-lg transition-all duration-300"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="group bg-teal-600/20 hover:bg-teal-600 p-2 sm:p-3 rounded-lg transition-all duration-300"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-green-400 hover:translate-x-1 transition-all duration-300 inline-block text-sm sm:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-green-400 hover:translate-x-1 transition-all duration-300 inline-block text-sm sm:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-300 hover:text-green-400 hover:translate-x-1 transition-all duration-300 inline-block text-sm sm:text-base"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-green-400 hover:translate-x-1 transition-all duration-300 inline-block text-sm sm:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold text-white">Get in Touch</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center sm:justify-start space-x-3 group">
                <div className="bg-green-600/20 p-2 sm:p-3 rounded-lg group-hover:bg-green-600/40 transition-colors duration-300">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                </div>
                <a href="mailto:team@aurora.supplies" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base break-all">
                  team@aurora.supplies
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3 group">
                <div className="bg-emerald-600/20 p-2 sm:p-3 rounded-lg group-hover:bg-emerald-600/40 transition-colors duration-300">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
                </div>
                <a href="https://wa.me/14849166583" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base">
                  WhatsApp Chat
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3 group">
                <div className="bg-teal-600/20 p-2 sm:p-3 rounded-lg group-hover:bg-teal-600/40 transition-colors duration-300">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-teal-400" />
                </div>
                <span className="text-gray-300 text-sm sm:text-base">Global Operations</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-gray-400 text-center text-sm sm:text-base">
              © 2024 Aurora Supplies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
