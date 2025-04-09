import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/data";
import { PortfolioItemType } from "@/components/ui/PortfolioItem";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface PortfolioGridPageProps {
  category: string;
  title: string;
  description?: string;
}

// Map categories to appropriate hero images
const getCategoryHeroImage = (category: string): string => {
  switch(category) {
    case 'portraits':
      return "/images/portraits/Danny-headshot.jpg";
    case 'brands':
      return "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop";
    case 'music':
      return "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1470&auto=format&fit=crop";
    case 'dogs':
      return "/images/dogs/IMG_2813.jpg";
    case 'sports':
      return "https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=1470&auto=format&fit=crop";
    default:
      return "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=1470&auto=format&fit=crop";
  }
};

const PortfolioGridPage = ({ category, title, description }: PortfolioGridPageProps) => {
  const [items, setItems] = useState<PortfolioItemType[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter items by category
  useEffect(() => {
    const filteredItems = portfolioItems.filter(item => 
      item.categories.includes(category)
    );
    setItems(filteredItems);
  }, [category]);

  const heroImageUrl = getCategoryHeroImage(category);
  
  // Extract just the image URLs for the lightbox
  const imageUrls = items.map(item => item.imageUrl);

  return (
    <div className="bg-black min-h-screen">
      {/* Dialog-based Lightbox */}
      <Dialog 
        open={lightboxOpen} 
        onOpenChange={setLightboxOpen}
      >
        <DialogContent className="sm:max-w-[90vw] max-h-[90vh] bg-black/95 border-zinc-800 p-0 flex items-center justify-center">
          {imageUrls.length > 0 && (
            <div className="relative w-full h-full flex items-center justify-center p-2">
              <button 
                className="absolute top-2 right-2 bg-black/50 rounded-full p-2 text-white z-10"
                onClick={() => setLightboxOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
              
              {imageUrls.length > 1 && (
                <>
                  <button 
                    className="absolute left-4 bg-black/50 rounded-full p-2 text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(prev => 
                        prev === 0 ? imageUrls.length - 1 : prev - 1
                      );
                    }}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  
                  <button 
                    className="absolute right-4 bg-black/50 rounded-full p-2 text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(prev => 
                        prev === imageUrls.length - 1 ? 0 : prev + 1
                      );
                    }}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
              
              <img 
                src={imageUrls[currentImageIndex] || ''} 
                alt="Enlarged view"
                className="max-h-[80vh] max-w-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
        
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-center bg-cover z-0" 
          style={{ 
            backgroundImage: `url(${heroImageUrl})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center 20%'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-6xl font-heading text-white mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {title}
          </motion.h1>
          
          {description && (
            <motion.p 
              className="text-lg text-gray-200 max-w-2xl mx-auto mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Portfolio Grid - Minimalist style with variable image sizes */}
          <motion.div 
            className="grid grid-cols-12 gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {items.map((item, index) => {
              // Determine if this image should span 2 columns (larger image)
              // First 2 items are large (span 6 columns), next items alternate between span-4 and span-3
              const columnSpan = index < 2 ? 'col-span-12 sm:col-span-6' : 
                                 index % 3 === 0 ? 'col-span-12 sm:col-span-4' : 'col-span-6 sm:col-span-4 md:col-span-3';
              
              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  className={`relative group ${columnSpan}`}
                >
                  <div className="relative overflow-hidden w-full h-full bg-transparent">
                    {/* Natural aspect ratio container */}
                    <div className="relative w-full">
                      <div 
                        onClick={() => {
                          console.log("Image clicked", index);
                          setCurrentImageIndex(index);
                          setLightboxOpen(true);
                        }}
                        className="cursor-pointer w-full h-full"
                      >
                        <img 
                          src={item.imageUrl} 
                          alt={item.title}
                          className="w-full h-auto object-cover transition-transform duration-500"
                          style={{
                            transform: `scale(1.0)`,
                            transition: 'transform 0.5s ease-in-out'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                        />
                      </div>
                      
                      {/* Very subtle overlay that appears on hover - just for visual feedback */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Back to portfolio button */}
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="/#work" 
              className="px-6 py-3 rounded-full bg-gray-800 hover:bg-primary hover:text-black text-white transition-colors duration-300 inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Back to Portfolio
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioGridPage;