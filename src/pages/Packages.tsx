
import Navbar from "@/components/Navbar";
import CleaningPackages from "@/components/CleaningPackages";
import DiscountVoucher from "@/components/DiscountVoucher";
import Footer from "@/components/Footer";

const Packages = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-6 bg-brand-yellow-light">
        <CleaningPackages />
      </div>
      <div className="py-6 bg-white">
        <DiscountVoucher />
      </div>
      <Footer />
    </div>
  );
};

export default Packages;
