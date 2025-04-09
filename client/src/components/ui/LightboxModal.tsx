import { useState, useEffect, useCallback } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
}

const LightboxModal = ({ isOpen, onClose, images, currentIndex = 0 }: LightboxModalProps) => {
  const [index, setIndex] = useState(currentIndex);
  
  // Reset index when currentIndex prop changes
  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);
  
  const handlePrevious = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);
  
  const handleNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
          break;
        case 'ArrowRight':
          setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
          break;
        case 'Escape':
          onClose();
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, images.length, onClose]);
  
  // Show image count
  const imageCount = `${index + 1} / ${images.length}`;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-zinc-800 flex items-center justify-center"
        aria-describedby="lightbox-description"
      >
        <div id="lightbox-description" className="sr-only">
          Image gallery lightbox. Use arrow keys to navigate between images. Press Escape to close.
        </div>
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 z-50 p-2 bg-black/70 rounded-full text-white hover:bg-black/90 transition-colors"
          >
            <X size={24} />
          </button>
          
          {/* Image counter */}
          <div className="absolute top-4 left-4 text-white/80 text-sm bg-black/60 px-2 py-1 rounded-md">
            {imageCount}
          </div>
          
          {/* Image container */}
          <div className="w-full h-full flex items-center justify-center p-8">
            <div className="image-container">
              <img 
                src={images[index]} 
                alt={`Gallery image ${index + 1}`}
                className="max-h-[calc(95vh-100px)] max-w-[calc(95vw-100px)] object-contain protected-image"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
          
          {/* Navigation arrows - only show if there are multiple images */}
          {images.length > 1 && (
            <>
              <button 
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/70 rounded-full text-white hover:bg-black/90 transition-colors"
              >
                <ChevronLeft size={28} />
              </button>
              
              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/70 rounded-full text-white hover:bg-black/90 transition-colors"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LightboxModal;