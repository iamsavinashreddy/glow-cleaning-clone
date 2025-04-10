
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">CleaningPro</h3>
            <p className="text-gray-400 mb-4">
              Professional cleaning services for homes of all sizes. We bring cleanliness and comfort to your living space.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-brand-yellow transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-brand-yellow transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/packages" className="text-gray-400 hover:text-brand-yellow transition-colors duration-300">Packages</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-brand-yellow transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-brand-yellow transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="text-brand-yellow mr-2 mt-1" />
                <span className="text-gray-400">1-800-CLEAN</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-brand-yellow mr-2 mt-1" />
                <span className="text-gray-400">info@cleaningpro.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-brand-yellow mr-2 mt-1" />
                <span className="text-gray-400">123 Cleaning Street, City, Country</span>
              </li>
            </ul>
          </div>
          
          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Working Hours</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Monday - Friday: 8:00 AM - 8:00 PM</li>
              <li className="text-gray-400">Saturday: 9:00 AM - 6:00 PM</li>
              <li className="text-gray-400">Sunday: 10:00 AM - 4:00 PM</li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} CleaningPro. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Website managed by <a href="https://www.vrbest.group" target="_blank" rel="noopener noreferrer" className="text-brand-yellow hover:underline">VR Best IT Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
