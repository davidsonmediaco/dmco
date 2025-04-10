import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { PortfolioItemType } from '@/components/ui/PortfolioItem';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AutoCarouselSectionProps {
  title: string;
  subtitle?: string;
  items: PortfolioItemType[];
  viewMoreLink: string;
  className?: string;
}

const AUTO_SCROLL_INTERVAL = 3000; // 3 seconds per slide

const AutoCarouselSection = ({ 
  title, 
  subtitle, 
  items, 
  viewMoreLink,
  className 
}: AutoCarouselSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Filter for wide images only and select the first 5
  const wideItems = items.filter(item => item.isWide === true);
  const displayItems = wideItems.slice(0, 5);
  
  // Function to go to next slide
  const goToNext = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % displayItems.length);
  }, [displayItems.length]);
  
  // Function to go to previous slide
  const goToPrev = useCallback(() => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? displayItems.length - 1 : prevIndex - 1
    );
  }, [displayItems.length]);
  
  // Set up auto scrolling
  useEffect(() => {
    const startTimer = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      
      // Only auto scroll if not hovering and we have more than 1 item
      if (!isHovering && displayItems.length > 1) {
        timerRef.current = setTimeout(goToNext, AUTO_SCROLL_INTERVAL);
      }
    };
    
    startTimer();
    
    // Cleanup the timer when component unmounts
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, isHovering, goToNext, displayItems.length]);
  
  // If no items, display a message
  if (displayItems.length === 0) {
    return (
      <div className={cn("py-16 bg-black text-white", className)}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading mb-2">{title}</h2>
          {subtitle && <p className="text-lg opacity-80 mb-8">{subtitle}</p>}
          <div className="flex items-center justify-center h-[300px] bg-zinc-900 rounded-lg">
            <p className="text-lg text-zinc-400">No items in this category</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div 
      className={cn("py-16 bg-black text-white overflow-hidden", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading mb-2">{title}</h2>
            {subtitle && <p className="text-lg opacity-80">{subtitle}</p>}
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={goToPrev}
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={goToNext}
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="relative bg-black border border-zinc-800 rounded-lg overflow-hidden flex flex-col" style={{ height: "500px", maxWidth: "1400px", margin: "0 auto" }}>
          {/* Navigation controls */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
            <button 
              onClick={goToPrev}
              className="p-3 rounded-full bg-black/50 hover:bg-[#D4AF37] text-white hover:text-black transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
            <button 
              onClick={goToNext}
              className="p-3 rounded-full bg-black/50 hover:bg-[#D4AF37] text-white hover:text-black transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Progress indicator */}
          <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center gap-2 p-4">
            {displayItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#D4AF37]' : 'bg-zinc-600 hover:bg-zinc-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Slides */}
          <div className="flex-1 w-full flex items-center justify-center p-6 overflow-hidden">
            {displayItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`w-full h-full flex justify-center items-center ${index === currentIndex ? 'block' : 'hidden'}`}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="carousel-image-container w-full h-full">
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="flex-1 flex items-center justify-center py-6 px-4 w-full">
                      <div className="image-container">
                        <img 
                          src={item.imageUrl} 
                          alt={item.title}
                          className="max-w-full max-h-[400px] object-contain rounded shadow-xl protected-image"
                          style={{ 
                            filter: "drop-shadow(0 20px 13px rgb(0 0 0 / 0.08)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))"
                          }}
                          draggable="false"
                          onContextMenu={(e) => e.preventDefault()}
                        />
                      </div>
                    </div>
                    
                    {/* Caption area - removed for cleaner layout */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <Link to={viewMoreLink}>
            <button className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-bold text-lg px-10 py-3 rounded-md shadow-lg">
              View All Work <ExternalLink className="ml-1 w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AutoCarouselSection;