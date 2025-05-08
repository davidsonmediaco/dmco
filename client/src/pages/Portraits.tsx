import { motion } from "framer-motion";
import PortfolioGridPage from "../components/sections/PortfolioGridPage";

export default function Portraits() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <PortfolioGridPage
        category="portraits"
        title="Portrait Photography"
        description="Professional portraits that capture your unique personality and story."
      />
    </motion.div>
  );
}