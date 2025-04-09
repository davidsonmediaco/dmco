import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
}

const LightboxModal = ({ isOpen, onClose, images, currentIndex = 0 }: LightboxModalProps) => {
  const [index, setIndex] = useState(currentIndex);

  // Reset index when modal opens
  useEffect(() => {
    if (isOpen) {
      setIndex(currentIndex);
    }
  }, [isOpen, currentIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        navigatePrev();
      } else if (e.key === 'ArrowRight') {
        navigateNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Lock body scroll when lightbox is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, index, images.length]);

  // Navigation functions
  const navigatePrev = () => {
    if (images.length <= 1) return;
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const navigateNext = () => {
    if (images.length <= 1) return;
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 z-10 p-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            onClick={onClose}
          >
            <X size={24} />
          </button>

          {/* Navigation controls */}
          {images.length > 1 && (
            <>
              <button
                className="absolute left-4 z-10 p-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePrev();
                }}
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                className="absolute right-4 z-10 p-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateNext();
                }}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Image container */}
          <div 
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center" 
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              key={index}
              src={images[index]}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          {/* Image counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              {index + 1} / {images.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LightboxModal;