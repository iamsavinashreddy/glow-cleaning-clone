
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <header 
        className={`fixed w-full z-50 ${
          scrolled ? "solid-navbar" : "transparent-navbar"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          {/* Logo (serves as home link) */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://raw.githubusercontent.com/iamsavinashreddy/vrbest-group/main/Img/vr-best-shiners-logo-1.png" 
                alt="VR Best Shiners Logo" 
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain" 
              />
            </Link>
          </div>

          {/* Center - Call To Action and Phone */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={18} className="text-brand-yellow mr-2" />
              <span className="font-medium">1-800-CLEAN</span>
            </div>
            <Link to="/contact">
              <Button className="primary-button">Book Now</Button>
            </Link>
          </div>

          {/* Desktop Navigation - Moved to right */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/services" className="font-medium hover:bg-brand-yellow hover:text-black px-3 py-2 rounded-md transition-colors">Services</Link>
            <Link to="/packages" className="font-medium hover:bg-brand-yellow hover:text-black px-3 py-2 rounded-md transition-colors">Packages</Link>
            <Link to="/contact" className="font-medium hover:bg-brand-yellow hover:text-black px-3 py-2 rounded-md transition-colors">Contact</Link>
          </nav>

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
              <Link to="/services" className="font-medium py-2 hover:bg-brand-yellow hover:text-black px-2 rounded">Services</Link>
              <Link to="/packages" className="font-medium py-2 hover:bg-brand-yellow hover:text-black px-2 rounded">Packages</Link>
              <Link to="/contact" className="font-medium py-2 hover:bg-brand-yellow hover:text-black px-2 rounded">Contact</Link>
              <Link to="/about" className="font-medium py-2 hover:bg-brand-yellow hover:text-black px-2 rounded">Learn More</Link>
              <div className="flex items-center py-2">
                <Phone size={18} className="text-brand-yellow mr-2" />
                <span className="font-medium">1-800-CLEAN</span>
              </div>
              <Link to="/contact">
                <Button className="primary-button w-full mt-2">Book Now</Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-brand-yellow rounded-full shadow-lg hover:bg-brand-yellow-dark transition-all z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 text-black" />
        </button>
      )}
    </>
  );
};

export default Navbar;
