import { motion } from "framer-motion";
import PortfolioGridPage from "../components/sections/PortfolioGridPage";

export default function Brands() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <PortfolioGridPage
        category="brands"
        title="Brand Photography"
        description="Professional photography services for businesses and brands."
      />
    </motion.div>
  );
}