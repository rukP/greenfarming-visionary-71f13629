
import { useEffect, useRef } from 'react';
import { Download, Apple, Smartphone } from 'lucide-react';

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Features included in the app
  const appFeatures = [
    "Real-time disease detection",
    "Weather monitoring & alerts",
    "Drone control & scheduling",
    "Treatment recommendations",
    "Harvest optimization",
    "Crop yield predictions",
    "24/7 AI assistant support",
    "Offline mode for remote areas"
  ];

  return (
    <section id="download" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-sarura-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sarura-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass rounded-3xl overflow-hidden shadow-2xl border border-sarura-200/30">
          <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="section-fade-in" ref={el => elementsRef.current[0] = el}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sarura-500">Ready to Transform Your Farming Experience?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Download the Sarura app today and start utilizing the power of AI to revolutionize your agricultural practices.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#" className="btn-hover flex items-center justify-center bg-sarura-500 text-white px-6 py-3 rounded-full text-base font-medium shadow-lg shadow-sarura-500/20 hover:bg-sarura-600 transition-colors">
                  <Apple size={20} className="mr-2" />
                  App Store
                </a>
                <a href="#" className="btn-hover flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-full text-base font-medium shadow-lg shadow-gray-900/20 hover:bg-gray-800 transition-colors">
                  <Smartphone size={20} className="mr-2" />
                  Google Play
                </a>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                {appFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-sarura-500 mr-2"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <p>Joined by 10,000+ farmers worldwide</p>
              </div>
            </div>
            
            <div className="relative section-fade-in" ref={el => elementsRef.current[1] = el}>
              <div className="relative mx-auto max-w-[320px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-sarura-500/50 to-sarura-300/30 rounded-[2.5rem] blur-xl animate-pulse-light"></div>
                <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-black rounded-[2rem] overflow-hidden aspect-[9/19]">
                    <img 
                      src="https://images.unsplash.com/photo-1530759766718-1bca00afe4f0?auto=format&fit=crop&w=800&h=1800&q=80" 
                      alt="Sarura mobile app showing crop monitoring interface" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sarura-500/90 text-white py-2 px-4 rounded-full text-sm font-medium rotate-[-3deg]">
                      New features available!
                    </div>
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl"></div>
                </div>
                <div className="absolute -bottom-8 -right-8 bg-sarura-500 text-white rounded-full p-3 shadow-lg animate-bounce-soft">
                  <Download size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
