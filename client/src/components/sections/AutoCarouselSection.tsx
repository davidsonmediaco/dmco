import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { PortfolioItemType } from '../ui/PortfolioItem';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';
import CarouselMasonryGrid from '../ui/CarouselMasonryGrid';
import LightboxModal from '../ui/LightboxModal';

interface AutoCarouselSectionProps {
  title: string;
  subtitle?: string;
  items: PortfolioItemType[];
  viewMoreLink: string;
  className?: string;
}

const AutoCarouselSection = ({ 
  title, 
  subtitle, 
  items, 
  viewMoreLink,
  className 
}: AutoCarouselSectionProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Extract image URLs for the lightbox
  const imageUrls = items.map(item => item.imageUrl);
  
  // If no items, display a message
  if (items.length === 0) {
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
    <div className={cn("py-16 bg-black text-white", className)}>
      {/* Lightbox Modal */}
      <LightboxModal 
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={imageUrls}
        currentIndex={currentImageIndex}
      />
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading mb-2">{title}</h2>
            {subtitle && <p className="text-lg opacity-80">{subtitle}</p>}
          </div>
        </div>
        
        {/* Carousel Masonry Grid Layout */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <CarouselMasonryGrid 
            items={items} 
            itemsPerRow={4} 
            onImageClick={(index: number) => {
              setCurrentImageIndex(index);
              setLightboxOpen(true);
            }}
          />
        </motion.div>
        
        <div className="mt-8 flex justify-center">
          <Link to={viewMoreLink}>
            <div className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-bold text-lg px-10 py-3 rounded-md shadow-lg cursor-pointer">
              View All Work <ExternalLink className="ml-1 w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AutoCarouselSection;