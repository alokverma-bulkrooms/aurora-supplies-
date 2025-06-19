
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Company Info */}
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/db4b3c7a-e646-499d-987f-88cb8762f865.png" 
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

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300">
              Services
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-6 text-sm">
            <a href="mailto:team@aurorasupplies.com" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
              <Mail className="h-4 w-4" />
              <span>team@aurorasupplies.com</span>
            </a>
            <a href="tel:+15551234567" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4">
            <a href="#" className="text-green-400 hover:text-white transition-colors duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-green-400 hover:text-white transition-colors duration-300">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-green-400 hover:text-white transition-colors duration-300">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Aurora Supplies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
