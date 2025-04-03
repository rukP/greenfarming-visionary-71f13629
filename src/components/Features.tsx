
import { MonitorSmartphone, Plane, Sprout, BarChart3, Bot, CloudSun } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      title: "AI Disease Detection",
      description: "Early detection of plant diseases using AI and drone imagery, reducing crop loss by up to 40%.",
      icon: MonitorSmartphone
    },
    {
      title: "Drone Monitoring",
      description: "Real-time aerial views of plantations to identify problem areas and optimize farm management.",
      icon: Plane
    },
    {
      title: "Automatic Spraying",
      description: "Autonomous application of treatments on infected areas, ensuring precise targeting and minimizing waste.",
      icon: Sprout
    },
    {
      title: "Data-Driven Reports",
      description: "Detailed insights on crop health, disease detection, and spraying efficiency to guide farm decisions.",
      icon: BarChart3
    },
    {
      title: "Weather Monitoring",
      description: "Real-time weather forecasting and historical patterns to optimize planting, harvesting, and crop protection.",
      icon: CloudSun
    },
    {
      title: "AI Chatbot Support",
      description: "User-friendly virtual assistant providing real-time guidance on crop care and platform usage.",
      icon: Bot
    }
  ];

  return (
    // <section id="features" className="py-20 bg-gradient-to-b from-white to-sarura-50/30">
    <section id="features" className="py-20 bg- from-white to-sarura-50/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sarura-500">Revolutionizing Farming with AI</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our innovative technology combines artificial intelligence, drone monitoring, and automated systems to transform agricultural practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
