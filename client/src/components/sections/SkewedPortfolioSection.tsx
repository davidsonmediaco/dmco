import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/data";

// Define the categories to show
const CATEGORIES = ["portraits", "music", "brands", "dogs", "sports"];

// Get one featured item from each category
const getCategoryItems = () => {
  const items = [];
  
  for (const category of CATEGORIES) {
    const item = portfolioItems.find(item => item.categories.includes(category));
    if (item) {
      items.push(item);
    }
  }
  
  return items;
};

const SkewedPortfolioSection = () => {
  const categoryItems = getCategoryItems();
  
  return (
    <section id="work" className="py-24 bg-black overflow-hidden">
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
          className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Browse through my creative portfolio showcasing diverse styles across multiple disciplines
        </motion.p>
        
        <div className="space-y-32">
          {categoryItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -100 : 100,
                rotate: index % 2 === 0 ? -5 : 5 
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                rotate: 0
              }}
              transition={{ 
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1] 
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={`w-full md:w-3/4 lg:w-3/5 shadow-2xl transform ${
                index % 2 === 0 ? 'rotate-2 origin-top-left' : '-rotate-2 origin-top-right'
              } transition-all duration-500 hover:rotate-0 hover:scale-105`}>
                <a 
                  href={`#${item.categories[0]}`} 
                  className="block relative group"
                >
                  {/* 4:5 aspect ratio container */}
                  <div className="relative" style={{ paddingBottom: '125%' }}> {/* 4:5 aspect ratio */}
                    <img 
                      src={item.imageUrl} 
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    
                    {/* Gradient overlay that appears on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                    
                    {/* Category label */}
                    <div className="absolute top-4 right-4 bg-primary text-black text-sm font-bold py-1 px-3 rounded-full">
                      {item.categories[0].charAt(0).toUpperCase() + item.categories[0].slice(1)}
                    </div>
                    
                    {/* Title that appears on hover */}
                    <div className="absolute bottom-0 left-0 p-8 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-3xl font-heading text-white mb-2">{item.title}</h3>
                      <p className="text-primary">{item.subtitle}</p>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-black rounded-full font-bold hover:bg-primary/90 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Work Together</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default SkewedPortfolioSection;