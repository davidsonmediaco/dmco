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
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-xl overflow-hidden shadow-lg group min-h-[320px] bg-black"
      style={{ minHeight: 320 }}
    >
      <a href={link} className="block w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="relative z-10 flex flex-col justify-end h-full p-6">
          <span className="text-[#D4AF37] font-extrabold text-2xl mb-2 drop-shadow-lg">
            {title}
            <span className="block w-10 h-1 mt-2 bg-[#D4AF37] rounded-full" />
          </span>
          {subtitle && (
            <span className="text-white text-lg font-medium drop-shadow-md">
              {subtitle}
            </span>
          )}
        </div>
      </a>
    </motion.div>
  );
};

export default PortfolioItem;
