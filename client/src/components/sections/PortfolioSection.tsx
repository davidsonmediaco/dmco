import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { portfolioItems } from "@/lib/data";
import { PortfolioItemType } from "@/components/ui/PortfolioItem";
import PortfolioItem from "@/components/ui/PortfolioItem";

type Category = 'portraits' | 'brands' | 'music' | 'dogs';

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('portraits');

  const categories: { id: Category; label: string }[] = [
    { id: 'portraits', label: 'Portraits' },
    { id: 'brands', label: 'Businesses' },
    { id: 'music', label: 'Live Shows' },
    { id: 'dogs', label: 'Man\'s Best Friend' }
  ];

  const filteredItems = portfolioItems.filter(item => 
    item.categories.includes(selectedCategory)
  );

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
              className={`px-6 py-2 rounded-full transition-all duration-300 border-2 font-bold text-lg ${
                selectedCategory === category.id 
                  ? "bg-[#D4AF37] text-black border-[#D4AF37]" 
                  : "bg-transparent text-[#D4AF37] border-[#D4AF37] hover:bg-[#D4AF37]/10"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        {/* Responsive 2-column grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {filteredItems.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
