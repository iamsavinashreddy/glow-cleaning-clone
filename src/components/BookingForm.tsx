
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface PackageInfo {
  id: string;
  title: string;
  size: string;
  price: number;
}

interface BookingFormProps {
  packageInfo: PackageInfo | null;
}

export const BookingForm = ({ packageInfo }: BookingFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    time: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { packageInfo, ...formData });
    
    // In a real application, you would submit this data to your server
    // For now, we'll just show a success message
    toast({
      title: "Booking request received!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-4 sm:py-8 px-3 sm:px-4 max-w-md mx-auto">
        <div className="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-green-100 mb-3 sm:mb-4">
          <Check className="h-6 sm:h-8 w-6 sm:w-8 text-green-600" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          Your booking request has been received. We'll contact you shortly to confirm your appointment.
        </p>
        <Button 
          className="primary-button text-sm"
          onClick={() => setSubmitted(false)}
        >
          Book Another Service
        </Button>
      </div>
    );
  }

  return (
    <div className="p-2 sm:p-4 md:p-6 max-w-3xl mx-auto w-full">
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Book Your Cleaning Service</h2>
        {packageInfo && (
          <p className="text-gray-600 text-sm sm:text-base">
            {packageInfo.title} - {packageInfo.size} (${packageInfo.price})
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 p-2 sm:p-4 overflow-y-auto max-h-[80vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div className="space-y-1 sm:space-y-2">
            <label htmlFor="name" className="text-xs sm:text-sm font-medium">
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full text-sm"
            />
          </div>
          <div className="space-y-1 sm:space-y-2">
            <label htmlFor="email" className="text-xs sm:text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div className="space-y-1 sm:space-y-2">
            <label htmlFor="phone" className="text-xs sm:text-sm font-medium">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full text-sm"
            />
          </div>
          <div className="space-y-1 sm:space-y-2">
            <label htmlFor="address" className="text-xs sm:text-sm font-medium">
              Address
            </label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div className="space-y-1 sm:space-y-2">
            <label htmlFor="date" className="text-xs sm:text-sm font-medium">
              Preferred Date
            </label>
            <Input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full text-sm"
            />
          </div>
          <div className="space-y-1 sm:space-y-2">
            <label htmlFor="time" className="text-xs sm:text-sm font-medium">
              Preferred Time
            </label>
            <Input
              id="time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full text-sm"
            />
          </div>
        </div>

        <div className="space-y-1 sm:space-y-2">
          <label htmlFor="notes" className="text-xs sm:text-sm font-medium">
            Special Instructions
          </label>
          <Textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className="w-full text-sm"
          />
        </div>

        <Button type="submit" className="primary-button w-full sm:w-auto sm:min-w-[200px] text-sm">
          Submit Booking Request
        </Button>
      </form>
    </div>
  );
};
