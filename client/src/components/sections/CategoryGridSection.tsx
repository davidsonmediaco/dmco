import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { portfolioItems } from '@/lib/data';
import { PortfolioItemType } from '@/components/ui/PortfolioItem';

// Define the categories we want to show
const categories = [
  { id: 'portraits', label: 'Portraits', path: '/portraits' },
  { id: 'brands', label: 'Brands', path: '/brands' },
  { id: 'music', label: 'Music', path: '/music' },
  { id: 'dogs', label: 'Dogs', path: '/dogs' },
  { id: 'sports', label: 'Sports', path: '/sports' },
  { id: 'candid-bts', label: 'Candid BTS Photography', path: '/candid-bts' }
];

const CategoryGridSection = () => {
  // Find one wide image for each category
  const categoryImages: Record<string, PortfolioItemType | undefined> = {};
  
  categories.forEach(category => {
    // Find a wide image for this category
    const wideImage = portfolioItems.find(item => 
      item.categories.includes(category.id) && item.isWide === true
    );
    
    categoryImages[category.id] = wideImage;
  });

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

        {/* Grid layout for 6 categories (2 columns x 3 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const image = categoryImages[category.id];
            
            // If no image found for this category, display a placeholder
            const imageUrl = image ? image.imageUrl : 'https://via.placeholder.com/800x500/111111/333333';
            
            return (
              <motion.div
                key={`${category.id}-${index}`}
                className="relative overflow-hidden rounded-lg shadow-xl aspect-video bg-zinc-900 border border-zinc-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link to={category.path}>
                  <div className="relative h-full w-full group cursor-pointer">
                    {/* Background image */}
                    <div 
                      className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                      style={{ 
                        backgroundImage: `url(${imageUrl})`,
                        backgroundPosition: 'center center'
                      }}
                    />
                    
                    {/* Fixed aspect ratio overlay for consistency */}
                    <div className="aspect-[16/9] w-full"></div>
                    
                    {/* Subtle overlay - not changing on hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    
                    {/* Always visible label */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl md:text-2xl font-heading mb-2">
                        {category.label}
                      </h3>
                      <div className="w-10 h-1 bg-[#D4AF37] group-hover:w-24 transition-all duration-300"></div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGridSection;