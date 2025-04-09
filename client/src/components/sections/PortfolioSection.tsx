import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { portfolioItems } from "@/lib/data";
import { PortfolioItemType } from "@/components/ui/PortfolioItem";
import RowGrid from "@/components/ui/RowGrid";
import LightboxModal from "@/components/ui/LightboxModal";

type Category = 'portraits' | 'brands' | 'music' | 'dogs';

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('portraits');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories: { id: Category; label: string }[] = [
    { id: 'portraits', label: 'Portraits' },
    { id: 'brands', label: 'Businesses' },
    { id: 'music', label: 'Live Shows' },
    { id: 'dogs', label: 'Man\'s Best Friend' }
  ];

  const filteredItems = portfolioItems.filter(item => 
    item.categories.includes(selectedCategory)
  );
  
  const imageUrls = filteredItems.map(item => item.imageUrl);

  // Animation variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemAnimation: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="work" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-heading text-center mb-4 text-white tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Work
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-400 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Browse through my creative portfolio showcasing diverse styles and projects
        </motion.p>
        
        {/* Category selectors */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button 
              key={category.id}
              className={`px-6 py-2 rounded-full transition-all duration-300 border-2 ${
                selectedCategory === category.id 
                  ? "bg-primary text-black font-bold border-primary" 
                  : "bg-transparent text-white hover:bg-gray-900 border-gray-700 hover:border-primary/70"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Lightbox Modal */}
        <LightboxModal 
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={imageUrls}
          currentIndex={currentImageIndex}
        />
        
        {/* Row Grid Layout */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-10"
        >
          <RowGrid 
            items={filteredItems} 
            rowSize={5}
            onImageClick={(index) => {
              setCurrentImageIndex(index);
              setLightboxOpen(true);
            }}
            viewAllLink={`/${selectedCategory}`}
            viewAllText={`View All ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
