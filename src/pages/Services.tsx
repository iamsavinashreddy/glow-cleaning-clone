
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-8 bg-white">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
