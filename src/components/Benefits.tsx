
import { useEffect, useRef } from 'react';
import { CheckCircle2, Sprout, Droplets, TrendingUp, Clock, BarChart3, MessageSquare, LeafyGreen, CloudSun } from 'lucide-react';

const Benefits = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const benefits = [
    {
      text: "Reduce crop loss by up to 40% with early disease detection",
      icon: Sprout
    },
    {
      text: "Save up to 35% on pesticide costs with targeted application",
      icon: Droplets
    },
    {
      text: "Increase overall farm yield by 25% through optimized crop management",
      icon: TrendingUp
    },
    {
      text: "Reduce water usage by 30% with precision irrigation insights",
      icon: Droplets
    },
    {
      text: "Save 15 hours per week on manual inspection tasks",
      icon: Clock
    },
    {
      text: "Make data-driven decisions with comprehensive farm analytics",
      icon: BarChart3
    },
    {
      text: "Access expert farming advice through the AI assistant 24/7",
      icon: MessageSquare
    },
    {
      text: "Minimize environmental impact with precise resource application",
      icon: LeafyGreen
    },
    {
      text: "Get accurate weather forecasts for better farm planning",
      icon: CloudSun
    }
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4 section-fade-in bg-sarura-600/50 p-4 rounded-lg hover:bg-sarura-600 transition-all duration-300 transform hover:-translate-y-1"
              ref={el => itemsRef.current[index] = el}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-sarura-200 p-2 rounded-lg">
                <benefit.icon className="h-6 w-6 text-sarura-600 shrink-0" />
              </div>
              <div>
                <p className="text-lg">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
