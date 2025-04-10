
import Navbar from "@/components/Navbar";
import CleaningPackages from "@/components/CleaningPackages";
import DiscountVoucher from "@/components/DiscountVoucher";
import Footer from "@/components/Footer";

const Packages = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28 pb-6 bg-brand-yellow-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cleaning Packages</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Choose the perfect package for your home
          </p>
        </div>
      </div>
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
