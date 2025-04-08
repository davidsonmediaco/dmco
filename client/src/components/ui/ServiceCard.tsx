import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  isHighlighted: boolean;
  link: string;
}

const ServiceCard = ({ title, description, icon, isHighlighted, link }: ServiceCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      className={`service-card group bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all p-8 flex flex-col items-center text-center ${
        isHighlighted ? 'border-2 border-primary transform hover:-translate-y-1 duration-300 relative' : ''
      }`}
      variants={cardVariants}
      whileHover={{ y: -5 }}
    >
      {isHighlighted && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full text-sm font-medium font-bold">
          Featured Service
        </div>
      )}

      <div className={`w-16 h-16 ${isHighlighted ? 'bg-primary/20' : 'bg-gray-800'} rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors`}>
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      
      <a href={link} className="text-primary font-medium hover:underline mt-auto inline-flex items-center">
        Learn More 
        <ArrowRight className="ml-1 h-4 w-4" />
      </a>
    </motion.div>
  );
};

export default ServiceCard;
