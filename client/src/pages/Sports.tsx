import { motion } from "framer-motion";
import PortfolioGridPage from "../components/sections/PortfolioGridPage";

export default function Sports() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <PortfolioGridPage
        category="sports"
        title="Sports Photography"
        description="Capturing the intensity and emotion of athletic moments."
      />
    </motion.div>
  );
}