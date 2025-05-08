import { motion } from "framer-motion";
import PortfolioGridPage from "../components/sections/PortfolioGridPage";

export default function Dogs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <PortfolioGridPage
        category="dogs"
        title="Dog Photography"
        description="Capturing the unique personality and spirit of your furry friends."
      />
    </motion.div>
  );
}