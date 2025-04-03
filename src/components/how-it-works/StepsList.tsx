
import { useEffect, useRef } from 'react';
import { Camera, CloudSun, MonitorSmartphone, Sprout, BarChart3 } from 'lucide-react';

export const steps = [
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

interface StepsListProps {
  className?: string;
}

const StepsList = ({ className }: StepsListProps) => {
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

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      stepsRef.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  return (
    <ol className={`relative border-l border-sarura-200 ${className}`}>
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
  );
};

export default StepsList;
