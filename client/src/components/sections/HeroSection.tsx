import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="hero relative h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-dark/20 z-10"></div>
      <img 
        src="https://images.unsplash.com/photo-1562627954-81fe570ccb9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
        alt="Creative photography by Davidson Media Co" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="hero-overlay absolute inset-0 z-10 bg-gradient-to-b from-black/20 to-black/50"></div>
      
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-20 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Davidson Media Co
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white font-light mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Turning Moments Into Stories, And Ideas Into Reality
        </motion.p>
        
        <motion.a 
          href="#work" 
          className="mt-8 px-8 py-3 bg-white text-dark rounded-full font-medium hover:bg-primary hover:text-white transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
