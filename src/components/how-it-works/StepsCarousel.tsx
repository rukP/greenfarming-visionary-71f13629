
import React, { useState, useCallback } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { 
  Card,
  CardContent
} from "@/components/ui/card";
import { steps } from './StepsList';

const StepsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <div className="space-y-6 px-4">
      <Carousel className="w-full max-w-xl mx-auto"
        opts={{
          loop: true,
          align: "center",
        }}
        onSlideChange={handleSlideChange}
      >
        <CarouselContent>
          {steps.map((step, index) => (
            <CarouselItem key={index}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[350px] group">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sarura-500/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center mb-2">
                    <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse mr-2"></div>
                    <span className="text-lg font-bold">{step.title}</span>
                  </div>
                  <p className="text-white/90 text-sm max-w-md mb-2">{step.description}</p>
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

      <div className="flex justify-center gap-2 mt-4">
        {steps.map((_, index) => (
          <div 
            key={index}
            className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
              index === activeIndex ? "w-8 bg-sarura-500" : "w-2 bg-gray-300"
            }`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
      
      <Card className="border border-sarura-100 bg-white/50 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <div className="p-2 bg-sarura-100 rounded-full">
                <steps[activeIndex].icon className="text-sarura-500 h-6 w-6" />
              </div>
            </div>
            <h3 className="font-medium text-sarura-500">
              {activeIndex + 1}. {steps[activeIndex].title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{steps[activeIndex].description}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StepsCarousel;
