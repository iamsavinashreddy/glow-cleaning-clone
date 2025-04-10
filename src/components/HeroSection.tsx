import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581578017065-fa0b7b443e66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1556911220-bda9da8a1321?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1586455549116-5a4eb0421121?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1618220179428-22790b485390?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1559830772-73d4bee960fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1618220252344-8ec99ec624b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
    <section className="relative bg-gradient-to-b from-brand-yellow-light to-white pt-28 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="w-full md:w-2/5 space-y-4 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              <span
                className="text-5xl md:text-6xl font-extrabold text-brand-yellow font-serif"
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4), 0 0 3px rgba(0, 0, 0, 0.2)"
                }}
              >
                Professional
              </span>
              <br />
              Home Cleaning Services
            </h1>
            <p className="text-base text-gray-700">
              Your trusted partner for a spotless, healthy home. Book our services and enjoy a clean, comfortable living space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button className="primary-button flex items-center gap-2">
                  <Search size={18} />
                  Find Cleaning Services
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="secondary-button">
                  Wanna know More..?
                </Button>
              </Link>
            </div>
          </div>


          {/*
          <div className="w-full md:w-2/5 space-y-4 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              <span className="text-5xl md:text-6xl font-extrabold text-brand-yellow font-serif">
                Professional
              </span>
              <br />
              Home Cleaning Services
            </h1>
            <p className="text-base text-gray-700">
              Your trusted partner for a spotless, healthy home. Book our services and enjoy a clean, comfortable living space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button className="primary-button flex items-center gap-2">
                  <Search size={18} />
                  Find Cleaning Services
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="secondary-button">
                  Wanna know More..?
                </Button>
              </Link>
            </div>
          </div>
          {/*
          <div className="w-full md:w-2/5 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              <span className="text-brand-yellow">Professional</span>
              <br />
              Home Cleaning Services
            </h1>
            <p className="text-base text-gray-700">
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
                  Wanna know More..?
                </Button>
              </Link>
            </div>
          </div>

          {/*
          <div className="w-full md:w-2/5 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Professional Home Cleaning Services
            </h1>
            <p className="text-base text-gray-700">
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
                  Wanna know More..?
                </Button>
              </Link>
            </div>
          </div> */}

          {/* Image Section */}
          <div className="w-full md:w-3/5 flex justify-center">
            <div className="relative w-full max-w-full overflow-hidden rounded-lg shadow-lg" style={{ height: "400px" }}>
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`VR Best Shiners cleaning service ${index + 1}`}
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 50"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,27,960,24C1120,21,1280,32,1360,37.3L1440,43L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
