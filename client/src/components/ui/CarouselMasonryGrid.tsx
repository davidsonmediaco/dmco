import { useState, useCallback, useRef, useEffect } from 'react';
import { PortfolioItemType } from './PortfolioItem';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';

interface CarouselMasonryGridProps {
  items: PortfolioItemType[];
  onImageClick: (index: number) => void;
  itemsPerRow?: number; // Number of items visible in carousel
}

const CarouselMasonryGrid = ({
  items,
  onImageClick,
  itemsPerRow = 4,
}: CarouselMasonryGridProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    containScroll: 'trimSnaps',
  });
  
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress);
  }, [emblaApi, setScrollProgress]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    onScroll();
    emblaApi.on('select', onSelect);
    emblaApi.on('scroll', onScroll);
    emblaApi.on('reInit', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('scroll', onScroll);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect, onScroll]);

  // Generate dots for the scroll progress indicator
  const scrollIndicators = [];
  const numberOfDots = 5; // Fixed number of dots for visual consistency
  
  for (let i = 0; i < numberOfDots; i++) {
    const isActive = scrollProgress >= (i / numberOfDots) && 
                     scrollProgress <= ((i + 1) / numberOfDots);
    
    scrollIndicators.push(
      <div 
        key={`dot-${i}`}
        className={`w-2 h-2 rounded-full mx-1 ${isActive ? 'bg-[#D4AF37]' : 'bg-gray-500'}`}
      />
    );
  }

  return (
    <div className="carousel-masonry-grid">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-masonry-item flex-grow-0 flex-shrink-0 
                         pl-4 min-w-[${100 / Math.min(itemsPerRow, items.length)}%]
                         ${item.isWide ? 'min-w-[40%]' : 'min-w-[20%]'}`}
              onClick={() => onImageClick(index)}
            >
              <motion.div
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="rounded-md overflow-hidden bg-gray-900 h-full"
              >
                <div className="relative group">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={`w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.05] 
                              ${item.isWide ? 'aspect-video' : 'aspect-[2/3]'}`}
                  />
                  
                  {/* Image dimensions info on hover */}
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.isWide ? 'Landscape' : 'Portrait'}
                  </div>
                  
                  {/* Overlay with title on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button
        className="embla__prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#D4AF37] text-black p-2 rounded-full w-10 h-10 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed z-10"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>
      
      <button
        className="embla__next absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#D4AF37] text-black p-2 rounded-full w-10 h-10 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed z-10"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>
      
      {/* Progress indicator */}
      <div className="flex justify-center mt-4">
        {scrollIndicators}
      </div>
    </div>
  );
};

export default CarouselMasonryGrid;