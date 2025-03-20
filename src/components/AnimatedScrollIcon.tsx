
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AnimatedScrollIcon = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToFeatures}
        aria-label="Scroll down"
        className="glass rounded-full p-3 flex items-center justify-center group hover:bg-sarura-500/10 transition-all duration-300"
      >
        <ChevronDown 
          className="text-sarura-500 group-hover:text-sarura-600 animate-bounce-soft" 
          size={24} 
        />
      </button>
    </div>
  );
};

export default AnimatedScrollIcon;
