
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Package {
  id: string;
  title: string;
  size: string;
  price: number;
  hours: number;
  features: string[];
}

const cleaningPackages: Package[] = [
  {
    id: "1bhk",
    title: "Basic Clean",
    size: "1 BHK",
    price: 99,
    hours: 2,
    features: [
      "Dusting all surfaces",
      "Vacuuming and mopping floors",
      "Kitchen cleaning",
      "Bathroom cleaning",
      "Bed making"
    ]
  },
  {
    id: "2bhk",
    title: "Standard Clean",
    size: "2 BHK",
    price: 149,
    hours: 3,
    features: [
      "All Basic Clean services",
      "Interior window cleaning",
      "Appliance cleaning",
      "Cabinet fronts cleaning",
      "Baseboard dusting"
    ]
  },
  {
    id: "3bhk",
    title: "Premium Clean",
    size: "3 BHK",
    price: 199,
    hours: 4,
    features: [
      "All Standard Clean services",
      "Deep carpet cleaning",
      "Ceiling fan and light fixture dusting",
      "Interior cabinet cleaning",
      "Wall spot cleaning"
    ]
  },
  {
    id: "4bhk",
    title: "Deluxe Clean",
    size: "4 BHK",
    price: 249,
    hours: 5,
    features: [
      "All Premium Clean services",
      "Refrigerator interior cleaning",
      "Oven interior cleaning",
      "Window blinds dusting",
      "Baseboards scrubbing"
    ]
  },
  {
    id: "villa",
    title: "Villa Clean",
    size: "Villa",
    price: 349,
    hours: 7,
    features: [
      "All Deluxe Clean services",
      "Outdoor patio cleaning",
      "Garage sweeping",
      "Upholstery vacuuming",
      "Chandelier dusting"
    ]
  },
  {
    id: "move-in",
    title: "Move-In/Out Clean",
    size: "Any Size",
    price: 299,
    hours: 6,
    features: [
      "Deep cleaning of all rooms",
      "Inside cabinets and drawers",
      "Appliance deep cleaning",
      "Window and track cleaning",
      "Carpet steam cleaning"
    ]
  },
  {
    id: "office",
    title: "Office Clean",
    size: "Small Office",
    price: 179,
    hours: 3,
    features: [
      "Reception area cleaning",
      "Workstation sanitizing",
      "Meeting room cleaning",
      "Kitchen area cleaning",
      "Restroom cleaning"
    ]
  }
];

const CleaningPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPackages = cleaningPackages.filter(pkg => 
    pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pkg.size.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="packages" className="section-padding bg-brand-yellow-light py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cleaning Packages</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect cleaning package for your home based on your space and needs
          </p>
          
          {/* Search Box */}
          <div className="max-w-md mx-auto mt-6">
            <input
              type="text"
              placeholder="Search by package or size (1BHK, 2BHK, etc.)"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {/* Mobile and Tablet Horizontal Scroll */}
        <div className="md:hidden">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-4 pb-4 px-1">
              {filteredPackages.map((pkg) => (
                <div 
                  key={pkg.id} 
                  className="bg-white p-4 rounded-lg shadow-md flex-shrink-0 w-[300px]"
                >
                  <div className="text-center mb-4">
                    <span className="inline-block bg-brand-yellow-light rounded-full px-3 py-1 text-sm font-semibold mb-2">
                      {pkg.size}
                    </span>
                    <h3 className="text-xl font-bold">{pkg.title}</h3>
                    <div className="mt-2">
                      <span className="text-2xl font-bold">${pkg.price}</span>
                      <span className="text-gray-600"> / session</span>
                    </div>
                    <p className="text-gray-600 mt-1">Approx. {pkg.hours} hours</p>
                  </div>
                  
                  <ul className="mb-4 space-y-2 text-left">
                    {pkg.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-brand-yellow mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="whitespace-normal text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="primary-button w-full" 
                        onClick={() => setSelectedPackage(pkg)}
                      >
                        Book Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <BookingForm 
                        packageInfo={selectedPackage} 
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-6">
                <span className="inline-block bg-brand-yellow-light rounded-full px-4 py-1 text-sm font-semibold mb-2">
                  {pkg.size}
                </span>
                <h3 className="text-2xl font-bold">{pkg.title}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold">${pkg.price}</span>
                  <span className="text-gray-600"> / session</span>
                </div>
                <p className="text-gray-600 mt-1">Approx. {pkg.hours} hours</p>
              </div>
              
              <ul className="mb-6 space-y-2">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-brand-yellow mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    className="primary-button w-full" 
                    onClick={() => setSelectedPackage(pkg)}
                  >
                    Book Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <BookingForm 
                    packageInfo={selectedPackage} 
                  />
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleaningPackages;
