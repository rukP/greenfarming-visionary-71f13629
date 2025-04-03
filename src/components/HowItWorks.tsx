
import { useEffect, useRef } from 'react';
import { Check, Camera, CloudSun, MonitorSmartphone, Sprout, BarChart3 } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLLIElement | null)[]>([]);

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

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      stepsRef.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  const steps = [
    {
      title: "Drone Scan",
      description: "Our drones scan your plantation, capturing high-resolution imagery of your crops.",
      icon: Camera,
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&h=800&q=80"
    },
    {
      title: "Weather Analysis",
      description: "Real-time weather data is collected and analyzed to predict conditions that affect your crops.",
      icon: CloudSun,
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&h=800&q=80"
    },
    {
      title: "AI Analysis",
      description: "Sarura's AI algorithms analyze the imagery to detect diseases, pest infestations, and growth issues.",
      icon: MonitorSmartphone,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=800&q=80"
    },
    {
      title: "Smart Diagnosis",
      description: "The system provides detailed diagnosis of any detected problems, including disease identification.",
      icon: BarChart3,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=800&q=80"
    },
    {
      title: "Automated Treatment",
      description: "For identified issues, Sarura can automatically apply targeted treatments to the affected areas.",
      icon: Sprout,
      image: "https://images.unsplash.com/photo-1623971969804-9dd73060baef?auto=format&fit=crop&w=1200&h=800&q=80"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative bg-sarura-50/30" ref={sectionRef}>
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-sarura-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-sarura-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sarura-500">How Sarura Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes it easy to monitor and protect your crops with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2 section-fade-in">
            <Carousel className="w-full max-w-xl mx-auto">
              <CarouselContent>
                {steps.map((step, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-[300px] object-cover mr-4"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-sarura-500/70 to-transparent">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <div className="flex items-center space-x-2">
                            <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium">{step.title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative inset-0 translate-y-0 mx-2" />
                <CarouselNext className="relative inset-0 translate-y-0 mx-2" />
              </div>
            </Carousel>
          </div>

          <div className="lg:order-1">
            <ol className="relative border-l border-sarura-200">
              {steps.map((step, index) => (
                <li 
                  key={index} 
                  className="ml-6 mb-8 section-fade-in"
                  ref={el => stepsRef.current[index] = el}
                >
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-sarura-100 rounded-full -left-4 ring-4 ring-white">
                    <step.icon className="w-4 h-4 text-sarura-500" />
                  </span>
                  <h3 className="flex items-center text-xl font-semibold text-gray-900 ml-7">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600 ml-5">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
