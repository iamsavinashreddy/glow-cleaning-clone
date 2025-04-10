
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const DiscountVoucher = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Voucher requested for:", email);
      toast({
        title: "Success!",
        description: "Your discount voucher has been sent to your email.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-brand-yellow-light rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-5 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-3">Get a Discount Voucher</h2>
              <p className="text-gray-700 mb-4 text-sm">
                Sign up now to receive a special 15% discount voucher for your first cleaning service!
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="primary-button w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Get My Voucher"}
                </Button>
                
                <p className="text-xs text-gray-500">
                  By submitting, you agree to receive marketing emails. You can unsubscribe at any time.
                </p>
              </form>
            </div>
            
            <div className="w-full md:w-1/2 bg-brand-yellow p-5 md:p-8 flex flex-col justify-center">
              <div className="text-black">
                <div className="inline-block border-2 border-black rounded-full p-3 mb-4">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a4 4 0 118 0v7M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-2">15% OFF</h3>
                <p className="text-base font-medium mb-3">Your First Cleaning Service</p>
                
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <svg className="h-4 w-4 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Valid for all cleaning packages</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-4 w-4 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No minimum purchase required</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-4 w-4 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Limited time offer - act now!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountVoucher;
