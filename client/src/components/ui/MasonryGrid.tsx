import { useState } from 'react';
import { PortfolioItemType } from '@/components/ui/PortfolioItem';
import ImageWithDimensions from '@/components/ui/ImageWithDimensions';
import { motion } from 'framer-motion';

interface MasonryGridProps {
  items: PortfolioItemType[];
  onImageClick: (index: number) => void;
}

const MasonryGrid = ({ items, onImageClick }: MasonryGridProps) => {
  return (
    <div className="masonry-grid">
      {/* First column */}
      <div className="masonry-column">
        {items.filter((_, i) => i % 3 === 0).map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 * index }}
            className="masonry-item"
            onClick={() => onImageClick(items.findIndex(i => i.id === item.id))}
          >
            <ImageWithDimensions
              src={item.imageUrl}
              alt={item.title}
            />
          </motion.div>
        ))}
      </div>
      
      {/* Second column */}
      <div className="masonry-column">
        {items.filter((_, i) => i % 3 === 1).map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 * index + 0.1 }}
            className="masonry-item"
            onClick={() => onImageClick(items.findIndex(i => i.id === item.id))}
          >
            <ImageWithDimensions
              src={item.imageUrl}
              alt={item.title}
            />
          </motion.div>
        ))}
      </div>
      
      {/* Third column */}
      <div className="masonry-column">
        {items.filter((_, i) => i % 3 === 2).map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 * index + 0.2 }}
            className="masonry-item"
            onClick={() => onImageClick(items.findIndex(i => i.id === item.id))}
          >
            <ImageWithDimensions
              src={item.imageUrl}
              alt={item.title}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;