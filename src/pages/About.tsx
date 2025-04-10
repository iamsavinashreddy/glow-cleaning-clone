
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FounderSection from "@/components/FounderSection";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-8 bg-brand-yellow-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Learn more about our company and our mission
          </p>
        </div>
      </div>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our cleaning team" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-gray-700">
                Founded in 2015, CleaningPro has been providing exceptional cleaning services to homes across the country. What started as a small family business has grown into a trusted name in the cleaning industry.
              </p>
              <p className="text-gray-700">
                Our mission is simple: to deliver high-quality cleaning services that exceed our customers' expectations. We believe that a clean home is essential for a healthy and happy life, and we're committed to making that a reality for all our clients.
              </p>
              
              <h3 className="text-xl font-bold pt-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-brand-yellow mr-2 mt-1" />
                  <span>Excellence in service delivery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-brand-yellow mr-2 mt-1" />
                  <span>Reliability and trustworthiness</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-brand-yellow mr-2 mt-1" />
                  <span>Respect for our clients and their homes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-brand-yellow mr-2 mt-1" />
                  <span>Environmental responsibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <FounderSection />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Cleaning Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-yellow rounded-full mb-4 text-black font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Book</h3>
              <p className="text-gray-600">
                Schedule a cleaning service online or by phone
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-yellow rounded-full mb-4 text-black font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Clean</h3>
              <p className="text-gray-600">
                Our professional team arrives and performs the service
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-yellow rounded-full mb-4 text-black font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Relax</h3>
              <p className="text-gray-600">
                Enjoy your spotless, fresh, and clean home
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-yellow rounded-full mb-4 text-black font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Repeat</h3>
              <p className="text-gray-600">
                Set up regular cleaning for consistent results
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <Footer />
    </div>
  );
};

export default About;
