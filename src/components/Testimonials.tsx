
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York",
    rating: 5,
    text: "Amazing service! The team was professional, thorough, and left my home spotless. I've been using their services for 6 months now and have never been disappointed.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    name: "Michael Brown",
    location: "Chicago",
    rating: 5,
    text: "I was impressed by the attention to detail. They cleaned areas I didn't even think about! Highly recommend their deep cleaning service.",
    image: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    id: 3,
    name: "Emily Williams",
    location: "Los Angeles",
    rating: 4,
    text: "Reliable, consistent, and great communication. They've been cleaning my 2BHK apartment every two weeks for almost a year now. Great value for money!",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    name: "David Chen",
    location: "San Francisco",
    rating: 5,
    text: "The 3BHK premium package was perfect for our family home. They brought all their own supplies and equipment, and the house smelled amazing after they were done.",
    image: "https://randomuser.me/api/portraits/men/62.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const showPreviousTestimonial = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const showNextTestimonial = () => {
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (diff > 50) {
      showNextTestimonial();
    } else if (diff < -50) {
      showPreviousTestimonial();
    }
    
    setTouchStart(null);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our cleaning services.
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-50 rounded-lg p-6 md:p-8 shadow-md">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.location}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className={`${i < testimonial.rating ? "text-brand-yellow fill-brand-yellow" : "text-gray-300"} mr-1`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-5 md:-translate-x-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-300 focus:outline-none"
            onClick={showPreviousTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-5 md:translate-x-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-300 focus:outline-none"
            onClick={showNextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-brand-yellow" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
