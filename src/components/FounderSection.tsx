
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const FounderSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Founder</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
          <div className="flex-shrink-0">
            <Avatar className="h-32 w-32 border-4 border-brand-yellow">
              <AvatarImage src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Founder" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold">Jane Doe</h3>
            <p className="text-gray-600 font-medium">Founder & CEO</p>
            <p className="text-gray-700">
              With over 15 years of experience in the cleaning industry, Jane founded CleaningPro with a vision to transform how cleaning services are delivered. Her dedication to quality, customer satisfaction, and environmental responsibility has shaped our company's core values.
            </p>
            <p className="text-gray-700">
              "I believe that everyone deserves to come home to a clean, healthy space. Our mission is to deliver exceptional cleaning services that give our clients more time to focus on what matters most to them."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
