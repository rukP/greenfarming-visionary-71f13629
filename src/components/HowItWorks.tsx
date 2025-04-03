
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 bg-white/40 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-sarura-100/30">
            <StepsList />
          </div>
          
          <div className="lg:col-span-1 section-fade-in relative bg-white/30 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-sarura-100/30">
            <StepsCarousel />
            <div className="absolute -z-10 w-72 h-72 bg-sarura-100/30 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="lg:col-span-1 section-fade-in relative bg-white/30 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-sarura-100/30 flex items-center justify-center">
            <div className="relative w-full h-full min-h-[350px] overflow-hidden rounded-xl">
              <svg 
                viewBox="0 0 500 500" 
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="250" cy="250" r="150" fill="#e6f0e8" />
                <circle cx="250" cy="250" r="100" fill="#cce2d1" />
                <path 
                  d="M250,350 Q270,300 300,280 Q330,260 350,250 Q330,240 300,220 Q270,200 250,150 Q230,200 200,220 Q170,240 150,250 Q170,260 200,280 Q230,300 250,350 Z" 
                  fill="#66a776"
                  className="animate-float"
                />
                <circle cx="250" cy="250" r="30" fill="#013D0E" />
                <circle cx="250" cy="250" r="15" fill="#cce2d1" />
                
                <g className="animate-pulse-soft">
                  <circle cx="170" cy="170" r="8" fill="#013D0E" />
                  <circle cx="330" cy="170" r="8" fill="#013D0E" />
                  <circle cx="170" cy="330" r="8" fill="#013D0E" />
                  <circle cx="330" cy="330" r="8" fill="#013D0E" />
                </g>
                
                <g className="animate-pulse">
                  <path d="M250,100 L250,120" stroke="#013D0E" strokeWidth="3" />
                  <path d="M250,380 L250,400" stroke="#013D0E" strokeWidth="3" />
                  <path d="M100,250 L120,250" stroke="#013D0E" strokeWidth="3" />
                  <path d="M380,250 L400,250" stroke="#013D0E" strokeWidth="3" />
                </g>
              </svg>
              
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-sarura-500/80 via-sarura-500/40 to-transparent">
                <h3 className="text-white text-xl font-semibold mb-2">Smart Monitoring System</h3>
                <p className="text-white/90 text-sm">Our advanced system continuously monitors your crops using cutting-edge sensor technology and AI-powered analysis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
