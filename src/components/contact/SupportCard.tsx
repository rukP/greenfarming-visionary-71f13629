
import { Phone } from 'lucide-react';

const SupportCard = () => {
  return (
    <div className="glass p-6 rounded-xl border border-sarura-100 hover:border-sarura-200 transition-colors">
      <div className="flex items-center space-x-4">
        <div className="bg-sarura-100 p-3 rounded-lg">
          <Phone className="w-6 h-6 text-sarura-500" />
        </div>
        <div>
          <h4 className="font-semibold">Need urgent support?</h4>
          <p className="text-sm text-gray-600">Our support team is available 24/7</p>
        </div>
      </div>
      <a 
        href="tel:+250784148374"
        className="btn-hover mt-4 w-full flex items-center justify-center border border-sarura-500 text-sarura-500 px-5 py-3 rounded-lg text-base font-medium hover:bg-sarura-50 transition-all duration-300 transform hover:scale-[1.02]"
      >
        Call Support Team
      </a>
    </div>
  );
};

export default SupportCard;
