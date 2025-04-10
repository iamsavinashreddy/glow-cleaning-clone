
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 ${
        scrolled ? "solid-navbar" : "transparent-navbar"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo (now serves as home link) */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/placeholder.svg" 
              alt="CleaningPro Logo" 
              className="h-10"
            />
            <span className="ml-2 font-bold text-xl">CleaningPro</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/services" className="font-medium hover:text-brand-yellow hover:bg-gray-100 px-3 py-2 rounded-md transition-colors">Services</Link>
          <Link to="/packages" className="font-medium hover:text-brand-yellow hover:bg-gray-100 px-3 py-2 rounded-md transition-colors">Packages</Link>
          <Link to="/contact" className="font-medium hover:text-brand-yellow hover:bg-gray-100 px-3 py-2 rounded-md transition-colors">Contact</Link>
        </nav>

        {/* Call To Action - moved to center */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center">
            <Phone size={18} className="text-brand-yellow mr-2" />
            <span className="font-medium">1-800-CLEAN</span>
          </div>
          <Button onClick={() => window.location.href = "/contact"} className="primary-button">Book Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800" 
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg animate-slide-down">
          <nav className="flex flex-col space-y-4">
            <Link to="/services" className="font-medium py-2 hover:text-brand-yellow hover:bg-gray-100 px-2 rounded">Services</Link>
            <Link to="/packages" className="font-medium py-2 hover:text-brand-yellow hover:bg-gray-100 px-2 rounded">Packages</Link>
            <Link to="/contact" className="font-medium py-2 hover:text-brand-yellow hover:bg-gray-100 px-2 rounded">Contact</Link>
            <Link to="/about" className="font-medium py-2 hover:text-brand-yellow hover:bg-gray-100 px-2 rounded">About Us</Link>
            <div className="flex items-center py-2">
              <Phone size={18} className="text-brand-yellow mr-2" />
              <span className="font-medium">1-800-CLEAN</span>
            </div>
            <Button onClick={() => window.location.href = "/contact"} className="primary-button w-full mt-2">Book Now</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
