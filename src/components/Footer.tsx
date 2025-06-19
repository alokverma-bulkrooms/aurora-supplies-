
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/f24ce586-8d11-4595-9c26-db9d6e121c8e.png" 
                alt="Aurora Supplies" 
                className="h-10 w-10 rounded-lg shadow-lg"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                  Aurora
                </span>
                <span className="text-green-200 text-sm font-medium -mt-1">Supplies</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              AI-powered international commodity trading platform connecting global markets 
              with innovative solutions, delivering results in 24-48 hours with trusted partnerships worldwide.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="group bg-green-600/20 hover:bg-green-600 p-2 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-4 h-4 text-green-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="group bg-emerald-600/20 hover:bg-emerald-600 p-2 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-4 h-4 text-emerald-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="group bg-teal-600/20 hover:bg-teal-600 p-2 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-4 h-4 text-teal-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-200">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="bg-green-600/20 p-2 rounded-lg group-hover:bg-green-600/40 transition-colors duration-300">
                  <Mail className="h-3 w-3 text-green-400" />
                </div>
                <a href="mailto:team@aurora.supplies" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  team@aurora.supplies
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-emerald-600/20 p-2 rounded-lg group-hover:bg-emerald-600/40 transition-colors duration-300">
                  <Phone className="h-3 w-3 text-emerald-400" />
                </div>
                <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-teal-600/20 p-2 rounded-lg group-hover:bg-teal-600/40 transition-colors duration-300">
                  <MapPin className="h-3 w-3 text-teal-400" />
                </div>
                <span className="text-gray-300 text-sm">Global Operations</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Aurora Supplies. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
