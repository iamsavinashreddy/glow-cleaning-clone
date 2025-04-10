
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
      <div className="bg-white py-4">
        <ServicesSection />
      </div>
      <div className="bg-brand-yellow-light py-8">
        <CleaningPackages />
      </div>
      <div className="bg-white py-8">
        <DiscountVoucher />
      </div>
      <div className="bg-brand-yellow-light py-8">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
