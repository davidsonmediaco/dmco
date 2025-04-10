import { useState, useEffect, useRef } from 'react';
import { PortfolioItemType } from '@/components/ui/PortfolioItem';
import ImageWithDimensions from '@/components/ui/ImageWithDimensions';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselMasonryGridProps {
  items: PortfolioItemType[];
  onImageClick: (index: number) => void;
  itemsPerRow?: number; // Number of items visible in carousel
}

const CarouselMasonryGrid = ({ 
  items, 
  onImageClick, 
  itemsPerRow = 3 
}: CarouselMasonryGridProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleItems, setVisibleItems] = useState<PortfolioItemType[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(itemsPerRow);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Calculate responsive items per view based on screen width
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet: 2 items
      } else {
        setItemsPerView(itemsPerRow); // Desktop: use provided count
      }
    };
    
    // Set initial value
    updateItemsPerView();
    
    // Update on resize
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, [itemsPerRow]);
  
  // Calculate total pages and set visible items when items or items per view changes
  useEffect(() => {
    const pages = Math.ceil(items.length / itemsPerView);
    setTotalPages(pages);
    
    // Reset current page if it's out of bounds after a filter change
    if (currentPage >= pages) {
      setCurrentPage(0);
    }
    
    // Update visible items
    const startIdx = currentPage * itemsPerView;
    let endIdx = startIdx + itemsPerView;
    
    // Make sure we don't go past the array bounds
    if (endIdx > items.length) {
      endIdx = items.length;
    }
    
    setVisibleItems(items.slice(startIdx, endIdx));
  }, [items, itemsPerView, currentPage]);
  
  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      // Loop back to first page
      setCurrentPage(0);
    }
  };
  
  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else {
      // Loop to last page
      setCurrentPage(totalPages - 1);
    }
  };
  
  return (
    <div className="carousel-masonry-grid relative w-full overflow-hidden" ref={containerRef}>
      {/* Navigation Buttons */}
      {totalPages > 1 && (
        <>
          <button 
            onClick={goToPrevPage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 hover:bg-[#D4AF37]/80 text-white p-2 rounded-r-md focus:outline-none"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={goToNextPage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 hover:bg-[#D4AF37]/80 text-white p-2 rounded-l-md focus:outline-none"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
      
      {/* Items Grid */}
      <div className="flex justify-center gap-4 p-4">
        {visibleItems.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="carousel-masonry-item"
            style={{ width: `calc(${100 / itemsPerView}% - 16px)` }}
            onClick={() => onImageClick(items.findIndex(i => i.id === item.id))}
          >
            <div className="relative group cursor-pointer overflow-hidden rounded-md">
              <div className="aspect-[4/5] overflow-hidden">
                <ImageWithDimensions
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-heading">{item.title}</h3>
                {item.subtitle && (
                  <p className="text-zinc-200 text-sm">{item.subtitle}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Page Indicators */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentPage ? 'bg-[#D4AF37]' : 'bg-zinc-600 hover:bg-zinc-400'
              }`}
              onClick={() => setCurrentPage(index)}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarouselMasonryGrid;