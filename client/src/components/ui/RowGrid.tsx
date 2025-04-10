import { PortfolioItemType } from '@/components/ui/PortfolioItem';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

interface RowGridProps {
  items: PortfolioItemType[];
  onImageClick: (index: number) => void;
  rowSize?: number;
  viewAllLink?: string;
  viewAllText?: string;
}

const RowGrid = ({ 
  items, 
  onImageClick, 
  rowSize = 5,
  viewAllLink,
  viewAllText = "View All"
}: RowGridProps) => {
  const [rows, setRows] = useState<PortfolioItemType[][]>([]);
  
  // Calculate rows on items change
  useEffect(() => {
    const groupedRows: PortfolioItemType[][] = [];
    for (let i = 0; i < items.length; i += rowSize) {
      groupedRows.push(items.slice(i, i + rowSize));
    }
    setRows(groupedRows);
  }, [items, rowSize]);

  return (
    <div className="row-grid-container space-y-4">
      {rows.map((row, rowIndex) => (
        <motion.div 
          key={`row-${rowIndex}`}
          className="row-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * rowIndex }}
        >
          {row.map((item, itemIndex) => (
            <motion.div
              key={item.id}
              className="grid-item"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 * itemIndex + 0.1 * rowIndex }}
              onClick={() => onImageClick(items.findIndex(i => i.id === item.id))}
            >
              <div className="image-container relative overflow-hidden aspect-[3/2] bg-black">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-contain protected-image"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </motion.div>
          ))}
          
          {/* If the row isn't full, add empty spacers */}
          {row.length < rowSize && Array.from({ length: rowSize - row.length }).map((_, i) => (
            <div key={`spacer-${i}`} className="grid-item-spacer"></div>
          ))}
        </motion.div>
      ))}
      
      {viewAllLink && (
        <div className="flex justify-center mt-8">
          <Button variant="default" className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-bold px-8 py-6 text-lg" asChild>
            <a href={viewAllLink}>
              {viewAllText} <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      )}
    </div>
  );
};

export default RowGrid;