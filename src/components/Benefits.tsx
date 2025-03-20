
import { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const Benefits = () => {
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
      { threshold: 0.1 }
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

  const benefits = [
    "Reduce crop loss by up to 40% with early disease detection",
    "Save up to 35% on pesticide costs with targeted application",
    "Increase overall farm yield by 25% through optimized crop management",
    "Reduce water usage by 30% with precision irrigation insights",
    "Save 15 hours per week on manual inspection tasks",
    "Make data-driven decisions with comprehensive farm analytics",
    "Access expert farming advice through the AI assistant 24/7",
    "Minimize environmental impact with precise resource application"
  ];

  return (
    <section id="benefits" className="py-20 bg-sarura-500 text-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Sarura</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Our innovative solution provides substantial benefits that transform agricultural practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3 section-fade-in">
              <CheckCircle2 className="h-6 w-6 text-sarura-200 shrink-0 mt-0.5" />
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
