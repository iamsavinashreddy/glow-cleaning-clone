
import { Sparkles, Clock, Shield, Star } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Regular Cleaning",
    description: "Our standard cleaning service covers all the basics for a clean and fresh home.",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Deep Cleaning",
    description: "A comprehensive cleaning service that reaches every corner of your home.",
    icon: Star,
  },
  {
    id: 3,
    title: "Move In/Out Cleaning",
    description: "Start fresh in your new home or leave your old one spotless.",
    icon: Clock,
  },
  {
    id: 4,
    title: "Post-Construction Cleaning",
    description: "Remove dust and debris after renovation or construction projects.",
    icon: Shield,
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cleaning Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of professional cleaning services to meet all your household needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-gray-50 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-yellow rounded-full mb-4">
                <service.icon size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Why Choose Our Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-yellow rounded-full mb-4">
                <Star size={24} className="text-black" />
              </div>
              <h4 className="text-lg font-bold mb-2">Premium Quality</h4>
              <p className="text-gray-600">
                Our professional cleaners are trained to deliver exceptional quality with attention to detail.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-yellow rounded-full mb-4">
                <Clock size={24} className="text-black" />
              </div>
              <h4 className="text-lg font-bold mb-2">Reliable & Timely</h4>
              <p className="text-gray-600">
                We value your time and always arrive as scheduled, completing our work efficiently.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-yellow rounded-full mb-4">
                <Shield size={24} className="text-black" />
              </div>
              <h4 className="text-lg font-bold mb-2">Trusted & Secure</h4>
              <p className="text-gray-600">
                All our staff are background-checked, bonded, and insured for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
