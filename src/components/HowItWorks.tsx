
import { useEffect, useRef } from 'react';
import StepsList from './how-it-works/StepsList';
import StepsCarousel from './how-it-works/StepsCarousel';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="how-it-works" className="py-20 relative bg-sarura-50/30" ref={sectionRef}>
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-sarura-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-sarura-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/2 w-1/4 h-1/4 bg-sarura-300 rounded-full opacity-10 blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sarura-500">How Sarura Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes it easy to monitor and protect your crops with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-sarura-100/30">
            <StepsList />
          </div>
          
          <div className="section-fade-in relative">
            <StepsCarousel />
            <div className="absolute -z-10 w-72 h-72 bg-sarura-100/30 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
