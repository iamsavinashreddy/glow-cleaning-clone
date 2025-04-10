
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581578017065-fa0b7b443e66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1556911220-bda9da8a1321?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-24 pb-8 md:pt-28 md:pb-10 bg-gradient-to-b from-brand-yellow-light to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2 space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Professional Home Cleaning Services
            </h1>
            <p className="text-lg text-gray-700">
              Your trusted partner for a spotless, healthy home. Book our services and enjoy a clean, comfortable living space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button className="primary-button flex items-center gap-2">
                  <Search size={18} />
                  Find Cleaning Services
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="secondary-button">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg" style={{ height: "300px" }}>
              {images.map((src, index) => (
                <img 
                  key={index}
                  src={src}
                  alt={`Cleaning service ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
