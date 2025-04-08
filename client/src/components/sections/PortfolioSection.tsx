import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Category = 'portraits' | 'brands' | 'music' | 'dogs';

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('portraits');
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<any>(null);

  const categories: { id: Category; label: string }[] = [
    { id: 'portraits', label: 'Portraits' },
    { id: 'brands', label: 'Businesses' },
    { id: 'music', label: 'Live Shows' },
    { id: 'dogs', label: 'Man\'s Best Friend' }
  ];

  const categoryItems = {
    portraits: portfolioItems.filter(item => item.categories.includes('portraits')),
    brands: portfolioItems.filter(item => item.categories.includes('brands')),
    music: portfolioItems.filter(item => item.categories.includes('music')),
    dogs: portfolioItems.filter(item => item.categories.includes('dogs'))
  };

  const currentItems = categoryItems[selectedCategory];
  
  // Update active index when category changes
  useEffect(() => {
    setActiveIndex(0);
    if (api) {
      api.scrollTo(0);
    }
  }, [selectedCategory, api]);
  
  // Listen for slide changes
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="work" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-heading text-center mb-4 text-white tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Work
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-400 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Browse through my creative portfolio
        </motion.p>
        
        {/* Category selectors */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button 
              key={category.id}
              className={`px-6 py-2 rounded-full transition-all duration-300 border-2 ${
                selectedCategory === category.id 
                  ? "bg-primary text-black font-bold border-primary" 
                  : "bg-transparent text-white hover:bg-gray-900 border-gray-700 hover:border-primary/70"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Carousel Portfolio */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Carousel
            opts={{ 
              loop: true,
              align: "start"
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {currentItems.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/1 lg:basis-1/1">
                  <div className="relative overflow-hidden rounded-xl bg-black group transition-all p-1">
                    <div className="overflow-hidden rounded-lg shadow-lg shadow-primary/20">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-[500px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity rounded-lg"></div>
                    <div className="absolute bottom-0 left-0 p-8 z-10">
                      <h3 className="text-3xl font-heading text-white tracking-wide mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-lg">{item.subtitle}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-10">
              <CarouselPrevious className="h-11 w-11 rounded-full border-2 border-primary bg-black/80 hover:bg-primary hover:text-black text-primary shadow-xl transition-colors duration-300" />
            </div>
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-10">
              <CarouselNext className="h-11 w-11 rounded-full border-2 border-primary bg-black/80 hover:bg-primary hover:text-black text-primary shadow-xl transition-colors duration-300" />
            </div>
          </Carousel>
          
          {/* Indicator dots */}
          <div className="flex justify-center mt-6 gap-2">
            {currentItems.map((_, index) => (
              <button 
                key={index} 
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-12 bg-primary" : "w-2 bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
