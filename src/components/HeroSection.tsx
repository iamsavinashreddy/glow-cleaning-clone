
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:py-40 bg-gradient-to-b from-brand-yellow-light to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Professional Home Cleaning Services
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Your trusted partner for a spotless, healthy home. Book our services and enjoy a clean, comfortable living space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="primary-button flex items-center gap-2">
                <Search size={18} />
                Find Cleaning Services
              </Button>
              <Button variant="outline" className="secondary-button">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Happy cleaner" 
              className="rounded-lg shadow-lg max-w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
