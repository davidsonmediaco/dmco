import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioItem from "@/components/ui/PortfolioItem";
import { portfolioItems } from "@/lib/data";

type Category = 'all' | 'lifestyle' | 'portraits' | 'brands' | 'music' | 'dogs';

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.categories.includes(selectedCategory));

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All Work' },
    { id: 'lifestyle', label: 'Lifestyle' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'brands', label: 'Brands & Business' },
    { id: 'music', label: 'Music' },
    { id: 'dogs', label: 'Dogs' }
  ];

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
          className="text-center text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Browse through my creative portfolio spanning various industries and styles
        </motion.p>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button 
              key={category.id}
              className={`px-5 py-2 rounded-full transition-colors ${
                selectedCategory === category.id 
                  ? "bg-primary text-black font-bold" 
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Portfolio grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <PortfolioItem 
                key={item.id} 
                item={item} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
