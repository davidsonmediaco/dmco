import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/data";
import { PortfolioItemType } from "@/components/ui/PortfolioItem";
import ImageWithDimensions from "@/components/ui/ImageWithDimensions";
import LightboxModal from "@/components/ui/LightboxModal";

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
      return "/images/sports/_MG_5754.jpg";
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
  
  // Extract image URLs for the lightbox
  const imageUrls = items.map(item => item.imageUrl);

  return (
    <div className="bg-black min-h-screen">
      {/* Lightbox Modal */}
      <LightboxModal 
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={imageUrls}
        currentIndex={currentImageIndex}
      />
        
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
          {/* Portfolio Grid - Uniform grid layout for better alignment */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {items.map((item, index) => {
              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  className="relative group aspect-square overflow-hidden"
                >
                  <div 
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setLightboxOpen(true);
                    }}
                    className="cursor-pointer w-full h-full flex items-center justify-center"
                  >
                    <ImageWithDimensions 
                      src={item.imageUrl}
                      alt={item.title}
                    />
                    
                    {/* Very subtle overlay that appears on hover - just for visual feedback */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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