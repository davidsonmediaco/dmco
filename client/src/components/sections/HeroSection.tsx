import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="hero relative h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-black/10 z-10"></div>
      <img 
        src="/images/portraits/IMG_3587.jpg" 
        alt="Creative photography by Davidson Media Co" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="hero-overlay absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
      
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-20 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-heading uppercase text-white mb-2 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ letterSpacing: '0.05em', maxWidth: '90%', margin: '0 auto 0.5rem auto' }}
        >
          Davidson Media Co
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white font-light mb-8 font-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ maxWidth: '90%', margin: '0 auto', letterSpacing: '0.2px' }}
        >
          Turning Moments Into Stories, And Ideas Into Reality
        </motion.p>
        
        <motion.a 
          href="#work" 
          className="mt-8 px-8 py-3 bg-primary text-black rounded-full font-medium hover:bg-opacity-90 transition-colors duration-300"
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
