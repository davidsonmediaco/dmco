import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/data";
import { PortfolioItemType } from "@/components/ui/PortfolioItem";

type Category = 'portraits' | 'brands' | 'music' | 'dogs';

const PortfolioGrid = () => {
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
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="overflow-hidden rounded-lg shadow-xl shadow-primary/10 border border-gray-800/70 bg-gray-900/50 h-full transform transition-all duration-300 group-hover:border-primary/30">
                <div className="relative">
                  <div className="overflow-hidden">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-64 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-black text-xs font-bold py-1 px-3 rounded-full shadow-lg">
                      {item.categories[0].charAt(0).toUpperCase() + item.categories[0].slice(1)}
                    </span>
                  </div>
                </div>
                <div className="p-6 border-t border-gray-800/50">
                  <h3 className="text-xl font-heading text-white tracking-wide mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-5 text-sm">{item.subtitle}</p>
                  <div className="flex justify-between items-center pt-2">
                    <div className="h-px w-1/4 bg-primary/30"></div>
                    <a
                      href={item.link}
                      className="text-primary hover:text-white font-medium transition-colors flex items-center gap-1 text-sm"
                    >
                      <span>View Project</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;