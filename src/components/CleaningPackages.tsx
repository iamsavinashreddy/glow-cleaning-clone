
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { 
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

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
  },
  {
    id: "commercial",
    title: "Commercial Clean",
    size: "Commercial Space",
    price: 399,
    hours: 8,
    features: [
      "Complete facility cleaning",
      "Floor care and maintenance",
      "Restroom sanitization",
      "Waste removal",
      "Common area cleaning"
    ]
  },
  {
    id: "special-event",
    title: "Special Event Clean",
    size: "Event Venue",
    price: 249,
    hours: 4,
    features: [
      "Pre-event setup cleaning",
      "Post-event cleanup",
      "Trash collection and removal",
      "Floor cleaning",
      "Surface sanitization"
    ]
  },
  {
    id: "deep-clean",
    title: "Deep Clean",
    size: "Any Size",
    price: 329,
    hours: 6,
    features: [
      "Detailed cleaning of all areas",
      "Behind and under furniture",
      "Detailed bathroom sanitization",
      "Kitchen deep clean",
      "Cobweb removal"
    ]
  },
  {
    id: "eco-friendly",
    title: "Eco-Friendly Clean",
    size: "Any Size",
    price: 219,
    hours: 4,
    features: [
      "All-natural cleaning products",
      "Microfiber technology",
      "Steam cleaning",
      "HEPA filtration",
      "Allergen removal"
    ]
  }
];

const CleaningPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredPackages = cleaningPackages.filter(pkg => 
    pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pkg.size.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBookNow = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsDialogOpen(true);
  };

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
        
        {/* Carousel for both mobile and desktop */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {filteredPackages.map((pkg) => (
              <CarouselItem key={pkg.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col">
                  <div className="text-center mb-3">
                    <span className="inline-block bg-brand-yellow-light rounded-full px-3 py-1 text-sm font-semibold mb-2">
                      {pkg.size}
                    </span>
                    <h3 className="text-lg font-bold">{pkg.title}</h3>
                    <div className="mt-2">
                      <span className="text-xl font-bold">${pkg.price}</span>
                      <span className="text-gray-600"> / session</span>
                    </div>
                    <p className="text-gray-600 mt-1 text-sm">Approx. {pkg.hours} hours</p>
                  </div>
                  
                  <ul className="mb-3 space-y-1 text-left flex-grow">
                    {pkg.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-4 w-4 text-brand-yellow mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="whitespace-normal text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="primary-button w-full mt-auto text-sm py-2" 
                    onClick={() => handleBookNow(pkg)}
                  >
                    Book Now
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 space-x-2">
            <CarouselPrevious className="relative static left-0 right-0 top-0 translate-y-0 bg-white/50 backdrop-blur-sm" />
            <CarouselNext className="relative static left-0 right-0 top-0 translate-y-0 bg-white/50 backdrop-blur-sm" />
          </div>
        </Carousel>
      </div>

      {/* Booking Dialog with proper accessibility attributes */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px] p-0">
          <DialogTitle className="sr-only">Book Your Cleaning Service</DialogTitle>
          <DialogDescription className="sr-only">
            {selectedPackage ? `${selectedPackage.title} - ${selectedPackage.size} ($${selectedPackage.price})` : "Book a cleaning service"}
          </DialogDescription>
          <BookingForm packageInfo={selectedPackage} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CleaningPackages;
