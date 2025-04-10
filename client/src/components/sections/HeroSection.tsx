import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="hero relative h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-black/10 z-10"></div>
      <img 
        src="/images/portraits/gail-water-headshot.jpg" 
        alt="Creative photography by Davidson Media Co" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="hero-overlay absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
      
      <div className="container mx-auto px-4 h-full flex flex-col justify-end items-center relative z-20 text-left pb-16">
        <div className="w-full max-w-6xl mx-auto">
          <motion.h1 
            className="text-6xl md:text-8xl xl:text-9xl font-heading uppercase text-white tracking-wider leading-none"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ letterSpacing: '0.08em', fontWeight: 500 }}
          >
            Davidson Media Co
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl text-white font-light mt-4 mb-8 font-heading tracking-wider"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Turning Moments Into Stories, And Ideas Into Impact
          </motion.p>
          
          <motion.a 
            href="#work" 
            className="hidden md:inline-block mt-4 px-8 py-3 bg-primary text-black rounded-full font-medium hover:bg-opacity-90 transition-colors duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
