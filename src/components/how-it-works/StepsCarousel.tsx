
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { steps } from './StepsList';

const StepsCarousel = () => {
  return (
    <Carousel className="w-full max-w-xl mx-auto">
      <CarouselContent>
        {steps.map((step, index) => (
          <CarouselItem key={index}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px]">
              <img 
                src={step.image} 
                alt={step.title} 
                className="w-full h-full object-cover"
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
  );
};

export default StepsCarousel;
