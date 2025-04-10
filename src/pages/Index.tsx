
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
      <ServicesSection />
      <CleaningPackages />
      <DiscountVoucher />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
