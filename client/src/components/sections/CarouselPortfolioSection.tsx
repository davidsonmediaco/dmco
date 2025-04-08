import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { portfolioItems } from "@/lib/data";
import { PortfolioItemType } from "@/components/ui/PortfolioItem";

type Category = 'all' | 'portraits' | 'music' | 'brands' | 'dogs' | 'sports';

// Define the categories to show
const CATEGORIES = ["portraits", "music", "brands", "dogs", "sports"];

const CarouselPortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [isChangingCategory, setIsChangingCategory] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    slidesToScroll: 1
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Get items filtered by selected category
  const categoryItems = selectedCategory === 'all'
    ? portfolioItems.filter(item => 
        CATEGORIES.some(category => item.categories.includes(category))
      )
    : portfolioItems.filter(item => 
        item.categories.includes(selectedCategory)
      );
        
  // Count items per category for the category badges
  const getCategoryCount = (category: string) => {
    return portfolioItems.filter(item => item.categories.includes(category)).length;
  };

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Handle carousel initialization
  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);
  
  // Handle category changes
  useEffect(() => {
    if (emblaApi) {
      setIsChangingCategory(true);
      
      // Short delay to allow for transition effect
      setTimeout(() => {
        emblaApi.reInit();
        emblaApi.scrollTo(0);
        setIsChangingCategory(false);
      }, 300);
    }
  }, [selectedCategory, emblaApi]);

  return (
    <section id="work" className="py-24 bg-black overflow-hidden">
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
          className="text-center text-gray-400 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Browse through my creative portfolio showcasing diverse styles across multiple disciplines
        </motion.p>

        {/* Category filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button 
            className={`px-6 py-2 rounded-full transition-all duration-300 border-2 ${
              selectedCategory === 'all' 
                ? "bg-primary text-black font-bold border-primary" 
                : "bg-transparent text-white hover:bg-gray-900 border-gray-700 hover:border-primary/70"
            }`}
            onClick={() => setSelectedCategory('all')}
          >
            <span>All</span>
            <span className={`ml-2 text-xs min-w-[20px] h-5 px-1.5 rounded-full inline-flex justify-center items-center ${
              selectedCategory === 'all' 
                ? "bg-black/30 text-white" 
                : "bg-gray-800 text-gray-400"
            }`}>
              {portfolioItems.filter(item => CATEGORIES.some(category => item.categories.includes(category))).length}
            </span>
          </button>
          {CATEGORIES.map((category) => (
            <button 
              key={category}
              className={`px-6 py-2 rounded-full transition-all duration-300 border-2 ${
                selectedCategory === category 
                  ? "bg-primary text-black font-bold border-primary" 
                  : "bg-transparent text-white hover:bg-gray-900 border-gray-700 hover:border-primary/70"
              }`}
              onClick={() => setSelectedCategory(category as Category)}
            >
              <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
              <span className={`ml-2 text-xs min-w-[20px] h-5 px-1.5 rounded-full inline-flex justify-center items-center ${
                selectedCategory === category 
                  ? "bg-black/30 text-white" 
                  : "bg-gray-800 text-gray-400"
              }`}>{getCategoryCount(category)}</span>
            </button>
          ))}
        </motion.div>
        
        {/* Carousel */}
        {categoryItems.length > 0 ? (
          <div className={`overflow-hidden transition-opacity duration-300 ${isChangingCategory ? 'opacity-0' : 'opacity-100'}`} ref={emblaRef}>
            <div className="flex">
              {categoryItems.map((item, index) => (
              <div 
                key={item.id} 
                className="flex-[0_0_90%] min-w-0 sm:flex-[0_0_70%] md:flex-[0_0_60%] lg:flex-[0_0_40%] pl-4"
              >
                <div className={`w-full shadow-2xl transform ${
                  index % 2 === 0 ? 'rotate-2 origin-top-left' : '-rotate-2 origin-top-right'
                } transition-all duration-500 hover:rotate-0 hover:scale-105 mx-auto`}>
                  <a 
                    href={`/${item.categories[0]}`} 
                    className="block relative group"
                  >
                    {/* 4:5 aspect ratio container */}
                    <div className="relative" style={{ paddingBottom: '125%' }}> {/* 4:5 aspect ratio */}
                      <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      {/* Gradient overlay that appears on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                      
                      {/* Category label */}
                      <div className="absolute top-4 right-4 bg-primary text-black text-sm font-bold py-1 px-3 rounded-full">
                        {item.categories[0].charAt(0).toUpperCase() + item.categories[0].slice(1)}
                      </div>
                      
                      {/* Title that appears on hover */}
                      <div className="absolute bottom-0 left-0 p-8 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="text-3xl font-heading text-white mb-2">{item.title}</h3>
                        <p className="text-primary">{item.subtitle}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-gray-400 mb-4">No items found in this category</p>
            <button 
              onClick={() => setSelectedCategory('all')} 
              className="px-6 py-2 rounded-full bg-gray-800 hover:bg-primary hover:text-black text-white transition-colors duration-300"
            >
              View all work
            </button>
          </div>
        )}
        
        {/* Only show navigation controls when we have items */}
        {categoryItems.length > 0 && (
          <>
            {/* Dots navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndex ? 'bg-primary scale-125' : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation arrows */}
            <div className="flex justify-center gap-6 mt-8">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
          </>
        )}
        
        <div className="mt-16 text-center">
          <motion.a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-black rounded-full font-bold hover:bg-primary/90 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Work Together</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CarouselPortfolioSection;