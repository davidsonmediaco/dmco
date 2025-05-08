import { useState, useEffect } from 'react';
import { PortfolioItemType } from '@/components/ui/PortfolioItem';
import ImageWithDimensions from '@/components/ui/ImageWithDimensions';
import { motion } from 'framer-motion';

interface MasonryGridProps {
  items: PortfolioItemType[];
  onImageClick: (index: number) => void;
  columns?: number; // Allow customizing number of columns
}

const MasonryGrid = ({ items, onImageClick, columns = 3 }: MasonryGridProps) => {
  const [columnCount, setColumnCount] = useState(columns);
  
  // Responsive column adjustment based on screen width
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setColumnCount(1); // Mobile: 1 column
      } else if (window.innerWidth < 1024) {
        setColumnCount(2); // Tablet: 2 columns
      } else {
        setColumnCount(columns); // Desktop: use provided column count
      }
    };
    
    // Set initial value
    updateColumns();
    
    // Update on resize
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, [columns]);
  
  // Create array of column indexes based on dynamic column count
  const columnIndexes = Array.from({ length: columnCount }, (_, i) => i);
  
  return (
    <div className="masonry-grid">
      {columnIndexes.map(colIndex => (
        <div className="masonry-column" key={`col-${colIndex}`}>
          {items
            .filter((_, i) => i % columnCount === colIndex)
            .map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * index + (0.1 * colIndex) }}
                className="masonry-item"
                onClick={() => onImageClick(items.findIndex(i => i.id === item.id))}
              >
                <div className="relative group">
                  <ImageWithDimensions
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-auto rounded-md"
                  />
                  
                  {/* Image caption overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 rounded-md">
                    <h3 className="text-white text-lg font-heading">{item.title}</h3>
                    {item.subtitle && (
                      <p className="text-zinc-200 text-sm">{item.subtitle}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;