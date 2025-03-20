
import { useEffect, useRef } from 'react';
import { Download, Apple, Smartphone } from 'lucide-react';

const CTA = () => {
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

  return (
    <section id="download" className="py-24 relative" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-sarura-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-sarura-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="section-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Farming Experience?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Download the Sarura app today and start utilizing the power of AI to revolutionize your agricultural practices.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="btn-hover flex items-center justify-center bg-sarura-500 text-white px-6 py-3 rounded-full text-base font-medium shadow-lg shadow-sarura-500/20">
                  <Apple size={20} className="mr-2" />
                  App Store
                </a>
                <a href="#" className="btn-hover flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-full text-base font-medium shadow-lg shadow-gray-900/20">
                  <Smartphone size={20} className="mr-2" />
                  Google Play
                </a>
              </div>
              
              <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
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
            
            <div className="relative section-fade-in">
              <div className="relative mx-auto max-w-[320px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-sarura-500/30 to-sarura-200/30 rounded-[2.5rem] blur-xl"></div>
                <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                  <div className="bg-black rounded-[2rem] overflow-hidden aspect-[9/19]">
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=1800&q=80" 
                      alt="Sarura app on mobile phone" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl"></div>
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
