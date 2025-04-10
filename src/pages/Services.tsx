
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-12 bg-brand-yellow-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Professional cleaning services tailored to your needs
          </p>
        </div>
      </div>
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Services;
