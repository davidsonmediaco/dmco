import { motion } from "framer-motion";

export interface PortfolioItemType {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  categories: string[];
  link: string;
  isWide?: boolean;
}

interface PortfolioItemProps {
  item: PortfolioItemType;
}

const PortfolioItem = ({ item }: PortfolioItemProps) => {
  const { title, subtitle, imageUrl, link } = item;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="portfolio-item group"
    >
      <a href={link} className="block relative overflow-hidden rounded-lg shadow-md">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6">
            <h3 className="text-white text-xl font-bold">{title}</h3>
            <p className="text-white/80 text-sm">{subtitle}</p>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default PortfolioItem;
