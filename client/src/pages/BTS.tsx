import { motion } from "framer-motion";
import PortfolioGridPage from "../components/sections/PortfolioGridPage";

export default function BTS() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <PortfolioGridPage
        category="bts"
        title="Behind the Scenes"
        description="A glimpse into the creative process and moments behind the camera."
      />
    </motion.div>
  );
}