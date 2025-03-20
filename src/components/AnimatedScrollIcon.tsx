
import { ChevronDown } from "lucide-react";

const AnimatedScrollIcon = () => {
  const scrollToNextSection = () => {
    const heroSection = document.getElementById('features');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="fixed bottom-8 right-8 z-50 bg-sarura-500 text-white p-3 rounded-full shadow-lg cursor-pointer opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110 animate-bounce-soft"
      onClick={scrollToNextSection}
      aria-label="Scroll down"
    >
      <ChevronDown className="h-6 w-6" />
    </div>
  );
};

export default AnimatedScrollIcon;
