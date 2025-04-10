
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CleaningPackages from "@/components/CleaningPackages";
import DiscountVoucher from "@/components/DiscountVoucher";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="bg-white py-1">
        <ServicesSection />
      </div>
      <div className="bg-brand-yellow-light py-2">
        <CleaningPackages />
      </div>
      <div className="bg-white py-2">
        <DiscountVoucher />
      </div>
      <div className="bg-brand-yellow-light py-2">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
